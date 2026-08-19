import { useState, type KeyboardEvent } from 'react'
import { asset } from '../asset'
import { skuExamples } from '../content'

export function AppCanvas() {
  const [active, setActive] = useState<(typeof skuExamples)[number]['id']>('gloves')
  const sku = skuExamples.find((item) => item.id === active) ?? skuExamples[0]
  const ids = skuExamples.map((item) => item.id)

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
    document.getElementById(`app-tab-${next}`)?.focus()
  }

  return (
    <div className="fq-app" aria-label="Fastquote product">
      <div className="fq-app__bar">
        <p>{sku.ref}</p>
        <div className="fq-app__live">
          <img
            className="fq-mark"
            src={asset('brand/favicon.png')}
            alt=""
            width={22}
            height={22}
          />
          <span>Live</span>
        </div>
      </div>

      <div className="fq-app__seg" role="tablist" aria-label="Example product">
        {skuExamples.map((item) => (
          <button
            id={`app-tab-${item.id}`}
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            aria-controls="app-panel"
            tabIndex={item.id === active ? 0 : -1}
            className={item.id === active ? 'is-on' : undefined}
            onClick={() => setActive(item.id)}
            onKeyDown={(event) => onTabKey(event, item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="fq-app__body" id="app-panel" role="tabpanel" aria-labelledby={`app-tab-${sku.id}`}>
        <p className="fq-app__std">{sku.standards}</p>
        <h3>{sku.name}</h3>
        <p className="fq-app__extra">{sku.extra}</p>

        <dl className="fq-app__stats">
          {sku.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="fq-app__rows">
          {sku.rows.map((row) => (
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
      </div>
    </div>
  )
}
