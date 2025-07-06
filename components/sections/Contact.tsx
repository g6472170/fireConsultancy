/// <reference types="react" />
'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

const services = [
  'Fire Risk Assessment',
  'Fire Safety Training',
  'Emergency Planning',
  'Compliance Audit',
  'System Design',
  'Equipment Installation',
  'Other Services'
]

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Here you would typically send the form data to your backend
    console.log(data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you for your inquiry. We will contact you shortly.')
  }

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our fire safety experts to discuss your requirements and ensure your property is fully protected.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                Service Required
              </label>
              <div className="mt-2.5">
                <select
                  {...register('service', { required: 'Please select a service' })}
                  id="service"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
} 