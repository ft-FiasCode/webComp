import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, BookOpen, FileText, Clock, CheckCircle } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: Search,
      title: 'Explore',
      description: 'Research UETM programs, culture, and opportunities that align with your interests and goals.',
    },
    {
      icon: BookOpen,
      title: 'Prepare',
      description: 'Gather required documents, take standardized tests, and prepare your application materials.',
    },
    {
      icon: FileText,
      title: 'Apply',
      description: 'Submit your complete application through our online portal before the deadline.',
    },
    {
      icon: Clock,
      title: 'Wait',
      description: 'Our admissions committee carefully reviews each application during the evaluation period.',
    },
    {
      icon: CheckCircle,
      title: 'Decide',
      description: 'Receive your admission decision and make your choice to join the UET community.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page title and intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-inter font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Application Process
            </h1>
            <p className="font-lato text-lg text-slate-600 max-w-3xl mx-auto">
              Your journey to UETM follows a clear path. Here's what you need to know about the application process.
            </p>
          </motion.div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group relative"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors duration-200"
                  >
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Connector line, only on md+ screens, except last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-[-100%] w-[120%] h-0.5 bg-slate-200"></div>
                  )}
                </div>
                <h3 className="font-inter font-semibold text-xl text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-lato text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationProcess;
