/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'
import { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    clientName: 'Sarah Johnson',
    clientCompany: 'Central City Hospital',
    clientPosition: 'Facility Manager',
    testimonialText: 'Their expertise in healthcare facility fire safety is unmatched. They understood our unique needs and delivered a comprehensive solution that ensures the safety of our patients and staff.',
    rating: 5,
    clientImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1632833239869-a37e22b06b59?auto=format&fit=crop&q=80',
    isActive: true
  },
  {
    clientName: 'Michael Chen',
    clientCompany: 'State University',
    clientPosition: 'Campus Safety Director',
    testimonialText: 'The team provided excellent guidance throughout our campus-wide safety upgrade. Their attention to detail and professional approach made the entire process smooth and effective.',
    rating: 5,
    clientImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80',
    isActive: true
  },
  {
    clientName: 'David Smith',
    clientCompany: 'Industrial Solutions Ltd',
    clientPosition: 'Operations Manager',
    testimonialText: 'Their industrial fire safety expertise helped us achieve full compliance while maintaining operational efficiency. The training programs they developed were particularly valuable.',
    rating: 5,
    clientImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    isActive: true
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from organizations we&apos;ve helped enhance their fire safety and emergency preparedness
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.clientName}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.clientImage || '/images/testimonials/placeholder.jpg'}
                      alt={testimonial.clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm leading-6 text-gray-600">
                      {testimonial.clientPosition} at {testimonial.clientCompany}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-primary-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="mt-8 text-base leading-6 text-gray-600">
                  {testimonial.testimonialText}
                </p>
              </div>
              {testimonial.companyLogo && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="relative h-12 w-32">
                    <Image
                      src={testimonial.companyLogo}
                      alt={`${testimonial.clientCompany} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 