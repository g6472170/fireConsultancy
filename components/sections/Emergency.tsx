/// <reference types="react" />
'use client'
import React from 'react'
import Link from 'next/link'

export default function Emergency() {
  return (
    <section id="emergency" className="bg-primary-600">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            24/7 Emergency Response
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
            Our emergency response team is available 24/7 to handle urgent fire safety concerns and provide immediate consultation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              href="tel:+1234567890"
              className="rounded-md bg-white px-8 py-4 text-xl font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Call Emergency: (123) 456-7890
            </Link>
            <Link
              href="#contact"
              className="text-lg font-semibold leading-6 text-white"
            >
              Request Consultation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 text-center ring-1 ring-inset ring-white/10">
            <h3 className="text-lg font-semibold text-white">Rapid Response</h3>
            <p className="mt-4 text-sm text-primary-100">
              Our team typically responds within 30 minutes for emergency situations.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 text-center ring-1 ring-inset ring-white/10">
            <h3 className="text-lg font-semibold text-white">Expert Guidance</h3>
            <p className="mt-4 text-sm text-primary-100">
              Immediate access to certified fire safety professionals for critical situations.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-2xl bg-white/5 p-8 text-center ring-1 ring-inset ring-white/10">
            <h3 className="text-lg font-semibold text-white">Service Area</h3>
            <p className="mt-4 text-sm text-primary-100">
              Covering all major metropolitan areas with local response teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 