'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useApp } from '../lib/context';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useApp();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-200 group"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-5 w-5 group-hover:-rotate-12 transition-transform duration-300" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Invisible placeholder to maintain button size */}
      <div className="w-5 h-5" />
    </motion.button>
  );
};

export default ThemeSwitcher; 