import React from 'react';

interface MetadataItem {
  label: string;
  value: string;
}

interface FeaturedCardProps {
  imgSrc: string;
  imgAlt: string;
  badge: string;
  badgeIcon: string;
  categoryLabel: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  metadata: MetadataItem[];
  recordId: string;
  reversed?: boolean;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  imgSrc, imgAlt, badge, badgeIcon, categoryLabel, period, title, subtitle, description, metadata, recordId, reversed = false,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-xl"
    style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
    {/* Image Panel */}
    <div className={`${reversed ? 'lg:col-span-7 order-1 lg:order-2' : 'lg:col-span-7'} h-80 lg:h-auto min-h-[380px] relative`}
      style={{ backgroundColor: '#2b2a28' }}>
      <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
      <div className={`absolute inset-0 bg-gradient-to-t ${reversed ? 'lg:bg-gradient-to-l' : 'lg:bg-gradient-to-r'} from-[#211f1e] via-transparent to-transparent`} />
      <span className={`absolute top-4 ${reversed ? 'right-4' : 'left-4'} px-2 py-1 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] flex items-center gap-1 shadow-sm`}
        style={{ backgroundColor: 'rgba(15,14,13,0.90)' }}>
        <span className="material-symbols-outlined text-[14px]">{badgeIcon}</span>
        <span>{badge}</span>
      </span>
    </div>

    {/* Content Panel */}
    <div className={`${reversed ? 'lg:col-span-5 order-2 lg:order-1' : 'lg:col-span-5'} p-10 flex flex-col justify-between`}>
      <div>
        <div className="flex items-center gap-1 text-[#e9c176] text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase mb-1">
          <span>{categoryLabel}</span>
          <span>·</span>
          <span>{period}</span>
        </div>
        <h3 className="font-['Playfair_Display'] text-[28px] font-medium leading-9 text-[#e6e1df]">{title}</h3>
        <p className="text-[16px] font-semibold leading-6 tracking-[0.02em] text-[#d1c5b4] italic mb-4"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
          {subtitle}
        </p>
        <p className="text-[15px] leading-6 text-[#d1c5b4] mb-4">{description}</p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 p-2 rounded-lg mb-6" style={{ backgroundColor: '#1c1b1a' }}>
          {metadata.map(m => (
            <div key={m.label}>
              <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] text-[#9a8f80] block uppercase">{m.label}</span>
              <span className="text-[16px] font-semibold leading-6 tracking-[0.02em] text-[#e6e1df]">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        {/* Placeholder link: heritage profile pages are not implemented yet, so intentionally no href. */}
        <a
          className="inline-flex items-center gap-1 px-6 py-3 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[16px] font-semibold leading-6 tracking-[0.02em] transition-colors">
          <span>Explore Profile</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>
        <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] text-[#9a8f80]">{recordId}</span>
      </div>
    </div>
  </div>
);

const featuredItems: FeaturedCardProps[] = [
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUrCN0EvQj9ZCYn9yvyLxmLFnIsQayWz0nTjVF1qtZQTFF7RAe4H8nag0XZEf5LORdgv2JqS3NhEqUz_fh-6g5PKUnj-wc_3GSr6bzRopv8ymWIw_99fsO6dVWRgpCNxrZNkYZXs48_wYhqKgaxU5iQU-Cb6YPydCL0_mlWWakbU_HyRw8kOuefGRbEXncPsRQMIiptCEuXfKZ9Y9uzJM3oQ9chozIhykqvtZv_waujUi6BpW7yg',
    imgAlt: 'Rani ki Vav Queen Stepwell subterranean terraced sanctuary in Patan Gujarat',
    badge: 'UNESCO World Heritage Site',
    badgeIcon: 'stars',
    categoryLabel: 'Architectural Marvel',
    period: '11th Century Chaulukya',
    title: 'Rani ki Vav',
    subtitle: "The Queen's Stepwell · Patan, Gujarat",
    description: 'An inverted subterranean temple dedicated to the sacred waters, carved with seven levels of intricate mythological sculptures descending over 27 meters into the earth. Commissioned by Queen Udayamati in memory of King Bhima I.',
    metadata: [
      { label: 'CHRONOLOGY', value: '1063 CE' },
      { label: 'PATRONAGE', value: 'Queen Udayamati' },
      { label: 'DEPTH', value: '27 Metres · 7 Terraces' },
      { label: 'FIGURAL PANELS', value: '500+ Principal Deities' },
    ],
    recordId: 'Record #HX-GJ-0042',
    reversed: false,
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfOQPocUJaNoZ6mzjOaBZggWEz4pSQD-E-yQMTZXlbK3stx5PAY5lDEQP1EhGlRuJyuEdIAOinRE8gw6cZtciJB9B03AhI5Hlh9xmP5PpTKDB64lR-Skl_IwfzYdCz_p_F890wKCvLI27qN5jU-juwcPso6Z03Tqxrng3rEflPzhm_r19kg1rbOlHN2iUZ6Hjrf2NsubKZRp4d4zfXRpSYpaR5NFCnnaPu9VVxbPgB-cfD74pwyhI',
    imgAlt: 'High contrast close-up portrait of Kathakali dancer with green facial makeup',
    badge: 'Living Tradition',
    badgeIcon: 'theater_comedy',
    categoryLabel: 'Performing Arts',
    period: 'Intangible Cultural Heritage',
    title: 'Kathakali of Kerala',
    subtitle: 'Living Temple Theatre · Southwest Coast',
    description: 'A total theatrical experience combining profound facial mudras, elaborate mineral-pigment make-up (Chutti), and classical Chenda percussion recreating Mahabharata and Ramayana epics through nightlong temple courtyard ceremonies.',
    metadata: [
      { label: 'PREPARATION TIME', value: '4 Hours Makeup' },
      { label: 'CODIFIED MUDRAS', value: '24 Root Hand Gestures' },
      { label: 'TRADITION ROOTS', value: '17th Century CE' },
      { label: 'REPRESENTATION', value: 'UNESCO ICH 2008' },
    ],
    recordId: 'Record #HX-KL-0089',
    reversed: true,
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1HAXxwseD3oE12ynC3P8EySk8LopBoAnN8yi6XQDahfYLdb9Z5rf1AznQoIgulQG25qMBv_JvVt_6w-n7noW3GL5DhF5yg4Bxn8oB6oy5gCBrFrzGCRA30ZE_7I2UXiSCUrXoWg5-3sWaQ6xXs1ND3Jg_2LeCMeVMNmvaQk_FMPmxYNOri4SoV3E7-u9vYPl_CJ5czCWTFVOBxeu6rTeaX6oASJ8Wn6uTu6Fsmi1pHb6E84-YT0s',
    imgAlt: 'Monolithic granite vimana of Brihadisvara Temple in Thanjavur with warm afternoon light',
    badge: 'Architectural Wonder',
    badgeIcon: 'domain',
    categoryLabel: 'Sacred Architecture',
    period: '1010 CE Chola Empire',
    title: 'Brihadisvara Temple',
    subtitle: 'The Great Living Chola Temple · Thanjavur',
    description: 'Engineered entirely from interlocking granite blocks without mortar, crowned with an 80-tonne monolithic cupola (Kumbam) elevated atop a 66-meter Vimana that has defied seismic tremors and monsoons for over a thousand years.',
    metadata: [
      { label: 'CONSECRATION', value: '1010 CE (Rajaraja I)' },
      { label: 'VIMANA HEIGHT', value: '66 Metres' },
      { label: 'CUPOLA WEIGHT', value: '80-Tonne Single Granite' },
      { label: 'MATERIAL', value: 'Mortarless Pure Granite' },
    ],
    recordId: 'Record #HX-TN-0012',
    reversed: false,
  },
];

const FeaturedSection: React.FC = () => (
  <section className="w-full py-10" style={{ backgroundColor: '#0f0e0d' }}>
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176]">Curatorial Highlights</span>
        <h2 className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e6e1df] mt-1">Featured Heritage</h2>
        <p className="text-[15px] leading-6 text-[#d1c5b4] mt-1">
          Handpicked cultural treasures documented by heritage historians, structural archaeologists, and local lineage guardians.
        </p>
      </div>

      {/* Editorial Showcase Cards */}
      <div className="space-y-10">
        {featuredItems.map(item => (
          <FeaturedCard key={item.recordId} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedSection;
