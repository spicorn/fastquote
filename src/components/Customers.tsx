import { alsoOnBook, erps, proof } from '../content'

export function Customers() {
  return (
    <section className="fq-section fq-wrap" id="customers" aria-labelledby="customers-title">
      <p className="fq-kicker">Customers</p>
      <h2 id="customers-title">Already on the floor.</h2>
      <p className="fq-section-lede">
        A hotel group, a bank, and the public procurement authority. The rest of
        the book sits behind them.
      </p>

      <ul className="fq-proof" aria-label="Lead operators">
        {proof.map((org) => (
          <li key={org.name}>
            <p className="fq-kicker">{org.sector}</p>
            <p className="fq-proof__name">{org.name}</p>
          </li>
        ))}
      </ul>

      <div className="fq-also">
        <p className="fq-kicker">Also on the book</p>
        <ul aria-label="Other validated organisations">
          {alsoOnBook.map((org) => (
            <li key={org.name}>
              <strong>{org.name}</strong>
              <span>{org.sector}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="fq-integrations">
        <p className="fq-kicker">Sits in front of the ERP you already run</p>
        <ul className="fq-erpline" aria-label="ERP integrations">
          {erps.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
