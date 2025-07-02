'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap, Sparkles } from 'lucide-react';
import { useApp } from '../lib/context';

const Hero = () => {
  const { t } = useApp();
  
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="w-full text-center relative z-10 px-4 sm:px-6 lg:px-8">
                  <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-primary font-mono text-lg"
          >
            <Sparkles className="h-5 w-5" />
            <span>{t('hero.greeting')}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="gradient-text">Daniel Djakam</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-medium"
          >
            {t('hero.title')}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed"
            role="doc-subtitle"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>{t('hero.cta1')}</span>
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-background font-semibold rounded-full transition-all duration-300 flex items-center space-x-2 group"
            >
              <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('hero.cta2')}</span>
            </motion.a>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              React JS
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              Adonisjs
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              React Native
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              Django
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
            >
              Laravel
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-primary/60"
        >
          <span className="text-sm font-medium">{t('hero.scrollDown')}</span>
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 