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
      role: 'Product Manager',
      company: 'TechCorp Inc.',
      content: "Daniel is an exceptional developer who delivered our e-commerce platform ahead of schedule. His attention to detail and clean code made the project a success. Highly recommended!",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'E-Commerce Platform'
    },
    {
      id: 2,
      name: 'Ebode Patient',
      role: 'CTO',
      company: 'StartupXYZ',
      content: "Working with Daniel was a game-changer for our startup. He built a robust task management system that scaled perfectly with our growth. His technical expertise is outstanding.",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Task Management App'
    },
    {
      id: 3,
      name: 'Toukea Nestor',
      role: 'Marketing Director',
      company: 'Creative Agency',
      content: "Daniel created a stunning portfolio website that perfectly captured our brand identity. The animations and user experience exceeded our expectations. Truly talented developer!",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Portfolio Website'
    },
    {
      id: 4,
      name: 'Boussar Engeline',
      role: 'Founder',
      company: 'WeatherTech',
      content: "The weather dashboard Daniel built for us is not only beautiful but also highly functional. Our users love the intuitive interface and real-time data updates.",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Weather Dashboard'
    },
    {
      id: 5,
      name: 'Njoh Anne',
      role: 'Content Manager',
      company: 'BlogHub',
      content: "Daniel's blog platform transformed our content management workflow. The markdown support and SEO optimization features are exactly what we needed. Excellent work!",
      rating: 5,
      avatar: '/api/placeholder/80/80',
      project: 'Blog Platform'
    },
    {
      id: 6,
      name: 'Alex Martinez',
      role: 'Njonou Lumiere',
      company: 'ChatFlow',
      content: "The real-time chat application Daniel developed is incredibly smooth and reliable. Our team communication has improved significantly since implementing this solution.",
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
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">{t('testimonials.stats.clients')}</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-primary">100+</div>
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
                <div className="text-3xl font-bold text-primary">3+</div>
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