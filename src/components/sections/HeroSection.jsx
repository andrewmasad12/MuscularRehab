import React from 'react'
import MotionLines from './MotionLines'

export default function HeroSection({ config }) {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.16),transparent_26%),radial-gradient(circle_at_72%_10%,rgba(255,255,255,0.10),transparent_20%),linear-gradient(135deg,#050505_0%,#121212_55%,#030303_100%)]" />
      <div className="biomech-grid absolute inset-0" />
      <MotionLines />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl content-center gap-12 px-4 pb-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow">{config.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {config.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">{config.hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={config.bookingUrl} className="btn btn-primary justify-center">
              Book Session
            </a>
            <a href={config.consultationUrl} className="btn btn-secondary justify-center">
              Free Consultation
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {config.hero.proofPoints.map((point) => (
              <span key={point} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-stone-300">
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[390px] lg:min-h-[560px]" aria-hidden="true">
          <div className="absolute inset-x-4 bottom-0 top-8 rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/50 backdrop-blur-sm" />
          <div className="absolute inset-x-10 bottom-8 top-16 overflow-hidden rounded-[1.6rem] border border-white/10 bg-stone-900">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,transparent,rgba(2,6,23,0.75))]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-200/35" />
            <div className="absolute left-1/2 top-[22%] h-20 w-20 -translate-x-1/2 rounded-full border border-white/30" />
            <div className="absolute left-[35%] top-[42%] h-48 w-px rotate-[24deg] bg-white/30" />
            <div className="absolute right-[35%] top-[42%] h-48 w-px -rotate-[24deg] bg-white/30" />
            <div className="absolute left-[30%] top-[62%] h-44 w-px -rotate-[34deg] bg-teal-200/35" />
            <div className="absolute right-[30%] top-[62%] h-44 w-px rotate-[34deg] bg-teal-200/35" />
            <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-200">Movement profile</p>
              <div className="mt-4 grid gap-3">
                {['Hip control', 'Thoracic rotation', 'Shoulder reach'].map((label, index) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs text-stone-300">
                      <span>{label}</span>
                      <span>{82 - index * 7}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-teal-300" style={{ width: `${82 - index * 7}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
