'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Calendar, Mail, Github, Linkedin } from 'lucide-react';
import { useApp } from '../lib/context';

const About = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Docker', level: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="about-heading">
            {t('about.title').split(' ')[0]} <span className="gradient-text">{t('about.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="space-y-10">
              <h3 className="text-2xl font-semibold text-primary">{t('about.whoIAm')}</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('about.description2')}
              </p>
            </motion.div>

            {/* Personal Details */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h4 className="text-xl font-semibold text-primary">{t('about.personalDetails')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-foreground/80">
                  <User className="h-5 w-5 text-primary" />
                  <span>Daniel Djakam</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Based in Your City, Country</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground/80">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>daniel@example.com</span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/danieldjakam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/danieldjakam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('about.skills')}</h3>
            <div className="space-y-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className="h-2 bg-gradient-to-r from-primary to-accent rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass p-10 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-primary mb-3">{t('about.whatIDo')}</h4>
              <ul className="space-y-2 text-foreground/80">
                {['about.services.0', 'about.services.1', 'about.services.2', 'about.services.3', 'about.services.4'].map((key, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 