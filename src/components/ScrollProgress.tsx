import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!bar.current) return

    gsap.fromTo(
      bar.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.35,
        },
      },
    )
  }, [])

  return (
    <div className="fq-progress" aria-hidden="true">
      <div ref={bar} />
    </div>
  )
}
