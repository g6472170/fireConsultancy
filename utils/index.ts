import { format } from 'date-fns'

export const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}

export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

export const generateImageUrl = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${baseUrl}${path}`
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const formatPhoneNumber = (phoneNumber: string) => {
  const cleaned = phoneNumber.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return phoneNumber
} 