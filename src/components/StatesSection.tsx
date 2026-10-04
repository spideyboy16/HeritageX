import React, { useState } from 'react';

interface StateCardProps {
  state: string;
  subtitle: string;
  description: string;
  region: string;
  holdings: string;
  imgSrc: string;
  imgAlt: string;
  /** Which region tab this record belongs to. */
  filterRegion: string;
}

const StateCard: React.FC<StateCardProps> = ({ state, subtitle, description, region, holdings, imgSrc, imgAlt }) => (
  <div className="rounded-xl overflow-hidden shadow-md flex flex-col group"
    style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
    <div className="h-48 relative overflow-hidden" style={{ backgroundColor: '#2b2a28' }}>
      <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#211f1e] via-[rgba(33,31,30,0.2)] to-transparent" />
      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em]"
        style={{ backgroundColor: 'rgba(15,14,13,0.80)' }}>
        {region}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-[30px] text-[#e6e1df]">{state}</h3>
        <p className="text-[16px] font-semibold leading-6 tracking-[0.02em] text-[#e9c176] mt-0.5"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          {subtitle}
        </p>
        <p className="text-[13px] leading-5 text-[#d1c5b4] mt-2">{description}</p>
      </div>
      <div className="pt-4 mt-4 rounded-lg p-2 flex items-center justify-between"
        style={{ backgroundColor: '#1c1b1a' }}>
        <div className="flex flex-col">
          <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] text-[#9a8f80]">ARCHIVE HOLDINGS</span>
          <span className="text-[16px] font-semibold leading-6 tracking-[0.02em] text-[#e6e1df]">{holdings}</span>
        </div>
        {/* Placeholder link: state detail pages are not implemented yet, so intentionally no href. */}
        <a
          className="px-2 py-1.5 rounded text-[#412d00] text-[13px] font-semibold leading-[18px] tracking-[0.08em] transition-colors hover:bg-[#c5a059]"
          style={{ backgroundColor: '#e9c176' }}>
          Explore State
        </a>
      </div>
    </div>
  </div>
);

const states = [
  {
    state: 'Rajasthan',
    subtitle: 'Land of Desert Citadels & Royal Palaces',
    description: 'Immense hill forts of the Aravallis, Marwar miniature painting schools, and enduring folk epics sung by Manganiyar bards.',
    region: 'Western Region',
    filterRegion: 'West',
    holdings: '240+ Sites · 18 Traditions',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoVU3Bjas-BxQ-vG8HfGkDk2imD13FwkqeVXcP-w8HtDYDWGgH3yrTFS34KoF5fZEQkOG9VLVMLyLZIdi46XV0mOzd4Npm8PIysdgj6V_hWSm_rzM3oQ-CYUKED9YnWHTxJI1ygT74SV8tK5c0RvjUCpcjqzPpPXuvKebCRH4ZE8ZfegYi6m0CXVIwJQl9G6Iyi4FD3cQ6bcWYkcwdEHLMdEhu2Lrrw5BuU4CZFEgBfmcv_gg7aoQ',
    imgAlt: 'Hawa Mahal Palace of the Winds in Jaipur Rajasthan',
  },
  {
    state: 'Kerala',
    subtitle: 'Vedic Rites, Temple Murals & Backwater Lore',
    description: 'Koodiyattam Sanskrit drama, Kalaripayattu combat disciplines, and centuries of maritime spice trade with ancient empires.',
    region: 'Southern Malabar',
    filterRegion: 'South',
    holdings: '135+ Sites · 22 Forms',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATUXabp9_DIR_j-cpRIeJRFyoRWgFVW4S8t3M7rCeIcZMQdu4LXs00rk0y2DAjYop5jZS0mvOKpxhQEf_M9IjyCmmuiTXrZc1r6jO1igMlmRMXcfo3IM0BtNnfu3wOTuM5fcaKIL1F0iPw20IaZz82o5ab3KgmkP-GpgAS_FYF25nWamP-8y1XJklNrPebJZGOqUfLC1UZls9LC9VcuzsnH7HuUqys-v1hyWR08COpgO3yJn-_npw',
    imgAlt: 'Scenic Kerala backwaters with traditional wooden houseboats',
  },
  {
    state: 'Tamil Nadu',
    subtitle: 'Granite Gopurams & Sangam Era Lineages',
    description: 'Monumental Chola temple engineering, Carnatic musical traditions, and bronze casting guilds practiced continuously since 900 CE.',
    region: 'Coromandel South',
    filterRegion: 'South',
    holdings: '310+ Sites · 14 Traditions',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMQ0zmKpU6fdpGYLtfFOB0e9ufFBaj4_Ocye8IusGRVjc6nrFEpQBzWyre5qr9QKWUTxoqWVjSRVFGlnrYOImn0YXupTY0EQBUukgNQgM981B54n2BtuElsaU0TtKIkPeNjtDql6ZIgYjStJd6zwBOjc7QAvRTGrUr4mvEjhq1hUk2nfqF_frR1pr1ADLvo-vJfN0HUhdF-7Z7uR2q9IMVqL8-pOpWlxWRdvTX29kL_0Bizg5sJPM',
    imgAlt: 'Towering Meenakshi Amman Temple gopuram in Madurai Tamil Nadu',
  },
  {
    state: 'Odisha',
    subtitle: 'Kalinga Stone Spire & Maritime Heritage',
    description: 'Ancient Sadhabas voyage lore, Raghurajpur Pattachitra scroll painting, and master stone carvers of Konark and Bhubaneswar.',
    region: 'Eastern Seaboard',
    filterRegion: 'East',
    holdings: '115+ Sites · 9 Guilds',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAwdSJKIm39-m6NLhFo0QtP2EJ6Jnv1oxaQ57vLn9ePVPWh1YYWVhBEI6iX0S9BQuS8TQgu3oPHopiXJPMJ3X75gjtGI0lfkvK14woLkXplGYqgWTxGtX5iqmqyvyJfPocycsnKgyPgitCmdQVB4Wkc_EvHi_OA1t7m-qhzUHP81Lb7bTwuXT2yCypkjb4Q55kUGcq0nAzUMj-4MaykOOVfW7rqMaHaAkAL8DzO0E12b7DCKPTtCY',
    imgAlt: 'Puri Jagannath temple stone deula spire in Odisha',
  },
  {
    state: 'Himachal Pradesh',
    subtitle: 'Himalayan Pagodas & Sacred Deota Lore',
    description: 'Kathkuni timber-and-stone seismic architecture, Kangra miniature painting, and living deota village republics.',
    region: 'Western Himalayas',
    filterRegion: 'North',
    holdings: '85+ Sanctuaries',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3lpii8dLIBFu7AfVdSOMS4bb_AKdv4-wtaTQHNu9udG3CrSCjKllaFYj6eumg23rkW3Q1oZedSfmFtr75xg97WDqZUtj3ajLzDrVZt4J9aS9bhS8oYlVuvNPgkkhGkAT8qjT3sIE7Iars-Fw50LcsSbUViK5upzkZAQCWjvOqJcK5cVdXJ4KLUPOena2L3cmUL7c--F9FYYe0j5M2HfPH8KRmcCTSMAoNkoSBcRC1yY_eJBEMfQg',
    imgAlt: 'Multi-tiered wooden and slate stone pagoda temple nestled within cedar pine forests',
  },
  {
    state: 'Assam',
    subtitle: 'Ahom Amphitheatres & Silk Lineages',
    description: 'Six-hundred-year Ahom royal monuments, the monastic Sattriya dance traditions of Majuli river island, and golden Muga silk weaving.',
    region: 'Brahmaputra Valley',
    filterRegion: 'North East',
    holdings: '72+ Profiles',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9TAeHP29WEKerej79i3Iij43kDq8seTabaEgWHD1vnA0fM-OtHgQ8jrw4jKtkorYxFjv4rz8s5b0k9xNE2FyMIL-e0vsZ8REZnZzLho0X9c0KL0NmssIuze1O_6HPt72P8WLs2OkeSJz8K9c521_0rk0kyOBO46b9rhgKqgHfAI0oLfTJSbppYoE9UEgOBEjSfdJl0K5auLEDJrTZbY6wYhHGBS3PNe9NlWrYYhdURj9apaVfGc',
    imgAlt: 'Majestic tiered amphitheatre of Rang Ghar in Sivasagar Assam',
  },
];

const regions = ['All Regions', 'North', 'West', 'South', 'East', 'North East', 'Central'];

const StatesSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState('All Regions');
  const visibleStates = activeRegion === 'All Regions'
    ? states
    : states.filter(s => s.filterRegion === activeRegion);

  return (
    <section className="w-full py-10" style={{ backgroundColor: '#1c1b1a' }} id="states">
      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176]">Federated Cultural Atlas</span>
            <h2 className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e6e1df] mt-1">
              Explore by State & Region
            </h2>
            <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-xl mt-1">
              Every administrative border encloses autonomous centuries of architectural idiom, dialect, and artisanal guilds.
            </p>
          </div>
          <div className="px-4 py-1 rounded-lg text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] flex items-center gap-1 self-start md:self-auto"
            style={{ backgroundColor: '#2b2a28' }}>
            <span className="material-symbols-outlined text-[16px]">public</span>
            <span>Interactive atlas · 28 states & 8 UTs · Curated Dataset v1.0</span>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className="px-4 py-1 rounded-lg whitespace-nowrap text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors"
              style={{
                backgroundColor: activeRegion === region ? '#e9c176' : '#211f1e',
                color: activeRegion === region ? '#412d00' : '#d1c5b4',
              }}>
              {region}
            </button>
          ))}
        </div>

        {/* State Cards Grid */}
        {visibleStates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleStates.map(s => <StateCard key={s.state} {...s} />)}
          </div>
        ) : (
          <div className="rounded-xl p-10 text-center"
            style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
            <p className="text-[15px] leading-6 text-[#d1c5b4]">
              No curated state records catalogued for this region yet — entries are added as archival review completes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatesSection;
