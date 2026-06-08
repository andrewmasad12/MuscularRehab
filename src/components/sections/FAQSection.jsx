import React from 'react'
import SectionHeader from '../SectionHeader'

export default function FAQSection({ config }) {
  return (
    <section id="faq" className="section bg-white text-stone-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Clear answers before you book." body="Sessions are designed to be transparent, respectful, and aligned with your goals." />
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {config.faq.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">
                {item.question}
                <span className="text-2xl font-light text-teal-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
