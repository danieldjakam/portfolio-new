'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useApp } from '../lib/context';

const Footer = () => {
  const { t } = useApp();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/danieldjakam",
      label: "GitHub"
    },
    // {
    //   icon: Linkedin,
    //   href: "https://linkedin.com/in/danieldjakam",
    //   label: "LinkedIn"
    // },
    {
      icon: Twitter,
      href: "https://twitter.com/danieldjakam",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:daniel@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-background/95 border-t border-border/50 relative py-16">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-3 gap-16 items-center">
          {/* Logo and Description */}
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold gradient-text">Daniel Djakam</span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
            <h3 className="text-lg font-semibold text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
            <h3 className="text-lg font-semibold text-primary">{t('footer.connect')}</h3>
                         <div className="flex space-x-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"
        />

        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-2 text-foreground/60"
          >
            <span>© 2024 Daniel Djakam. {t('footer.madeWith')}</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>{t('footer.andCoffee')}</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-4 left-4 w-16 h-16 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 right-4 w-12 h-12 border border-primary/15 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer; 