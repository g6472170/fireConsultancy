import React from 'react'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Industries from '@/components/sections/Industries'
import Certifications from '@/components/sections/Certifications'
import Testimonials from '@/components/sections/Testimonials'
import Emergency from '@/components/sections/Emergency'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Projects />
      <Industries />
      <Certifications />
      <Testimonials />
      <Emergency />
      <Contact />
    </>
  )
} 