import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, Twitter, Instagram, Youtube } from 'lucide-react';

const Connect = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get answers to your questions',
      contact: 'admissions@uetm.edu',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with an admissions counselor',
      contact: '(051) 253-3400',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with current students',
      contact: 'Available Mon-Fri, 9AM-5PM ET',
      action: 'Start Chat'
    }
  ];

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Connect with Us
          </h2>
          <p className="font-lato text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Have questions about the application process? Our admissions team and current students 
            are here to help you every step of the way.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
                zIndex: 10,
              }}
              className="text-center p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 transform-gpu relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
                  }}
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-300"
                >
                  <method.icon />
                </motion.div>
              </div>

              {/* Title */}
              <motion.h3
                className="font-inter font-bold text-xl text-slate-900 dark:text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {method.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="font-lato text-slate-600 dark:text-slate-300 mb-4"
                whileHover={{ scale: 1.05, letterSpacing: '1px' }}
              >
                {method.description}
              </motion.p>

              {/* Contact */}
              <motion.p
                className="font-lato font-semibold text-slate-900 dark:text-white mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {method.contact}
              </motion.p>

              {/* Action Button */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                }}
                className="relative px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 overflow-hidden"
              >
                {method.action}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-inter font-bold text-2xl text-slate-900 dark:text-white mb-6">
            Follow Our Journey
          </h3>
          <p className="font-lato text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Stay connected with UETM Admissions on social media for the latest updates, 
            student stories, and behind-the-scenes content.
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-800 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label={social.name}
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
