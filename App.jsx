import React, { useEffect, useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.jsx';
import Contact from './src/pages/Contact.jsx';
import Blog from './src/pages/Blog.jsx';
import About from './src/pages/About.jsx';
import Visit from './src/pages/Visit.jsx';
import Admissions from './src/pages/Admissions.jsx';
import UndergraduateAdmissions from './src/pages/UndergraduateAdmissions.jsx';
import PostgraduateAdmissions from './src/pages/PostgraduateAdmissions.jsx';
import ApplicationProcess from './src/pages/ApplicationProcess.jsx';
import ApplyOnline from './src/pages/ApplyOnline.jsx';
import EligibilityCriteria from './src/pages/EligibilityCriteria.jsx';
import FeeStructure from './src/pages/FeeStructure.jsx';
import NotFound from './src/pages/NotFound.jsx';
import Chatbot from './src/components/Chatbot.jsx';
import Header from './src/components/Header.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  // New toggle function to flip darkMode state
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        {/* Pass toggleDarkMode instead of setDarkMode */}
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/undergraduate-admissions" element={<UndergraduateAdmissions />} />
            <Route path="/postgraduate-admissions" element={<PostgraduateAdmissions />} />
            <Route path="/application-process" element={<ApplicationProcess />} />
            <Route path="/apply-online" element={<ApplyOnline />} />
            <Route path="/eligibility-criteria" element={<EligibilityCriteria />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Chatbot />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}
