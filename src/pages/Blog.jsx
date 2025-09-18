import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Footer from '../components/Footer';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Campus Life at UET Mardan',
      excerpt: 'Discover what a typical day looks like for our undergraduate students.',
      author: 'UETM community',
      date: 'October 15, 2024',
      image: 'src/images/OIP.webp'
    },
    {
      title: 'Tips for Your UETM Application',
      excerpt: 'Learn how to craft & showcase your unique identity.',
      author: 'UETM Admissions Office',
      date: 'September 20, 2024',
      image: 'src/images/OIP2.webp'
    },
    {
      title: 'Exploring UETM Research Opportunities',
      excerpt: 'An overview of undergraduate research programs and how to get involved.',
      author: 'UETM community',
      date: 'August 10, 2024',
      image: 'src/images/lab.jpeg'
    }
  ];

  // 3D Parallax effect hooks for images
  const createParallax = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const posX = e.clientX - rect.left - rect.width / 2;
      const posY = e.clientY - rect.top - rect.height / 2;
      x.set(posX);
      y.set(posY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-white transition-colors duration-500">
      <main className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-inter font-bold text-4xl sm:text-5xl text-[#2f86f1] mb-6 select-none">
            UETM Community Blog
          </h1>
          <p className="font-lato text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Insights, tips, and stories from the UETM community to help you on your admissions journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => {
            const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = createParallax();

            return (
              <motion.article
                key={post.title}
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                  perspective: 800,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-30 dark:bg-slate-800 dark:bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div className="p-6">
                  <h2 className="font-inter font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {post.title}
                  </h2>
                  <p className="font-lato text-slate-700 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
