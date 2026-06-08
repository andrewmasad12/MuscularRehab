import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from './sectionMotion'

export default function MovementPhilosophy({ config }) {
  return (
    <section className="relative overflow-hidden bg-stone-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />
      <motion.div className="mx-auto max-w-5xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <p className="eyebrow">Movement philosophy</p>
        <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">{config.philosophy.title}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-300">{config.philosophy.body}</p>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {config.philosophy.principles.map((principle) => (
            <div key={principle} className="border border-white/10 bg-white/[0.04] px-5 py-4 text-sm uppercase tracking-[0.15em] text-stone-200">
              {principle}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
