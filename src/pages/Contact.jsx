import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Reuse the MorphingBlob component from Hero.jsx
const MorphingBlob = () => {
  return (
    <svg
      className="absolute -top-20 -left-20 w-72 h-72 opacity-20"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        fill="#2f86f1"
        animate={{
          d: [
            "M45.5,-62.4C59.8,-50.6,66.6,-33,67.3,-16.1C68,-0.3,62.7,14.9,56,27.9C49.4,40.9,41.4,51.7,29.7,59.7C18,67.8,2.7,72.9,-11.4,75.7C-25.4,78.6,-38.1,79.1,-48.2,72.7C-58.3,66.4,-65.8,53.2,-69.1,39.7C-72.5,26.3,-71.7,12.7,-68.4,0.2C-65.1,-12.3,-59.2,-24.5,-53,-36.7C-46.7,-48.9,-40.2,-61.1,-29.3,-70.6C-18.4,-80,-3.7,-86.8,10.7,-90.1C25,-93.3,39.7,-93.4,45.5,-62.4Z",
            "M43.3,-60.2C58.6,-47.9,69.6,-33.2,71.6,-17.1C73.7,-1,66.8,16.6,57.1,29.8C47.3,43,34.8,52,21.4,57.3C8,62.7,-5.3,64.5,-18,61.7C-30.7,59,-42.9,51.6,-50.6,41.1C-58.3,30.7,-61.4,17.2,-63.1,3.3C-64.9,-10.7,-65.3,-24.9,-58.6,-37.2C-51.9,-49.5,-38.2,-59.9,-24.2,-68.2C-10.2,-76.4,4.1,-82.5,18.8,-81.7C33.5,-80.9,48.7,-73.1,43.3,-60.2Z",
            "M45.5,-62.4C59.8,-50.6,66.6,-33,67.3,-16.1C68,-0.3,62.7,14.9,56,27.9C49.4,40.9,41.4,51.7,29.7,59.7C18,67.8,2.7,72.9,-11.4,75.7C-25.4,78.6,-38.1,79.1,-48.2,72.7C-58.3,66.4,-65.8,53.2,-69.1,39.7C-72.5,26.3,-71.7,12.7,-68.4,0.2C-65.1,-12.3,-59.2,-24.5,-53,-36.7C-46.7,-48.9,-40.2,-61.1,-29.3,-70.6C-18.4,-80,-3.7,-86.8,10.7,-90.1C25,-93.3,39.7,-93.4,45.5,-62.4Z"
          ],
          transition: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
        transform="translate(100 100)"
      />
    </svg>
  );
};

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 py-16 lg:py-24 transition-colors duration-500 overflow-hidden min-h-screen">
      {/* Morphing Blob Background */}
      <MorphingBlob />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="font-inter font-extrabold text-5xl sm:text-6xl text-[#2f86f1] leading-tight mb-6 select-none">
            Contact Us
          </h1>
          <p className="font-lato text-lg sm:text-xl text-slate-700 dark:text-slate-300">
            Have questions about applying to UETM? We're here to help. Reach out to our admissions team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {[{
              icon: Mail,
              title: "Email",
              detail: "admissions@uetm.edu.pk",
            }, {
              icon: Phone,
              title: "Phone",
              detail: "(051) 253-3400",
            }, {
              icon: MapPin,
              title: "Address",
              detail: (
                <>
                  Charsada Road
                  <br />
                  Mardan, 23200
                </>
              ),
            }].map(({ icon: Icon, title, detail }) => (
              <div key={title} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-xl text-slate-900 dark:text-white mb-2">{title}</h3>
                  <p className="font-lato text-slate-600 dark:text-slate-300">{detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form with Glassmorphism */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white bg-opacity-30 dark:bg-slate-800 dark:bg-opacity-40 backdrop-blur-lg rounded-3xl p-10 shadow-lg max-w-xl mx-auto lg:mx-0"
          >
            <div className="space-y-6">
              <div>
                <label className="block font-lato font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-lato font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-lato font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-[#2f86f1] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
