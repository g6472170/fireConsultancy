import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fire Consultancy - Professional Fire Safety Services',
  description: 'Expert fire safety consultancy services including risk assessments, training, compliance audits, and emergency planning. Protecting lives through fire safety excellence.',
  keywords: 'fire safety, fire consultancy, risk assessment, fire training, emergency planning, fire compliance',
  metadataBase: new URL('https://fire-consultancy.vercel.app'),
  openGraph: {
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  )
} 