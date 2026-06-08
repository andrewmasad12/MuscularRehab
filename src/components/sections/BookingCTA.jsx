import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from './sectionMotion'

export default function BookingCTA({ config }) {
  return (
    <section className="relative overflow-hidden bg-stone-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="biomech-grid absolute inset-0 opacity-50" />
      <motion.div className="relative mx-auto max-w-4xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <p className="eyebrow">{config.bookingPlatform} scheduling</p>
        <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Book a mobility session built around your movement.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          {config.bookingNote}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={config.bookingUrl} className="btn btn-primary justify-center">
            Book Session
          </a>
          <a href={config.consultationUrl} className="btn btn-secondary justify-center">
            Free Consultation
          </a>
        </div>
      </motion.div>
    </section>
  )
}
