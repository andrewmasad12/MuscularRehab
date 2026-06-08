import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function AboutSection({ config }) {
  return (
    <section id="about" className="section bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ duration: 0.7 }}>
            <SectionHeader eyebrow={config.about.eyebrow} title={config.about.title} body={config.about.body} />
            <p className="mt-6 border-l-2 border-teal-500 bg-stone-50 py-4 pl-5 text-base leading-8 text-stone-700">
              {config.about.brandExplanation}
            </p>
          </motion.div>
          <div className="grid grid-cols-3 overflow-hidden rounded-lg border border-stone-200">
            {config.about.stats.map((stat) => (
              <div key={stat.label} className="border-r border-stone-200 p-4 last:border-r-0 sm:p-6">
                <p className="text-2xl font-semibold text-stone-950 sm:text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
