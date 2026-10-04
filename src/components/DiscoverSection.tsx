import React from 'react';
import RouteLink from './RouteLink';

interface CategoryCardProps {
  icon: string;
  title: string;
  description: string;
  count: string;
  imgSrc: string;
  imgAlt: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, title, description, count, imgSrc, imgAlt }) => (
  // Deep link: opens the Explore Heritage catalogue with this domain preselected.
  <RouteLink to={`/explore?category=${encodeURIComponent(title)}`} className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 shadow-md"
    style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2b2a28'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(229,195,120,0.28)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px -8px rgba(0,0,0,0.65), 0 0 24px 0 rgba(197,160,89,0.08)'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#211f1e'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(197,160,89,0.12)'; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}>
    <div className="relative h-44 w-full overflow-hidden" style={{ backgroundColor: '#2b2a28' }}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className="absolute top-3 right-3 px-1 py-0.5 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase"
        style={{ backgroundColor: 'rgba(15,14,13,0.90)' }}>
        {count}
      </span>
    </div>
    <div className="p-4 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-1 mb-1 text-[#e9c176]">
          <span className="material-symbols-outlined text-[20px]">{icon}</span>
          <h3 className="text-[20px] font-semibold leading-7 tracking-[0.01em] text-[#e6e1df]"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
            {title}
          </h3>
        </div>
        <p className="text-[13px] leading-5 text-[#d1c5b4] mb-4">{description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-[13px] font-semibold leading-[18px] tracking-[0.08em] text-[#e9c176] group-hover:translate-x-1 transition-transform">
        <span>Explore Domain</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </span>
    </div>
  </RouteLink>
);

const categories = [
  {
    icon: 'fort',
    title: 'Historical Sites',
    description: 'Fortresses, ancient empires, and archaeological ruins that shaped millennia of human enterprise.',
    count: '540+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAPCl_u_dd_XY_yoELdxvrsFeJh_nzQoaiR_v3Ft2Z-lb_2D-h54nFEy107Mv9VGXqWD6CAEAh75mZj4pNPKo_p5bRE75rKn0z5v_g-BG6S8krA_oGs5h7Nn_kDODP6GtP8z1eujlpB8_vdbGHroQ98mDtp4hiJOxCk36VGA7ekTtZgtc0HWzKQW0Z92NoTlRCumsGW3JrQWhYjUTD0hNkuOZDKc0yf1_n70aAS2qejUa2kU_GPkE',
    imgAlt: 'Ancient sandstone fortress walls and citadel bastions perched on dramatic cliff edge',
  },
  {
    icon: 'qr_code_2',
    title: 'Monuments',
    description: 'Triumphal arches, sandstone monoliths, and commemorative stone marvels honoring dynastic milestones.',
    count: '420+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypO1_TuMMgYErojBwuGCrIP9HxV57zJg4NhlYnkEMkafmRxIR6iLrvH_6d5gNIGJ58WpQ5qUK3Zl7BrymP5-d7L_uCqwaYIIkqLYevqf1qtAN-KdprKYikh-zm958wMR_EMBA7a58VxoRY-yUFOI4ZfVXOudHue9Xh71y_RiaiDx95BFZNkTJ0gvHmUQhmymh3WZrXMjTOSctriuGJI0qQPoS33I_s92hCjpFctKN45R1xqXSsLQ',
    imgAlt: 'Monumental monolithic sandstone Ashoka pillar with lion capital carving',
  },
  {
    icon: 'domain',
    title: 'Architecture',
    description: 'Dravidian spires, Mughal domes, stepwells, and rock-cut cave temples chiseled directly into living mountains.',
    count: '680+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAehKS0Hm1FN7y8hYxiv4sf3eq5kCePmOObDebcFHSNoRQ9peeyBt2Dh0-FG8jw4I1mZc1cuorWIr_5ZPceZJElu5jiZv5seUf_zotOTTY9oXDpeCLRlVFL4313RUc8bSo6Bkpn7cILyT0KsfW3_uzVUVJaSrt-7o_fAAfznGtjV9h1LSJNgwf9vV3lutn2NtmdfJPcfq6SmywA3AKi0Kb27kwaMnrXfbR3CQZNcvI1l3X_fk25m5c',
    imgAlt: 'Symmetrical subterranean stepwell with intricate geometric staircases',
  },
  {
    icon: 'festival',
    title: 'Festivals',
    description: 'Rituals of light, harvest rhythms, mammoth chariot processions, and seasonal celestial ceremonies.',
    count: '310+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjfMuhE-VWgj1wPJJ4BDiY52UiMSCUW6OMq_72cv6K3p_GbFLP_2Fb5ythN8pkqA2pF1v5eXgfgdMalBrjLYVfqfIj_AOYESz2cWpxPL6EdNm7mN6TSFMDGlhpCkfUm01EKe_3i_Uq5zicYwUY74Xq0Xo86xVNFOSGXoip2zmL1pfGDzLjFT_CsNP87qOmzdhZqa466tWdEx_j1yCJQfeGMM_Sn-jXNjenddB8N3LKUEY5Be5iJqs',
    imgAlt: 'Vibrant night festival in India with golden brass lamps and illuminated giant temple chariot',
  },
  {
    icon: 'palette',
    title: 'Arts & Crafts',
    description: 'Bidriware metalwork, Pashmina loom weaving, Madhubani frescoes, and ancient Dokra lost-wax metallurgy.',
    count: '490+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFJ06s-Cn8s3jUMwO3fVqv0lLmJobC5RZXl7gEl2r7UGNUxvETbu9HnwbwkQEpDiWLDa4ggUVVy20ES77m_U3x5FdCFfikEoH72ZvT7vFe2MY2w6lV1VAqygjRIwT3eqlFG8Y1UXajkP85f--kMOfHdGUP7m8lNlcdH84_VRe11jhHapk3ZCIGMwxffum2fEQ2ZR3qbM3fPLVIYCz20ZdYoiNlila39iZGaEYmHw4r0KiPHKJIhs',
    imgAlt: 'Artisan hands etching intricate pure silver floral inlay wire into Bidriware vessel',
  },
  {
    icon: 'restaurant',
    title: 'Food & Culinary',
    description: 'Regional spice geographies, temple prasadams, royal kitchen manuscripts, and heirloom fermentation techniques.',
    count: '280+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYbjv9IHyEFNHYMgYcblHgyp_sEIeoa1RBbtAon89qF61zVvBlF16LeE6MN6X48VR_owdIOIC0wwR3xSMO376ttbzaXtoQAoL-3mwEWQXmiXPBWe5X92LrotzjAf1Op5wEprSqPELksJmrDikfj0LffBwEwInqfwwab-c4Q_8hrUiUyIF5dvgyR1ePAGTIPkQYeaqQ8hfbFILuGfBUpYLMWoTp0fGOWS_2EmrY9pyWm-Sf8ce1OHg',
    imgAlt: 'Artisanal brass thali feast presentation with heirloom clay vessels',
  },
  {
    icon: 'music_note',
    title: 'Dance & Music',
    description: 'Classical gharanas, temple mudras, ancient acoustic veenas, folk percussion, and epic heroic ballads.',
    count: '350+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfOQPocUJaNoZ6mzjOaBZggWEz4pSQD-E-yQMTZXlbK3stx5PAY5lDEQP1EhGlRuJyuEdIAOinRE8gw6cZtciJB9B03AhI5Hlh9xmP5PpTKDB64lR-Skl_IwfzYdCz_p_F890wKCvLI27qN5jU-juwcPso6Z03Tqxrng3rEflPzhm_r19kg1rbOlHN2iUZ6Hjrf2NsubKZRp4d4zfXRpSYpaR5NFCnnaPu9VVxbPgB-cfD74pwyhI',
    imgAlt: 'High contrast close-up portrait of a Kathakali performer in full ritual make-up and headdress',
  },
  {
    icon: 'record_voice_over',
    title: 'Oral Traditions',
    description: 'Vedic chanting traditions, pastoral folklore, tribal cosmologies, and unwritten ancestral memory passed across generations.',
    count: '195+ Records',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-wcDI1HYATqHCLthr6Cw4hlttOdgzMRACT_dgh0PoVexyz8eMAN2KJQZE28phs06FmZ6PdWWeLXeRvE7E3nLhm5HQRP0KUNzJzNbykCl-0ARwZNgMB_6PgsFWVFewCadhrenzNm1MJLjtxYMxe538SvMnXCKEcKN3WEXc8-DWZ-S7AdjIcYjcZu18mrJbcDas36t7HBL2mqKkhgwKQH_AUYs0IZzXWSrWYdTlVG0i3yu2nXgByHE',
    imgAlt: 'A venerable Indian scholar reciting from ancient dried palm-leaf manuscript',
  },
];

const DiscoverSection: React.FC = () => (
  <section className="w-full py-10 bg-[#0f0e0d]" id="discover">
    <div className="max-w-7xl mx-auto px-5 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-1 text-[#e9c176] mb-1">
            <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase">Cultural Classifications</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-[40px] font-medium leading-[48px] tracking-[-0.015em] text-[#e6e1df]">Explore India's Heritage</h2>
          <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-xl mt-1">
            Organized across 8 foundational domains encompassing the tangible monuments of antiquity and the unbroken oral lineages of contemporary masters.
          </p>
        </div>
        {/* Opens the full Explore Heritage catalogue with every domain visible. */}
        <RouteLink to="/explore" className="inline-flex items-center gap-1 text-[#e9c176] hover:text-[#c5a059] text-[16px] font-semibold leading-6 tracking-[0.01em] transition-colors self-start md:self-auto">
          <span>Browse All 14 Domains</span>
          <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
        </RouteLink>
      </div>

      {/* Category Cards Grid */}
      <div id="categories" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24">
        {categories.map(cat => (
          <CategoryCard key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  </section>
);

export default DiscoverSection;
