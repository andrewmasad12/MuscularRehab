import React from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const viewport = { once: true, margin: '-80px' }

function MotionLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
      <span className="motion-line left-[6%] top-[18%] w-28 rotate-12" />
      <span className="motion-line right-[10%] top-[42%] w-36 -rotate-6" />
      <span className="motion-line bottom-[18%] left-[34%] w-24 rotate-3" />
    </div>
  )
}

export function HeroSection({ config }) {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.18),transparent_26%),radial-gradient(circle_at_72%_10%,rgba(255,255,255,0.10),transparent_20%),linear-gradient(135deg,#050505_0%,#121212_55%,#030303_100%)]" />
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
            <div className="absolute left-1/2 top-1/2 h-72 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/35" />
            <div className="absolute left-1/2 top-[22%] h-20 w-20 -translate-x-1/2 rounded-full border border-white/30" />
            <div className="absolute left-[35%] top-[42%] h-48 w-px rotate-[24deg] bg-white/30" />
            <div className="absolute right-[35%] top-[42%] h-48 w-px -rotate-[24deg] bg-white/30" />
            <div className="absolute left-[30%] top-[62%] h-44 w-px -rotate-[34deg] bg-sky-200/35" />
            <div className="absolute right-[30%] top-[62%] h-44 w-px rotate-[34deg] bg-sky-200/35" />
            <div className="absolute bottom-8 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Movement profile</p>
              <div className="mt-4 grid gap-3">
                {['Hip control', 'Thoracic rotation', 'Shoulder reach'].map((label, index) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-xs text-stone-300">
                      <span>{label}</span>
                      <span>{82 - index * 7}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-sky-300" style={{ width: `${82 - index * 7}%` }} />
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

export function AboutSection({ config, SectionHeader, motion }) {
  return (
    <section id="about" className="section bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ duration: 0.7 }}>
            <SectionHeader eyebrow={config.about.eyebrow} title={config.about.title} body={config.about.body} />
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

export function ServicesSection({ config, SectionHeader, motion }) {
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
              <span className="text-xs text-sky-200">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-stone-400">{service.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HowItWorksSection({ config, SectionHeader, motion }) {
  return (
    <section id="process" className="section bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works" title="Assess. Restore. Reinforce." align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.howItWorks.map((item) => (
            <motion.div key={item.step} className="border border-stone-300 bg-white p-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <span className="text-sm font-semibold text-sky-700">{item.step}</span>
              <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 leading-7 text-stone-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BenefitsSection({ config, SectionHeader, motion }) {
  return (
    <section className="section bg-white text-stone-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <SectionHeader eyebrow="Benefits" title="Built for bodies that need to keep moving." body="The goal is not to chase extreme flexibility. The goal is to make movement feel more available, coordinated, and useful." />
        <div className="grid gap-3 sm:grid-cols-2">
          {config.benefits.map((benefit, index) => (
            <motion.div key={benefit} className="flex gap-4 border-b border-stone-200 py-5" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ delay: index * 0.03 }}>
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-500" />
              <p className="text-lg leading-7 text-stone-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function MovementPhilosophy({ config, motion }) {
  return (
    <section className="relative overflow-hidden bg-stone-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/50 to-transparent" />
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

export function TransformationsSection({ config, SectionHeader, motion }) {
  return (
    <section id="results" className="section bg-white text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Movement education" title="Before and after mobility focus areas." body="These examples describe common session goals and movement changes, not guaranteed outcomes or medical treatment." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {config.transformations.map((item) => (
            <motion.article key={item.area} className="overflow-hidden rounded-lg border border-stone-200" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <div className="bg-stone-950 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-sky-200">{item.area}</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-stone-200">
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Before</p>
                  <p className="mt-4 leading-7 text-stone-700">{item.before}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-700">After</p>
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

export function TestimonialsSection({ config, SectionHeader, motion }) {
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

export function FAQSection({ config, SectionHeader }) {
  return (
    <section id="faq" className="section bg-white text-stone-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Clear answers before you book." body="Sessions are designed to be transparent, respectful, and aligned with your goals." />
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {config.faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                {item.question}
                <span className="text-2xl font-light text-sky-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function BookingCTA({ config, motion }) {
  return (
    <section className="relative overflow-hidden bg-stone-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="biomech-grid absolute inset-0 opacity-50" />
      <motion.div className="relative mx-auto max-w-4xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <p className="eyebrow">Calendly placeholder ready</p>
        <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Book a mobility session built around your movement.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          Use the booking links now, then replace the placeholder URLs in <span className="font-mono text-sky-200">businessConfig.js</span> with your live Calendly links.
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

export function Footer({ config }) {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold">{config.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400">
            {config.tagline} serving {config.location}. Wellness and performance services only; not a medical diagnosis or treatment plan.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
          <div>
            <p className="text-white">{config.phone}</p>
            <a href={`mailto:${config.email}`} className="mt-2 block hover:text-sky-200">
              {config.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {config.socials.map((social) => (
              <a key={social.label} href={social.url} className="hover:text-sky-200">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
