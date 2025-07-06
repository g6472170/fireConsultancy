/// <reference types="react" />
'use client'
import React from 'react'
import { Service } from '@/types'

const services: Service[] = [
  {
    title: 'Fire Risk Assessments',
    description: 'Comprehensive evaluation of fire hazards and safety measures in your premises.',
    features: ['Detailed risk analysis', 'Safety recommendations', 'Compliance checks'],
    isActive: true
  },
  {
    title: 'Fire Safety Training',
    description: 'Expert-led training programs for staff and safety personnel.',
    features: ['Emergency procedures', 'Fire equipment usage', 'Evacuation drills'],
    isActive: true
  },
  {
    title: 'Emergency Evacuation Planning',
    description: 'Development of effective evacuation strategies and procedures.',
    features: ['Route planning', 'Assembly points', 'Emergency protocols'],
    isActive: true
  },
  {
    title: 'Fire Safety Compliance Audits',
    description: 'Thorough audits to ensure compliance with fire safety regulations.',
    features: ['Regulatory compliance', 'Documentation review', 'Improvement plans'],
    isActive: true
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Fire Safety Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive fire safety solutions tailored to protect your business and ensure compliance
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold leading-8 text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                    <svg className="h-6 w-5 flex-none text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 