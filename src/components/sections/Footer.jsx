import React from 'react'

export default function Footer({ config }) {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-lg font-semibold">{config.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-400">
            {config.tagline} {config.subheading} in the {config.location}. Wellness and performance services only; not a medical diagnosis or treatment plan.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-stone-300 sm:grid-cols-2">
          <div>
            <p className="text-white">{config.phone}</p>
            <a href={`mailto:${config.email}`} className="mt-2 block hover:text-teal-200">
              {config.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 sm:justify-end">
            {config.socials.map((social) => (
              <a key={social.label} href={social.url} className="hover:text-teal-200">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
