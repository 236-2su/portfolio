import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Lock, Info } from 'lucide-react';
import { PROJECTS } from '../constants/projects';

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h1
          className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent pb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        {/* Global Demo Notice */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Info className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-blue-800">안내: 데모 페이지 구동 방식</h2>
          </div>
          <p className="text-blue-700 leading-relaxed text-sm md:text-base">
            해당 포트폴리오의 모든 <strong>Interactive Demo (Mock Data)</strong>는 <strong>Mock Service Worker (MSW)</strong>를
            <br className="hidden md:block" />
            활용하여 프론트엔드 단에서 가상의 데이터를 연동해 구동됩니다.
            <br className="hidden md:block" />
            <span className="text-blue-800 font-semibold mt-2 inline-block">
              ⚠️ 주의사항: WebRTC(화상 통화), MQTT(실시간 알림), 백엔드 AI 추론 등 라이브 서버 연동이 필수적인 핵심 기능들은 데모 환경에서 제한적으로 동작하거나 UI 흐름만 확인하실 수 있습니다.
            </span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card p-6 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  {/* Logo */}
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
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.period}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-gray-700 mb-4 whitespace-pre-wrap line-clamp-4">
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
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs font-medium">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  {project.hasDemo ? (
                    project.disabled ? (
                      <button
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium text-sm"
                        disabled
                      >
                        <Lock size={16} />
                        Demo Unavailable
                      </button>
                    ) : (
                      <Link to={project.demoLink!} className="block">
                        <motion.button
                          className="btn-primary w-full flex items-center justify-center gap-2 py-2 text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={16} />
                          View Demo (Mock)
                        </motion.button>
                      </Link>
                    )
                  ) : (
                    <div className="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-center text-sm">
                      Description Only
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link to={`/projects/${project.name}`} className="block">
                    <motion.button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={14} />
                      상세보기
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
