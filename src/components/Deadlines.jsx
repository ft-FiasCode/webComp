import React, { useRef } from 'react'; 
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const Deadlines = () => {
  const deadlines = [
    {
      type: 'Early Action',
      date: 'November 1, 2024',
      description: 'Non-binding early application deadline',
    },
    {
      type: 'Regular Action',
      date: 'January 1, 2025',
      description: 'Regular application deadline',
    },
    {
      type: 'Financial Aid',
      date: 'February 15, 2025',
      description: 'Deadline',
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Important <span className="text-emerald-600 dark:text-emerald-400">Deadlines</span>
          </h2>
          <p className="font-lato text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Mark your calendar with these critical dates to ensure your application is submitted on time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {deadlines.map((deadline, index) => {
            const cardRef = useRef(null);
            const x = useMotionValue(0);
            const y = useMotionValue(0);

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
                key={deadline.type}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl shadow-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white cursor-pointer transition-all hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)] hover:bg-gradient-to-r from-emerald-100 to-blue-200 dark:from-emerald-900 dark:to-blue-800"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex items-center justify-center mb-6"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-700">
                    <Calendar className="w-8 h-8 text-emerald-600 dark:text-emerald-300" />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="font-inter font-bold text-2xl mb-2 text-center text-sky-700 dark:text-sky-400"
                  whileHover={{
                    scale: 1.1,
                    color: '#3B82F6',
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {deadline.type}
                </motion.h3>

                {/* Date */}
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 mr-2 text-slate-500 dark:text-slate-300" />
                  <span className="font-lato font-semibold text-lg text-slate-900 dark:text-white">
                    {deadline.date}
                  </span>
                </div>

                {/* Description */}
                <motion.p
                  className="font-lato text-center text-slate-600 dark:text-slate-300"
                  whileHover={{
                    letterSpacing: '1px',
                    scale: 1.05,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {deadline.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="font-lato text-slate-700 dark:text-slate-200">
              <strong>Important:</strong> All deadlines are at 11:59 PM PKT. We strongly recommend submitting your application 
              at least 24 hours before the deadline to avoid any technical issues.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deadlines;
