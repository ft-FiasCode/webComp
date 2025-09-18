import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileText, Users, Award, BookOpen } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Requirements = () => {
  const requirements = [
    {
      icon: FileText,
      title: 'Application & Essays',
      items: [
        'Common Application or UETM Application',
        'Personal essays and short responses',
        'Activities list and honors',
        'Self-reported coursework'
      ]
    },
    {
      icon: BookOpen,
      title: 'Academic Records',
      items: [
        'Official high school transcript',
        'FSc (optional for 2024-25)',
        'ETEA Tests (recommended)',
        'Other exam scores'
      ]
    },
    {
      icon: Users,
      title: 'Recommendations',
      items: [
        'One letter from a math/science teacher',
        'One letter from a humanities teacher',
        'One letter from a counselor',
        'Optional: Additional recommendation'
      ]
    },
    {
      icon: Award,
      title: 'Supplemental Materials',
      items: [
        'Interview (conducted by Educational Counselor)',
        'Maker Portfolio (optional)',
        'Research abstracts or publications',
        'Creative portfolios for specific programs'
      ]
    }
  ];

  const handleDownload = () => {
    toast.success('Downloading guide...', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'light',
    });
  };

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
            Application Requirements
          </h2>
          <p className="font-lato text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Here's everything you need to submit a complete application to UETM. We review each component 
            carefully to understand who you are and what you'll bring to our community.
          </p>
        </motion.div>

        {/* Requirement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => {
            const cardRef = useRef(null);
            const x = useMotionValue(0.5);
            const y = useMotionValue(0.5);

            const rotateX = useTransform(y, [0, 1], [10, -10]);
            const rotateY = useTransform(x, [0, 1], [-10, 10]);

            const handleMouseMove = (e) => {
              const rect = cardRef.current.getBoundingClientRect();
              x.set((e.clientX - rect.left) / rect.width);
              y.set((e.clientY - rect.top) / rect.height);
            };

            const handleMouseLeave = () => {
              x.set(0.5);
              y.set(0.5);
            };

            return (
              <motion.div
                key={req.title}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r from-emerald-100 to-blue-200 dark:from-emerald-900 dark:to-blue-800"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 bg-emerald-100 dark:bg-emerald-700 rounded-full flex items-center justify-center mb-6"
                >
                  <req.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-300" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="font-inter font-bold text-xl text-slate-900 dark:text-white mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {req.title}
                </motion.h3>

                {/* List Items */}
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      whileHover={{ letterSpacing: '1px', scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="font-lato text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-sky-50 dark:bg-sky-900/30 border border-sky-200 dark:border-sky-700 rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <h4 className="font-inter font-bold text-xl text-slate-900 dark:text-white mb-4">
              Need Help Getting Started?
            </h4>
            <p className="font-lato text-slate-600 dark:text-slate-300 mb-6">
              Our comprehensive application guide walks you through each requirement step‑by‑step, 
              with tips from current students and admissions officers.
            </p>
            <a
              href="/UETM_Application_Guide.pdf"
              download
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Download Application Guide
            </a>
          </div>
        </motion.div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Requirements;

