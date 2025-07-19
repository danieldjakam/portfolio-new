'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useApp } from '../lib/context';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home', id: 'home' },
    { name: t('nav.about'), href: '#about', id: 'about' },
    { name: t('nav.projects'), href: '#projects', id: 'projects' },
    { name: t('nav.skills'), href: '#skills', id: 'skills' },
    { name: t('nav.testimonials'), href: '#testimonials', id: 'testimonials' },
    { name: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 ">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="px-2 pb-[1px] pt-2 rounded-xl bg-primary/30 border border-primary/20">
              <img src="/image.png" alt="Logo" className="w-12 h-10" />
            </div>
            <span className="text-xl font-bold gradient-text">Daniel Djakam</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 gap-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-primary/10 border border-primary/20"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center space-x-4 gap-4">
            {/* Theme and Language Switchers */}
            <div className="flex items-center space-x-2 p-1 rounded-xl bg-card/50 border border-border/50 gap-2">
              <ThemeSwitcher />
              <div className="w-px h-6 bg-border/50" />
              <LanguageSwitcher />
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2 gap-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/danieldjakam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <Github className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/danieldjakam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:danidjakam@gmail.com"
                className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <Mail className="h-5 w-5 text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10 border border-primary/20 shadow-lg shadow-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Mobile Controls */}
              <div className="pt-6 space-y-4 border-t border-border/50">
                {/* Theme and Language */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Settings</span>
                  <div className="flex items-center space-x-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Connect</span>
                  <div className="flex items-center space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/danieldjakam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300"
                    >
                      <Github className="h-5 w-5 text-primary" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://twitter.com/danieldjakam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="mailto:danidjakam@gmail.com"
                      className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 