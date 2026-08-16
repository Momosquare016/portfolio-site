import { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
// Link does client-side navigation between routes (no full page reload),
// which is why it's used here instead of a plain <a href="/resume">.
import { Link } from 'react-router-dom';
import project1Image from '../assets/images/Yornews.webp';
import project2Image from '../assets/images/KidosAI.webp';
import project3Image from '../assets/images/Dashubs.webp';
import project4Image from '../assets/images/Matteca.webp';

const DotLottieReact = lazy(() =>
  import('@lottiefiles/dotlottie-react').then(m => ({ default: m.DotLottieReact }))
);
import CosmosBackground from '../components/CosmosBackground';
import Timeline from '../components/Timeline';
import ContactPopup from '../components/ContactPopup';
import CopyableContact from '../components/CopyableContact';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      /* h-full + flex-col makes every card fill the full height of its grid row,
         so cards with short descriptions stretch to match the tallest one.
         Combined with mt-auto on the "View Project" line below, that pins the
         link to the bottom of every card so they all line up. */
      className="group flex h-full flex-col bg-gray-900 border border-blue-900/50 hover:border-blue-500 transition-all duration-300 overflow-hidden rounded-lg hover:shadow-xl hover:shadow-blue-500/20"
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
          loading="lazy"
          decoding="async"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {/* flex-1 lets this text block absorb the card's leftover height. */}
      <div className="flex flex-1 flex-col p-4 sm:p-6 space-y-3">
        <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
        {/* mt-auto pushes this to the bottom of the card, whatever the text length. */}
        <div className="mt-auto pt-4 text-blue-500 text-sm font-medium">
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            View Project →
          </span>
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
      title: 'Matteca',
      description: 'Matteca helps track, review and fix your life. Track sleep, gym, diet, macros, work, finance, anything. Type it, speak it, or let the AI parse it.',
      image: project4Image,
      link: 'https://matteca.com/'
    },
    {
      id: 2,
      title: 'Dashubs',
      description: 'Wix website designed for a startup marketplace.',
      image: project3Image,
      link: 'https://www.dashubs.com/'
    },
    {
      id: 3,
      title: 'Yornews',
      description: 'Fullstack website that provides personalized news with the help of AI.',
      image: project1Image,
      link: 'https://yornews.com/'
    },
    {
      id: 4,
      title: 'Kidos AI',
      description: 'A kid-friendly AI chatbot that helps children learn and explore safely, with strong guardrails blocking profanity, vulgar language, and any adult content.',
      image: project2Image,
      link: 'https://kidosai.seeleco.co/'
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
            <h1 className="font-heading font-black text-white tracking-tight text-center -mb-4 sm:-mb-8 md:-mb-12 lg:-mb-16 flex flex-col items-center leading-[1.05]">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                Sales Engineer
              </span>
              <span className="flex items-center gap-3 sm:gap-4 w-full my-1 sm:my-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-400/50" />
                <span className="text-blue-400 font-mono font-normal text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase">
                  and
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-400/50" />
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
                Forward Deployed Engineer
              </span>
            </h1>

            {/* Lottie Animation - Centered and Large */}
            <div className="w-full max-w-xs sm:max-w-3xl md:max-w-4xl lg:max-w-5xl -mb-4 sm:-mb-8 md:-mb-12 lg:-mb-16">
              <Suspense fallback={<div className="w-full aspect-video" />}>
                <DotLottieReact
                  src="/animations/developer-animation.lottie"
                  loop
                  autoplay
                  className="w-full h-auto"
                />
              </Suspense>
            </div>

            {/* Terminal-style Text Below Animation - wraps on mobile instead of clipping */}
            <div className="text-center w-full px-2 sm:px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 font-mono leading-relaxed inline-block border-r-4 border-blue-400 pr-2 sm:animate-typing sm:overflow-hidden sm:whitespace-nowrap max-w-full">
                Techpreneur: I build the tech, then I go sell it
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
            {/* Each entry in this array is one paragraph of the About Me copy.
                Keeping them in an array (instead of writing six <p> tags by hand)
                lets the code below alternate their alignment automatically using
                the index, so adding or removing a paragraph keeps the zig-zag intact. */}
            <div className="space-y-6 md:space-y-8 text-gray-300 leading-relaxed text-lg">
              {[
                <>
                  Hi! I'm Muhammad Ali. Call me{' '}
                  <span className="text-blue-400 font-semibold">Mo</span>, because I can't box. Yet.
                </>,
                <>
                  I build software from scratch, and sell it myself if it's B2B, because I love creating
                  cool tech and talking to people.
                </>,
                <>
                  <span className="text-blue-400 font-semibold">Here's why you should hire me:</span>{' '}
                  I understand the tech you're selling like no other sales
                  person, and I explain it to clients in plain English, with the right jargon for whoever
                  is in the room.
                </>,
                <>
                  All without running to my superiors every five minutes.
                </>,
                <>
                  I can run discovery calls and technical demos, while also building{' '}
                  <span className="text-blue-400 font-semibold">
                    proof of concepts, interactive demos, and ROI models
                  </span>{' '}
                  backed by your own case studies.
                </>,
                <>
                  My approach to sales is high volume and consistent energy, with the empathy to actually
                  understand a client's problem.
                </>,
                <>
                  Check out my{' '}
                  <Link
                    to="/resume"
                    className="text-blue-400 font-semibold underline underline-offset-4 decoration-blue-400/40 hover:text-blue-300 hover:decoration-blue-300 transition-colors"
                  >
                    resume
                  </Link>{' '}
                  to review my experience. Don't take my word for it.
                </>,
              ].map((paragraph, index) => {
                // Even paragraphs (0, 2, 4...) hug the left edge, odd ones hug the right,
                // so the section reads like a text message thread.
                const isLeft = index % 2 === 0;
                return (
                  <p
                    key={index}
                    className={`
                      max-w-[92%] md:max-w-[80%] w-fit
                      rounded-3xl px-5 py-4 sm:px-6 sm:py-5 shadow-lg text-left
                      bg-gray-800/70 border border-white/5
                      ${
                        // Every bubble is the same colour because they are all Mo
                        // talking. Only the side and the tail corner alternate.
                        isLeft
                          ? 'mr-auto rounded-tl-md'
                          : 'ml-auto rounded-tr-md'
                      }
                    `}
                  >
                    {paragraph}
                  </p>
                );
              })}
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
              {/* Phone and email are copy-to-clipboard rather than links, since
                  tel:/mailto: often go nowhere on a desktop browser. */}
              <CopyableContact icon="📱" label="+60 1161455862" value="+601161455862" />
              <div className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <span className="text-2xl">💼</span>
                <a
                  href="https://www.linkedin.com/in/muhammad-ali-35a9762b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <CopyableContact icon="✉️" label="monotify016@gmail.com" value="monotify016@gmail.com" />
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
