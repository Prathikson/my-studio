import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCookieConsentContext } from './CookieProviderWrapper';
import type { CookieConsentType } from './useCookieConsent';

const CookieModal = () => {
  const { showModal, setShowModal, saveConsent, consent } = useCookieConsentContext();
  const [temp, setTemp] = useState<Record<CookieConsentType, boolean>>(consent);

  useEffect(() => {
    if (showModal) {
      setTemp(consent);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showModal, consent]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setShowModal]);

  const handleChange = (key: CookieConsentType) => {
    if (key === 'essential') return;
    setTemp((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white w-full max-w-md rounded-xl p-6 shadow-xl relative mx-4"
          >
            <button
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 id="cookie-modal-title" className="text-xl font-semibold mb-2">
              🍪 Cookie Preferences
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Choose which cookies you want to allow.
            </p>

            <div className="space-y-4">
              {(['essential', 'analytics', 'marketing'] as CookieConsentType[]).map((type) => (
                <div
                  key={type}
                  className="flex justify-between items-start border border-gray-200 p-3 rounded-lg"
                >
                  <div className="pr-2">
                    <p className="font-medium capitalize">{type}</p>
                    <p className="text-xs text-gray-500">
                      {type === 'essential'
                        ? 'Required for site functionality.'
                        : type === 'analytics'
                        ? 'Used to analyze traffic and usage.'
                        : 'Used for ad personalization and remarketing.'}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={temp[type]}
                    disabled={type === 'essential'}
                    onChange={() => handleChange(type)}
                    className="w-5 h-5 mt-1"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => saveConsent(temp)}
              className="mt-6 w-full px-5 py-2.5 bg-black text-white rounded-md hover:bg-appleBlue transition"
            >
              Save Preferences
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieModal;
