import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function TransformationsSection({ config }) {
  return (
    <section id="results" className="section bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Movement education" title="Before and after mobility focus areas." body="These examples describe common session goals and movement changes, not guaranteed outcomes or medical treatment." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.transformations.map((item) => (
            <motion.article key={item.area} className="overflow-hidden rounded-lg border border-stone-200" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <div className="bg-stone-950 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-teal-200">{item.area}</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-stone-200">
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Before</p>
                  <p className="mt-4 leading-7 text-stone-700">{item.before}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-700">After</p>
                  <p className="mt-4 leading-7 text-stone-700">{item.after}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
