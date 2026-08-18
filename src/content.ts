export const nav = [
  { href: '#how', label: 'How it works' },
  { href: '#product', label: 'Product' },
  { href: '#stories', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
] as const

export const modules = [
  {
    name: 'The Friday order',
    detail:
      'A generator dies. You still need diesel this afternoon. Fastquote gives that scramble the same trail as a twelve-month plan.',
  },
  {
    name: 'The year you already know',
    detail:
      'A clinic already knows it needs gloves every month. Hold that plan here — not in a spreadsheet named FINAL-v7.',
  },
  {
    name: 'People you already trust',
    detail:
      'Keep a preferred book, then open the global one when the preferred mill is dry.',
  },
  {
    name: 'Ratings from the trade',
    detail:
      'Stars come from orders that actually moved — quantity supplied, returns, and whether they showed up on Friday.',
  },
  {
    name: 'The dock, on the same ticket',
    detail:
      'Receiving and dispatch sit on the quote, so the warehouse is not a separate rumour.',
  },
  {
    name: 'The books you already run',
    detail:
      'Payables, receivables, and a bridge into Dynamics, SAGE or Odoo. One KYC set, Android and iOS on the floor.',
  },
] as const

export const steps = [
  {
    title: 'Name the thing, not the category',
    copy: '“400 × 50kg of 42.5N cement, Friday” beats “construction materials.” The product is the meeting point.',
  },
  {
    title: 'See who actually has it',
    copy: 'Manufacturers, distributors and retailers on that SKU — with ratings from trades that already happened.',
  },
  {
    title: 'Close on one ticket',
    copy: 'Approvals, receiving and the invoice hang off the same quote. WhatsApp can go back to being WhatsApp.',
  },
] as const

export const quoteLines = [
  { label: 'Product', value: 'Portland cement 42.5N · 400 × 50kg' },
  { label: 'Needed', value: 'Friday, Kutsaga site, Harare South' },
  { label: 'Matches', value: 'Norton mill · Mutare depot · City Build retail' },
] as const

export const previewTabs = [
  {
    id: 'rfq',
    label: 'Live RFQ',
    chrome: 'fastquote.app/rfq/8841',
    title: 'Cement that has to be on site Friday',
    copy: 'Kutsaga Construction named the bag, the grade and the day. Three suppliers answered on that SKU — not on “building supplies.”',
    rows: [
      { name: 'Norton Mill', meta: 'Manufacturer · 18 trades', score: '4.6', tag: 'Preferred' },
      { name: 'Mutare Depot', meta: 'Distributor · 7 trades', score: '4.2', tag: 'In stock' },
      { name: 'City Build', meta: 'Retailer · 4 trades', score: '3.9', tag: 'Same day' },
    ],
  },
  {
    id: 'book',
    label: 'Preferred book',
    chrome: 'fastquote.app/buyers/avenues/gloves',
    title: 'Surgical gloves, without retendering every month',
    copy: 'A Harare clinic keeps two nitrile SKUs on a preferred list. When a lot is short, the global book opens — still on the same product code.',
    rows: [
      { name: 'MediLot G-200', meta: 'Nitrile N/S · UNSPSC 42132203', score: '4.8', tag: 'Preferred' },
      { name: 'Harare Sterile Co.', meta: 'Local packer · 22 deliveries', score: '4.5', tag: 'On plan' },
      { name: 'Bulk Import Desk', meta: 'Opens if preferred is dry', score: '4.1', tag: 'Standby' },
    ],
  },
  {
    id: 'leads',
    label: 'Supplier leads',
    chrome: 'fastquote.app/leads/maize-meal-50kg',
    title: 'A miller who stopped cold-calling',
    copy: 'Demand is attached to 50kg maize meal — three retailers this month, quantities visible, KYC already sitting in one set.',
    rows: [
      { name: 'Mbare Fresh Mart', meta: 'Retail · 80 bags / week', score: 'Lead', tag: 'New' },
      { name: 'Glen View Cash & Carry', meta: 'Distributor · 400 bags', score: 'Lead', tag: 'Repeat' },
      { name: 'Lodge kitchen, Nyanga', meta: 'Hospitality · 60 bags', score: 'Lead', tag: 'Seasonal' },
    ],
  },
] as const

export const stories = [
  {
    id: 'lodge',
    place: 'Hospitality · Harare',
    ref: 'RFQ 9102',
    product: 'Cooking oil 200L',
    extra: 'Linen for 40 rooms · plumber, east wing',
    copy: 'Three products, three quotes, one afternoon — instead of a manager working the group chat until midnight.',
    result: 'Closed Friday',
    stats: [
      { label: 'Quotes', value: '3' },
      { label: 'Turnaround', value: '1 day' },
    ],
  },
  {
    id: 'clinic',
    place: 'Healthcare · Avenues',
    ref: 'Plan 441',
    product: 'Nitrile gloves G-200',
    extra: 'Preferred lot · standby packer on the same code',
    copy: 'When a lot fails incoming inspection, the return sits on the ticket and the rated standby is already there.',
    result: 'On plan',
    stats: [
      { label: 'Deliveries', value: '22' },
      { label: 'Retenders', value: '0' },
    ],
  },
  {
    id: 'mill',
    place: 'Milling · Norton',
    ref: 'Leads',
    product: 'Maize meal 50kg',
    extra: 'Retail · cash & carry · lodge kitchen',
    copy: 'Leads arrive as quantity and buyer type — not “please call me.” Payment history with other mills sits on the same card.',
    result: 'Live demand',
    stats: [
      { label: 'Leads', value: '3' },
      { label: 'This week', value: '540' },
    ],
  },
] as const

export const faqs = [
  {
    q: 'Is this for buyers or for suppliers?',
    a: 'Both. Buyers find a product and the people who can actually supply it. Suppliers see demand attached to that product. Manufacturers, distributors and retailers all sit on the same SKU.',
  },
  {
    q: 'Do we have to throw out Dynamics, SAGE or Odoo?',
    a: 'No. Fastquote is the quote and the trail. The books you already run stay the books — we bridge in.',
  },
  {
    q: 'Can public sector teams use it?',
    a: 'Yes. Public and private sit on the same product line, with a proper RFQ trail instead of an inbox full of PDFs named scan_final2.',
  },
  {
    q: 'How do we pay?',
    a: 'Licence for workflow, POS and warehouse — or pay as you go if you are not ready to buy the whole floor. We will map that on the walkthrough.',
  },
] as const

export const trusted = [
  'African Sun',
  'ZB Financial',
  'Avenues Clinic',
  'Madokero',
  'asimba',
  'ZPC',
  'PRAZ',
] as const
