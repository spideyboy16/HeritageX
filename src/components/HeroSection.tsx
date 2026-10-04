import React from 'react';
import RouteLink from './RouteLink';

interface HeroImageCardProps {
  src: string;
  alt: string;
  label: string;
  title: string;
  className?: string;
  featured?: boolean;
  badge?: string;
  /** Source asset carries a burned-in caption strip along its very top edge — clip it. */
  clipTop?: boolean;
}

const HeroImageCard: React.FC<HeroImageCardProps> = ({ src, alt, label, title, className = '', featured = false, badge, clipTop = false }) => (
  <div className={`rounded-xl overflow-hidden shadow-xl relative group ${className}`}>
    <img
      src={src}
      alt={alt}
      className="absolute left-0 w-full object-cover group-hover:scale-105 transition-transform duration-700"
      style={clipTop ? { height: '108%', top: '-8%' } : { height: '100%', top: 0 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0d] via-[rgba(15,14,13,0.3)] to-transparent" />
    <div className={`absolute text-left ${featured ? 'bottom-4 left-6 right-6' : 'bottom-3 left-4 right-4'}`}>
      {featured ? (
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176] mb-0.5">{label}</span>
            <h3 className="font-['Playfair_Display'] text-[28px] font-medium leading-9 text-[#e6e1df]">{title}</h3>
            <p className="text-[13px] leading-5 text-[#d1c5b4] max-w-md mt-1">Chronometric precision etched in stone along the coast of Odisha.</p>
          </div>
          {badge && (
            <span className="px-2 py-1 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] shrink-0"
              style={{ backgroundColor: '#2b2a28' }}>
              {badge}
            </span>
          )}
        </div>
      ) : (
        <>
          <span className="block text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#e9c176] mb-0.5">{label}</span>
          <p className="text-[16px] font-semibold leading-6 tracking-[0.02em] text-[#e6e1df]">{title}</p>
        </>
      )}
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full -mt-20 pt-28 pb-10 overflow-hidden" style={{ backgroundColor: '#0f0e0d' }}>
      {/* Atmospheric ambient lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[880px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'rgba(233,193,118,0.10)', filter: 'blur(140px)' }} />
      <div className="absolute top-1/3 right-4 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,15,0.20)', filter: 'blur(120px)' }} />
      <div className="absolute top-1/2 -left-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: 'rgba(197,160,89,0.10)', filter: 'blur(110px)' }} />

      {/* Architectural Background Watermark — Konark Chakra */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none flex items-center justify-center select-none overflow-hidden">
        <svg className="w-[1100px] h-[1100px] text-[#e9c176]" fill="none" stroke="currentColor" strokeWidth="0.8" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="185" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="140" />
          <circle cx="200" cy="200" r="80" />
          <circle cx="200" cy="200" r="28" />
          <g>
            <line x1="200" x2="200" y1="15" y2="385" />
            <line x1="15" x2="385" y1="200" y2="200" />
            <line x1="69" x2="331" y1="69" y2="331" />
            <line x1="69" x2="331" y1="331" y2="69" />
            <line x1="107" x2="293" y1="30" y2="370" />
            <line x1="30" x2="370" y1="107" y2="293" />
            <line x1="30" x2="370" y1="293" y2="107" />
            <line x1="107" x2="293" y1="370" y2="30" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-12 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full mb-4 shadow-sm"
          style={{ backgroundColor: '#2b2a28' }}>
          <span className="material-symbols-outlined text-[#e9c176] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          <span className="text-[11px] font-semibold leading-4 tracking-[0.16em] uppercase text-[#ffdea5]">
            National Cultural Archive of India · Curated Expeditions
          </span>
        </div>

        {/* Monumental Headline */}
        <h1 className="font-['Playfair_Display'] max-w-4xl text-[#e6e1df] mt-1 mb-3"
          style={{ fontSize: 'clamp(38px, 5vw, 56px)', fontWeight: 600, lineHeight: '1.2', letterSpacing: '-0.02em' }}>
          Discover the <span className="italic font-normal text-[#e9c176]">Heritage</span> of India
        </h1>

        {/* Subheadline */}
        <p className="text-[18px] font-normal leading-[30px] text-[#d1c5b4] max-w-2xl mx-auto mb-10">
          Explore the sacred places, living traditions, dynastic arts, ancestral culinary wisdom, and monumental histories that make India extraordinary.
        </p>

        {/* Search Console */}
        <div className="w-full max-w-3xl rounded-xl p-2 shadow-xl flex flex-col gap-2 text-left"
          style={{ backgroundColor: '#211f1e' }}>
          <div className="relative flex items-center rounded-lg px-4 py-3" style={{ backgroundColor: '#1c1b1a' }}>
            <span className="material-symbols-outlined text-[#e9c176] text-[24px] mr-3">search</span>
            <input
              type="text"
              placeholder="Search monuments, festivals, arts, food, traditions..."
              className="w-full bg-transparent text-[15px] leading-6 text-[#e6e1df] focus:outline-none"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            />
            <button className="hidden sm:flex items-center gap-1 px-4 py-2 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors duration-200">
              <span>Explore</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-1 pt-1 px-1">
            <div className="flex items-center flex-wrap gap-1">
              <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#9a8f80] mr-1">Filter by:</span>
              <button className="px-2 py-0.5 rounded bg-[#e9c176] text-[#412d00] text-[11px] font-semibold leading-4 tracking-[0.12em]">All Records</button>
              {['UNESCO Sites', 'Living Traditions', 'Architectural Marvels'].map(f => (
                <button key={f} className="px-2 py-0.5 rounded text-[#d1c5b4] hover:text-[#e6e1df] text-[11px] font-semibold leading-4 tracking-[0.12em] transition-colors"
                  style={{ backgroundColor: '#2b2a28' }}>
                  {f}
                </button>
              ))}
            </div>
            <span className="text-[#9a8f80] text-[10px] font-medium leading-[14px] tracking-[0.14em] hidden md:inline">Shift + / to search</span>
          </div>

          {/* Trending searches */}
          <div className="flex items-center flex-wrap gap-1 text-[#9a8f80] text-[13px] leading-5 pt-1 px-1">
            <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase">Curated Trends:</span>
            {/* Trend links target catalogue search, which is not implemented yet — placeholder links without href. */}
            {['Hampi Stepwells', 'Kathakali', 'Chola Bronzes', 'Varanasi Ghats', 'Wayanad Spices'].map((t, i, arr) => (
              <React.Fragment key={t}>
                <a className="text-[#d1c5b4] hover:text-[#e9c176] transition-colors">{t}</a>
                {i < arr.length - 1 && <span>·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-4 mt-6 mb-10">
          {/* Primary archive action — leads to the Explore Heritage page. */}
          <RouteLink to="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-all duration-200 shadow-lg">
            <span>Explore Heritage</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </RouteLink>
          <a href="#states"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[#e6e1df] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-all duration-200"
            style={{ backgroundColor: '#2b2a28' }}>
            <span className="material-symbols-outlined text-[#e9c176] text-[18px]">map</span>
            <span>Explore by State</span>
          </a>
        </div>

        {/* Cinematic Architectural Visual Collage */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 mt-4 items-end">
          <HeroImageCard
            className="md:col-span-3 h-72 bg-[#1c1b1a]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR_cUJuyQntdyUyJET4oQKbfhwQGq45MqHO2jlOn85ryyvnjZldl88_19jJq2j-qJhxlThzcjk24f5vvIuAGEhBPvS6vW83DHFAJgxgmdhA0SKeXI7C6TgPzs_Vu-KTfrJrUZgt1q6jCaFAvmAHRq1gQn3pYtGR_9mIgje1ztzRSq3zbgyODfd_z0bVTHeO3mgHo__o7X1MGMWh0S-yjatRX0-DDp9zuqC1ao7kGmEz8DbeYL1EGA"
            alt="Intricately carved stone arch of an ancient Rajasthani palace courtyard during golden sunset"
            label="Western Forts"
            title="Amber Citadel Jharokha"
          />
          <HeroImageCard
            className="md:col-span-6 h-96 bg-[#1c1b1a]"
            featured
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJShrx79yLUO-78HDTp9Glq4b3pDuwH1dx0bZHvSHiQoS6IR94ZTg18YATSEAeUhTjElPHJ6RaFYB4nSLjGT-yzltDfTpW_ezCyFEO-tqhU1Xiyuqwimqnq_fXxvGGMsDyUsPn8bbAsI7l4FPLGE6qvMD79nWaD84Y5GzL0aFQMIh1pvwmEwFtoMrLQ_83GUegdBTEJpEPCECUHSZxDH6GQFdRv2u6_xdb2D7A5lIA3WFFbAGivsU"
            alt="Majestic stone carved Sun Temple of Konark massive monolithic wheel"
            label="Sanctuary of the Sun · 13th Century CE"
            title="Konark Cosmic Wheel"
            badge="UNESCO 1984"
          />
          <HeroImageCard
            className="md:col-span-3 h-72 bg-[#1c1b1a]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZK_pdMEIMqjaaRzbI5hY9bge3L6SaTvyTEIxeWrrDytj5ptQlB7CWdmFfw1uSnoig2bHAAaMckMknB8uhj1U7r0hI_0OIbHDMnZzuy-wJ-kGhYpj3P51JDhZCXbPXsqjEkKdH3YqA-KfgcKg8VE1uezktDNmro0k39RPfYxlYqleOkp4WP8wIo5IkMwDINIYC-9UHIjjERHA8TUieP5sF8geBOOShJ5yEqLcGKpWTh35BtKPMie4"
            alt="Atmospheric view of Dravidian granite temple gopuram illuminated at dusk"
            label="Sacred Dravidian"
            title="Granite Gopuram Spire"
            clipTop
          />
        </div>

        {/* Stats Ribbon */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-6 pb-4 rounded-xl px-6"
          style={{ backgroundColor: '#1c1b1a' }}>
          {[
            { value: '3,800+', label: 'Tangible Monuments Catalogued' },
            { value: '14', label: 'UNESCO Living Intangibles' },
            { value: '36', label: '28 States & 8 Territories' },
            { value: '120+', label: 'Curated Cultural Journeys' },
          ].map(stat => (
            <div key={stat.value} className="flex flex-col items-center text-center">
              <span className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e9c176]">{stat.value}</span>
              <span className="text-[13px] leading-5 text-[#d1c5b4] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
