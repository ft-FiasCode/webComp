import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';

const Visit = () => {
  const visitOptions = [
    {
      icon: MapPin,
      title: 'Campus Tours',
      description: "Explore UETM's historic campus with a guided tour.",
      details: 'Available weekdays and select weekends. Free for prospective students.'
    },
    {
      icon: Calendar,
      title: 'Information Sessions',
      description: 'Learn about admissions, academics, and student life.',
      details: 'Held regularly throughout the year. Register online.'
    },
    {
      icon: Users,
      title: 'Student-Led Tours',
      description: 'Hear directly from current students about their experiences.',
      details: 'Informal tours led by UETM undergraduates.'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-inter font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
            Visit UETM
          </h1>
          <p className="font-lato text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Experience UET Mardan firsthand. Join us for tours, sessions, and events to discover what makes our community special.
          </p>
        </motion.div>

        {/* Visit Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visitOptions.map((option, index) => {
            const cardRef = useRef(null);
            const x = useMotionValue(0.5);
            const y = useMotionValue(0.5);
            const rotateX = useTransform(y, [0, 1], [10, -10]);
            const rotateY = useTransform(x, [0, 1], [-10, 10]);

            const handleMouseMove = (e) => {
              const rect = cardRef.current.getBoundingClientRect();
              const posX = (e.clientX - rect.left) / rect.width;
              const posY = (e.clientY - rect.top) / rect.height;
              x.set(posX);
              y.set(posY);
            };

            const handleMouseLeave = () => {
              x.set(0.5);
              y.set(0.5);
            };

            return (
              <motion.div
                key={option.title}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 hover:shadow-xl hover:bg-gradient-to-r from-emerald-100 to-blue-200 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
                >
                  <option.icon className="w-8 h-8 text-emerald-600" />
                </motion.div>

                <motion.h3
                  className="font-inter font-bold text-xl text-slate-900 dark:text-white mb-4"
                  whileHover={{ scale: 1.05, color: '#3B82F6' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {option.title}
                </motion.h3>

                <ul className="space-y-3">
                  <motion.li
                    className="font-lato text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                    whileHover={{ letterSpacing: '0.5px', scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {option.description}
                  </motion.li>
                  <motion.li
                    className="font-lato text-slate-500 dark:text-slate-400 text-sm leading-relaxed"
                    whileHover={{ letterSpacing: '0.5px', scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {option.details}
                  </motion.li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors duration-200"
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-sky-50 dark:bg-blue-900/20 border border-sky-200 dark:border-blue-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="font-inter font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Plan Your Visit
            </h2>
            <p className="font-lato text-slate-600 dark:text-slate-400 mb-6">
              Ready to visit? Check our calendar for upcoming events and register for tours and sessions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors duration-200"
            >
              View Calendar
            </motion.button>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Visit;
