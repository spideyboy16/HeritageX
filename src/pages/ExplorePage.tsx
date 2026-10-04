import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RouteLink from '../components/RouteLink';
import HeritageCard from '../components/HeritageCard';
import { heritageCategories, heritageCategoryIcons, heritageRecords, heritageRegions } from '../data/heritageRecords';
import type { HeritageCategory, HeritageRegion } from '../data/heritageRecords';

type SortKey = 'curator' | 'name' | 'oldest' | 'newest';
type CategoryFilter = HeritageCategory | 'All Domains';
type RegionFilter = HeritageRegion | 'All Regions';

const ALL_STATES = 'All States';

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'curator', label: "Curator's Selection" },
  { value: 'name', label: 'Name · A to Z' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'newest', label: 'Newest First' },
];

const categoryFilters: CategoryFilter[] = ['All Domains', ...heritageCategories];
const regionFilters: RegionFilter[] = ['All Regions', ...heritageRegions];

/** Reads the optional ?category= deep link used by the Homepage domain cards. */
function readCategoryFromUrl(): CategoryFilter {
  const value = new URLSearchParams(window.location.search).get('category');
  return value && (heritageCategories as string[]).includes(value) ? (value as HeritageCategory) : 'All Domains';
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, options, onChange }) => (
  <label className="flex min-w-0 flex-col gap-1">
    <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#9a8f80]">{label}</span>
    <span className="relative flex items-center">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full appearance-none rounded-lg bg-[#141312] border border-[rgba(216,210,197,0.15)] focus:border-[#c5a059] focus:outline-none px-3 py-2.5 pr-9 text-[13px] leading-5 text-[#e6e1df] transition-colors"
        style={{ colorScheme: 'dark' }}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="material-symbols-outlined pointer-events-none absolute right-2 text-[20px] text-[#9a8f80]">
        expand_more
      </span>
    </span>
  </label>
);

const ExplorePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>(readCategoryFromUrl);
  const [region, setRegion] = useState<RegionFilter>('All Regions');
  const [stateFilter, setStateFilter] = useState(ALL_STATES);
  const [sort, setSort] = useState<SortKey>('curator');

  const stateOptions = useMemo(() => {
    const pool = region === 'All Regions' ? heritageRecords : heritageRecords.filter(record => record.region === region);
    return Array.from(new Set(pool.map(record => record.state))).sort((a, b) => a.localeCompare(b));
  }, [region]);

  // A state selection that no longer exists inside the newly chosen region falls back to All States.
  const handleRegionChange = (value: RegionFilter) => {
    setRegion(value);
    if (stateFilter !== ALL_STATES) {
      const pool = value === 'All Regions' ? heritageRecords : heritageRecords.filter(record => record.region === value);
      if (!pool.some(record => record.state === stateFilter)) setStateFilter(ALL_STATES);
    }
  };

  const normalizedQuery = query.trim().toLowerCase();

  const visibleRecords = useMemo(() => {
    const matches = heritageRecords.filter(record => {
      if (category !== 'All Domains' && record.category !== category) return false;
      if (region !== 'All Regions' && record.region !== region) return false;
      if (stateFilter !== ALL_STATES && record.state !== stateFilter) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        record.name,
        record.state,
        record.region,
        record.category,
        record.heritageType,
        record.description,
        record.period,
        record.significance,
        record.location,
        ...record.tags,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
    switch (sort) {
      case 'name':
        return [...matches].sort((a, b) => a.name.localeCompare(b.name));
      case 'oldest':
        return [...matches].sort((a, b) => a.yearFrom - b.yearFrom);
      case 'newest':
        return [...matches].sort((a, b) => b.yearFrom - a.yearFrom);
      default:
        return matches;
    }
  }, [category, region, stateFilter, normalizedQuery, sort]);

  const filtersActive =
    query !== '' || category !== 'All Domains' || region !== 'All Regions' || stateFilter !== ALL_STATES;

  // Keep ?category= shareable (replaceState only — no extra history entries).
  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'All Domains') params.set('category', category);
    const search = params.toString();
    window.history.replaceState(null, '', search ? `${window.location.pathname}?${search}` : window.location.pathname);
  }, [category]);

  const resetFilters = () => {
    setQuery('');
    setCategory('All Domains');
    setRegion('All Regions');
    setStateFilter(ALL_STATES);
  };

  const recordCount = heritageRecords.length;
  const stateCount = new Set(heritageRecords.map(record => record.state)).size;
  const stats = [
    { value: String(recordCount), label: 'Curated Records' },
    { value: String(heritageCategories.length), label: 'Heritage Domains' },
    { value: String(stateCount), label: 'States & Territories' },
    { value: String(heritageRegions.length), label: 'Geographic Regions' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141312', color: '#e6e1df', fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      <Header basePath="/" />
      <main className="pt-20">
        {/* Page intro */}
        <section className="relative overflow-hidden" style={{ backgroundColor: '#0f0e0d' }}>
          <div className="absolute -top-24 right-0 w-[520px] h-[360px] rounded-full pointer-events-none"
            style={{ background: 'rgba(233,193,118,0.08)', filter: 'blur(120px)' }} />
          <div className="absolute -bottom-24 -left-16 w-[380px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'rgba(123,47,15,0.14)', filter: 'blur(110px)' }} />

          <div className="relative max-w-7xl mx-auto px-5 lg:px-12 pt-10 pb-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1 mb-4">
              <RouteLink to="/"
                className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#9a8f80] hover:text-[#e9c176] transition-colors">
                Archive Home
              </RouteLink>
              <span className="material-symbols-outlined text-[14px] text-[#9a8f80]">chevron_right</span>
              <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176]" aria-current="page">
                Explore Heritage
              </span>
            </nav>

            <h1 className="font-['Playfair_Display'] text-[#e6e1df]"
              style={{ fontSize: 'clamp(34px, 4vw, 44px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.015em' }}>
              Explore <span className="italic font-normal text-[#e9c176]">Heritage</span>
            </h1>
            <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-2xl mt-2">
              Search and filter a curated prototype catalogue of monuments, living traditions, crafts and festivals across India.
              Records are structured for the future archive backend.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {stats.map(stat => (
                <div key={stat.label} className="rounded-lg px-4 py-3"
                  style={{ backgroundColor: '#1c1b1a', border: '1px solid rgba(197,160,89,0.12)' }}>
                  <span className="font-['Playfair_Display'] text-[26px] font-medium leading-8 text-[#e9c176] block">{stat.value}</span>
                  <span className="text-[10px] font-medium leading-[14px] tracking-[0.14em] uppercase text-[#9a8f80]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Catalogue + filter console */}
        <section className="w-full py-8" style={{ backgroundColor: '#141312' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-12">
            <div className="rounded-xl p-4 md:p-5" style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
              {/* Search */}
              <div className="flex items-center gap-3 rounded-lg px-4 py-3 bg-[#141312] border border-[rgba(216,210,197,0.15)] focus-within:border-[#c5a059] focus-within:shadow-[0_0_0_3px_rgba(197,160,89,0.10)] transition-colors">
                <span className="material-symbols-outlined text-[#e9c176] text-[22px]">search</span>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by monument, craft, festival, state or period…"
                  aria-label="Search heritage records"
                  className="w-full min-w-0 bg-transparent text-[15px] leading-6 text-[#e6e1df] placeholder-[#9a8f80] focus:outline-none"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                />
                {query !== '' && (
                  <button type="button" onClick={() => setQuery('')} aria-label="Clear search"
                    className="text-[#9a8f80] hover:text-[#e6e1df] transition-colors shrink-0">
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                )}
              </div>

              {/* Domain chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-4 -mx-1 px-1">
                {categoryFilters.map(filter => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setCategory(filter)}
                    aria-pressed={category === filter}
                    className="px-3 py-1.5 rounded-lg whitespace-nowrap text-[13px] font-semibold leading-[18px] tracking-[0.08em] transition-colors inline-flex items-center gap-1"
                    style={{
                      backgroundColor: category === filter ? '#e9c176' : '#141312',
                      color: category === filter ? '#412d00' : '#d1c5b4',
                      border: `1px solid ${category === filter ? 'rgba(233,193,118,0.9)' : 'rgba(197,160,89,0.16)'}`,
                    }}>
                    {filter !== 'All Domains' && (
                      <span className="material-symbols-outlined text-[15px]">{heritageCategoryIcons[filter]}</span>
                    )}
                    {filter}
                  </button>
                ))}
              </div>

              {/* Region / State / Sort */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                <FilterSelect
                  label="Region"
                  value={region}
                  onChange={(value) => handleRegionChange(value as RegionFilter)}
                  options={regionFilters.map(item => ({ value: item, label: item }))}
                />
                <FilterSelect
                  label="State or Territory"
                  value={stateFilter}
                  onChange={setStateFilter}
                  options={[ALL_STATES, ...stateOptions].map(item => ({ value: item, label: item }))}
                />
                <FilterSelect
                  label="Sort by"
                  value={sort}
                  onChange={(value) => setSort(value as SortKey)}
                  options={sortOptions}
                />
              </div>
            </div>

            {/* Result summary + reset */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-6 mb-4">
              <p className="text-[13px] leading-5 text-[#d1c5b4]" aria-live="polite">
                Showing <span className="text-[#e9c176] font-semibold">{visibleRecords.length}</span> of {recordCount} curated records
                {category !== 'All Domains' && (
                  <span> · domain: <span className="text-[#e9c176]">{category}</span></span>
                )}
                {region !== 'All Regions' && (
                  <span> · region: <span className="text-[#e9c176]">{region}</span></span>
                )}
              </p>
              {filtersActive && (
                <button type="button" onClick={resetFilters}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[#e9c176] hover:text-[#ffdea5] text-[13px] font-semibold leading-[18px] tracking-[0.08em] transition-colors"
                  style={{ border: '1px solid rgba(197,160,89,0.3)' }}>
                  <span className="material-symbols-outlined text-[16px]">restart_alt</span>
                  Reset all filters
                </button>
              )}
            </div>

            {/* Results */}
            {visibleRecords.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleRecords.map(record => (
                  <HeritageCard key={record.id} record={record} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl p-10 text-center" style={{ backgroundColor: '#211f1e', border: '1px solid rgba(197,160,89,0.12)' }}>
                <span className="material-symbols-outlined text-[40px] text-[#e9c176]">travel_explore</span>
                <h3 className="font-['Playfair_Display'] text-[22px] font-semibold leading-[30px] text-[#e6e1df] mt-2">
                  No records match this search
                </h3>
                <p className="text-[15px] leading-6 text-[#d1c5b4] max-w-md mx-auto mt-1">
                  Try a different monument, state, domain or period — or reset the filters to browse the full curated sample.
                </p>
                <button type="button" onClick={resetFilters}
                  className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-[#e9c176] hover:bg-[#c5a059] text-[#412d00] text-[15px] font-semibold leading-6 tracking-[0.02em] transition-colors mt-4">
                  <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Dataset note */}
        <section className="w-full pb-12" style={{ backgroundColor: '#141312' }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-12">
            <div className="rounded-xl p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              style={{ backgroundColor: '#1c1b1a', border: '1px solid rgba(197,160,89,0.12)' }}>
              <div className="flex items-start gap-3 max-w-3xl">
                <span className="material-symbols-outlined text-[#e9c176] text-[22px] shrink-0">info</span>
                <div>
                  <span className="text-[11px] font-semibold leading-4 tracking-[0.12em] uppercase text-[#e9c176] block">
                    Prototype dataset
                  </span>
                  <p className="text-[13px] leading-5 text-[#d1c5b4] mt-1">
                    This catalogue is a representative curated sample of {recordCount} records built for the HeritageX frontend
                    prototype — not a complete inventory of India's heritage. Every record follows the same field structure so it
                    can be replaced by the future archive backend without changing this interface.
                  </p>
                </div>
              </div>
              <RouteLink to="/"
                className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg text-[#e6e1df] hover:bg-[rgba(197,160,89,0.08)] text-[15px] font-semibold leading-6 tracking-[0.02em] transition-colors shrink-0 self-start lg:self-auto"
                style={{ border: '1px solid rgba(197,160,89,0.3)' }}>
                <span className="material-symbols-outlined text-[18px] text-[#e9c176]">arrow_back</span>
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

export default ExplorePage;
