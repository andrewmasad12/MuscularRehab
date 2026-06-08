import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewport } from './sectionMotion'

export default function FounderSection({ config }) {
  const { founder } = config

  return (
    <section className="section bg-stone-100 text-stone-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:items-center lg:px-8">
        <motion.div
          className="relative mx-auto w-full max-w-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-stone-300 bg-stone-950 shadow-2xl shadow-stone-300/70">
            <img
              src="/images/andrew-masad-headshot.jpg"
              alt="Andrew Masad, founder of Masad Motion"
              className="h-full w-full object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <div className="rounded-lg border border-white/10 bg-black/50 p-5 text-white backdrop-blur">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-200">Andrew Masad</p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Founder / Movement practitioner
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">{founder.eyebrow}</p>
          <h2 className="section-title mt-3">{founder.title}</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {founder.credentials.map((credential) => (
              <div key={credential} className="rounded-lg border border-stone-300 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold leading-6 text-stone-800">{credential}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-teal-500 bg-white px-5 py-4">
            <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Guiding question</p>
            <p className="mt-3 text-2xl font-semibold leading-snug text-stone-950">{founder.question}</p>
          </div>

          <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-stone-700">
            <p>{founder.body}</p>
            <p>{founder.goal}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
