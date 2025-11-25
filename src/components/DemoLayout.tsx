import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface DemoLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function DemoLayout({ children, title, description }: DemoLayoutProps) {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-6 mb-6">
        <Link to="/projects">
          <motion.button
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Projects</span>
          </motion.button>
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 mb-8">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Demo Content */}
      {children}
    </div>
  );
}
