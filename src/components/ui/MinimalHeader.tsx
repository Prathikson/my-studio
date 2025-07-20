import { motion } from 'framer-motion';

type MinimalHeaderProps = {
  pillText?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitleBold?: string;
  subtitleText?: string;
  pillColor?: string;
  pillTextColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  titleSize?: string;
  subtitleSize?: string;
  alignment?: 'left' | 'center' | 'right';
};

const MinimalHeader: React.FC<MinimalHeaderProps> = (props) => {
  const {
    pillText,
    titleLine1,
    titleLine2,
    subtitleBold,
    subtitleText,
    pillColor,
    pillTextColor,
    titleColor,
    subtitleColor,
    titleSize,
    subtitleSize,
    alignment,
  } = props;

  const textAlignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[alignment || 'center'];

  return (
    <motion.header
      className={`w-full py-16 px-4 flex flex-col ${textAlignClass}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Pill */}
      {pillText && (
        <div
          className={`inline-block px-4 py-1.5 rounded-full mb-6 font-medium text-sm ${
            pillColor || 'bg-black/5'
          } ${pillTextColor || 'text-black/80'}`}
        >
          {pillText}
        </div>
      )}

      {/* Title */}
      <h1
        className={`font-extrabold leading-tight ${titleColor || 'text-carbonGray'} ${
          titleSize || 'text-5xl md:text-6xl'
        }`}
      >
        {titleLine1} <br />
        {titleLine2}
      </h1>

      {/* Subtitle */}
      {(subtitleBold || subtitleText) && (
        <p
          className={`mt-6 max-w-2xl ${subtitleColor || 'text-black/70'} ${
            subtitleSize || 'text-base md:text-lg'
          }`}
        >
          {subtitleBold && <strong className="font-semibold text-black">{subtitleBold}</strong>}{' '}
          {subtitleText}
        </p>
      )}
    </motion.header>
  );
};

export default MinimalHeader;
