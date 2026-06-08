import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function ServicesSection({ config }) {
  return (
    <section id="services" className="section relative bg-stone-950">
      <div className="biomech-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Premium recovery work, explained simply." body="Choose a focused session or combine services based on your assessment, goals, and training rhythm." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {config.services.map((service, index) => (
            <motion.article
              key={service.title}
              className="card group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <span className="text-xs text-teal-200">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-stone-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
