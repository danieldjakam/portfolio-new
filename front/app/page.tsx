import { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import PWAInstallPrompt from '../components/PWAInstallPrompt';
import PWAStatus from '../components/PWAStatus';

export const metadata: Metadata = {
  title: 'Daniel Djakam - Full Stack Developer',
  description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies. Specialized in React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer',
    'Portfolio',
    'Web Applications'
  ],
  openGraph: {
    title: 'Daniel Djakam - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.',
    url: 'https://danieldjakam.com',
    siteName: 'Daniel Djakam Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daniel Djakam - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Djakam - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://danieldjakam.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <PWAInstallPrompt />
      <PWAStatus />
    </main>
  );
}
