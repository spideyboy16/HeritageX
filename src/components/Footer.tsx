import React from 'react';
import logoSvg from '../assets/logo.svg';

interface FooterColumn {
  heading: string;
  /** Existing Homepage anchor this column resolves to until its dedicated pages ship. */
  href?: string;
  links: string[];
}

const footerColumns: FooterColumn[] = [
  {
    heading: 'Explore',
    href: '#categories',
    links: ['Monuments', 'Sacred Architecture', 'Living Traditions', 'Oral Archives'],
  },
  {
    heading: 'States & Regions',
    href: '#states',
    links: ['Northern Heartland', 'Western Forts', 'Deccan & South', 'Eastern Frontiers', 'Himalayan Kingdoms'],
  },
  {
    heading: 'Platform',
    links: ['About HeritageX', 'Curatorial Team', 'Preservation Standards', 'Academic Partners'],
  },
  {
    heading: 'Legal & Connect',
    links: ['Sources & References', 'Open Access Terms', 'Privacy Charter', 'Connect'],
  },
];

interface FooterProps {
  /** Prefix for in-page anchors; inner pages pass "/" so links resolve back to the Homepage. */
  basePath?: string;
}

const Footer: React.FC<FooterProps> = ({ basePath = '' }) => (
  <footer className="w-full" style={{ backgroundColor: '#0f0e0d', borderTop: '1px solid rgba(197,160,89,0.10)' }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-10 pb-6">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-10">
        {/* Brand col */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <a href={`${basePath}#top`} aria-label="HeritageX — return to top" className="self-start flex items-center">
            <img src={logoSvg} alt="HeritageX Wordmark Logo" className="h-8 w-auto object-contain" />
          </a>
          <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-sm">
            A digital cultural archive dedicated to preserving, illuminating, and connecting India's living tangible and intangible heritage.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="px-2 py-1 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase"
              style={{ backgroundColor: '#211f1e' }}>
              Ministry Linked Initiative
            </span>
            <span className="px-2 py-1 rounded text-[#bec7d5] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase"
              style={{ backgroundColor: '#211f1e' }}>
              ISO-Archival 14721
            </span>
          </div>
        </div>

        {/* Nav columns */}
        {footerColumns.map(col => (
          <div key={col.heading} className="lg:col-span-2 flex flex-col gap-2">
            <span className="text-[13px] font-semibold leading-[18px] tracking-[0.08em] uppercase text-[#e9c176]">{col.heading}</span>
            <nav className="flex flex-col gap-1">
              {col.links.map(link => (
                // No href when this column's destination page doesn't exist yet — placeholder link, not a dead "#" jump.
                <a key={link} href={col.href ? `${basePath}${col.href}` : undefined}
                  className="text-[13px] leading-5 text-[#d1c5b4] hover:text-[#e6e1df] transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-[#d1c5b4] text-[13px] leading-5"
        style={{ borderTop: '1px solid rgba(216,210,197,0.08)' }}>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span>© 2025 HeritageX National Cultural Repository.</span>
          <span className="hidden sm:inline text-[#9a8f80]">·</span>
          <span className="text-[#9a8f80] text-[10px] font-medium leading-[14px] tracking-[0.14em]">
            Scaling across 28 states & 8 UTs with representative living archives
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#9a8f80]">Language:</span>
          <div className="flex items-center gap-1">
            {[
              { label: 'English', active: true },
              { label: 'हिन्दी', active: false },
              { label: 'தமிழ்', active: false },
              { label: 'বাংলা', active: false },
            ].map(lang => (
              <button key={lang.label}
                className="px-1 py-0.5 rounded text-[11px] font-semibold leading-4 tracking-[0.12em] transition-colors"
                style={{
                  color: lang.active ? '#e9c176' : '#d1c5b4',
                  backgroundColor: lang.active ? '#211f1e' : 'transparent',
                }}>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
