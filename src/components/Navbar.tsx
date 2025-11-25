import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, FolderGit2 } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/">
              <motion.div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/')
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={20} />
                <span className="font-medium">Introduction</span>
              </motion.div>
            </Link>

            <Link to="/projects">
              <motion.div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  isActive('/projects')
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderGit2 size={20} />
                <span className="font-medium">Projects</span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
