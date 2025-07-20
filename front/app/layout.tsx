import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '../lib/context'
import ServiceWorkerRegistration from '../components/ServiceWorkerRegistration'
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Daniel Djakam - Full Stack Developer',
    template: '%s | Daniel Djakam'
  },
  description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies. Specialized in React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Portfolio',
    'Web Applications',
    'UI/UX Design',
    'Software Engineer',
    'Freelance Developer'
  ],
  authors: [{ name: 'Daniel Djakam' }],
  creator: 'Daniel Djakam',
  publisher: 'Daniel Djakam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://danieldjakam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danieldjakam.com',
    title: 'Daniel Djakam - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.',
    siteName: 'Daniel Djakam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Djakam - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Djakam - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.',
    images: ['/og-image.png'],
    creator: '@danieldjakam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Daniel Djakam",
              "jobTitle": "Full Stack Developer",
              "description": "Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.",
              "url": "https://danieldjakam.com",
              "image": "https://danieldjakam.com/og-image.png",
              "sameAs": [
                "https://github.com/danieldjakam",
                "https://linkedin.com/in/danieldjakam",
                "https://twitter.com/danieldjakam"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "JavaScript",
                "Web Development",
                "Full Stack Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressCountry": "Your Country"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <AppProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </AppProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
