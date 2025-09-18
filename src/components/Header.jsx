import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: 'Apply', href: '/' },
    { name: 'Admissions', href: '/admissions', hasDropdown: true },
    { name: 'Visit', href: '/visit' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' }
  ];

  const admissionsLinks = {
    undergraduate: [
      { name: 'Application Process', href: '/application-process' },
      { name: 'Apply Online', href: '/apply-online' },
      { name: 'Eligibility Criteria', href: '/eligibility-criteria' },
      { name: 'Fee Structure', href: '/fee-structure' },
      { name: 'Deadlines', href: '/admissions#deadlines' },
      { name: 'Requirements', href: '/admissions#requirements' }
    ],
    postgraduate: [
      { name: 'Application Process', href: '/application-process' },
      { name: 'Apply Online', href: '/apply-online' },
      { name: 'Eligibility Criteria', href: '/eligibility-criteria' },
      { name: 'Fee Structure', href: '/fee-structure' },
      { name: 'Programs', href: '/postgraduate-admissions#programs' },
      { name: 'Research Opportunities', href: '/postgraduate-admissions#research' }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 backdrop-blur-sm bg-opacity-50 dark:bg-opacity-60 border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm select-none">UET</span>
            </div>
            <span className="font-inter font-semibold text-lg text-[#2f86f1] dark:text-[#82c7ff] select-none">
              Mardan Admissions
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsAdmissionsDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsAdmissionsDropdownOpen(false)}
              >
                {item.hasDropdown ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center cursor-pointer select-none px-3 py-2 text-sm font-medium transition-colors duration-300
                        ${
                          currentPath === item.href
                            ? 'text-[#2f86f1] border-b-2 border-[#2f86f1]'
                            : 'text-slate-700 hover:text-[#2f86f1] hover:border-b-2 hover:border-[#2f86f1] dark:text-slate-300 dark:hover:text-[#82c7ff]'
                        }
                      `}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4 stroke-current" />
                    </motion.div>

                    <AnimatePresence>
                      {isAdmissionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-6 z-50 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-inter font-semibold text-[#2f86f1] dark:text-[#82c7ff] mb-4">
                                Undergraduate Admissions
                              </h3>
                              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                {admissionsLinks.undergraduate.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      to={link.href}
                                      className="hover:text-[#2f86f1] dark:hover:text-[#82c7ff] transition-colors duration-200"
                                      onClick={() => setIsAdmissionsDropdownOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-inter font-semibold text-[#2f86f1] dark:text-[#82c7ff] mb-4">
                                Postgraduate Admissions
                              </h3>
                              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                                {admissionsLinks.postgraduate.map((link) => (
                                  <li key={link.name}>
                                    <Link
                                      to={link.href}
                                      className="hover:text-[#2f86f1] dark:hover:text-[#82c7ff] transition-colors duration-200"
                                      onClick={() => setIsAdmissionsDropdownOpen(false)}
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 select-none ${
                        currentPath === item.href
                          ? 'text-[#2f86f1] border-b-2 border-[#2f86f1]'
                          : 'text-slate-700 hover:text-[#2f86f1] hover:border-b-2 hover:border-[#2f86f1] dark:text-slate-300 dark:hover:text-[#82c7ff]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Search Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-[#2f86f1] dark:hover:text-[#82c7ff] transition-colors duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-[#2f86f1] dark:hover:text-[#82c7ff] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
            >
              <form onSubmit={handleSearch} className="p-4 max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Search UETM Admissions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2f86f1] focus:border-transparent dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 transition-colors duration-300"
                  aria-label="Search input"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 backdrop-blur-md bg-opacity-70 dark:bg-opacity-70"
            >
              <div className="py-4 space-y-2 max-w-xs mx-auto px-4">
                {navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 select-none ${
                        currentPath === item.href
                          ? 'text-[#2f86f1] bg-blue-50 dark:bg-blue-900/20'
                          : 'text-slate-700 hover:text-[#2f86f1] hover:bg-blue-50 dark:text-slate-300 dark:hover:text-[#82c7ff] dark:hover:bg-slate-800'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
