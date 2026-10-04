import { useEffect, useState } from 'react';

/**
 * Minimal pathname router for the prototype's three routes (/, /explore, /heritage/:id).
 *
 * Deliberately tiny: no dependency, no route table, no nested layouts. A hash router
 * was avoided because the Homepage already owns #discover / #states / #categories /
 * #cultural-journeys anchors, which must keep working as native in-page jumps.
 */

export type RouteTransition = 'initial' | 'push' | 'pop';

export interface RouteLocation {
  pathname: string;
  search: string;
  /** How we arrived: a link navigation ('push'), browser back/forward ('pop') or first load. */
  transition: RouteTransition;
}

let transition: RouteTransition = 'initial';
const listeners = new Set<() => void>();

function readLocation(): RouteLocation {
  return { pathname: window.location.pathname, search: window.location.search, transition };
}

/** Current location, re-rendered on SPA navigations and browser back/forward. */
export function useLocation(): RouteLocation {
  const [location, setLocation] = useState<RouteLocation>(readLocation);
  useEffect(() => {
    const update = () => setLocation(readLocation());
    const onPopState = () => {
      transition = 'pop';
      update();
    };
    listeners.add(update);
    window.addEventListener('popstate', onPopState);
    return () => {
      listeners.delete(update);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);
  return location;
}

/** Navigate without a full document load; replace=true rewrites the current history entry. */
export function navigate(to: string, options: { replace?: boolean } = {}): void {
  if (options.replace) window.history.replaceState(null, '', to);
  else window.history.pushState(null, '', to);
  transition = 'push';
  listeners.forEach(listener => listener());
}
