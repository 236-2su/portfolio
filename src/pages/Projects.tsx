import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Lock } from 'lucide-react';
import { PROJECTS } from '../constants/projects';

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 via-secondary-600 to-primary-600" />

          {/* Projects */}
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative mb-16 flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <motion.div
                  className="card p-6"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* Logo (clickable if demo exists and not disabled) */}
                    {project.logo ? (
                      project.hasDemo && project.demoLink && !project.disabled ? (
                        <Link to={project.demoLink}>
                          <img
                            src={project.logo}
                            alt={project.name}
                            className="w-16 h-16 object-contain rounded-lg hover:scale-105 transition-transform"
                          />
                        </Link>
                      ) : (
                        <img
                          src={project.logo}
                          alt={project.name}
                          className={`w-16 h-16 object-contain rounded-lg ${project.disabled ? 'opacity-50 grayscale' : ''}`}
                        />
                      )
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {project.name[0].toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 whitespace-pre-wrap">
                    {project.description.split('\n').map((line, i) => {
                      const parts = line.split(':');
                      if (parts.length === 2) {
                        return (
                          <span key={i}>
                            <span className="text-primary-600 font-semibold">{parts[0]}</span>
                            <span>: {parts[1]}</span>
                            {i < project.description.split('\n').length - 1 && <br />}
                          </span>
                        );
                      }
                      return <span key={i}>{line}<br /></span>;
                    })}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.hasDemo ? (
                    project.disabled ? (
                      <button
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium"
                        disabled
                      >
                        <Lock size={18} />
                        Demo Unavailable
                      </button>
                    ) : (
                      <Link to={project.demoLink!}>
                        <motion.button
                          className="btn-primary w-full flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          View Demo
                        </motion.button>
                      </Link>
                    )
                  ) : (
                    <div className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-center">
                      Description Only
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link to={`/projects/${project.name}`} className="mt-3 block">
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      프로젝트 상세보기
                    </motion.button>
                  </Link>

                </motion.div>
              </div>

              {/* Center Node */}
              <motion.div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 z-10 ${project.disabled
                  ? 'bg-gray-200 border-gray-400'
                  : 'bg-white border-primary-600'
                  }`}
                whileHover={{ scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />

              {/* Empty Space on Other Side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
