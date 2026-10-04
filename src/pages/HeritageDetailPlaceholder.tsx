import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RouteLink from '../components/RouteLink';
import { getHeritageRecordById } from '../data/heritageRecords';

interface HeritageDetailPlaceholderProps {
  recordId: string;
}

/**
 * Reserved route for the future Heritage Detail screen (/heritage/:id).
 * The catalogue already links here; the curatorial detail design ships in a later phase,
 * so this view only confirms the record reference and the routing structure.
 */
const HeritageDetailPlaceholder: React.FC<HeritageDetailPlaceholderProps> = ({ recordId }) => {
  const record = getHeritageRecordById(recordId);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141312', color: '#e6e1df', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Header basePath="/" />
      <main className="pt-20">
        <section className="relative overflow-hidden" style={{ backgroundColor: '#0f0e0d' }}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[380px] rounded-full pointer-events-none"
            style={{ background: 'rgba(233,193,118,0.08)', filter: 'blur(130px)' }} />

          <div className="relative max-w-3xl mx-auto px-5 lg:px-12 py-14 text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center flex-wrap gap-1 mb-4">
              <RouteLink to="/"
                className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#9a8f80] hover:text-[#e9c176] transition-colors">
                Archive Home
              </RouteLink>
              <span className="material-symbols-outlined text-[14px] text-[#9a8f80]">chevron_right</span>
              <RouteLink to="/explore"
                className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#9a8f80] hover:text-[#e9c176] transition-colors">
                Explore Heritage
              </RouteLink>
              <span className="material-symbols-outlined text-[14px] text-[#9a8f80]">chevron_right</span>
              <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176]" aria-current="page">
                {record ? record.name : 'Unknown record'}
              </span>
            </nav>

            <span className="material-symbols-outlined text-[#e9c176] text-[40px]">account_balance</span>
            <h1 className="font-['Playfair_Display'] text-[#e6e1df] mt-2"
              style={{ fontSize: 'clamp(30px, 4vw, 40px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.015em' }}>
              {record ? record.name : 'Record not found'}
            </h1>
            {record && (
              <p className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#9a8f80] mt-3">
                {record.state} · {record.category} · {record.period}
              </p>
            )}

            <div className="rounded-xl p-6 mt-6 text-left" style={{ backgroundColor: '#1c1b1a', border: '1px solid rgba(197,160,89,0.12)' }}>
              <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176] block">
                Record in preparation
              </span>
              <p className="text-[15px] leading-6 text-[#d1c5b4] mt-2">
                {record
                  ? 'The full curatorial detail page for this heritage record is planned for a later phase. This route is already reserved so catalogue links and record URLs stay stable when it ships.'
                  : 'No record matches this catalogue reference yet — it may belong to a future expansion of the prototype dataset.'}
              </p>
              <p className="text-[11px] font-semibold leading-4 tracking-[0.12em] text-[#9a8f80] mt-3">
                Reserved route: /heritage/{recordId}
              </p>
            </div>

            <div className="flex items-center justify-center flex-wrap gap-3 mt-6">
              <RouteLink to="/explore"
                className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[15px] font-semibold leading-6 tracking-[0.02em] transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Explore Heritage
              </RouteLink>
              <RouteLink to="/"
                className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-[#e6e1df] hover:bg-[rgba(197,160,89,0.08)] text-[15px] font-semibold leading-6 tracking-[0.02em] transition-colors"
                style={{ border: '1px solid rgba(197,160,89,0.3)' }}>
                Return to Archive
              </RouteLink>
            </div>
          </div>
        </section>
      </main>
      <Footer basePath="/" />
    </div>
  );
};

export default HeritageDetailPlaceholder;
