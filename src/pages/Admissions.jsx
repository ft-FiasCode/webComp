import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, BookOpen } from 'lucide-react';

const Admissions = () => {
  const sections = [
    {
      icon: GraduationCap,
      title: 'Undergraduate Admissions',
      description: 'Apply to our undergraduate programs.',
      link: '/undergraduate-admissions',
    },
    {
      icon: BookOpen,
      title: 'Postgraduate Admissions',
      description: 'Advance your career with our graduate degrees.',
      link: '/postgraduate-admissions',
    },
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
              Admissions at UETM
            </h1>
            <p className="font-lato text-lg text-slate-600 max-w-3xl mx-auto">
              Discover the pathways to join our innovative community. Whether you're pursuing undergraduate or postgraduate studies, we have the resources to guide you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <section.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-inter font-bold text-2xl text-slate-900 mb-4">{section.title}</h3>
                <p className="font-lato text-slate-600 mb-6">{section.description}</p>
                <Link
                  to={section.link}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="font-inter font-bold text-2xl text-slate-900 mb-4">Need Help?</h2>
              <p className="font-lato text-slate-600 mb-6">
                Our admissions team is here to answer your questions. Explore our resources or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  to="/visit"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
