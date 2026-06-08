import React from 'react'
import { businessConfig as config } from './businessConfig'
import Navbar from './components/Navbar'
import {
  AboutSection,
  BenefitsSection,
  BookingFlowSection,
  BookingCTA,
  FAQSection,
  Footer,
  FounderSection,
  HeroSection,
  HowItWorksSection,
  MovementPhilosophy,
  ServicesSection,
  TestimonialsSection,
  TransformationsSection,
} from './components/sections'

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
    <div className="min-h-screen overflow-hidden bg-stone-950 text-white selection:bg-teal-300 selection:text-stone-950">
      <Seo />
      <Navbar config={config} />
      <main>
        <HeroSection config={config} />
        <AboutSection config={config} />
        <FounderSection config={config} />
        <ServicesSection config={config} />
        <HowItWorksSection config={config} />
        <BenefitsSection config={config} />
        <MovementPhilosophy config={config} />
        <TransformationsSection config={config} />
        <TestimonialsSection config={config} />
        <FAQSection config={config} />
        <BookingFlowSection config={config} />
        <BookingCTA config={config} />
      </main>
      <Footer config={config} />
    </div>
  )
}
