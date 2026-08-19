export const nav = [
  { href: '#product', label: 'Product' },
  { href: '#customers', label: 'Customers' },
  { href: '#pricing', label: 'Pricing' },
] as const

export const erps = [
  'Dynamics 365',
  'Sage',
  'Odoo',
  'SAP',
  'Oracle',
  'Infor',
  'IFS',
  'Epicor',
  'Acumatica',
  'BlueYonder',
] as const

export const howSides = [
  {
    id: 'buyers',
    label: 'Buyers',
    heading: 'Procure',
    line: 'Find the product, and the people who can supply it, faster.',
    items: [
      'Global suppliers list',
      'Preferred supplier list',
      'Buyer reviews',
      'Buyer service ratings',
      'Planned procurement (tender, RFQ, bids)',
      'Ad-hoc procurement (tender, RFQ, bids)',
      'Trade payables management',
      'Integration with existing ERPs',
    ],
  },
  {
    id: 'product',
    label: 'Product',
    heading: 'The listing',
    line: 'The link between buyers and suppliers around one specific product.',
    items: [
      'Single specific product listing',
      'Standards mapping — HS, SIC, NAICS, UNSPSC',
      'Supplier-based product review',
      'Supplier-based service ratings',
      'Quantity supplied to date',
      'Returns to date',
    ],
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    heading: 'Supply',
    line: 'Find buyer leads for the products you actually sell.',
    items: [
      'Global buyers list',
      'Preferred buyers list',
      'Point of sale',
      'Product-based lead generation',
      'Single KYC set',
      'Supplier review',
      'Supplier rating',
      'Trade receivables management',
      'Integration with existing ERP / systems',
    ],
  },
] as const

export const skuExamples = [
  {
    id: 'gloves',
    label: 'Healthcare',
    ref: 'RFQ 441',
    name: 'Nitrile gloves G-200',
    extra: '400 boxes · needed this month',
    standards: 'UNSPSC 42132203',
    stats: [
      { label: 'Supplied', value: '22' },
      { label: 'Returns', value: '0' },
      { label: 'Rating', value: '4.8' },
    ],
    rows: [
      { name: 'Preferred packer', meta: 'Manufacturer', tag: 'Preferred', score: '4.8' },
      { name: 'Harare depot', meta: 'Distributor', tag: 'In stock', score: '4.5' },
      { name: 'Standby import', meta: 'Retail / import', tag: 'Global', score: '4.1' },
    ],
  },
  {
    id: 'cement',
    label: 'Construction',
    ref: 'RFQ 8841',
    name: 'Portland cement 42.5N',
    extra: '400 × 50kg · site Friday',
    standards: 'UNSPSC 30111601',
    stats: [
      { label: 'Supplied', value: '18' },
      { label: 'Returns', value: '1' },
      { label: 'Rating', value: '4.6' },
    ],
    rows: [
      { name: 'Norton mill', meta: 'Manufacturer', tag: 'Preferred', score: '4.6' },
      { name: 'Mutare depot', meta: 'Distributor', tag: 'In stock', score: '4.2' },
      { name: 'City merchant', meta: 'Retailer', tag: 'Same day', score: '3.9' },
    ],
  },
] as const

export const proof = [
  { name: 'African Sun', sector: 'Hospitality' },
  { name: 'ZB Financial', sector: 'Financial services' },
  { name: 'PRAZ', sector: 'Public procurement' },
] as const

export const alsoOnBook = [
  { name: 'Avenues Clinic', sector: 'Healthcare' },
  { name: 'Madokero', sector: 'Healthcare' },
  { name: 'Asimba', sector: 'Retail' },
  { name: 'ZPC', sector: 'Energy' },
] as const

export const plans = [
  {
    id: 'payg',
    name: 'Pay as you go',
    detail: 'Billed as you trade. Same lists and tenders, until you licence the floor.',
  },
  {
    id: 'licence',
    name: 'Licence',
    detail: 'Workflow, point of sale and warehouse on one organisation.',
  },
] as const

export const planFeatures = [
  { name: 'Tender, RFQ and bids', payg: true, licence: true },
  { name: 'Preferred and global lists', payg: true, licence: true },
  { name: 'Ratings and reviews', payg: true, licence: true },
  { name: 'ERP bridge', payg: true, licence: true },
  { name: 'Point of sale', payg: false, licence: true },
  { name: 'Warehouse', payg: false, licence: true },
] as const

export const faqs = [
  {
    q: 'What is Fastquote?',
    a: 'Infrastructure that matches buyers and suppliers on a specific product then hangs procurement, ratings, payables and receivables off that listing, with a bridge into the ERP you already run.',
  },
  {
    q: 'Who is it for?',
    a: 'Public and private buying organisations, and the manufacturers, distributors and retailers who supply them.',
  },
  {
    q: 'Does it replace our ERP?',
    a: 'No. Dynamics 365, Sage, Odoo, SAP, Oracle, Infor, IFS, Epicor, Acumatica and BlueYonder stay the books. Fastquote is the trade layer in front.',
  },
  {
    q: 'How do we pay?',
    a: 'Licence for workflow, POS and warehouse, or pay as you go.',
  },
] as const

export const trusted = [
  'African Sun',
  'ZB Financial',
  'Avenues Clinic',
  'Madokero',
  'Asimba',
  'ZPC',
  'PRAZ',
] as const
