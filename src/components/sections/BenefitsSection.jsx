import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function BenefitsSection({ config }) {
  return (
    <section className="section bg-white text-stone-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <SectionHeader eyebrow="Benefits" title="Built for bodies that need to keep moving." body="The goal is not to chase extreme flexibility. The goal is to make movement feel more available, coordinated, and useful." />
        <div className="grid gap-3 sm:grid-cols-2">
          {config.benefits.map((benefit, index) => (
            <motion.div key={benefit} className="flex gap-4 border-b border-stone-200 py-5" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: index * 0.03 }}>
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-500" />
              <p className="text-lg leading-7 text-stone-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
