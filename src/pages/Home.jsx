import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import project1Image from '../assets/images/Screenshot 2025-11-18 021857.png';
import project2Image from '../assets/images/Screenshot 2025-11-18 021938.png';
import project3Image from '../assets/images/Screenshot 2025-11-18 021957.png';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Your first project description',
      image: project1Image,
      link: 'https://example.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Your second project description',
      image: project2Image,
      link: 'https://example.com'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Your third project description',
      image: project3Image,
      link: 'https://example.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center">

            {/* Title Above Animation */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight text-center -mb-8 md:-mb-12 lg:-mb-16">
              Full-Stack Developer
            </h1>

            {/* Lottie Animation - Centered and Large */}
            <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl -mb-8 md:-mb-12 lg:-mb-16">
              <DotLottieReact
                src="/animations/developer-animation.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>

            {/* Terminal-style Text Below Animation */}
            <div className="text-center w-full px-4">
              <p className="text-base md:text-lg lg:text-xl text-blue-400 font-mono leading-relaxed inline-block border-r-4 border-blue-400 pr-2 animate-typing overflow-hidden whitespace-nowrap max-w-full">
                Building responsive web experiences at AI-speed by curiosity and a passion for creating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-5xl">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-blue-900/50 hover:border-blue-500 transition-all duration-300 overflow-hidden rounded-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="aspect-video bg-gray-800 border-b border-blue-900/50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-950/40 to-gray-900/60 border border-blue-900/50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl">
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
      <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-blue-900/30 bg-black/50">
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
