import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { quoteLines, steps } from '../content'

gsap.registerPlugin(ScrollTrigger)

export function HowItWorks() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const media = gsap.matchMedia()

      media.add('(min-width: 860px)', () => {
        if (reduce || !root.current) return

        const stepItems = gsap.utils.toArray<HTMLElement>('.fq-step', root.current)
        const rows = gsap.utils.toArray<HTMLElement>('.fq-quote-row', root.current)
        const bar = root.current.querySelector<HTMLElement>('.fq-how__bar-fill')
        const firstStep = stepItems[0]
        const secondStep = stepItems[1]
        const thirdStep = stepItems[2]
        const firstRow = rows[0]
        const secondRow = rows[1]
        const thirdRow = rows[2]
        if (
          !firstStep ||
          !secondStep ||
          !thirdStep ||
          !firstRow ||
          !secondRow ||
          !thirdRow ||
          !bar
        ) {
          return
        }

        gsap.set(stepItems, { opacity: 0.35 })
        gsap.set(firstStep, { opacity: 1 })
        gsap.set(rows, { opacity: 0, y: 14 })
        gsap.set(firstRow, { opacity: 1, y: 0 })
        gsap.set(bar, { scaleX: 0.33, transformOrigin: 'left center' })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top 76px',
            end: '+=1500',
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
          },
        })

        timeline
          .to(firstStep, { opacity: 0.35, duration: 0.4 })
          .to(secondStep, { opacity: 1, duration: 0.4 }, '<')
          .to(secondRow, { opacity: 1, y: 0, duration: 0.4 }, '<')
          .to(bar, { scaleX: 0.66, duration: 0.4 }, '<')
          .to(secondStep, { opacity: 0.35, duration: 0.4 })
          .to(thirdStep, { opacity: 1, duration: 0.4 }, '<')
          .to(thirdRow, { opacity: 1, y: 0, duration: 0.4 }, '<')
          .to(bar, { scaleX: 1, duration: 0.4 }, '<')
      })

      return () => media.revert()
    },
    { scope: root },
  )

  return (
    <section className="fq-section fq-wrap" id="how" ref={root} aria-labelledby="how-title">
      <p className="fq-kicker">How it works</p>
      <h2 id="how-title">A quote should not take a quarter.</h2>
      <p className="fq-section-lede">
        Name the product. See who actually has it. Close on one ticket.
      </p>

      <div className="fq-how">
        <ol className="fq-how__steps">
          {steps.map((step, index) => (
            <li className="fq-step" key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>

        <aside className="fq-how__stage" aria-label="Quote filling as you scroll">
          <p className="fq-how__chrome">fastquote.app/rfq/8841</p>
          <div className="fq-how__bar" aria-hidden="true">
            <span className="fq-how__bar-fill" />
          </div>
          <ul>
            {quoteLines.map((line) => (
              <li className="fq-quote-row" key={line.label}>
                <span>{line.label}</span>
                <strong>{line.value}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}
