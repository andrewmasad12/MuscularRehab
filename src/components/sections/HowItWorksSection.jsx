import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function HowItWorksSection({ config }) {
  return (
    <section id="process" className="section bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works" title="Assess. Restore. Reinforce." align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.howItWorks.map((item) => (
            <motion.div key={item.step} className="border border-stone-300 bg-white p-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <span className="text-sm font-semibold text-teal-700">{item.step}</span>
              <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-stone-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
