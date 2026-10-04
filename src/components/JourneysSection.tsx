import React from 'react';

interface JourneyCardProps {
  title: string;
  description: string;
  chapterInfo: string;
  curatorName: string;
  imgSrc: string;
  imgAlt: string;
  wide?: boolean;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, description, chapterInfo, curatorName, imgSrc, imgAlt, wide = false }) => (
  <div className={`rounded-xl overflow-hidden shadow-md flex flex-col group ${wide ? 'lg:col-span-2' : ''}`}
    style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
    <div className="h-64 relative overflow-hidden" style={{ backgroundColor: '#2b2a28' }}>
      <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#211f1e] via-[rgba(33,31,30,0.30)] to-transparent" />
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="px-2 py-1 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em]"
          style={{ backgroundColor: 'rgba(15,14,13,0.90)' }}>
          {chapterInfo}
        </span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-[30px] text-[#e6e1df]">{title}</h3>
        <p className="text-[15px] leading-6 text-[#d1c5b4] mt-1">{description}</p>
      </div>
      <div className="flex items-center justify-between gap-2 pt-6 mt-4 rounded-lg p-2"
        style={{ backgroundColor: '#1c1b1a' }}>
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-6 h-6 rounded-full flex items-center justify-center text-[#e9c176] text-[10px] font-medium shrink-0"
            style={{ backgroundColor: 'rgba(233,193,118,0.20)' }}>
            {curatorName.slice(0, 2).toUpperCase()}
          </span>
          <span className="text-[13px] leading-5 text-[#d1c5b4] truncate">{curatorName}</span>
        </div>
        {/* Placeholder link: Cultural Journey pages are not implemented yet, so intentionally no href. */}
        <a
          className="inline-flex items-center gap-1 px-4 py-1.5 rounded bg-[#e9c176] text-[#412d00] text-[16px] font-semibold leading-6 tracking-[0.02em] whitespace-nowrap shrink-0 hover:bg-[#c5a059] transition-colors">
          <span>Begin Journey</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
  </div>
);

const journeys: JourneyCardProps[] = [
  {
    title: 'Temples & Sacred Architecture',
    description: 'Follow the evolution of Indian sacred geometry from Ellora\'s single rock-cut mountain cavern in the Deccan plateau to the soaring thousand-pillared halls and kaleidoscopic gopurams of Madurai.',
    chapterInfo: '7 Chapters · 14 Landmarks',
    curatorName: 'Curated by Dr. S. Radhakrishnan, ASI Fellow',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn-kShY0sC9GpdnJFjAtzve3NJrsV8gUG1ExE-tsKbZUzUgh52BjumOFyfTT2JoV5qeTiKIE84hkTccPlTXb7wq1FlIJ1ISywNcVb5eBgTsGdssVK87uooiCbkprp3DSWQcXw2uLXUzVX1pIYA6myjoP7ulA81XXJliHeMaZWrJyX9b-xVO-xWpQpPNx5LuV6gRI2n1yMVACjgZUNSsz3bbMFhoY0CcQPCmd7bof1NH-rUPP-V-Cs',
    imgAlt: 'Ellora Kailasa Temple rock-cut monolith chiseled from single volcanic basalt cliff',
    wide: true,
  },
  {
    title: 'Royal India',
    description: 'From Rajput hillfort bastions in Chittorgarh to the opulent marble courts of Agra and Deccan Sultanate palace archives.',
    chapterInfo: '6 Chapters · 11 Fortresses',
    curatorName: 'Curator: Royal Archives',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy3SuWa4MoQO4J2IHhOIPQGttAXs1mtsYv2xNI8LfrdBYEJLAcNLxGsrLb5P8Nb21IdLpae7oyU-UjEsLJYKll6qmBcoV2JRvXi-CLr64-3ZE9DjeSDCPSlVjmMqiYI7SLGHZPwncqN72_S2u1Nj2p4SovDycIbrPHciKhkpM0Z9Ts9KByMZ0UKKyf1rBf3sojgx8UfsuNpTpGXmrhpVkKDNpt_gxvasdL1KxsTCE0Uw_zX9Jhj3Y',
    imgAlt: 'Ornate marble pavilion with intricate inlay pietra dura work overlooking mughal garden',
  },
  {
    title: 'Living Traditions',
    description: 'Master artisans, seasonal harvest processions, and ritual craftsmanship kept unbroken through oral apprenticeships over centuries.',
    chapterInfo: '8 Chapters · 19 Lineages',
    curatorName: 'Curator: Living Heritage Trust',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGyA-9hAA_AvRuIqqy3_ar0v6hWXJtZGLbaSICdh59TryIfgIIqpyH9nAGH7UPw2zAXp7MdwtwPYwGwe-lhyzcZddIFmNXdKwwfwsRUfwX2JwJJ9qxZwi4fujb5IKNbJX2DlpG2D1KxQK1aM9v0Piqqls74Gr425gr0KBQkvJz6umm4U4p3neEnwK7gCmdOqpB-3EWrDy3j63GTHmMZTFzmuYL0oFmmNIiOTyZH6l6p4c-GTEC2xQ',
    imgAlt: 'Traditional Indian Vedic fire ritual Yajna ceremony with priest',
  },
  {
    title: 'Indian Crafts & Guilds',
    description: 'The geography of Indian handloom, Ajrakh natural block print dyes, Bidri inlays, Dokra bell metal casting, and Kashmir walnut woodcraft.',
    chapterInfo: '5 Chapters · 16 Master Guilds',
    curatorName: 'Curator: National Craft Guilds',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLTo45551h3xujZ0-PIwi6CijH-g2VmQ2Jz_Dyd8FE8-ticx0uEI73uvaSofwarrHyCAstlNRjxQlr43-J3X3Nl87IJlm6iLRntQ_tCvyz1g2VP9oTaZvGKFSl0lfRtvZGG_lc4A_NnvSe9siawkccEYzoX_Ait6gtnq6ze_3CdoipCBRotrN8PJbW78XHwBzVADIWbNtRIHIl8t-RtJzEafjSvOEA2INYkXxytwfoY4EBCMbUnlQ',
    imgAlt: 'Textile weaver in Varanasi operating traditional pit loom with gold and silver zari threads',
  },
  {
    title: 'Flavours of India',
    description: 'Tracing ancient maritime spice routes, Malabar pepper trade ports, royal Awadhi dum techniques, and temple kitchen feast ceremonies.',
    chapterInfo: '6 Chapters · 24 Heirloom Dishes',
    curatorName: 'Curator: Culinary History Cell',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDhOZkdS8l6zBJFW674UXRVwTt8Bn7_ItZyRwl8mlWlaVYL4-rwzpv1q9MMQQcEwLUgRHvMCpbtemw-km-rm-8KMmTH3h8paQNmC0avjUX0E8iiOrauxDiF_VnNpe2bMSg3TW6PBVUJ7AjTCNjc4085W6sj9wpldjrOaFPqKJjTRypaFq5y08eCyiCRn0vvT8tEk_NRcVKVAHa32tJTyf4QtzlbNrGzMo49F4_AYKVGlWfsARBl64',
    imgAlt: 'Traditional brass spice box filled with fragrant whole spices on textured dark slate',
  },
];

const JourneysSection: React.FC = () => (
  <section className="w-full py-10" style={{ backgroundColor: '#1c1b1a' }} id="cultural-journeys">
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176]">Curated Narrative Itineraries</span>
          <h2 className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e6e1df] mt-1">Cultural Journeys</h2>
          <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-2xl mt-1">
            Narrative expeditions weaving interconnected monuments, crafts, culinary origins, and local lineages into unified thematic itineraries.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] text-[#9a8f80] uppercase">5 Core Journeys</span>
        </div>
      </div>

      {/* Journey Cards — Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journeys.map(j => <JourneyCard key={j.title} {...j} />)}
      </div>
    </div>
  </section>
);

export default JourneysSection;
