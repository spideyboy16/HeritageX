import React, { useEffect, useRef } from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DiscoverSection from './components/DiscoverSection';
import StatesSection from './components/StatesSection';
import FeaturedSection from './components/FeaturedSection';
import JourneysSection from './components/JourneysSection';
import ArchiveBanner from './components/ArchiveBanner';
import Footer from './components/Footer';
import ExplorePage from './pages/ExplorePage';
import HeritageDetailPlaceholder from './pages/HeritageDetailPlaceholder';
import { useLocation } from './lib/router';

/** Reserved for the future Heritage Detail screen. */
const DETAIL_ROUTE = /^\/heritage\/([^/]+)$/;

const HomePage: React.FC = () => (
  <div id="top" className="min-h-screen" style={{ backgroundColor: '#141312', color: '#e6e1df', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
    <Header />
    <main>
      <HeroSection />
      <DiscoverSection />
      <StatesSection />
      <FeaturedSection />
      <JourneysSection />
      <ArchiveBanner />
    </main>
    <Footer />
  </div>
);

function App() {
  const location = useLocation();
  // Normalise trailing slashes so "/explore/" resolves like "/explore".
  const path = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : location.pathname;
  const previousPath = useRef(path);

  // Link navigations open at the top; browser back/forward keeps its restored position.
  // Hash anchors (e.g. "/#states") keep native fragment scrolling.
  useEffect(() => {
    if (previousPath.current !== path) {
      previousPath.current = path;
      // `instant` bypasses the CSS smooth-scroll reserved for in-page Homepage anchors.
      if (location.transition !== 'pop' && !window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [path, location.transition]);

  // Cross-page fragment links (e.g. "/#categories" from the Explore page) arrive after the
  // Homepage has mounted, when the browser's own fragment scroll can miss. Align once the
  // target exists, then re-assert next frame in case late layout shifts its offset. The
  // first call is synchronous so it also lands when rAF is throttled in a background tab.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash));
    if (!target) return;
    const align = () => target.scrollIntoView({ behavior: 'instant', block: 'start' });
    align();
    const frame = requestAnimationFrame(align);
    return () => cancelAnimationFrame(frame);
  }, [path]);

  useEffect(() => {
    if (DETAIL_ROUTE.test(path)) document.title = 'Heritage Record — HeritageX';
    else if (path === '/explore') document.title = 'Explore Heritage — HeritageX';
    else document.title = 'HeritageX Indian Culture Platform';
  }, [path]);

  if (path === '/explore') return <ExplorePage />;

  const detailMatch = DETAIL_ROUTE.exec(path);
  if (detailMatch) return <HeritageDetailPlaceholder recordId={detailMatch[1]} />;

  return <HomePage />;
}

export default App;
