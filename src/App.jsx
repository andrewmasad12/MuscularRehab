import React from 'react'
import { motion } from 'framer-motion'
import { businessConfig as config } from './businessConfig'
import Navbar from './components/Navbar'
import SectionHeader from './components/SectionHeader'
import {
  AboutSection,
  BenefitsSection,
  BookingCTA,
  FAQSection,
  Footer,
  HeroSection,
  HowItWorksSection,
  MovementPhilosophy,
  ServicesSection,
  TestimonialsSection,
  TransformationsSection,
} from './components/Sections'

function Seo() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.seo.description,
    areaServed: config.location,
    telephone: config.phone,
    email: config.email,
    url: window.location.origin,
    sameAs: config.socials.map((social) => social.url),
    serviceType: config.services.map((service) => service.title),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-stone-950 text-white selection:bg-sky-300 selection:text-stone-950">
      <Seo />
      <Navbar config={config} />
      <main>
        <HeroSection config={config} />
        <AboutSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <ServicesSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <HowItWorksSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <BenefitsSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <MovementPhilosophy config={config} motion={motion} />
        <TransformationsSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <TestimonialsSection config={config} SectionHeader={SectionHeader} motion={motion} />
        <FAQSection config={config} SectionHeader={SectionHeader} />
        <BookingCTA config={config} motion={motion} />
      </main>
      <Footer config={config} />
    </div>
  )
}
