'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, User, Building } from 'lucide-react';
import { useApp } from '../lib/context';

const Testimonials = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: 'Michel Yossa',
      role: 'Co-developer',
      company: 'JoyOfMission.',
      content: "Working alongside Daniel Djakam on the development of our Bible app has been an incredible experience. Their dedication, creativity, and technical skills played a key role in turning our vision into a reality. Whether it was designing intuitive user interfaces or solving complex backend challenges, they consistently delivered with excellence.",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'E-Commerce Platform'
    },
    {
      id: 2,
      name: '',
      role: 'PDG',
      company: 'KevasFlex',
      content: "Thanks to our QR code discount app, I've been able to attract more customers and retain existing ones. Each QR code offers a unique and traceable promotion, which simplifies offer management and prevents abuse. Many thanks to Daniel Djakam for this innovative solution, perfectly suited to my business.",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Task Management App'
    },
    {
      id: 6,
      name: 'Njonou Lumiere',
      role: 'ICT Teacher',
      company: 'GSB BANGUE',
      content: "As an educator and school administrator, I can confidently say that this school management app has transformed the way we operate. From attendance tracking and grade management to parent-teacher communication and student progress reports — everything is now streamlined, efficient, and accessible in one place.",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Chat Application'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="testimonials-heading">
            {t('testimonials.title').split(' ')[0]} <span className="gradient-text">{t('testimonials.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-foreground/80 leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Badge */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Building className="h-3 w-3" />
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.clients')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.projects')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">5.0</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.rating')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.experience')}</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 