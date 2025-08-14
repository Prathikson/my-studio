import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Mail, Phone, Github, Youtube, Instagram, Twitter, Facebook, Award } from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    gradient: ['#10b981', '#059669'],
    links: ['Branding', 'Social', 'Design', 'Build'],
  },
  {
    title: 'About',
    gradient: ['#60a5fa', '#3b82f6'],
    links: ['About Us', 'Portfolio', 'Contact'],
  },
  {
    title: 'Legal',
    gradient: ['#f97316', '#ef4444'],
    links: ['Terms of Use', 'Privacy Policy', 'Manage Cookies'],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, gradient: ['#f97316', '#ef4444'] },
  { name: 'YouTube', icon: Youtube, gradient: ['#ef4444', '#dc2626'] },
  { name: 'Instagram', icon: Instagram, gradient: ['#ec4899', '#be185d'] },
  { name: 'Twitter', icon: Twitter, gradient: ['#4e3077', '#de307f'] },
  { name: 'Facebook', icon: Facebook, gradient: ['#3b82f6', '#1d4ed8'] },
  { name: 'Awwwards', icon: Award, gradient: ['#10b981', '#059669'] },
];

export default function AnimatedFooter() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      gsap.from('.logo-letter', {
        y: 100,
        opacity: 0,
        rotation: 180,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.logo-placeholder', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      gsap.from('.section-title', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.3,
        ease: 'power2.out',
      });

      gsap.from('.footer-link', {
        x: -30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        delay: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.contact-item', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.social-link', {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 1,
        ease: 'back.out(1.7)',
      });

      gsap.from('.footer-bottom', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 1.2,
        ease: 'power2.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, [isInView]);

  const handleScheduleClick = () => {
    console.log('Schedule a call clicked - implement functionality here');
  };

  return (
    <footer ref={footerRef} className="bg-carbonGray text-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo */}
          <div>
            <motion.div
              className="logo-placeholder w-16 h-16  rounded-xl flex items-center justify-center mb-4 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/x.svg" alt="logo" />
            </motion.div>
            <div className="flex items-center space-x-1 text-3xl font-bold">
              {['X', 'T', 'O', 'I', 'C'].map((letter) => (
                <span key={letter} className="logo-letter inline-block">
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
  <div key={section.title}>
    <motion.h3
      className="section-title text-xl font-bold mb-6 bg-clip-text text-transparent"
      style={{ backgroundImage: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})` }}
      whileHover={{ scale: 1.05 }}
    >
      {section.title}.
    </motion.h3>
    <ul className="space-y-4">
      {section.links.map((link) => (
        <li key={`${section.title}-${link}`}>
          <motion.a
            href="#"
            className="footer-link text-gray-300 hover:text-white transition-colors duration-300 block relative group"
            whileHover={{ x: 10 }}
          >
            <span>{link}</span>
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${section.gradient[0]}, ${section.gradient[1]})`,
              }}
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </li>
      ))}
    </ul>
  </div>
))}
          {/* Contact */}
          <div>
            <motion.h3
              className="section-title text-xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, #a78bfa, #ec4899)` }}
              whileHover={{ scale: 1.05 }}
            >
              Contact.
            </motion.h3>

            <div className="space-y-6">
              {/* Email */}
              <motion.div className="contact-item flex items-center space-x-3" whileHover={{ x: 5 }}>
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:hello@xtoic.studio" className="text-white hover:text-purple-400">
                  hello@xtoic.studio
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div className="contact-item flex items-center space-x-3" whileHover={{ x: 5 }}>
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+1234567890" className="text-white hover:text-pink-400">
                  +1 (234) 567-890
                </a>
              </motion.div>


              {/* Social */}
              <div>
                <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href="#"
                        className="social-link w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden"
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
        <div className="footer-bottom border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.button
              className="bg-smoothBlack px-6 py-3 rounded-full text-sm"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleClick}
            >
              Let's Create Something Amazing Together! 🚀
            </motion.button>

            <div className="text-sm text-gray-400 mt-4 md:mt-0">
              © 2025 XTOIC STUDIO, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
