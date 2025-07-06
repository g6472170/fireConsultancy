/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'

const features = [
  {
    name: 'Expert Team',
    description: 'Our certified professionals bring decades of combined experience in fire safety and emergency management.'
  },
  {
    name: 'Industry Leading Standards',
    description: 'We adhere to the highest safety standards and stay current with the latest fire safety regulations and technologies.'
  },
  {
    name: 'Comprehensive Solutions',
    description: 'From risk assessment to implementation, we provide end-to-end fire safety solutions for all types of properties.'
  },
  {
    name: 'Proven Track Record',
    description: 'With thousands of successful projects, we have established ourselves as a trusted name in fire safety consultancy.'
  }
]

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Our Fire Safety Excellence
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With over two decades of experience, we&apos;ve been at the forefront of fire safety consultancy, 
                protecting businesses and saving lives through expert guidance and innovative solutions.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {feature.name}
                    </dt>
                    <dd className="inline ml-2">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/about-team.jpg"
              alt="Our fire safety team"
              width={800}
              height={600}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary-600 p-8 text-white rounded-lg shadow-lg">
              <p className="text-3xl font-bold">20+</p>
              <p className="mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 