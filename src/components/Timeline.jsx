import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2023',
    title: 'Double degree in computer science and business... but wasn\'t quiet enough',
    description: 'Inspired, but still learning.',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2023-24',
    title: 'Petville Global Startup',
    description: 'Major operations and navigating AI SaaS tech.',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024-25',
    title: 'Dashubs',
    description: 'Wanted more of the tech startup experience.',
    icon: '💼',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    year: '2025 September',
    title: 'Sigma School',
    description: 'Certification as a Full Stack Engineer.',
    icon: '📜',
    color: 'from-orange-500 to-amber-500',
  },
  {
    year: '2026',
    title: 'Open to New Remote Opportunities',
    description: 'Waiting for your call.',
    icon: '📞',
    color: 'from-pink-500 to-rose-500',
  },
];

function TimelineItem({ milestone, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      /* On mobile: single-column layout (icon on left, card on right).
         On md+: alternating left/right layout */
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} relative`}
      initial={{ opacity: 0, x: 0, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Icon - shown first on mobile (left side) */}
      <motion.div
        className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center text-xl md:text-2xl shadow-lg z-10 flex-shrink-0 md:order-none`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: 'spring' }}
      >
        {milestone.icon}
      </motion.div>

      {/* Content Card - takes remaining space on mobile, flex-1 on desktop */}
      <div className={`flex-1 text-left ${isLeft ? 'md:text-right' : 'md:text-left'} md:order-none`}>
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm border border-blue-900/50 rounded-xl p-4 md:p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          whileHover={{ scale: 1.02 }}
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-bold bg-gradient-to-r ${milestone.color} text-white mb-3`}>
            {milestone.year}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">{milestone.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
        </motion.div>
      </div>

      {/* Empty space for alignment - only visible on desktop for the alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-heading text-3xl md:text-4xl font-bold text-white mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical line - on left side (behind icons) on mobile, centered on desktop */}
          <motion.div
            className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ top: 0, bottom: 0 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <TimelineItem key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
