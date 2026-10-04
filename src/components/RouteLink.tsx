import React from 'react';
import { navigate } from '../lib/router';

interface RouteLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/**
 * SPA link for the prototype's pathname routes. Modified clicks (new tab, download, etc.)
 * fall through to normal browser behaviour so links stay honest.
 */
const RouteLink: React.FC<RouteLinkProps> = ({ to, onClick, children, ...rest }) => (
  <a
    href={to}
    onClick={(event) => {
      onClick?.(event);
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      event.preventDefault();
      navigate(to);
    }}
    {...rest}
  >
    {children}
  </a>
);

export default RouteLink;
