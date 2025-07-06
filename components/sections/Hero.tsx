/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HeroStats } from '@/types'

const stats: HeroStats[] = [
  { label: 'Years of Experience', value: '20+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Certified Experts', value: '50+' },
  { label: 'Safety Certifications', value: '100+' },
]

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <Image
        src="https://images.unsplash.com/photo-1573599852326-2d4da0bbe264?auto=format&fit=crop&q=80"
        alt="Fire safety background"
        fill
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        priority
      />
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#contact" className="inline-flex space-x-6">
              <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20">
                24/7 Emergency Service
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Protecting Lives Through Fire Safety Excellence
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Expert fire safety consultancy services delivering comprehensive solutions for businesses and organizations. We ensure your property and people are protected with industry-leading fire safety measures.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-sm leading-6 text-gray-300">{stat.label}</dt>
                <dd className="text-2xl font-bold leading-7 text-white">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 