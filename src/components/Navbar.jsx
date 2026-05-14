import React from 'react'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ config }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${config.name} home`}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-sky-300/40 bg-white text-sm font-black text-stone-950">
            KX
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-[0.22em] text-white">{config.name}</span>
            <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.18em] text-stone-400">
              Mobility Studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-stone-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a href={config.bookingUrl} className="btn btn-primary text-sm">
            Book Session
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative h-4 w-5">
            <span className={`hamburger-line top-0 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`hamburger-line top-2 ${open ? 'opacity-0' : ''}`} />
            <span className={`hamburger-line top-4 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-stone-950 px-4 py-5 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-lg text-stone-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={config.bookingUrl} className="btn btn-primary mt-2 justify-center" onClick={() => setOpen(false)}>
              Book Session
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
