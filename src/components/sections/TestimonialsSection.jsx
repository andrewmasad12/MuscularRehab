import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function TestimonialsSection({ config }) {
  return (
    <section className="section bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Client notes" title="Trusted by active movers." align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.testimonials.map((testimonial) => (
            <motion.figure key={testimonial.name} className="bg-white p-6 shadow-sm ring-1 ring-stone-200" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <blockquote className="text-lg leading-8 text-stone-700">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-8 border-t border-stone-200 pt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
