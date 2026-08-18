import { ClipboardList, Plug, Star, Truck, Users, Warehouse } from 'lucide-react'
import { modules } from '../content'

const ICON = { size: 20, strokeWidth: 2, 'aria-hidden': true } as const
const icons = [Truck, ClipboardList, Users, Star, Warehouse, Plug]

export function Modules() {
  return (
    <section className="fq-band" id="modules" aria-labelledby="modules-title">
      <div className="fq-wrap fq-section">
        <p className="fq-kicker">Built for messy operations</p>
        <h2 id="modules-title">Everything that hangs off a quote.</h2>
        <p className="fq-section-lede">
          Planned or panicked, preferred or global, dock or desk — the product
          stays in the middle.
        </p>
        <ul className="fq-modules">
          {modules.map((item, index) => {
            const Icon = icons[index] ?? Star
            return (
              <li key={item.name}>
                <Icon {...ICON} />
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
