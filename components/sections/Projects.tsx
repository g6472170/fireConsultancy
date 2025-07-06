/// <reference types="react" />
'use client'
import React from 'react'
import Image from 'next/image'
import { Project } from '@/types'

const projects: Project[] = [
  {
    title: 'Healthcare Facility Safety Upgrade',
    description: 'Complete fire safety system overhaul for a major hospital complex.',
    industry: 'Healthcare',
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'],
    clientName: 'Central City Hospital',
    completionDate: '2023-11',
    challenges: 'Implementing safety measures while maintaining 24/7 hospital operations.',
    solutions: 'Phased implementation approach with minimal disruption to critical services.',
    results: 'Enhanced fire safety system with 100% compliance and staff training completion.'
  },
  {
    title: 'Educational Campus Protection',
    description: 'Comprehensive fire safety implementation for a multi-building university campus.',
    industry: 'Education',
    images: ['https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'],
    clientName: 'State University',
    completionDate: '2023-09',
    challenges: 'Coordinating safety measures across multiple buildings with varying requirements.',
    solutions: 'Custom-tailored solutions for each facility type with unified emergency response system.',
    results: 'Achieved highest safety rating with integrated campus-wide emergency response protocol.'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we&apos;ve helped organizations enhance their fire safety and emergency preparedness
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={project.completionDate} className="text-gray-500">
                    Completed {project.completionDate}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {project.industry}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                </div>
                <div className="mt-8 border-t border-gray-900/5 pt-8">
                  <h4 className="text-sm font-semibold leading-6 text-gray-900">Results</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{project.results}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 