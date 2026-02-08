import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Eyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate eye movement based on mouse position
  const calculateEyePosition = (eyeCenterX, eyeCenterY) => {
    const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);
    const distance = 6;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  const leftEyePos = calculateEyePosition(window.innerWidth - 60, window.innerHeight - 50);
  const rightEyePos = calculateEyePosition(window.innerWidth - 30, window.innerHeight - 50);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 cursor-pointer z-50 group"
      title="Click to go back to top"
    >
      <div className="bg-gray-900/90 backdrop-blur-sm border border-blue-500/50 rounded-2xl p-3 flex gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:border-blue-400 transition-all duration-300">
        {/* Left Eye */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="w-5 h-5 bg-gray-900 rounded-full absolute"
            animate={{
              x: leftEyePos.x,
              y: leftEyePos.y,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
          </motion.div>
        </div>

        {/* Right Eye */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="w-5 h-5 bg-gray-900 rounded-full absolute"
            animate={{
              x: rightEyePos.x,
              y: rightEyePos.y,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          >
            <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1" />
          </motion.div>
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-blue-600 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Back to top
      </div>
    </motion.div>
  );
}
