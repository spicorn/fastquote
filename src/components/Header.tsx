import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { asset } from '../asset'
import { nav } from '../content'

const ICON = { size: 20, strokeWidth: 2 } as const

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fq-header">
      <div className="fq-header__bar fq-wrap">
        <a className="fq-logo" href="#top">
          <img
            src={asset('brand/fastquote-logo.png')}
            alt="Fastquote"
            width={180}
            height={31}
          />
        </a>
        <nav className="fq-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="fq-btn fq-btn--gold fq-header__cta" href="#contact">
          Book a walkthrough
        </a>
        <button
          type="button"
          className="fq-menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X {...ICON} aria-hidden="true" />
          ) : (
            <Menu {...ICON} aria-hidden="true" />
          )}
          <span className="visually-hidden">
            {open ? 'Close menu' : 'Open menu'}
          </span>
        </button>
      </div>
      {open ? (
        <div className="fq-drawer fq-wrap" id="mobile-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="fq-btn fq-btn--gold"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Book a walkthrough
          </a>
        </div>
      ) : null}
    </header>
  )
}
