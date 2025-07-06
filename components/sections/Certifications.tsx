/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'

const certifications = [
  {
    name: 'NFPA Certified',
    description: 'National Fire Protection Association certified professionals',
    image: 'https://www.nfpa.org/-/media/Images/Footer/NFPALogo_Footer.ashx'
  },
  {
    name: 'ISO 45001',
    description: 'Occupational Health and Safety Management System',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ISO_45001_Logo.svg/440px-ISO_45001_Logo.svg.png'
  },
  {
    name: 'IFSM Member',
    description: 'Institute of Fire Safety Managers accredited',
    image: 'https://www.ifsm.org.uk/wp-content/uploads/2019/03/IFSM-Logo.png'
  },
  {
    name: 'Fire Risk Assessment',
    description: 'Certified Fire Risk Assessors',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80'
  }
]

const memberships = [
  {
    name: 'Fire Protection Association',
    logo: 'https://www.thefpa.co.uk/images/fpa-logo.png'
  },
  {
    name: 'International Fire Safety Standards Coalition',
    logo: 'https://ifss-coalition.org/wp-content/uploads/2020/03/IFSS-logo.jpg'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Certifications & Compliance
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We maintain the highest industry standards through professional certifications and memberships
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center rounded-2xl border border-gray-200 p-8 text-center"
            >
              <div className="relative h-16 w-16 mb-6">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Professional Memberships
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {memberships.map((membership) => (
              <div
                key={membership.name}
                className="flex items-center justify-center rounded-2xl border border-gray-200 p-8"
              >
                <div className="relative h-12 w-48">
                  <Image
                    src={membership.logo}
                    alt={membership.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 