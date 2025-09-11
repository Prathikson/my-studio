import { motion } from 'framer-motion';
import { useCookieConsentContext } from './cookieConsentContext';

const CookieBanner = () => {
  const { showBanner, setShowModal, acceptAll } = useCookieConsentContext();

  if (!showBanner) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 20 }}
      className="fixed bottom-4 inset-x-4 sm:inset-x-0 sm:left-1/2 sm:-translate-x-1/2 z-[9999] w-auto sm:w-[90%] max-w-[700px] bg-white text-black border border-gray-300 shadow-xl rounded-xl p-4 sm:p-6 mx-auto"
    >
      <h3 className="text-base sm:text-xl font-semibold mb-2">🍪 We use cookies</h3>
      <p className="text-sm text-smoothBlack mb-4">
        We use cookies to enhance your browsing experience, serve personalized ads, and analyze traffic.
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
        <button
          onClick={() => setShowModal(true)}
          className="w-full sm:w-auto px-4 py-2 text-sm rounded-lg border hover:border-transparent border-smoothBlack/80 text-carbonGray hover:bg-appleBlue  hover:text-white transition"
        >
          Manage Preferences
        </button>
        <button
          onClick={acceptAll}
          className="w-full sm:w-auto px-4 py-2 text-sm rounded-lg bg-smoothBlack text-white hover:opacity-90 transition"
        >
          Accept All
        </button>
      </div>
    </motion.div>
  );
};

export default CookieBanner;
