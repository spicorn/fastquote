import { faqs } from '../content'

export function Faq() {
  return (
    <section className="fq-section fq-wrap" id="faq" aria-labelledby="faq-title">
      <p className="fq-kicker">FAQ</p>
      <h2 id="faq-title">Questions, before a call.</h2>
      <div className="fq-faq">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
