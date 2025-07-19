'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { useApp } from '../lib/context';

const Contact = () => {
  const { t } = useApp();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.submit();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "danidjakam@gmail.com",
      href: "mailto:danidjakam@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+237 658 501 987",
      href: "tel:+237658501980"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Douala, Cameroon",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/danieldjakam",
      color: "hover:text-primary"
    },
    {
      icon: Mail,
      name: "LinkedIn",
      href: "mailto:danidjakam@gmail.com",
      color: "hover:text-primary"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/danieldjakam",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-background to-background/95 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" id="contact-heading">
            {t('contact.title').split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{t('contact.title').split(' ').slice(-1)[0]}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('contact.sendMessage')}</h3>
                         <form id='contact-form' onSubmit={handleSubmit} action="https://formspree.io/f/mwpqpjzd" method="post" className="space-y-10">
                             <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-foreground/50"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-foreground/50"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </motion.div>
              </div>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-foreground/50"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-foreground/50 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </motion.div>

            <input type="hidden" name="_captcha" value="false"/>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
              >
                                 <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                 <span>{t('contact.form.send')}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-10"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('contact.contactInfo')}</h3>
            
            {/* Contact Details */}
                         <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-primary/5 transition-colors duration-200 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-primary">{t('contact.followMe')}</h4>
              <div className="flex space-x-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="glass p-6 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                {t('contact.letsWork')}
              </h4>
              <p className="text-foreground/80 leading-relaxed">
                {t('contact.letsWorkDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 