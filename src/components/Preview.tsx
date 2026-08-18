import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState, type KeyboardEvent } from 'react'
import { previewTabs } from '../content'

export function Preview() {
  const [active, setActive] = useState<(typeof previewTabs)[number]['id']>('rfq')
  const reduce = useReducedMotion()
  const tab = previewTabs.find((item) => item.id === active) ?? previewTabs[0]
  const ids = previewTabs.map((item) => item.id)

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
    document.getElementById(`tab-${next}`)?.focus()
  }

  return (
    <section className="fq-section fq-wrap" id="product" aria-labelledby="product-title">
      <p className="fq-kicker">Product</p>
      <h2 id="product-title">See how it works on a real SKU.</h2>
      <p className="fq-section-lede">
        Not a catalogue dump. One listing, the people around it, and the next
        order — buyers, manufacturers, distributors and retailers on the same
        SKU.
      </p>

      <div className="fq-tabs" role="tablist" aria-label="Product views">
        {previewTabs.map((item) => (
          <button
            id={`tab-${item.id}`}
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            aria-controls={`panel-${item.id}`}
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
          key={tab.id}
          className="fq-preview"
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="fq-preview__chrome">{tab.chrome}</p>
          <h3>{tab.title}</h3>
          <p>{tab.copy}</p>
          <ul>
            {tab.rows.map((row) => (
              <li key={row.name}>
                <div>
                  <strong>{row.name}</strong>
                  <span>{row.meta}</span>
                </div>
                <em>{row.score}</em>
                <b>{row.tag}</b>
              </li>
            ))}
          </ul>
        </motion.article>
      </AnimatePresence>
    </section>
  )
}
