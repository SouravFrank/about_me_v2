import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'colored' | 'white';
  Icon?: React.ElementType;
  downloadClicked?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ label, onClick, variant = 'colored', Icon, downloadClicked }) => {
  const buttonStyles = variant === 'colored'
    ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white'
    : 'bg-white border-2 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-white';

  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden px-10 py-4 rounded-full font-medium shadow-xl 
        ${downloadClicked ? 'bg-green-500' : buttonStyles} 
        hover:shadow-2xl transition-all duration-300`}
      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        initial={false}
        animate={{
          opacity: downloadClicked ? 0 : 1,
          y: downloadClicked ? -20 : 0,
        }}
        className="flex items-center gap-3 text-lg"
      >
        {Icon && <Icon className="w-6 h-6" />}
        {label}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: downloadClicked ? 1 : 0,
          y: downloadClicked ? 0 : 20,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Check className="w-6 h-6 text-white" />
      </motion.span>
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)',
            animationDuration: '1s',
            opacity: 0, // Start hidden
          }}
        />
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transform: 'translateX(-100%)',
            animationDuration: '1s',
            animationDelay: '0.5s',
            opacity: 0, // Start hidden
          }}
        />
      </div>
      {/* Show shimmer on hover */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        button:hover .animate-shimmer {
          opacity: 1; // Show shimmer on hover
          animation: shimmer 1s infinite; // Apply shimmer animation
        }
      `}</style>
    </motion.button>
  );
};

export default CTAButton; 