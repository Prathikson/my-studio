import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Scale,
  Eye,
  Lock,
  Zap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Database,
  Target,
  Globe,
  Baby,
  Brain,
  RefreshCw,
  Mail,
  Search,
  X
} from 'lucide-react';

import  {privacyData, privacyVersionHistory} from '../../data/Privacy';
import { Link } from 'react-router-dom';


type IconName = 'FileText' | 'Shield' | 'Users' | 'AlertTriangle' | 'CheckCircle' | 'MapPin' | 'Calendar' | 'Clock' | 'Scale' | 'Eye' | 'Lock' | 'Zap' | 'Database' | 'Target' | 'Globe' | 'Baby' | 'Brain' | 'RefreshCw' | 'Mail';

type ColorVariant = 'lightGray' | 'smoothBlack' | 'carbonBlack' | 'appleBlue' | 'zoroRed' | 'carbonGray';

type HighlightType = 'warning' | 'info' | 'success';

const iconMap: Record<IconName, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Calendar,
  Clock,
  Scale,
  Eye,
  Lock,
  Zap,
  Database,
  Target,
  Globe,
  Baby,
  Brain,
  RefreshCw,
  Mail
};

interface SearchResult {
  sectionId: string;
  sectionTitle: string;
  content: string;
  type: 'main' | 'subsection' | 'highlight';
}

const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [showVersionHistory, setShowVersionHistory] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // Animation setup would go here (similar to Terms.tsx)
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    privacyData.sections.forEach((section) => {
      // Search main content
      if (section.content.text.toLowerCase().includes(query)) {
        results.push({
          sectionId: section.id,
          sectionTitle: section.title,
          content: section.content.text,
          type: 'main'
        });
      }

      // Search subsections
      if (section.content.subsections) {
        section.content.subsections.forEach((subsection) => {
          if (subsection.title.toLowerCase().includes(query)) {
            results.push({
              sectionId: section.id,
              sectionTitle: `${section.title} - ${subsection.title}`,
              content: subsection.title,
              type: 'subsection'
            });
          }
          subsection.items.forEach((item) => {
            if (item.toLowerCase().includes(query)) {
              results.push({
                sectionId: section.id,
                sectionTitle: `${section.title} - ${subsection.title}`,
                content: item,
                type: 'subsection'
              });
            }
          });
        });
      }

      // Search highlights
      if (section.content.highlights) {
        section.content.highlights.forEach((highlight) => {
          if (highlight.title.toLowerCase().includes(query) || highlight.content.toLowerCase().includes(query)) {
            results.push({
              sectionId: section.id,
              sectionTitle: `${section.title} - ${highlight.title}`,
              content: highlight.content,
              type: 'highlight'
            });
          }
        });
      }
    });

    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  }, [searchQuery]);

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getColorClasses = (color: string): string => {
    const colorMap: Record<ColorVariant, string> = {
      lightGray: 'bg-gray-50 border-gray-200 text-gray-700',
      smoothBlack: 'bg-gray-900 border-gray-900 text-white',
      carbonBlack: 'bg-gray-800 border-gray-800 text-white',
      appleBlue: 'bg-blue-50 border-blue-200 text-blue-700',
      zoroRed: 'bg-red-50 border-red-200 text-red-700',
      carbonGray: 'bg-gray-100 border-gray-300 text-gray-800'
    };
    return colorMap[color as ColorVariant] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  const getHighlightClasses = (type: string): string => {
    const typeMap: Record<HighlightType, string> = {
      warning: 'bg-red-50 border-l-red-500 text-red-800',
      info: 'bg-blue-50 border-l-blue-500 text-blue-800',
      success: 'bg-green-50 border-l-green-500 text-green-800'
    };
    return typeMap[type as HighlightType] || 'bg-gray-50 border-l-gray-500 text-gray-800';
  };

  const highlightSearchTerm = (text: string, query: string): React.ReactNode => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen bg-lightGray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30"
          style={{ y }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-20"
          style={{ y }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          className="pt-20 pb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-carbonGray leading-none">
              PRIVACY
            </h1>
            <h2 className="text-4xl md:text-8xl lg:text-9xl font-bold text-carbonGray leading-none">
              POLICY
            </h2>
            <p className="text-xl md:text-2xl text-smoothBlack/80 max-w-3xl mx-auto leading-relaxed">
              Your privacy matters - comprehensive protection framework for your personal information
            </p>
          </motion.div>

          {/* Version Info */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-lg">
              <Calendar size={20} className="text-appleBlue" />
              <span className="text-smoothBlack font-medium">
                Version {privacyData.version}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-lg">
              <Clock size={20} className="text-green-600" />
              <span className="text-smoothBlack font-medium">
                Effective {new Date(privacyData.effectiveDate).toLocaleDateString()}
              </span>
            </div>
            <motion.button
              onClick={() => setShowVersionHistory(!showVersionHistory)}
              className="flex items-center gap-2 bg-smoothBlack text-lightGray rounded-2xl px-6 py-3 shadow-lg hover:bg-carbongray/80 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              Version History
              {showVersionHistory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </motion.button>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="mt-8 max-w-5xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search privacy policy..."
                className="w-full pl-12 pr-12 py-4 bg-white/50 rounded-2xl shadow-lg border-2 border-transparent focus:border-red-200 focus:outline-none text-slate-700"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowSearchResults(false);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Search Results */}
            <AnimatePresence>
              {showSearchResults && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-full bg-lightGray rounded-2xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50"
                >
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-carbonGray mb-3">
                      Search Results ({searchResults.length})
                    </h3>
                    <div className="space-y-2">
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            scrollToSection(result.sectionId);
                            setShowSearchResults(false);
                          }}
                          className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          <div className="font-medium text-carbonGray text-sm mb-1">
                            {result.sectionTitle}
                          </div>
                          <div className="text-smoothBlack/80 text-sm line-clamp-2">
                            {highlightSearchTerm(result.content, searchQuery)}
                          </div>
                          <div className="text-xs text-smoothBlack/60 mt-1 capitalize">
                            {result.type}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Version History Modal */}
          <AnimatePresence>
            {showVersionHistory && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowVersionHistory(false)}
              >
                <motion.div
                  className="bg-lightGray rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-3xl font-bold text-carbonGray mb-6">Version History</h3>
                  <div className="space-y-6">
                    {privacyVersionHistory.map((version) => (
                      <div key={version.version} className="border-l-4 border-appleBlue pl-6">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xl font-bold text-smoothBlack">v{version.version}</span>
                          <span className="text-smoothBlack/50">{new Date(version.effectiveDate).toLocaleDateString()}</span>
                        </div>
                        {version.changelog && (
                          <ul className="space-y-1 text-smoothBlack">
                            {version.changelog.map((change, changeIndex) => (
                              <li key={changeIndex} className="flex items-start gap-2">
                                <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                                {change}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Table of Contents */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-lightGray  p-8">
            <h3 className="text-2xl font-bold text-carbonGray mb-6 text-center">Table of Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {privacyData.sections.map((section, index) => {
                const IconComponent = iconMap[section.icon as IconName];
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`p-4 rounded-xl transition-all duration-300 text-left ${
                      activeSection === section.id 
                        ? 'bg-smoothBlack text-lightGray shadow-lg' 
                        : 'bg-slate-50 hover:bg-white text-smoothBlack hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={20} />
                      <div>
                        <span className="text-sm font-medium block">{section.title}</span>
                        <span className="text-xs opacity-75">Section {index + 1}</span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-12 pb-20">
          {privacyData.sections.map((section, index) => {
            const IconComponent = iconMap[section.icon as IconName];
            
            return (
              <motion.div
                key={section.id}
                id={section.id}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                {/* Section Header */}
                <div className="p-8 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl ${getColorClasses(section.color)}`}>
                      <IconComponent size={32} />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-7xl font-bold text-gray-800">{section.title}</h3>
                      <span className="text-gray-400 text-sm">Section {index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-8 space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {highlightSearchTerm(section.content.text, searchQuery)}
                  </p>

                  {/* Subsections */}
                  {section.content.subsections && (
                    <div className="space-y-6">
                      {section.content.subsections.map((subsection, subIndex) => (
                        <div key={subIndex} className="bg-slate-50 rounded-2xl p-6">
                          <h4 className="text-xl font-bold text-slate-900 mb-4">
                            {highlightSearchTerm(subsection.title, searchQuery)}
                          </h4>
                          <ul className="space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 text-slate-700">
                                <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                                <span>{highlightSearchTerm(item, searchQuery)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  {section.content.highlights && (
                    <div className="space-y-4">
                      {section.content.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className={`rounded-2xl p-6 border-l-4 ${getHighlightClasses(highlight.type)}`}>
                          <h4 className="font-bold mb-2">
                            {highlightSearchTerm(highlight.title, searchQuery)}
                          </h4>
                          <p>{highlightSearchTerm(highlight.content, searchQuery)}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Navigation */}
        <motion.div 
          className="py-16 border-t border-slate-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-carbonGray mb-2">Questions about your privacy?</h3>
              <p className="text-smoothBlack/50">Contact our privacy team for clarification or assistance</p>
            </div>
            <div className="flex gap-4">
              <Link 
                to="/terms-of-service"
                className="flex items-center gap-2 bg-smoothBlack text-lightGray px-6 py-3 rounded-2xl hover:bg-carbonGray/80 transition-colors"
              >
                <Shield size={20} />
                Terms & Conditions
                <ArrowRight size={16} />
              </Link>
              <a 
                href="mailto:support@xtoicstudio.ca"
                className="flex items-center gap-2 border border-smoothBlack/50 text-smoothBlack px-6 py-3 rounded-2xl hover:bg-white hover:shadow-md transition-all"
              >
                <Mail size={20} />
                Contact Privacy Team
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Privacy;