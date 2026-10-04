import React from 'react';
import RouteLink from './RouteLink';
import HeritageVisual from './HeritageVisual';
import type { HeritageRecord } from '../data/heritageRecords';

interface HeritageCardProps {
  record: HeritageRecord;
}

const HeritageCard: React.FC<HeritageCardProps> = ({ record }) => (
  // Real link: the /heritage/:id route is reserved for the future Detail screen (currently a placeholder view).
  <RouteLink
    to={`/heritage/${record.id}`}
    aria-label={`View heritage record: ${record.name}`}
    className="group flex flex-col rounded-xl overflow-hidden transition-all duration-300 shadow-md"
    style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.backgroundColor = '#2b2a28';
      el.style.borderColor = 'rgba(229,195,120,0.28)';
      el.style.boxShadow = '0 12px 32px -8px rgba(0,0,0,0.65), 0 0 24px 0 rgba(197,160,89,0.08)';
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.backgroundColor = '#211f1e';
      el.style.borderColor = 'rgba(197,160,89,0.12)';
      el.style.boxShadow = '';
    }}>
    {/* Media */}
    <div className="relative h-52 overflow-hidden" style={{ backgroundColor: '#2b2a28' }}>
      <HeritageVisual record={record} className="transition-transform duration-500 group-hover:scale-105" />
      <span
        className="absolute top-3 left-3 px-2 py-0.5 rounded text-[#e9c176] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase"
        style={{ backgroundColor: 'rgba(15,14,13,0.85)' }}>
        {record.category}
      </span>
      {record.unesco && (
        <span
          className="absolute top-3 right-3 px-2 py-0.5 rounded text-[#ffdea5] text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase inline-flex items-center gap-1"
          style={{ backgroundColor: 'rgba(15,14,13,0.85)' }}>
          <span className="material-symbols-outlined text-[12px]">stars</span>
          UNESCO
        </span>
      )}
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col p-5">
      <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#9a8f80]">
        {record.state} · {record.region} Region
      </span>
      <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-[30px] text-[#e6e1df] mt-1">
        {record.name}
      </h3>
      <p className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176] mt-1">
        {record.heritageType}
      </p>
      <p className="text-[13px] leading-5 text-[#d1c5b4] mt-2 line-clamp-3">{record.description}</p>

      <div className="flex flex-wrap gap-1 mt-3">
        {record.tags.slice(0, 3).map(tag => (
          <span
            key={tag}
            className="px-1.5 py-0.5 rounded text-[10px] font-medium leading-[14px] tracking-[0.12em] uppercase"
            style={{ backgroundColor: '#1c1b1a', color: '#d1c5b4', border: '1px solid rgba(197,160,89,0.16)' }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(216,210,197,0.08)', marginTop: '1rem' }}>
        <span className="inline-flex items-center gap-0.5 text-[11px] leading-4 text-[#9a8f80] min-w-0">
          <span className="material-symbols-outlined text-[14px]">location_on</span>
          <span className="truncate">{record.location}</span>
        </span>
        <span className="inline-flex items-center gap-0.5 text-[13px] font-semibold leading-[18px] tracking-[0.08em] text-[#e9c176] shrink-0 group-hover:translate-x-1 transition-transform">
          View Record
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </span>
      </div>
    </div>
  </RouteLink>
);

export default HeritageCard;
