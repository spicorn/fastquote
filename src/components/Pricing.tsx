import { Check } from 'lucide-react'
import { planFeatures, plans } from '../content'

const ICON = { size: 16, strokeWidth: 2, 'aria-hidden': true } as const

export function Pricing() {
  return (
    <section className="fq-band" id="pricing" aria-labelledby="pricing-title">
      <div className="fq-wrap fq-section">
        <p className="fq-kicker">Pricing</p>
        <h2 id="pricing-title">Trade first, or licence the floor.</h2>
        <p className="fq-section-lede">
          Same product, same lists. Pay as you go until the organisation is
          ready for POS and warehouse.
        </p>

        <table className="fq-compare">
          <caption className="visually-hidden">What each plan includes</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Feature</span>
              </th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col">
                  <span className="fq-compare__name">{plan.name}</span>
                  <span className="fq-compare__detail">{plan.detail}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planFeatures.map((feature) => (
              <tr key={feature.name}>
                <th scope="row">{feature.name}</th>
                <td>
                  {feature.payg ? <Check {...ICON} /> : <span aria-hidden="true">—</span>}
                  <span className="visually-hidden">{feature.payg ? 'Included' : 'Not included'}</span>
                </td>
                <td>
                  {feature.licence ? <Check {...ICON} /> : <span aria-hidden="true">—</span>}
                  <span className="visually-hidden">
                    {feature.licence ? 'Included' : 'Not included'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
