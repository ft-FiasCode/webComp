import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Globe, Users, DollarSign } from 'lucide-react';

const PostgraduateAdmissions = () => {
  const links = [
    { icon: FileText, name: 'Application Process', href: '/application-process' },
    { icon: Globe, name: 'Apply Online', href: '/apply-online' },
    { icon: Users, name: 'Eligibility Criteria', href: '/eligibility-criteria' },
    { icon: DollarSign, name: 'Fee Structure', href: '/fee-structure' }
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
              Postgraduate Admissions
            </h1>
            <p className="font-lato text-lg text-slate-600 max-w-3xl mx-auto">
              Advance your expertise with our postgraduate programs. Discover the pathways to advanced study at UETM.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <link.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="font-inter font-bold text-xl text-slate-900 mb-4">{link.name}</h3>
                <Link
                  to={link.href}
                  className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors duration-200"
                >
                  View Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostgraduateAdmissions;