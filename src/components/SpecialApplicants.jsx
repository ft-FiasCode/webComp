import React from 'react';
import { motion } from 'framer-motion';
import { Globe, RefreshCw, DollarSign } from 'lucide-react';

const SpecialApplicants = () => {
  const sections = [
    {
      icon: Globe,
      title: 'International Applicants',
      description: 'Special guidance for students applying from outside Pakistan.',
      highlights: [
        'No English proficiency requirements',
        'International credential evaluation',
        'Visa and immigration support',
        'Smooth cultural integration'
      ],
      color: 'emerald'
    },
    {
      icon: RefreshCw,
      title: 'Transfer Students',
      description: 'Information for students transferring from other institutions.',
      highlights: [
        'Credit transfer process',
        'Last semester transcript requirements',
        'Minimum CGPA of 2.0',
        'Support for transfer students'
      ],
      color: 'sky'
    },
    {
      icon: DollarSign,
      title: 'Financial Aid',
      description: 'Comprehensive support to make UETM accessible to all qualified students.',
      highlights: [
        'Dean’s List Scholarship opportunities',
        'Pakistan Merit Scholarship eligibility',
        'Affordable for middle-class families',
        'Laptop Scheme for eligible students'
      ],
      color: 'yellow'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50 dark:bg-emerald-900/30',
        border: 'border-emerald-200 dark:border-emerald-700',
        icon: 'bg-emerald-100 dark:bg-emerald-700 text-emerald-600 dark:text-emerald-300',
        button: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500'
      },
      sky: {
        bg: 'bg-sky-50 dark:bg-sky-900/30',
        border: 'border-sky-200 dark:border-sky-700',
        icon: 'bg-sky-100 dark:bg-sky-700 text-sky-600 dark:text-sky-300',
        button: 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-500'
      },
      yellow: {
        bg: 'bg-yellow-50 dark:bg-yellow-900/30',
        border: 'border-yellow-200 dark:border-yellow-700',
        icon: 'bg-yellow-100 dark:bg-yellow-700 text-yellow-600 dark:text-yellow-300',
        button: 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500'
      }
    };
    return colors[color];
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Special Circumstances
          </h2>
          <p className="font-lato text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're committed to supporting all applicants through their unique journeys to UET. 
            Find specialized resources and guidance for your specific situation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const colorClasses = getColorClasses(section.color);
            return (
              <motion.div
                key={section.title}
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
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-8 transform transition-transform duration-500`}
              >
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                    zIndex: 10,
                    transformOrigin: 'center',
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.2)',
                  }}
                  className={`w-16 h-16 ${colorClasses.icon} rounded-full flex items-center justify-center mb-6`}
                >
                  <section.icon className="w-8 h-8" />
                </motion.div>

                <motion.h3
                  className="font-inter font-bold text-2xl text-slate-900 dark:text-white mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {section.title}
                </motion.h3>

                <motion.p
                  className="font-lato text-slate-600 dark:text-slate-300 mb-6 leading-relaxed"
                  whileHover={{ scale: 1.05 }}
                >
                  {section.description}
                </motion.p>

                <motion.ul
                  className="space-y-3 mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  {section.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      className="flex items-start"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-lato text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                  className={`w-full px-6 py-3 ${colorClasses.button} text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialApplicants;
