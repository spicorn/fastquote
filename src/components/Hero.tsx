import { ArrowUpRight } from 'lucide-react'
import { AppCanvas } from './AppCanvas'

const ICON = { size: 20, strokeWidth: 2, 'aria-hidden': true } as const

export function Hero() {
  return (
    <section className="fq-hero" aria-labelledby="hero-title">
      <div className="fq-wrap fq-hero__grid">
        <div className="fq-hero__copy">
          <h1 id="hero-title">
            <span className="fq-hero__claim">
              Match on <br className="fq-br" />
              the product.
            </span>
            <span className="fq-hero__turn">Not the category.</span>
          </h1>
          <p className="fq-lede">
            Fastquote is the layer between buying organisations and the
            manufacturers, distributors and retailers who fulfil them, wired
            into the ERP you already run.
          </p>
          <div className="fq-hero__actions">
            <a className="fq-btn fq-btn--gold" href="#contact">
              Request access
              <ArrowUpRight {...ICON} />
            </a>
            <a className="fq-btn fq-btn--ghost" href="#product">
              See the product
            </a>
          </div>
        </div>

        <AppCanvas />
      </div>
    </section>
  )
}
