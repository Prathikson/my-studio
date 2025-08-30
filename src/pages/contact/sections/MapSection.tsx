import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X,  Map } from 'lucide-react';

const MapSection = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  return (
    <div className="relative bg-smoothBlack text-lightGray">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center min-h-[600px] w-full px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
<p className="text-lightGray text-lg mb-4 font-light tracking-wide">
  Smarter. Faster. Closer than ever.
</p>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
  <span className="font-normal">XTOIC STUDIO</span>
  <sup className="text-2xl md:text-3xl">®</sup> Visit us
</h1>

          <motion.button
            onClick={openMap}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative rounded-2xl bg-lightGray backdrop-blur-xl 
                     px-8 py-4 text-carbonGray font-medium text-lg
                     hover:bg-lightGray/90
                     transition-all duration-300 ease-out
                     "
          >
            <span className="flex items-center gap-3">
              Show the Map
              <Map 
                size={20} 
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
              />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 backdrop-blur-sm rounded-lg flex items-center justify-center p-4"
            onClick={closeMap}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full max-w-none max-h-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full Screen Map */}
             <div className="w-full h-full rounded-xl border-2 border-black/20 overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.0623486990867!2d-113.3631154!3d53.4494717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a019861b2a7421%3A0x9e503cfe9bee58b6!2s1306%2014%20Ave%20NW%2C%20Edmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1756401521363!5m2!1sen!2sca" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full"
/>
</div>


              {/* Capsules Info Card - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="absolute top-6 left-6 bg-smoothBlack backdrop-blur-md rounded-3xl p-6 shadow-2xl max-w-sm"
              >
                <div className="flex items-start gap-4">
                  {/* Capsule Image */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src="/x.svg"
                      alt="Capsule"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-white">
                    <h3 className="text-xl font-light mb-1">
                      <span className="font-normal">XTOIC STUDIO</span><sup className="text-sm">®</sup>
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">1307 14 Ave NW</p>
                    <p className="text-gray-400 text-sm mb-3">Edmonton, Alberta</p>
                    
                    <p className="text-white text-sm font-medium mb-3">CANADA</p>
                  </div>
                </div>
              </motion.div>

              {/* Center Location Pin */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring", stiffness: 150 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-gray-900 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 w-8 h-8 bg-gray-900/30 rounded-full animate-ping"></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Close Button - Bottom Center */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ delay: 0.4, duration: 0.3 }}
  className="fixed bottom-8 inset-x-0 flex justify-center px-4 z-20"
>
              <motion.button
                onClick={closeMap}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lightGray backdrop-blur-sm rounded-2xl px-6 py-4 flex items-center gap-3 
                         shadow-lg hover:shadow-xl transition-all duration-200 text-carbonGray font-medium"
              >
                <span>Close</span>
                <div className="w-6 h-6 bg-carbonGray rounded-full flex items-center justify-center">
                  <X size={14} className="text-lightGray" />
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapSection;