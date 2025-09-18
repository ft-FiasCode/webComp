import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, CreditCard, TrendingUp } from 'lucide-react';

const FeeStructure = () => {
  const fees = [
    {
      icon: DollarSign,
      title: 'Tuition Fees',
      amount: '$58,224 per year',
      description: 'Comprehensive tuition covering all academic programs and resources.'
    },
    {
      icon: CreditCard,
      title: 'Application Fee',
      amount: 'Rs. 1500',
      description: 'One-time fee for processing your application. Waived for need-based applicants.'
    },
    {
      icon: TrendingUp,
      title: 'Financial Aid',
      amount: 'Up to 100% need met',
      description: 'UETM is committed to meeting 100% of demonstrated financial need.'
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
              Fee Structure
            </h1>
            <p className="font-lato text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding the costs and financial support available for your UETM education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {fees.map((fee, index) => (
              <motion.div
                key={fee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <fee.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-inter font-bold text-xl text-slate-900 mb-2">{fee.title}</h3>
                <p className="font-lato font-semibold text-2xl text-blue-600 mb-4">{fee.amount}</p>
                <p className="font-lato text-slate-600">{fee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeeStructure;