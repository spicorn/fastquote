import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'

const ICON = { size: 20, strokeWidth: 2, 'aria-hidden': true } as const

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="fq-contact" id="contact" aria-labelledby="contact-title">
      <div className="fq-wrap fq-contact__grid">
        <div>
          <p className="fq-kicker">Access</p>
          <h2 id="contact-title">Request access.</h2>
          <p>
            Tell us whether you buy or you supply. We will map Fastquote onto a
            product and the ERP you already run.
          </p>
          <ul className="fq-contact__direct">
            <li>
              <Mail {...ICON} />
              <a href="mailto:reynoldzembe@gmail.com">reynoldzembe@gmail.com</a>
            </li>
            <li>
              <Phone {...ICON} />
              <a href="tel:+263772413533">+263 772 413 533</a>
            </li>
          </ul>
        </div>

        {sent ? (
          <p className="fq-contact__done" role="status">
            We&apos;ll be in touch.
          </p>
        ) : (
          <form className="fq-form fq-form-card" onSubmit={onSubmit}>
            <div className="fq-form__row">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                Work email
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <div className="fq-form__row">
              <label>
                Organisation
                <input name="org" type="text" autoComplete="organization" required />
              </label>
              <label>
                I procure / I supply
                <select name="role" required defaultValue="I procure">
                  <option>I procure</option>
                  <option>I supply</option>
                  <option>Both</option>
                </select>
              </label>
            </div>
            <label>
              Which ERP do you run?
              <textarea
                name="message"
                rows={3}
                placeholder="e.g. Dynamics 365, Sage, Odoo, SAP — or none yet"
                required
              />
            </label>
            <button className="fq-btn fq-btn--gold" type="submit">
              Request access
              <ArrowUpRight {...ICON} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
