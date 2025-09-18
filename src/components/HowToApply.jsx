import React from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, FileText, Clock, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Explore',
    description: 'Research UET programs, culture, and opportunities that align with your interests and goals.'
  },
  {
    icon: BookOpen,
    title: 'Prepare',
    description: 'Gather required documents, take standardized tests, and prepare your application materials.'
  },
  {
    icon: FileText,
    title: 'Apply',
    description: 'Submit your complete application through our online portal before the deadline.'
  },
  {
    icon: Clock,
    title: 'Wait',
    description: 'Our admissions committee carefully reviews each application during the evaluation period.'
  },
  {
    icon: CheckCircle,
    title: 'Decide',
    description: 'Receive your admission decision and make your choice to join the UET community.'
  }
];

// Container variants for staggered children animation
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: 'easeOut'
    }
  }
};

// Item variants for each step
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
};

const HowToApply = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade/slide */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
          }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-inter font-extrabold text-3xl sm:text-4xl text-[#2f86f1] mb-4 select-none">
            How to Apply
          </h2>
          <p className="font-lato text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Your journey to University of Engineering and Technology Mardan follows a clear path. Here's what you need to know about the application process.
          </p>
        </motion.div>

        {/* Steps container with stagger animation */}
        <motion.div
          className="grid md:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative bg-white bg-opacity-40 dark:bg-slate-800 dark:bg-opacity-40 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center cursor-default select-none"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(47, 134, 241, 0.3)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-14 h-14 bg-[#2f86f1] rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-inter font-semibold text-xl text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-lato text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 bg-[#2f86f1] rounded-full w-7 h-7 flex items-center justify-center text-white font-semibold text-xs">
                  {index + 1}
                </div>

                {/* Connecting line except last item */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 right-0 w-10 h-0.5 bg-[#2f86f1] opacity-30"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToApply;
