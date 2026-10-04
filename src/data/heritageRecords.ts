/**
 * HeritageX — representative prototype catalogue.
 *
 * IMPORTANT: this is a small, hand-curated sample used to prototype the Explore
 * Heritage experience. It is NOT a complete inventory of India's heritage.
 * Every record follows the same field structure so the dataset can be replaced
 * by the future archive backend (SQLite/PostgreSQL) without touching the UI.
 */

export type HeritageRegion = 'North' | 'South' | 'East' | 'West' | 'North East' | 'Central';

export type HeritageCategory =
  | 'Historical Sites'
  | 'Monuments'
  | 'Architecture'
  | 'Festivals'
  | 'Arts & Crafts'
  | 'Food & Culinary'
  | 'Dance & Music'
  | 'Oral Traditions';

export interface HeritageImage {
  src: string;
  alt: string;
  /** Provenance note so unlicensed prototype visuals are easy to swap for licensed photography. */
  credit: string;
}

export interface HeritageRecord {
  /** Stable slug used by the reserved /heritage/:id route. */
  id: string;
  name: string;
  state: string;
  region: HeritageRegion;
  category: HeritageCategory;
  /** Tangible/intangible classification shown as archival metadata. */
  heritageType: string;
  /** Short curatorial summary (one or two sentences). */
  description: string;
  /** Human-readable historical context. */
  period: string;
  /** Approximate start year (negative = BCE); used only for sorting. */
  yearFrom: number;
  /** Why the record matters culturally. */
  significance: string;
  /** City / district / mapping context. */
  location: string;
  tags: string[];
  /** `null` renders a clearly labelled temporary placeholder until licensed photography is added. */
  image: HeritageImage | null;
  unesco?: boolean;
  /** Internal catalogue reference. */
  recordRef: string;
}

/** Domain icons mirror the taxonomy icons already used on the Homepage. */
export const heritageCategoryIcons: Record<HeritageCategory, string> = {
  'Historical Sites': 'fort',
  Monuments: 'qr_code_2',
  Architecture: 'domain',
  Festivals: 'festival',
  'Arts & Crafts': 'palette',
  'Food & Culinary': 'restaurant',
  'Dance & Music': 'music_note',
  'Oral Traditions': 'record_voice_over',
};

export const heritageCategories: HeritageCategory[] = [
  'Historical Sites',
  'Monuments',
  'Architecture',
  'Festivals',
  'Arts & Crafts',
  'Food & Culinary',
  'Dance & Music',
  'Oral Traditions',
];

export const heritageRegions: HeritageRegion[] = ['North', 'South', 'East', 'West', 'North East', 'Central'];

/** Prototype visuals are reused from already-approved HeritageX screens; licensed photography replaces them later. */
const PROTOTYPE_CREDIT =
  'Prototype visual reused from approved HeritageX design assets — to be replaced with licensed photography.';

export const heritageRecords: HeritageRecord[] = [
  {
    id: 'konark-sun-temple',
    name: 'Sun Temple, Konark',
    state: 'Odisha',
    region: 'East',
    category: 'Architecture',
    heritageType: 'Monument · Temple architecture',
    description:
      'A thirteenth-century temple conceived as the stone chariot of the sun god Surya, with twenty-four intricately carved wheels and monumental friezes.',
    period: '13th Century CE · Eastern Ganga Dynasty',
    yearFrom: 1250,
    significance:
      'A UNESCO World Heritage Site (1984) and the defining icon of Kalingan temple architecture.',
    location: 'Konark, Puri District',
    tags: ['UNESCO', 'Temple', 'Stone Carving', 'Kalinga'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJShrx79yLUO-78HDTp9Glq4b3pDuwH1dx0bZHvSHiQoS6IR94ZTg18YATSEAeUhTjElPHJ6RaFYB4nSLjGT-yzltDfTpW_ezCyFEO-tqhU1Xiyuqwimqnq_fXxvGGMsDyUsPn8bbAsI7l4FPLGE6qvMD79nWaD84Y5GzL0aFQMIh1pvwmEwFtoMrLQ_83GUegdBTEJpEPCECUHSZxDH6GQFdRv2u6_xdb2D7A5lIA3WFFbAGivsU',
      alt: 'Carved stone wheel and chariot friezes of the Konark Sun Temple',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-OD-0001',
  },
  {
    id: 'rani-ki-vav',
    name: 'Rani ki Vav',
    state: 'Gujarat',
    region: 'West',
    category: 'Architecture',
    heritageType: 'Monument · Stepwell',
    description:
      'An inverted subterranean temple descending seven terraces and 27 metres into the earth, commissioned by Queen Udayamati in memory of King Bhima I.',
    period: '11th Century CE · Chaulukya (Solanki) Dynasty',
    yearFrom: 1063,
    significance:
      'A UNESCO-listed masterpiece of subterranean water architecture with more than 500 principal sculptural panels.',
    location: 'Patan, Patan District',
    tags: ['UNESCO', 'Stepwell', 'Water Architecture', 'Sculpture'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUrCN0EvQj9ZCYn9yvyLxmLFnIsQayWz0nTjVF1qtZQTFF7RAe4H8nag0XZEf5LORdgv2JqS3NhEqUz_fh-6g5PKUnj-wc_3GSr6bzRopv8ymWIw_99fsO6dVWRgpCNxrZNkYZXs48_wYhqKgaxU5iQU-Cb6YPydCL0_mlWWakbU_HyRw8kOuefGRbEXncPsRQMIiptCEuXfKZ9Y9uzJM3oQ9chozIhykqvtZv_waujUi6BpW7yg',
      alt: 'Terraced sculptural walls of Rani ki Vav stepwell in Patan, Gujarat',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-GJ-0002',
  },
  {
    id: 'kathakali',
    name: 'Kathakali',
    state: 'Kerala',
    region: 'South',
    category: 'Dance & Music',
    heritageType: 'Living tradition · Temple theatre',
    description:
      'A nightlong total theatre of codified mudras, mineral-pigment make-up and Chenda percussion, staged traditionally in temple courtyards.',
    period: 'Formalised from the 17th century CE in Kerala temple culture',
    yearFrom: 1650,
    significance:
      'Proclaimed a UNESCO Intangible Cultural Heritage in 2008; its grammar of 24 root hand gestures survives through gurukula lineages.',
    location: 'Central Kerala · Kalamandalam tradition',
    tags: ['Living Tradition', 'UNESCO ICH', 'Theatre', 'Mudras'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfOQPocUJaNoZ6mzjOaBZggWEz4pSQD-E-yQMTZXlbK3stx5PAY5lDEQP1EhGlRuJyuEdIAOinRE8gw6cZtciJB9B03AhI5Hlh9xmP5PpTKDB64lR-Skl_IwfzYdCz_p_F890wKCvLI27qN5jU-juwcPso6Z03Tqxrng3rEflPzhm_r19kg1rbOlHN2iUZ6Hjrf2NsubKZRp4d4zfXRpSYpaR5NFCnnaPu9VVxbPgB-cfD74pwyhI',
      alt: 'Kathakali performer in full green facial make-up and headdress',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-KL-0003',
  },
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple',
    state: 'Tamil Nadu',
    region: 'South',
    category: 'Architecture',
    heritageType: 'Monument · Temple architecture',
    description:
      'A mortarless granite vimana rising 66 metres, crowned by an 80-tonne monolithic cupola and consecrated in 1010 CE by Rajaraja I.',
    period: '1010 CE · Chola Empire',
    yearFrom: 1010,
    significance:
      'The summit of Chola temple engineering and one of the UNESCO Great Living Chola Temples still in active worship.',
    location: 'Thanjavur',
    tags: ['UNESCO', 'Chola', 'Granite', 'Living Temple'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1HAXxwseD3oE12ynC3P8EySk8LopBoAnN8yi6XQDahfYLdb9Z5rf1AznQoIgulQG25qMBv_JvVt_6w-n7noW3GL5DhF5yg4Bxn8oB6oy5gCBrFrzGCRA30ZE_7I2UXiSCUrXoWg5-3sWaQ6xXs1ND3Jg_2LeCMeVMNmvaQk_FMPmxYNOri4SoV3E7-u9vYPl_CJ5czCWTFVOBxeu6rTeaX6oASJ8Wn6uTu6Fsmi1pHb6E84-YT0s',
      alt: 'Monolithic granite vimana of the Brihadisvara Temple, Thanjavur',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-TN-0004',
  },
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal',
    state: 'Rajasthan',
    region: 'West',
    category: 'Monuments',
    heritageType: 'Monument · Palace façade',
    description:
      'A honeycombed façade of 953 latticed jharokha windows built in 1799 so the royal women could watch street processions unobserved.',
    period: '1799 CE · Kachhwaha Rajput court',
    yearFrom: 1799,
    significance:
      "The signature screen-façade of Jaipur's walled city, fusing Rajput and Mughal ornamental idioms.",
    location: 'Jaipur',
    tags: ['Palace', 'Jharokha', 'Rajput', 'Pink City'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoVU3Bjas-BxQ-vG8HfGkDk2imD13FwkqeVXcP-w8HtDYDWGgH3yrTFS34KoF5fZEQkOG9VLVMLyLZIdi46XV0mOzd4Npm8PIysdgj6V_hWSm_rzM3oQ-CYUKED9YnWHTxJI1ygT74SV8tK5c0RvjUCpcjqzPpPXuvKebCRH4ZE8ZfegYi6m0CXVIwJQl9G6Iyi4FD3cQ6bcWYkcwdEHLMdEhu2Lrrw5BuU4CZFEgBfmcv_gg7aoQ',
      alt: 'Pink sandstone façade of Hawa Mahal with tiered latticed windows, Jaipur',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-RJ-0005',
  },
  {
    id: 'meenakshi-amman-temple',
    name: 'Meenakshi Amman Temple',
    state: 'Tamil Nadu',
    region: 'South',
    category: 'Architecture',
    heritageType: 'Monument · Temple city',
    description:
      'A vast temple city of fourteen gopurams, its present structure completed in the 17th century around the shrines of Meenakshi and Sundareswarar.',
    period: 'Present structure 1623–1655 CE · Nayak period, origins in the 7th century CE',
    yearFrom: 1623,
    significance:
      'Among the largest continuously worshipped temple complexes in India; its gopurams and thousand-pillar hall define Tamil temple art.',
    location: 'Madurai',
    tags: ['Temple', 'Gopuram', 'Nayak', 'Living Temple'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMQ0zmKpU6fdpGYLtfFOB0e9ufFBaj4_Ocye8IusGRVjc6nrFEpQBzWyre5qr9QKWUTxoqWVjSRVFGlnrYOImn0YXupTY0EQBUukgNQgM981B54n2BtuElsaU0TtKIkPeNjtDql6ZIgYjStJd6zwBOjc7QAvRTGrUr4mvEjhq1hUk2nfqF_frR1pr1ADLvo-vJfN0HUhdF-7Z7uR2q9IMVqL8-pOpWlxWRdvTX29kL_0Bizg5sJPM',
      alt: 'Towering sculpted gopuram of Meenakshi Amman Temple, Madurai',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-TN-0006',
  },
  {
    id: 'jagannath-temple-puri',
    name: 'Jagannath Temple, Puri',
    state: 'Odisha',
    region: 'East',
    category: 'Monuments',
    heritageType: 'Monument · Temple complex',
    description:
      'The twelfth-century Kalingan temple that anchors the Char Dham pilgrimage, served by one of the largest ritual kitchen economies of any shrine.',
    period: '12th Century CE · Eastern Ganga Dynasty',
    yearFrom: 1161,
    significance:
      'The ceremonial heart of the Jagannath cult and the starting point of the annual Rath Yatra.',
    location: 'Puri',
    tags: ['Char Dham', 'Kalinga', 'Temple', 'Ritual'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAwdSJKIm39-m6NLhFo0QtP2EJ6Jnv1oxaQ57vLn9ePVPWh1YYWVhBEI6iX0S9BQuS8TQgu3oPHopiXJPMJ3X75gjtGI0lfkvK14woLkXplGYqgWTxGtX5iqmqyvyJfPocycsnKgyPgitCmdQVB4Wkc_EvHi_OA1t7m-qhzUHP81Lb7bTwuXT2yCypkjb4Q55kUGcq0nAzUMj-4MaykOOVfW7rqMaHaAkAL8DzO0E12b7DCKPTtCY',
      alt: 'Stone deula spire of the Jagannath Temple, Puri',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-OD-0007',
  },
  {
    id: 'rang-ghar',
    name: 'Rang Ghar',
    state: 'Assam',
    region: 'North East',
    category: 'Historical Sites',
    heritageType: 'Monument · Royal amphitheatre',
    description:
      'A two-storey oval amphitheatre built in 1746 as the Ahom royal pavilion for Bihu festivities and traditional contests.',
    period: '1746 CE · Ahom Kingdom',
    yearFrom: 1746,
    significance:
      'Widely regarded as among the oldest surviving amphitheatres in Asia and a symbol of Ahom court culture.',
    location: 'Sivasagar',
    tags: ['Ahom', 'Amphitheatre', 'Royal Court'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDE9TAeHP29WEKerej79i3Iij43kDq8seTabaEgWHD1vnA0fM-OtHgQ8jrw4jKtkorYxFjv4rz8s5b0k9xNE2FyMIL-e0vsZ8REZnZzLho0X9c0KL0NmssIuze1O_6HPt72P8WLs2OkeSJz8K9c521_0rk0kyOBO46b9rhgKqgHfAI0oLfTJSbppYoE9UEgOBEjSfdJl0K5auLEDJrTZbY6wYhHGBS3PNe9NlWrYYhdURj9apaVfGc',
      alt: 'Tiered oval amphitheatre of Rang Ghar at Sivasagar, Assam',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-AS-0008',
  },
  {
    id: 'kathkuni-architecture',
    name: 'Kathkuni Architecture',
    state: 'Himachal Pradesh',
    region: 'North',
    category: 'Architecture',
    heritageType: 'Living tradition · Vernacular architecture',
    description:
      'Seismic-resilient temple and tower construction that interleaves deodar timber with dry-laid stone, practised by temple carpenters across the western Himalaya.',
    period: 'Evolving since the early medieval period (c. 7th–8th century CE)',
    yearFrom: 700,
    significance:
      'A living craft lineage whose interlocking joinery is studied today for earthquake-resistant Himalayan building.',
    location: 'Kinnaur, Shimla and Kullu hills',
    tags: ['Vernacular', 'Timber', 'Seismic', 'Craft Lineage'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3lpii8dLIBFu7AfVdSOMS4bb_AKdv4-wtaTQHNu9udG3CrSCjKllaFYj6eumg23rkW3Q1oZedSfmFtr75xg97WDqZUtj3ajLzDrVZt4J9aS9bhS8oYlVuvNPgkkhGkAT8qjT3sIE7Iars-Fw50LcsSbUViK5upzkZAQCWjvOqJcK5cVdXJ4KLUPOena2L3cmUL7c--F9FYYe0j5M2HfPH8KRmcCTSMAoNkoSBcRC1yY_eJBEMfQg',
      alt: 'Multi-tiered timber-and-slate temple in the Kathkuni idiom of Himachal Pradesh',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-HP-0009',
  },
  {
    id: 'vedic-chanting',
    name: 'Vedic Chanting',
    state: 'Uttar Pradesh',
    region: 'North',
    category: 'Oral Traditions',
    heritageType: 'Living tradition · Oral scripture',
    description:
      'The unbroken recitation of the Vedas with exact pitch, duration and syllable weight, transmitted orally across more than three millennia.',
    period: 'Vedic period onward · c. 1500 BCE to the present',
    yearFrom: -1500,
    significance:
      "Proclaimed a UNESCO Intangible Cultural Heritage in 2003 as one of the world's oldest continuously transmitted oral traditions.",
    location: 'Varanasi and pan-Indian sampradayas',
    tags: ['UNESCO ICH', 'Veda', 'Chant', 'Oral Lineage'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-wcDI1HYATqHCLthr6Cw4hlttOdgzMRACT_dgh0PoVexyz8eMAN2KJQZE28phs06FmZ6PdWWeLXeRvE7E3nLhm5HQRP0KUNzJzNbykCl-0ARwZNgMB_6PgsFWVFewCadhrenzNm1MJLjtxYMxe538SvMnXCKEcKN3WEXc8-DWZ-S7AdjIcYjcZu18mrJbcDas36t7HBL2mqKkhgwKQH_AUYs0IZzXWSrWYdTlVG0i3yu2nXgByHE',
      alt: 'Scholar reciting from an ancient palm-leaf manuscript',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-UP-0010',
  },
  {
    id: 'kerala-sadya',
    name: 'Kerala Sadya',
    state: 'Kerala',
    region: 'South',
    category: 'Food & Culinary',
    heritageType: 'Living tradition · Ritual cuisine',
    description:
      "A vegetarian feast of dozens of preparations served on a banana leaf, its sequence codified by Kerala's temple and household kitchens.",
    period: 'Evolving over the past five centuries',
    yearFrom: 1500,
    significance:
      'Carries temple and matrilineal household memory; the centrepiece of Onam and wedding feasts.',
    location: 'Across Kerala',
    tags: ['Cuisine', 'Onam', 'Banana Leaf', 'Feast'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYbjv9IHyEFNHYMgYcblHgyp_sEIeoa1RBbtAon89qF61zVvBlF16LeE6MN6X48VR_owdIOIC0wwR3xSMO376ttbzaXtoQAoL-3mwEWQXmiXPBWe5X92LrotzjAf1Op5wEprSqPELksJmrDikfj0LffBwEwInqfwwab-c4Q_8hrUiUyIF5dvgyR1ePAGTIPkQYeaqQ8hfbFILuGfBUpYLMWoTp0fGOWS_2EmrY9pyWm-Sf8ce1OHg',
      alt: 'Banana-leaf feast with heirloom vessels and brass service ware',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-KL-0011',
  },
  {
    id: 'bidriware',
    name: 'Bidriware',
    state: 'Karnataka',
    region: 'South',
    category: 'Arts & Crafts',
    heritageType: 'Craft tradition · Metal inlay',
    description:
      'A zinc-copper alloy blackened with soil and inlaid with pure silver, developed in the Bahmani court workshops of Bidar in the fourteenth century.',
    period: '14th Century CE · Bahmani Sultanate',
    yearFrom: 1350,
    significance:
      'A distinctive Deccan court craft still practised by hereditary artisan families and protected as a Geographical Indication.',
    location: 'Bidar',
    tags: ['Metalwork', 'Silver Inlay', 'Deccan', 'GI Craft'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrFJ06s-Cn8s3jUMwO3fVqv0lLmJobC5RZXl7gEl2r7UGNUxvETbu9HnwbwkQEpDiWLDa4ggUVVy20ES77m_U3x5FdCFfikEoH72ZvT7vFe2MY2w6lV1VAqygjRIwT3eqlFG8Y1UXajkP85f--kMOfHdGUP7m8lNlcdH84_VRe11jhHapk3ZCIGMwxffum2fEQ2ZR3qbM3fPLVIYCz20ZdYoiNlila39iZGaEYmHw4r0KiPHKJIhs',
      alt: 'Artisan etching silver inlay into a Bidriware vessel',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-KA-0012',
  },
  {
    id: 'amber-fort',
    name: 'Amber Fort',
    state: 'Rajasthan',
    region: 'West',
    category: 'Historical Sites',
    heritageType: 'Monument · Hill fort palace',
    description:
      'The Kachhwaha seat above Maota Lake, begun in 1592 under Raja Man Singh I, with mirrored palace courtyards and serpentine ramparts.',
    period: '1592 CE onward · Kachhwaha Rajput court',
    yearFrom: 1592,
    significance:
      'Part of the UNESCO Hill Forts of Rajasthan and a synthesis of Rajput and Mughal court architecture.',
    location: 'Amer, Jaipur',
    tags: ['UNESCO', 'Hill Fort', 'Palace', 'Rajput'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR_cUJuyQntdyUyJET4oQKbfhwQGq45MqHO2jlOn85ryyvnjZldl88_19jJq2j-qJhxlThzcjk24f5vvIuAGEhBPvS6vW83DHFAJgxgmdhA0SKeXI7C6TgPzs_Vu-KTfrJrUZgt1q6jCaFAvmAHRq1gQn3pYtGR_9mIgje1ztzRSq3zbgyODfd_z0bVTHeO3mgHo__o7X1MGMWh0S-yjatRX0-DDp9zuqC1ao7kGmEz8DbeYL1EGA',
      alt: 'Carved stone jharokha arch in the palace courtyards of Amber Fort',
      credit: PROTOTYPE_CREDIT,
    },
    unesco: true,
    recordRef: 'HX-RJ-0013',
  },
  {
    id: 'rath-yatra-puri',
    name: 'Rath Yatra',
    state: 'Odisha',
    region: 'East',
    category: 'Festivals',
    heritageType: 'Living festival · Temple procession',
    description:
      'The annual chariot procession in which Jagannath, Balabhadra and Subhadra are drawn through Puri on three towering wooden chariots.',
    period: 'Recorded since the 12th century CE',
    yearFrom: 1150,
    significance:
      "One of India's largest living processions, and the ritual source of the word 'juggernaut'.",
    location: 'Puri',
    tags: ['Procession', 'Chariot', 'Jagannath', 'Living Festival'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjfMuhE-VWgj1wPJJ4BDiY52UiMSCUW6OMq_72cv6K3p_GbFLP_2Fb5ythN8pkqA2pF1v5eXgfgdMalBrjLYVfqfIj_AOYESz2cWpxPL6EdNm7mN6TSFMDGlhpCkfUm01EKe_3i_Uq5zicYwUY74Xq0Xo86xVNFOSGXoip2zmL1pfGDzLjFT_CsNP87qOmzdhZqa466tWdEx_j1yCJQfeGMM_Sn-jXNjenddB8N3LKUEY5Be5iJqs',
      alt: 'Illuminated festival chariot and brass lamps during an Indian night procession',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-OD-0014',
  },
  {
    id: 'ashokan-pillar-sarnath',
    name: 'Ashokan Pillar at Sarnath',
    state: 'Uttar Pradesh',
    region: 'North',
    category: 'Monuments',
    heritageType: 'Archaeological monument · Edict pillar',
    description:
      "The polished sandstone pillar bearing Ashoka's edicts, whose four-lion capital was adopted as the national emblem of India.",
    period: '3rd Century BCE · Mauryan Empire',
    yearFrom: -250,
    significance:
      "Marks the Buddha's first sermon; its Lion Capital became independent India's national emblem in 1950.",
    location: 'Sarnath, Varanasi',
    tags: ['Mauryan', 'Edict', 'National Emblem', 'Buddhist'],
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDypO1_TuMMgYErojBwuGCrIP9HxV57zJg4NhlYnkEMkafmRxIR6iLrvH_6d5gNIGJ58WpQ5qUK3Zl7BrymP5-d7L_uCqwaYIIkqLYevqf1qtAN-KdprKYikh-zm958wMR_EMBA7a58VxoRY-yUFOI4ZfVXOudHue9Xh71y_RiaiDx95BFZNkTJ0gvHmUQhmymh3WZrXMjTOSctriuGJI0qQPoS33I_s92hCjpFctKN45R1xqXSsLQ',
      alt: 'Polished sandstone pillar with a carved lion capital',
      credit: PROTOTYPE_CREDIT,
    },
    recordRef: 'HX-UP-0015',
  },
  {
    id: 'madhubani-painting',
    name: 'Madhubani Painting',
    state: 'Bihar',
    region: 'East',
    category: 'Arts & Crafts',
    heritageType: 'Folk art tradition · Mithila painting',
    description:
      'A Mithila tradition in which women paint deities, wedding motifs and nature on mud walls and paper with natural pigments.',
    period: 'Documented since the 17th century CE; ritual roots older',
    yearFrom: 1600,
    significance:
      'A living folk idiom that moved from wedding chambers to global recognition while retaining its lineage vocabulary.',
    location: 'Mithila, Madhubani District',
    tags: ['Folk Art', 'Mithila', 'Natural Pigment', 'Women Artisans'],
    image: null,
    recordRef: 'HX-BR-0016',
  },
  {
    id: 'bihu',
    name: 'Bihu',
    state: 'Assam',
    region: 'North East',
    category: 'Festivals',
    heritageType: 'Living festival · Agrarian cycle',
    description:
      "Three seasonal Bihu festivals of the Assamese year, with Bohag Bihu's husori dances and Bihu geet welcoming the sowing season.",
    period: 'Ancestral agrarian cycle, documented in medieval Assamese literature',
    yearFrom: 1500,
    significance:
      'The defining festival rhythm of Assamese life, linking rice cultivation, courtship customs and community feasting.',
    location: 'Across Assam',
    tags: ['Agrarian', 'Dance', 'Song', 'Spring Festival'],
    image: null,
    recordRef: 'HX-AS-0017',
  },
  {
    id: 'khajuraho',
    name: 'Khajuraho Group of Monuments',
    state: 'Madhya Pradesh',
    region: 'Central',
    category: 'Architecture',
    heritageType: 'Monument · Temple group',
    description:
      'The Chandela temple ensemble, celebrated for soaring shikharas and dense bands of divine, courtly and mithuna sculpture.',
    period: 'c. 950–1050 CE · Chandela Dynasty',
    yearFrom: 950,
    significance:
      'A UNESCO World Heritage Site (1986) preserving a complete corpus of Nagara temple architecture and sculpture.',
    location: 'Chhatarpur District',
    tags: ['UNESCO', 'Nagara', 'Chandela', 'Sculpture'],
    image: null,
    unesco: true,
    recordRef: 'HX-MP-0018',
  },
  {
    id: 'sanchi-stupa',
    name: 'Sanchi Stupa',
    state: 'Madhya Pradesh',
    region: 'Central',
    category: 'Monuments',
    heritageType: 'Archaeological monument · Buddhist stupa complex',
    description:
      'The hemispherical stupa begun under Ashoka, whose four carved toranas rank among the earliest narrative stone sculpture in India.',
    period: '3rd Century BCE – 12th Century CE · Mauryan origins',
    yearFrom: -250,
    significance:
      'A UNESCO World Heritage Site (1989) and the cradle of Buddhist art and architecture in central India.',
    location: 'Raisen District',
    tags: ['UNESCO', 'Buddhist', 'Stupa', 'Torana'],
    image: null,
    unesco: true,
    recordRef: 'HX-MP-0019',
  },
  {
    id: 'kumbh-mela',
    name: 'Kumbh Mela',
    state: 'Uttar Pradesh',
    region: 'North',
    category: 'Festivals',
    heritageType: 'Living festival · Pilgrimage gathering',
    description:
      'The periodic confluence pilgrimage at Prayagraj, Haridwar, Nashik and Ujjain, its ritual bathing timed to planetary alignments.',
    period: 'Referenced since the 7th century CE; Puranic roots',
    yearFrom: 600,
    significance:
      'Proclaimed a UNESCO Intangible Cultural Heritage in 2017 as the largest peaceful congregation of humanity.',
    location: 'Prayagraj (principal site)',
    tags: ['UNESCO ICH', 'Pilgrimage', 'Sacred River', 'Congregation'],
    image: null,
    unesco: true,
    recordRef: 'HX-UP-0020',
  },
];

export function getHeritageRecordById(id: string): HeritageRecord | undefined {
  return heritageRecords.find(record => record.id === id);
}
