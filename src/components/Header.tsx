import React, { useState } from 'react';
import logoSvg from '../assets/logo.svg';

const navLinks = [
  { label: 'Explore', path: 'discover' },
  { label: 'States', path: 'states' },
  { label: 'Categories', path: 'categories' },
  { label: 'Cultural Journeys', path: 'cultural-journeys' },
];

interface HeaderProps {
  /** Prefix for in-page anchors; inner pages pass "/" so nav resolves back to Homepage sections. */
  basePath?: string;
}

const Header: React.FC<HeaderProps> = ({ basePath = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'rgba(15,14,13,0.92)', backdropFilter: 'blur(20px) brightness(60%)', boxShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
      <div className="h-20 max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between gap-6">
        {/* Left: Logo + Badge + Nav */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Logo returns to the top of the Homepage — the only destination that exists today. */}
            <a href={`${basePath}#top`} aria-label="HeritageX — return to top" className="flex items-center shrink-0"
              onClick={() => setMobileMenuOpen(false)}>
              <img src={logoSvg} alt="HeritageX Wordmark Logo" className="h-8 w-auto object-contain" />
            </a>
            <span className="hidden xl:inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[#e9c176] uppercase tracking-widest"
              style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', backgroundColor: '#1c1b1a' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e9c176] animate-pulse inline-block" />
              Curated National Archive · v1.0 Beta
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 pl-2">
            {navLinks.map((link, i) => (
              <a
                key={link.path}
                href={`${basePath}#${link.path}`}
                className={`text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors duration-200 ${i === 0
                  ? 'text-[#e9c176]'
                  : 'text-[#d1c5b4] hover:text-[#e6e1df]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Search + Sign In + Avatar */}
        <div className="flex items-center gap-4 flex-1 max-w-md justify-end">
          {/* Search */}
          <div className="relative w-full max-w-xs hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#9a8f80] text-[18px]">search</span>
            <input
              type="text"
              placeholder="Search monuments, festivals, arts..."
              className="w-full pl-10 pr-3 py-1 rounded-lg text-[#e6e1df] text-[13px] leading-5 focus:outline-none transition-all duration-200"
              style={{ backgroundColor: '#1c1b1a', border: '1px solid rgba(216,210,197,0.10)' }}
            />
          </div>

          {/* Sign In */}
          {/* Placeholder link: authentication pages are not implemented yet, so intentionally no href. */}
          <a
            className="hidden md:flex items-center gap-1 px-4 py-1 rounded-lg text-[#d1c5b4] hover:text-[#e6e1df] text-[13px] font-semibold leading-[18px] tracking-[0.08em] transition-all duration-200"
            style={{ backgroundColor: '#1c1b1a' }}>
            Sign In
          </a>

          {/* Avatar — account pages are not implemented yet, so no pointer affordance. */}
          <div className="w-8 h-8 rounded-full bg-[#e9c176] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#412d00] text-[18px]">person</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-[#d1c5b4] hover:text-[#e6e1df] ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-5 pb-4 flex flex-col gap-2" style={{ backgroundColor: '#0f0e0d' }}>
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`${basePath}#${link.path}`}
              className="py-2 text-[16px] font-semibold text-[#d1c5b4] hover:text-[#e9c176] transition-colors border-b"
              style={{ borderColor: 'rgba(216,210,197,0.08)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
