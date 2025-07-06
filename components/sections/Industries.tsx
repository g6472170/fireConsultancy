/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'

const industries = [
  {
    name: 'Healthcare',
    description: 'Specialized fire safety solutions for hospitals, clinics, and healthcare facilities.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80',
    features: ['24/7 Operation Compliance', 'Patient Safety Protocols', 'Medical Equipment Protection']
  },
  {
    name: 'Education',
    description: 'Comprehensive protection for schools, universities, and educational institutions.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
    features: ['Campus-wide Safety Systems', 'Emergency Evacuation Plans', 'Staff Training Programs']
  },
  {
    name: 'Commercial',
    description: 'Fire safety solutions for office buildings, retail spaces, and business centers.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    features: ['Building Code Compliance', 'Fire Prevention Systems', 'Emergency Response Plans']
  },
  {
    name: 'Industrial',
    description: 'Specialized protection for manufacturing plants and industrial facilities.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80',
    features: ['Hazardous Material Safety', 'Equipment Protection', 'Worker Safety Protocols']
  }
]

export default function Industries() {
  return (
    <section id="industries" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tailored fire safety solutions for every sector, ensuring compliance and protection across diverse environments
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col bg-white rounded-2xl shadow-sm">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">
                  {industry.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {industry.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 text-primary-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 