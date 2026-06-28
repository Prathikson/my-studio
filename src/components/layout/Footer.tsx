import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { useCookieConsentContext } from '../CookieConsent/cookieConsentContext';

const footerSections = [
  {
    title: 'Links',
    links: [
      { name: 'Branding', path: '/services/brand', color: '#10b981' },
      { name: 'Social', path: '/services/social', color: '#3b82f6' },
      { name: 'Design', path: '/services/design', color: '#ec4899' },
      { name: 'Build', path: '/services/build', color: '#f97316' },
      { name: 'About', path: '/about', color: '#a78bfa' },
      { name: 'Portfolio', path: '/portfolio', color: '#60a5fa' },
      { name: 'Terms', path: '/terms-&-conditions', color: '#94a3b8' },
      { name: 'Cookies', path: "/", action: 'cookie', color: '#f43f5e' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com', gradient: 'from-orange-500 to-red-600' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', gradient: 'from-pink-500 to-purple-600' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', gradient: 'from-blue-600 to-cyan-500' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://whatsapp.com', gradient: 'from-green-400 to-emerald-600' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', gradient: 'from-blue-700 to-blue-500' },
];

export default function MobileResponsiveFooter() {
  const navigate = useNavigate();
  const { setShowModal: setCookieModalVisible } = useCookieConsentContext();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (path: string, action?: string) => {
    if (action === 'cookie') {
      setCookieModalVisible(true);
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <footer className="bg-smoothBlack text-white overflow-hidden flex flex-col font-sans">
      
      {/* 1. TOP SECTION: Copyright & Navigation */}
      <div className="pt-16 px-6 md:px-12 flex flex-col items-center">
        {/* Dynamic Copyright */}
        <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase opacity-50 mb-10 text-center">
          © 2025 — {currentYear} XTOIC STUDIO. ALL RIGHTS RESERVED.
        </p>

        {/* Clean Navigation Links with Color Hover */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-5 max-w-4xl">
          {footerSections[0].links.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => handleLinkClick(link.path, link.action)}
              whileHover={{ scale: 1.05, color: link.color }}
              className="text-[11px] md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 opacity-70 hover:opacity-100"
            >
              {link.name}
            </motion.button>
          ))}
          <motion.a 
            href="mailto:info@xtoic.studio"
            whileHover={{ scale: 1.05, color: '#fbbf24' }}
            className="text-[11px] md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 opacity-70 hover:opacity-100"
          >
            Email Us
          </motion.a>
        </nav>
      </div>

      {/* 2. MIDDLE SECTION: Giant Typography with added Padding */}
      <div className="flex-grow flex items-center justify-center pt-24 pb-32 md:pt-32 md:pb-40">
        <h1 className="text-[24vw] leading-none font-bold tracking-tighter whitespace-nowrap select-none opacity-90 transition-all duration-700 hover:tracking-normal cursor-default">
          XTOIC
        </h1>
      </div>

      {/* 3. BOTTOM SECTION: Social Grid Bar with Vibrant Hover */}
      <div className="grid grid-cols-5 border-t border-white/5">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative py-10 md:py-14 flex items-center justify-center border-r border-white/5 last:border-r-0 overflow-hidden"
            >
              {/* Vibrant Background Hover Effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
              />
              
              {/* Icon with Color Pulse on Hover */}
              <Icon className="w-5 h-5 md:w-6 md:h-6 z-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              
              {/* Subtle underline glow on hover */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${social.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />
            </motion.a>
          );
        })}
      </div>
    </footer>
  );
}