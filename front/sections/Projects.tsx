'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Globe, Zap } from 'lucide-react';
import { useApp } from '../lib/context';

const Projects = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Kira",
      description: "A full-stack platform for creating badge automated.",
      image: "projects/kira.png",
      technologies: ["Next.js", "Django", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/danieldjakam/ecommerce",
      live: "https://ecommerce-demo.com",
      featured: true
    },
    {
      title: "School Management App for secondary schools",
      description: "A comprehensive school management system with features for student enrollment, attendance tracking, and grade management.",
      image: "projects/school.png",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      github: "https://github.com/danieldjakam/task-manager",
      live: "https://task-manager-demo.com",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with beautiful animations and smooth interactions.",
      image: "projects/portfolio.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/danieldjakam/portfolio",
      live: "https://danieldjakam.com",
      featured: false
    },
    {
      title: "School Management Platform for university schools",
      description: "A robust platform for managing university schools with features for course management, student profiles, and faculty administration.",
      image: "projects/school uni.png",
      technologies: ["Laravel", "Tailwind CSS", "Chart.js", "CSS Modules"],
      github: "https://github.com/danieldjakam/weather-app",
      live: "https://weather-demo.com",
      featured: false
    },
    {
      title: "A music streaming app - Pleyer",
      description: "A music streaming application with user authentication, playlist management, and real-time updates.",
      image: "projects/pleyer.png",
      technologies: ["Next.js", "Deezer API", "PostgreSQL", "Vercel"],
      github: "https://github.com/danieldjakam/blog-platform",
      live: "https://blog-demo.com",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, shopping cart, and payment integration.",
      image: "projects/ecom.png",
      technologies: ["Laravel", "Stripe", "Tailwind CSS", "JWT"],
      github: "https://github.com/danieldjakam/chat-app",
      live: "https://chat-demo.com",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" ref={ref} className="py-24 bg-gradient-to-b from-background/95 to-background relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="projects-heading">
            {t('projects.title').split(' ')[0]} <span className="gradient-text">{t('projects.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
            <Zap className="h-6 w-6 mr-2" />
            {t('projects.featured')}
          </h3>
          <div className="grid lg:grid-cols-2 gap-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-s transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                                 <div className="p-10">
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                                     <p className="text-foreground/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                                     <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                    >
                                           <Github className="h-4 w-4" />
                     <span className="text-sm font-medium">{t('projects.code')}</span>
                   </motion.a>
                   <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary-dark text-background rounded-lg transition-colors duration-200"
                   >
                     <ExternalLink className="h-4 w-4" />
                     <span className="text-sm font-medium">{t('projects.demo')}</span>
                   </motion.a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center">
            <Globe className="h-6 w-6 mr-2" />
            {t('projects.allProjects')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl glass border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                </div>
                
                  <div className="p-8">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                                     <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                                     <div className="flex flex-wrap gap-1 mb-8">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-foreground/60 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* <div className="flex space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                    >
                                           <Github className="h-3 w-3" />
                     <span className="text-xs font-medium">{t('projects.code')}</span>
                   </motion.a>
                   <motion.a
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     href={project.live}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center space-x-1 px-3 py-1.5 bg-primary hover:bg-primary-dark text-background rounded-lg transition-colors duration-200"
                   >
                     <ExternalLink className="h-3 w-3" />
                     <span className="h-3 w-3" />
                     <span className="text-xs font-medium">{t('projects.demo')}</span>
                   </motion.a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
                     className="text-center mt-20"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/danieldjakam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
                         <span>{t('projects.viewMore')}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 