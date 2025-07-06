export interface HeroStats {
  label: string
  value: string
}

export interface Service {
  title: string
  description: string
  icon?: string
  features: string[]
  isActive: boolean
}

export interface Project {
  title: string
  description: string
  industry: string
  images: string[]
  clientName: string
  completionDate: string
  challenges: string
  solutions: string
  results: string
}

export interface Testimonial {
  clientName: string
  clientCompany: string
  clientPosition: string
  testimonialText: string
  rating: number
  clientImage?: string
  companyLogo?: string
  isActive: boolean
}

export interface TeamMember {
  name: string
  position: string
  bio: string
  image?: string
  certifications: string[]
  email: string
  linkedIn?: string
}

export interface BlogPost {
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage?: string
  category: string
  publishedAt: string
  seo?: {
    title: string
    description: string
    keywords: string[]
  }
} 