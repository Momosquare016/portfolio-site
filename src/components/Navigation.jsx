import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/Png backgroundless mo.png';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 flex items-center justify-center">
              <img
                src={logoImage}
                alt="MO"
                className="w-full h-full object-cover object-[50%_15%] scale-120"
              />
            </div>
            <span className="font-heading text-white text-2xl font-bold group-hover:text-blue-400 transition-colors">
              MO
            </span>
          </Link>

          <div className="flex gap-8 md:gap-12">
            <Link
              to="/"
              className={`transition-colors font-medium text-xl ${
                isActive('/')
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/resume"
              className={`transition-colors font-medium text-xl ${
                isActive('/resume')
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
