import React from 'react';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'About UET': [
      { name: 'Mission & History', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'Facts & Figures', href: '#' },
      { name: 'Campus', href: '#' }
    ],
    'Admissions': [
      { name: 'Undergraduate', href: '#' },
      { name: 'Graduate', href: '#' },
      { name: 'Scholarships', href: '#' },
      { name: 'Financial Aid', href: '#' }
    ],
    'Resources': [
      { name: 'Visit UETM', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'News', href: '#' },
      { name: 'Events', href: '#' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Non-Discrimination', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' },
    { icon: Mail, name: 'Email', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-16 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-inter font-semibold text-xl">UET</span>
              </div>
              <span className="font-inter font-semibold text-xl">Mardan</span>
            </div>
            <p className="font-lato text-slate-300 leading-relaxed mb-6">
              University of Engineering and Technology Mardan is committed to providing equal opportunities
              for all qualified students regardless of background or circumstances.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-inter font-semibold text-lg mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-lato text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-lato text-slate-400 text-sm">
                © 2025 University of Engineering and Technology Mardan. All rights reserved.
              </p>
              <p className="font-lato text-slate-400 text-sm">
                Charsada Road, Mardan, KP 02139
              </p>
            </div>
            <p className="font-lato text-slate-400 text-sm">
              Built with ❤️ by <a 
                rel="nofollow" 
                target="" 
                href=""
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                ft-FiasCode
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;