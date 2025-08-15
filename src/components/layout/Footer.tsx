import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Github, Youtube, Instagram, Twitter, Facebook, Award, ChevronRight } from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    gradient: ['#10b981', '#059669'],
    links: [
      { name: 'Branding', path: '/services/branding' },
      { name: 'Social', path: '/services/social' },
      { name: 'Design', path: '/services/design' },
      { name: 'Build', path: '/services/build' }
    ],
  },
  {
    title: 'About',
    gradient: ['#60a5fa', '#3b82f6'],
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Contact', path: '/contact' }
    ],
  },
  {
    title: 'Legal',
    gradient: ['#f97316', '#ef4444'],
    links: [
      { name: 'Terms of Use', path: '/terms-of-use' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Manage Cookies', path: '/cookies' }
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, gradient: ['#f97316', '#ef4444'], url: 'https://github.com' },
  { name: 'YouTube', icon: Youtube, gradient: ['#ef4444', '#dc2626'], url: 'https://youtube.com' },
  { name: 'Instagram', icon: Instagram, gradient: ['#ec4899', '#be185d'], url: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, gradient: ['#4e3077', '#de307f'], url: 'https://twitter.com' },
  { name: 'Facebook', icon: Facebook, gradient: ['#3b82f6', '#1d4ed8'], url: 'https://facebook.com' },
  { name: 'Awwwards', icon: Award, gradient: ['#10b981', '#059669'], url: 'https://awwwards.com' },
];

export default function MobileResponsiveFooter() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInView) return;

    // Simple fade-in animations for mobile
    const elements = footerRef.current?.querySelectorAll('.animate-on-view');
    elements?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, index * 100);
    });
  }, [isInView]);

  const handleScheduleClick = () => {
    navigate('/contact');
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
  };

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <footer ref={footerRef} className="bg-carbonGray text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
              {/* Logo */}
              <div className="animate-on-view opacity-0 translate-y-10 transition-all duration-700">
                <motion.div
                  className="w-16 h-16  from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/x.svg" alt="logo" />
                </motion.div>
                <div className="flex items-center space-x-1 text-3xl font-bold">
                  {['X', 'T', 'O', 'I', 'C'].map((letter, index) => (
                    <span key={letter} className="inline-block" style={{ animationDelay: `${index * 100}ms` }}>
                      {letter}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Sections */}
              {footerSections.map((section, sectionIndex) => (
                <div key={section.title} className="animate-on-view opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: `${(sectionIndex + 1) * 200}ms` }}>
                  <motion.h3
                    className="text-xl font-bold mb-6 bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {section.title}.
                  </motion.h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.name}`}>
                        <motion.button
                          onClick={() => handleLinkClick(link.path)}
                          className="text-gray-300 hover:text-white transition-colors duration-300 block relative group text-left"
                          whileHover={{ x: 10 }}
                        >
                          <span>{link.name}</span>
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 rounded-full"
                            style={{
                              background: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})`,
                            }}
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact */}
              <div className="animate-on-view opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
                <motion.h3
                  className="text-xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(135deg, #a78bfa, #ec4899)` }}
                  whileHover={{ scale: 1.05 }}
                >
                  Contact.
                </motion.h3>

                <div className="space-y-6">
                  <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                    <div className="p-2 bg-smoothBlack rounded-lg">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:hello@xtoic.studio" className="text-white hover:text-purple-400">
                      hello@xtoic.studio
                    </a>
                  </motion.div>

                  <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                    <div className="p-2 bg-smoothBlack rounded-lg">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+1234567890" className="text-white hover:text-pink-400">
                      +1 (234) 567-890
                    </a>
                  </motion.div>

                  <div>
                    <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                    <div className="grid grid-cols-3 gap-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-smoothBlack rounded-xl flex items-center justify-center relative overflow-hidden"
                            onMouseEnter={() => setHoveredSocial(index)}
                            onMouseLeave={() => setHoveredSocial(null)}
                            whileHover={{ scale: 1.1 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: `linear-gradient(135deg, ${social.gradient[0]}, ${social.gradient[1]})`,
                              }}
                              initial={{ scale: 0 }}
                              animate={{ scale: hoveredSocial === index ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <Icon className="relative z-10 w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-16 pt-8 animate-on-view opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '1000ms' }}>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.button
                  className="bg-smoothBlack hover:bg-white/10 px-6 py-3 rounded-full text-sm transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleScheduleClick}
                >
                  Let's Create Something Amazing Together! 🚀
                </motion.button>

                <div className="text-sm text-gray-400 mt-4 md:mt-0">
                  © 2025 XTOIC STUDIO | All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Unique Design */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <div className="px-6 py-8 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12  flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.01, rotate: 5 }}
                >
                  <img src="/x.svg" alt="" />
                </motion.div>
                <div className="text-2xl font-bold font-general">XTOIC</div>
              </div>
              <motion.button
                className="bg-smoothBlack px-4 py-2 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleClick}
              >
                Let's Talk 🚀
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Cards */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Quick Contact Card */}
              <motion.div 
                className="bg-smoothBlack rounded-2xl p-4 col-span-2"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Contact
                </h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <a href="mailto:hello@xtoic.studio" className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>hello@xtoic.studio</span>
                    </a>
                    <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-pink-400" />
                      <span>+1 (234) 567-890</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Sections */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  className={`bg-smoothBlack rounded-2xl p-4 ${section.title === 'Legal' ? 'col-span-2' : ''}`}
                  whileHover={{ scale: 1.01 }}
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 
                      className="font-bold bg-clip-text text-transparent"
                      style={{ backgroundImage: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})` }}
                    >
                      {section.title}.
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedSection === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: expandedSection === index ? 'auto' : 0,
                      opacity: expandedSection === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 mt-3">
                      {section.links.map((link) => (
                        <button
                          key={`${section.title}-${link.name}`}
                          onClick={() => handleLinkClick(link.path)}
                          className="block text-sm text-gray-300 hover:text-white transition-colors w-full text-left py-1"
                        >
                          {link.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* More Social Links */}
              <motion.div 
                className="bg-smoothBlack rounded-2xl p-4 col-span-2"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="font-bold mb-3 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Follow Us
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-carbonGray rounded-xl flex items-center justify-center relative overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => setHoveredSocial(index)}
                        onMouseLeave={() => setHoveredSocial(null)}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: `linear-gradient(135deg, ${social.gradient[0]}, ${social.gradient[1]})`,
                          }}
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredSocial === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <Icon className="relative z-10 w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="border-t border-gray-800 px-6 py-6">
            <div className="text-center">
              <div className="text-sm text-gray-400">
                © 2025 XTOIC STUDIO | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}