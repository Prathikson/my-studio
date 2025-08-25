import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  image: string;
  logo: string;
}

interface TestimonialSectionProps {
  testimonials?: TestimonialProps[];
}

const defaultTestimonials: TestimonialProps[] = [
  {
    id: 1,
    quote:
      "Rise at Seven's creative approach to SEO and digital PR is what has attracted us to them and they've already proved the value they bring to us in fuelling digital growth for the PLT brand internationally.",
    author: {
      name: 'Matt Holmes',
      title: 'Head of Digital PLT',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1594736797933-d0a56ba98d45?w=600&h=400&fit=crop',
    logo: '🎯',
  },
  {
    id: 2,
    quote:
      'Their strategic approach to digital marketing has transformed our brand presence and delivered exceptional results across all our campaigns.',
    author: {
      name: 'Sarah Johnson',
      title: 'Marketing Director',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b332c3db?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    logo: 'AD',
  },
  {
    id: 3,
    quote:
      'Working with this team has been a game-changer for our digital growth strategy and brand positioning in the market.',
    author: {
      name: 'David Chen',
      title: 'CEO GameTech',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop',
    logo: 'GAME',
  },
  {
    id: 4,
    quote:
      'The restructuring of our digital presence has led to unprecedented growth and market expansion opportunities.',
    author: {
      name: 'Emma Wilson',
      title: 'Operations Manager',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
    logo: 'REST',
  },
  {
    id: 5,
    quote:
      'Their innovative approach to sustainable beauty marketing has revolutionized how we connect with our environmentally conscious customers.',
    author: {
      name: 'Lisa Rodriguez',
      title: 'Brand Director',
      avatar:
        'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop',
    logo: 'BEAUTY',
  },
  {
    id: 6,
    quote:
      'Outstanding results and exceptional service delivery that exceeded all our expectations and business objectives.',
    author: {
      name: 'Michael Brown',
      title: 'Growth Lead',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop',
    logo: '🏆',
  },
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };


  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prev = (currentIndex - 1 + total) % total;
    const next = (currentIndex + 1) % total;
    return { prev, current: currentIndex, next };
  };

  const { prev, current, next } = getVisibleTestimonials();

  return (
    <div className="max-w-full px-2 sm:px-4 md:px-6 lg:px-10 mx-2 sm:mx-4 md:mx-6 lg:mx-10 my-6 sm:my-8 md:my-10 bg-carbonGray rounded-3xl">

        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-lightGray text-lg sm:text-xl md:text-2xl mx-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 0.3 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
              <span className="text-lightGray">Recommended by</span>
              <br />
              <span className="text-lightGray">category </span>
              <span className="inline-flex items-center mt-2 sm:mt-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gray-300 rounded-lg mx-2 sm:mx-3 md:mx-4 flex items-center justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl">👥</span>
                </div>
                <span className="text-lightGray">leaders</span>
              </span>
            </h1>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-full">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-4 xl:space-x-6 2xl:space-x-8 space-y-6 lg:space-y-0">
              {/* Previous testimonial (hide on mobile and tablet) */}
              <motion.div
                className="hidden xl:block flex-shrink-0 opacity-30 blur-sm scale-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/90 backdrop-blur-sm text-black p-4 sm:p-5 md:p-6 rounded-2xl w-72 sm:w-80 h-52 sm:h-56 md:h-64 flex flex-col justify-between">
                  <blockquote className="text-sm leading-relaxed">
                    "{testimonials[prev].quote.substring(0, 100)}..."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    <img
                      src={testimonials[prev].author.avatar}
                      alt={testimonials[prev].author.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonials[prev].author.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonials[prev].author.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Current testimonial with slide animation */}
              <div className="w-full max-w-5xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="flex flex-col md:flex-row bg-lightGray rounded-3xl backdrop-blur-sm text-carbonBlack overflow-hidden shadow-2xl w-full"
                  >
                    {/* Text */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6 font-medium">
                        "{testimonials[current].quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonials[current].author.avatar}
                          alt={testimonials[current].author.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl mr-3 sm:mr-4 object-cover"
                        />
                        <div>
                          <div className="font-semibold text-sm sm:text-base md:text-lg">
                            {testimonials[current].author.name}
                          </div>
                          <div className="text-black/80 text-xs sm:text-sm">
                            {testimonials[current].author.title}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 relative h-40 sm:h-48 md:h-64 lg:h-auto lg:min-h-[300px]">
                      <img
                        src={testimonials[current].image}
                        alt="Team"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next testimonial (hide on mobile and tablet) */}
              <motion.div
                className="hidden xl:block flex-shrink-0 opacity-30 blur-sm scale-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/90 backdrop-blur-sm text-black p-4 sm:p-5 md:p-6 rounded-2xl w-72 sm:w-80 h-52 sm:h-56 md:h-64 flex flex-col justify-between">
                  <blockquote className="text-sm leading-relaxed">
                    "{testimonials[next].quote.substring(0, 100)}..."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    <img
                      src={testimonials[next].author.avatar}
                      alt={testimonials[next].author.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonials[next].author.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonials[next].author.title}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>


          </div>

          {/* Navigation Logos */}
          <motion.div
            className="flex flex-wrap justify-center mt-8 sm:mt-12 md:mt-16 gap-2 sm:gap-3 md:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-10 h-8 sm:w-12 sm:h-10 md:w-16 md:h-12 lg:w-20 lg:h-12 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white/20 border-2 border-white/40 scale-110'
                    : 'bg-white/10 hover:bg-white/15 border border-white/20'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`text-white font-bold ${
                    testimonial.logo.length > 2 ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
                  }`}
                >
                  {testimonial.logo}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Progress indicator for mobile */}
          <div className="flex justify-center mt-6 sm:mt-8 md:hidden">
            <span className="text-white/60 text-sm">
              {currentIndex + 1} of {testimonials.length}
            </span>
          </div>
        </div>
      </div>
  );
};

export default TestimonialSection;