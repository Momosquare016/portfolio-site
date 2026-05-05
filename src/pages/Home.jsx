import { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useInView } from 'framer-motion';
import project1Image from '../assets/images/Yornews.png';
import project2Image from '../assets/images/Kidos AI.png';
import project3Image from '../assets/images/Dashubs.png';
import project4Image from '../assets/images/Matteca.png';
import CosmosBackground from '../components/CosmosBackground';
import Timeline from '../components/Timeline';
import ContactPopup from '../components/ContactPopup';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-900 border border-blue-900/50 hover:border-blue-500 transition-all duration-300 overflow-hidden rounded-lg hover:shadow-xl hover:shadow-blue-500/20"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="aspect-video bg-gray-800 border-b border-blue-900/50 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-4 sm:p-6 space-y-3">
        <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="pt-2 text-blue-500 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
          View Project →
        </div>
      </div>
    </motion.a>
  );
}

function ProjectsSection({ projects }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-6xl">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Yornews',
      description: 'Fullstack website that provides personalized news with the help of AI.',
      image: project1Image,
      link: 'https://yornews.com/'
    },
    {
      id: 2,
      title: 'Kidos AI',
      description: 'A kid-friendly AI chatbot that helps children learn and explore safely, with strong guardrails blocking profanity, vulgar language, and any adult content.',
      image: project2Image,
      link: 'https://kidosai.seeleco.co/'
    },
    {
      id: 3,
      title: 'Dashubs',
      description: 'Wix website designed for a startup marketplace.',
      image: project3Image,
      link: 'https://www.dashubs.com/'
    },
    {
      id: 4,
      title: 'Matteca',
      description: 'Matteca helps track, review and fix your life. Track sleep, gym, diet, macros, work, finance, anything. Type it, speak it, or let the AI parse it.',
      image: project4Image,
      link: 'https://matteca.com/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Contact Popup */}
      <ContactPopup />

      {/* Hero Section - shorter min-height on mobile to avoid huge empty gap */}
      <section className="pt-24 sm:pt-32 pb-8 sm:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 min-h-[60vh] sm:min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Cosmos Background */}
        <CosmosBackground />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col items-center justify-center">

            {/* Title Above Animation - smaller on mobile */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight text-center -mb-4 sm:-mb-8 md:-mb-12 lg:-mb-16">
              Full-Stack Developer
            </h1>

            {/* Lottie Animation - Centered and Large */}
            <div className="w-full max-w-xs sm:max-w-3xl md:max-w-4xl lg:max-w-5xl -mb-4 sm:-mb-8 md:-mb-12 lg:-mb-16">
              <DotLottieReact
                src="/animations/developer-animation.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>

            {/* Terminal-style Text Below Animation - wraps on mobile instead of clipping */}
            <div className="text-center w-full px-2 sm:px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 font-mono leading-relaxed inline-block border-r-4 border-blue-400 pr-2 sm:animate-typing sm:overflow-hidden sm:whitespace-nowrap max-w-full">
                Building responsive web experiences at AI-speed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Timeline / Journey Section */}
      <Timeline />

      {/* About Me Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/40 to-gray-900/60 border border-blue-900/50 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              About Me
            </h2>
            <div className="space-y-10 text-gray-300 leading-relaxed text-lg">
              <p>
                Hi, I'm <span className="text-blue-400 font-semibold">Muhammad Ali (Mo)</span>.
                I'm passionate about creating technology that not only works but solves real problems for people.
                While I love building tech, I'm equally fascinated by understanding customer needs and turning
                those insights into meaningful products—this is the business side of me.
              </p>
              <p>
                I'm pursuing a degree in Computer Science at Monash to strengthen my coding skills and grasp
                key tech concepts. At the same time, I study Business to better understand how to bring tech
                products to market and explore opportunities in the fintech space. My goal is to bridge the
                gap between tech creation and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact */}
      <footer className="py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-blue-900/30 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
              Contact Me
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-2xl">📱</span>
                <a href="tel:+601161455862" className="text-lg hover:underline">
                  +60 1161455862
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-2xl">💼</span>
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-r-35a9762b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-2xl">✉️</span>
                <a href="mailto:monotify016@gmail.com" className="text-lg hover:underline">
                  monotify016@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-blue-900/30">
            <p className="text-gray-500 text-sm">
              © 2024 Muhammad Ali. Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
