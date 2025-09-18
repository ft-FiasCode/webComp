import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Users, Award, BookOpen } from 'lucide-react';

const EligibilityCriteria = () => {
  const criteria = [
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
        'FSc scores (optional for 2024-25)',
        'ETEA Tests (recommended)',
        'other exam scores'
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-inter font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Eligibility Criteria
            </h1>
            <p className="font-lato text-lg text-slate-600 max-w-3xl mx-auto">
              Here's everything you need to submit a complete application to UETM. We review each component carefully.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((criterion, index) => (
              <motion.div
                key={criterion.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <criterion.icon className="w-8 h-8 text-emerald-600" />
                </div>
                
                <h3 className="font-inter font-bold text-xl text-slate-900 mb-6">
                  {criterion.title}
                </h3>
                
                <ul className="space-y-3">
                  {criterion.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-lato text-slate-600 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EligibilityCriteria;