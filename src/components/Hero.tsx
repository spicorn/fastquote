import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { trusted } from '../content'
import { FoldLottie } from './FoldLottie'

const ICON = { size: 20, strokeWidth: 2, 'aria-hidden': true } as const

const proofs = [
  { label: 'Name the SKU', value: 'Not a category hunt' },
  { label: 'See who has it', value: 'Mill, depot, or retail' },
  { label: 'Close the ticket', value: 'ERP stays where it is' },
] as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="fq-hero" aria-labelledby="hero-title">
      <div className="fq-wrap fq-hero__grid">
        <motion.div
          className="fq-hero__copy"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="fq-kicker">Zimbabwe · public and private trade</p>
          <h1 id="hero-title">Quotes that land before the order goes cold.</h1>
          <p className="fq-lede">
            Fastquote matches buyers and suppliers on one product — 400 bags of
            cement, a month of nitrile gloves, 50kg maize meal — so you are not
            still hunting WhatsApp at 4pm on a Thursday.
          </p>
          <div className="fq-hero__actions">
            <a className="fq-btn fq-btn--gold" href="#contact">
              Book a walkthrough
              <ArrowUpRight {...ICON} />
            </a>
            <a className="fq-btn fq-btn--ghost" href="#product">
              See a live quote
            </a>
          </div>
          <p className="fq-hero__note">
            Pay as you go · No rip-and-replace of your ERP
          </p>
          <ul className="fq-hero__proofs">
            {proofs.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          className="fq-frame"
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Sample Fastquote RFQ"
        >
          <div className="fq-frame__chrome">
            <span>fastquote.app/rfq/8841</span>
          </div>
          <div className="fq-frame__body">
            <div className="fq-frame__head">
              <div>
                <p className="fq-kicker">RFQ 8841</p>
                <p className="fq-frame__title">Portland cement 42.5N</p>
                <p>400 × 50kg · needed Friday · Kutsaga site</p>
              </div>
              <div className="fq-frame__status">
                {!reduce ? <FoldLottie /> : null}
              </div>
            </div>
            <ul className="fq-matches">
              <li>
                <strong>Norton Mill</strong>
                <span>Manufacturer · 18 trades</span>
                <em>4.6 · Preferred</em>
              </li>
              <li>
                <strong>Mutare Depot</strong>
                <span>Distributor · in stock</span>
                <em>4.2</em>
              </li>
              <li>
                <strong>City Build</strong>
                <span>Retailer · same day</span>
                <em>3.9</em>
              </li>
            </ul>
          </div>
        </motion.aside>
      </div>

      <div className="fq-hero__trust">
        <div className="fq-wrap">
          <p className="fq-trusted-label">Validated with operators at</p>
          <ul className="fq-trusted">
            {trusted.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
