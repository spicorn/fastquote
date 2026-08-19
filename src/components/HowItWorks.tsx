import { Building2, Factory, Network, Store } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState, type CSSProperties, type KeyboardEvent } from 'react'
import { asset } from '../asset'
import { erps, howSides } from '../content'

const ICON = { size: 20, strokeWidth: 2, 'aria-hidden': true } as const
const roles = [
  { Icon: Factory, label: 'Manufacturers' },
  { Icon: Network, label: 'Distributors' },
  { Icon: Store, label: 'Retailers' },
] as const
const innerErps = erps.slice(1, 5)
const outerErps = [erps[0], ...erps.slice(5)]

function OrbitRing({
  names,
  ring,
}: {
  names: readonly string[]
  ring: 'in' | 'out'
}) {
  return (
    <ul className={`fq-orbit__spin fq-orbit__spin--${ring}`} aria-hidden="true">
      {names.map((name, index) => (
        <li
          key={name}
          style={{ '--deg': `${(360 / names.length) * index}deg` } as CSSProperties}
        >
          <span className="fq-orbit__label">{name}</span>
        </li>
      ))}
    </ul>
  )
}

export function HowItWorks() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<(typeof howSides)[number]['id']>('buyers')
  const panel = howSides.find((item) => item.id === active) ?? howSides[0]
  const ids = howSides.map((item) => item.id)

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, id: (typeof ids)[number]) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const index = ids.indexOf(id)
    const next =
      event.key === 'ArrowRight'
        ? ids[(index + 1) % ids.length]
        : ids[(index - 1 + ids.length) % ids.length]
    if (!next) return
    setActive(next)
    document.getElementById(`how-tab-${next}`)?.focus()
  }

  return (
    <section className="fq-section fq-wrap" id="product" aria-labelledby="product-title">
      <p className="fq-kicker">Product</p>
      <h2 id="product-title">Buyers and suppliers meet on one product.</h2>
      <p className="fq-section-lede">
        Procure on the left. Supply on the right. Fastquote sits in the middle
        and bridges into the ERP you already run.
      </p>

      <div className="fq-flow">
        <article className="fq-flow__side fq-flow__side--buy">
          <p className="fq-kicker">
            <Building2 {...ICON} />
            Buyers
          </p>
          <h3>Procure</h3>
          <p>Find the product, and who can supply it, faster.</p>
        </article>

        <article className="fq-flow__hub">
          <div
            className={reduce ? 'fq-orbit is-static' : 'fq-orbit'}
            aria-label={`ERP systems Fastquote integrates with: ${erps.join(', ')}`}
          >
            <span className="fq-orbit__path fq-orbit__path--out" aria-hidden="true" />
            <span className="fq-orbit__path fq-orbit__path--in" aria-hidden="true" />
            <img
              className="fq-mark fq-mark--hub"
              src={asset('brand/favicon.png')}
              alt=""
              width={56}
              height={56}
            />
            <OrbitRing names={outerErps} ring="out" />
            <OrbitRing names={innerErps} ring="in" />
          </div>
          <p>Integration hub</p>
        </article>

        <article className="fq-flow__side fq-flow__side--sell">
          <p className="fq-kicker">Suppliers</p>
          <h3>Supply</h3>
          <ul className="fq-flow__roles">
            {roles.map((role) => (
              <li key={role.label}>
                <role.Icon {...ICON} />
                {role.label}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="fq-tabs" role="tablist" aria-label="How Fastquote works">
        {howSides.map((item) => (
          <button
            id={`how-tab-${item.id}`}
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            aria-controls={`how-panel-${item.id}`}
            tabIndex={item.id === active ? 0 : -1}
            className={item.id === active ? 'is-on' : undefined}
            onClick={() => setActive(item.id)}
            onKeyDown={(event) => onTabKey(event, item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={panel.id}
          className={`fq-how-panel fq-how-panel--${panel.id}`}
          id={`how-panel-${panel.id}`}
          role="tabpanel"
          aria-labelledby={`how-tab-${panel.id}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="fq-kicker">{panel.heading}</p>
          <h3>{panel.label}</h3>
          <p className="fq-how-panel__line">{panel.line}</p>
          <ul>
            {panel.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.article>
      </AnimatePresence>
    </section>
  )
}
