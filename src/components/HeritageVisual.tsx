import React from 'react';
import { heritageCategoryIcons } from '../data/heritageRecords';
import type { HeritageRecord } from '../data/heritageRecords';

interface HeritageVisualProps {
  record: HeritageRecord;
  /** Sizing + hover classes applied to the image or the placeholder panel. */
  className?: string;
}

/**
 * Renders the record's approved prototype visual, or — when no suitable asset exists —
 * a clearly labelled temporary placeholder instead of invented imagery.
 */
const HeritageVisual: React.FC<HeritageVisualProps> = ({ record, className = '' }) =>
  record.image ? (
    <img
      src={record.image.src}
      alt={record.image.alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
    />
  ) : (
    <div
      role="img"
      aria-label={`${record.name} — archival visual pending`}
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2 ${className}`}
      style={{ background: 'radial-gradient(120% 120% at 50% 0%, #2b2a28 0%, #1c1b1a 55%, #141312 100%)' }}>
      <span className="material-symbols-outlined text-[42px]" style={{ color: 'rgba(233,193,118,0.45)' }}>
        {heritageCategoryIcons[record.category]}
      </span>
      <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase" style={{ color: '#9a8f80' }}>
        Archival visual pending
      </span>
    </div>
  );

export default HeritageVisual;
