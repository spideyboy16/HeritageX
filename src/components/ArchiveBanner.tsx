import React from 'react';

const ArchiveBanner: React.FC = () => (
  <section className="w-full py-10" style={{ backgroundColor: '#0f0e0d' }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      <div className="rounded-xl p-6 lg:p-10 shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
        {/* Ambient glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(233,193,118,0.10)', filter: 'blur(100px)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative">
          {/* Left content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1 px-2 py-1 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase mb-4"
              style={{ backgroundColor: '#2b2a28' }}>
              <span className="w-2 h-2 rounded-full bg-[#e9c176] animate-ping inline-block" />
              <span>A Living Open Digital Repository</span>
            </div>
            <h3 className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e6e1df] mb-4">
              Preserving Every Thread of India's Tapestry
            </h3>
            <p className="text-[18px] leading-[30px] text-[#d1c5b4] max-w-2xl mb-4">
              HeritageX is built as an open, expandable infrastructure designed to continuously document and preserve India's vast cultural tapestry across every village, forgotten stepwell, seasonal ballad, and sacred artisan guild.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* Placeholder links: contribution and partnership flows are not implemented yet, so intentionally no href. */}
              <a
                className="inline-flex items-center gap-1 px-6 py-3 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors shadow-md">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>Contribute a Heritage Record</span>
              </a>
              <a
                className="inline-flex items-center gap-1 px-6 py-3 rounded-lg text-[#e6e1df] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors"
                style={{ backgroundColor: '#2b2a28' }}>
                <span className="material-symbols-outlined text-[#e9c176] text-[18px]">handshake</span>
                <span>Partner with HeritageX</span>
              </a>
            </div>
          </div>

          {/* Right info panel */}
          <div className="lg:col-span-4 rounded-xl p-6 shadow-inner"
            style={{ backgroundColor: '#1c1b1a' }}>
            <h4 className="text-[20px] font-semibold leading-7 tracking-[0.01em] text-[#e6e1df] mb-1"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
              Repository Integrity
            </h4>
            <p className="text-[13px] leading-5 text-[#d1c5b4] mb-4">
              Every profile undergoes strict peer-review by academic fellows, archaeological surveys, and indigenous custodians before archival sealing.
            </p>
            <div className="space-y-2">
              {[
                { label: 'Archival Standard', value: 'ISO 14721 OAIS', gold: true },
                { label: 'Licensing', value: 'Creative Commons CC-BY 4.0', gold: false },
                { label: 'Geographic Coverage', value: '36 States & UTs', gold: false },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between text-[13px] leading-5">
                  <span className="text-[#d1c5b4]">{item.label}</span>
                  <span className={`text-[16px] font-semibold leading-6 tracking-[0.02em] ${item.gold ? 'text-[#e9c176]' : 'text-[#e6e1df]'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ArchiveBanner;
