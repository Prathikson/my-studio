import { useState } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import MapSection from "./sections/MapSection";
import emailjs from "emailjs-com";
import confetti, {type Options as ConfettiOptions } from "canvas-confetti";
import CTASection from "../home/sections/CTASection";
import { TapeSection } from "../home/sections/Tape";
import OurHero from "../about/components/OurHero";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const inputVariants: Variants = {
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  blur: {
    scale: 1,
    transition: { duration: 0.2 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    solution: "",
    otherDetail: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    solution: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validate = () => {
    const errs = { name: "", email: "", message: "", solution: "" };
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    if (!formData.solution) errs.solution = "Please select a solution type.";
    setErrors(errs);
    return !Object.values(errs).some(Boolean);
  };



  const fireConfetti = () => {
    const count = 200;
const defaults: ConfettiOptions = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  ticks: 200,
  zIndex: 1000,
};

    function fire(particleRatio: number, opts: ConfettiOptions) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      solution: formData.solution,
      otherDetail: formData.solution === "Others" ? formData.otherDetail : "N/A",
      year: new Date().getFullYear(),
    };

    try {
      await emailjs.send("service_zatn4qe", "template_79aslw4", templateParams, "wpCvIng0RoMXoeSTz");
      setFormData({ name: "", email: "", message: "", solution: "", otherDetail: "" });
      setShowConfirmation(true);
      fireConfetti();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-lightGray pt-20 pb-16 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<OurHero textSize="md" topText="Get In Touch" leftText="Say" rightText="Hi 👋" imageUrl="/icon_5.svg"/>
          </motion.div>
        </div>

      {/* Contact Form + Map Section */}
      <div className="bg-lightGray py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.h2 
                  variants={itemVariants}
                  className="text-6xl font-semibold text-carbonGray"
                >
                  Let's Work Together
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Tell us about your project and we'll help you bring your vision to life.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {["name", "email"].map((field) => (
                    <motion.div 
                      key={field} 
                      variants={itemVariants}
                      className="relative group"
                    >
                      <motion.input
                        variants={inputVariants}
                        animate={focusedField === field ? "focus" : "blur"}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        className={`w-full border-b-2 bg-transparent py-4 px-4 focus:outline-none border-carbonBlack  focus:border-appleBlue placeholder-smoothBlack transition-all duration-300 text-lg  ${
                          errors[field as keyof typeof errors] ? "border-red-500 bg-red-50" : "border-gray-200"
                        }`}
                        value={formData[field as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                      />
                      {errors[field as keyof typeof errors] && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500 mt-2 flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors[field as keyof typeof errors]}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Service Select */}
                <motion.div variants={itemVariants} className="relative group">
                  <motion.select
                    variants={inputVariants}
                    animate={focusedField === "solution" ? "focus" : "blur"}
                    name="solution"
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    onFocus={() => setFocusedField("solution")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full border-b-2 bg-transparent placeholder-smoothBlack  py-4 px-4 focus:outline-none focus:border-appleBlue text-lg transition-all duration-300 border-carbonBlack ${
                      errors.solution ? "border-red-500 bg-red-50" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select Services Needed</option>
                    <option value="Branding">🎨 Branding</option>
                    <option value="Social">📱 Social Media Marketing</option>
                    <option value="Build">💻 Web Development & SEO</option>
                    <option value="Design">🎯 Web & Graphic Designing</option>
                    <option value="Others">✨ Other Services</option>
                  </motion.select>
                  {errors.solution && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-2 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.solution}
                    </motion.p>
                  )}
                </motion.div>

                {/* Other Details */}
                {formData.solution === "Others" && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative group"
                  >
                    <motion.input
                      variants={inputVariants}
                      animate={focusedField === "otherDetail" ? "focus" : "blur"}
                      type="text"
                      name="otherDetail"
                      placeholder="Please specify your requirements"
                      className="w-full border-b-2 border-carbonBlack bg-transparent py-4 px-4 focus:outline-none focus:border-appleBlue placeholder-smoothBlack transition-all duration-300 text-lg"
                      value={formData.otherDetail}
                      onChange={(e) => setFormData({ ...formData, otherDetail: e.target.value })}
                      onFocus={() => setFocusedField("otherDetail")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                )}

                {/* Message */}
                <motion.div variants={itemVariants} className="relative group">
                  <motion.textarea
                    variants={inputVariants}
                    animate={focusedField === "message" ? "focus" : "blur"}
                    name="message"
                    placeholder="Tell us about your project..."
                    className={`w-full border-b-2 bg-transparent border-carbonBlack py-4 px-4 resize-none h-40 focus:outline-none  focus:border-appleBlue placeholder-smoothBlack transition-all duration-300 text-lg  ${
                      errors.message ? "border-red-500 bg-red-50" : "border-gray-200"
                    }`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 mt-2 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-appleBlue to-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981]  to-[#059669] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </motion.svg>
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div 
              variants={itemVariants}
              className="lg:sticky lg:top-8 space-y-6"
            >

              <div className="rounded-3xl overflow-hidden shadow-xl">
                <MapSection />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    <TapeSection/>
    <CTASection/>

      {/* Success Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowConfirmation(false)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white text-carbonGray p-8 rounded-3xl shadow-2xl w-full max-w-md text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
              >
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 13l4 4L19 7" 
                  />
                </motion.svg>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent"
              >
                Message Sent! 🎉
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 mb-8 text-lg leading-relaxed"
              >
                Thanks for reaching out! We'll get back to you within 24 hours.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowConfirmation(false)}
                className="bg-gradient-to-r from-appleBlue to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Exploring
              </motion.button>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full animate-bounce" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;