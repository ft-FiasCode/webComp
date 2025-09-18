import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import { Award, Users, Lightbulb } from 'lucide-react';
import campusImage from '../images/OIP4.jpg';

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
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          },
        }}
        transform="translate(100 100)"
      />
    </svg>
  );
};

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Excellence in Education',
      description: 'UETM is renowned for its rigorous academic programs and groundbreaking research.'
    },
    {
      icon: Users,
      title: 'Diverse Community',
      description: 'Our students come from all backgrounds, fostering innovation through collaboration.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'From startups to space exploration, UETM drives technological advancement.'
    }
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - bounds.left - bounds.width / 2;
    const posY = e.clientY - bounds.top - bounds.height / 2;
    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Morphing Blob */}
      <MorphingBlob />

      <main className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Glass Card Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white bg-opacity-30 dark:bg-slate-800 dark:bg-opacity-40 backdrop-blur-lg rounded-3xl p-10 shadow-lg max-w-xl mx-auto lg:mx-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-inter font-extrabold text-4xl sm:text-5xl text-[#2f86f1] leading-tight mb-6 select-none"
            >
              About UET Mardan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-lato text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-6"
            >
              Founded in 2005, UET Mardan has been at the forefront of innovation for over 20 years,
              shaping the future through education and research.
            </motion.p>
          </motion.div>

          {/* Image with Parallax */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, perspective: 800 }}
            className="relative rounded-3xl shadow-2xl w-full max-w-xl mx-auto lg:mx-0 cursor-pointer"
          >
            <motion.img
              src={campusImage}
              alt="UETM Campus"
              className="rounded-3xl object-cover w-full h-96 sm:h-[28rem]"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-900/20 to-transparent dark:from-slate-900/40 pointer-events-none" />
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mt-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-20 dark:bg-slate-800 dark:bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 dark:bg-emerald-600/20 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
