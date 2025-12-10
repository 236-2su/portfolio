import { motion } from 'framer-motion';
import { GraduationCap, FileCheck, Languages, Trophy, Database, Server, BrainCircuit, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  const profile = {
    name: '이상욱',
    initials: 'SU',
    title: 'AI 융합 서비스를 설계하는 백엔드 엔지니어',
    bio: '단순한 기능 구현을 넘어, MSA 아키텍처와 AI 기술 접목을 통해 새로운 비즈니스 가치를 창출하는 개발자입니다. FastAPI를 활용한 AI 모델 서빙부터 Spring Boot 기반의 안정적인 서버 구현 및 확장성 있는 데이터 모델링까지 서비스의 핵심을 주도적으로 설계합니다. 다수의 프로젝트에서 팀 리더로서 기술적 난제를 해결하고 팀의 성장을 이끌며 협업의 시너지를 만들어왔습니다.',
  };

  const education = [
    {
      degree: '학사',
      major: '국제무역학과',
      school: '동아대학교',
      period: '2016 - 2022',
    },
  ];

  const awards = [
    {
      title: 'K-Hackathon 최우수상',
      organization: '소프트웨어 교육혁신센터 이사장상',
      date: '2025',
      description: 'first-step-town 프로젝트로 메타버스 소셜 플랫폼 개발',
      project: 'first-step-town',
    },
    {
      title: 'SSAFY 우수 프로젝트',
      organization: 'SSAFY',
      date: '2025.08',
      description: 'Stalk - 실시간 화상 투자 상담 플랫폼 개발',
      project: 'Stalk',
    },
  ];

  const certifications = [
    {
      name: 'SQLD',
      organization: '한국데이터산업진흥원',
      description: 'SQL 개발자 자격증',
    },
    {
      name: 'TOEIC',
      organization: 'ETS',
      description: '680점',
    },
    {
      name: 'OPIc',
      organization: 'ACTFL',
      description: 'IM2 등급',
    },
  ];

  const skillCategories = [
    {
      title: 'Backend & Architecture',
      icon: Database,
      items: ['Spring Boot', 'Django', 'FastAPI', 'MySQL', 'Redis', 'JPA'],
      description: 'Heoby 프로젝트에서 MSA 아키텍처를 설계하여 서비스 간 결합도를 낮추고 유지보수성을 높였습니다. Lookey 프로젝트에서는 Spring Security와 Redis를 연동하여 안전한 인증/인가 시스템을 구축하고 세션 관리를 최적화했습니다.',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'DevOps & Infrastructure',
      icon: Server,
      items: ['Docker', 'Jenkins', 'AWS EC2', 'Nginx', 'GitLab CI'],
      description: 'Heoby 프로젝트에서 Jenkins와 Docker를 활용해 CI/CD 파이프라인을 구축, 코드 변경 사항의 자동 빌드 및 무중단 배포를 실현했습니다. Linbook 등 다수의 프로젝트를 AWS EC2와 Nginx 환경에서 안정적으로 운영했습니다.',
      color: 'bg-green-50 text-green-700',
    },
    {
      title: 'AI Integration',
      icon: BrainCircuit,
      items: ['YOLO', 'MediaPipe', 'MQTT', 'Python', 'OpenCV'],
      description: 'Heoby와 Lookey 프로젝트에서 YOLO 객체 인식 모델과 MediaPipe를 FastAPI 서버로 서빙하고, MQTT 프로토콜을 통해 추론 결과를 실시간으로 백엔드 및 클라이언트에 전송하는 저지연 AI 서비스를 구현했습니다.',
      color: 'bg-purple-50 text-purple-700',
    },
    {
      title: 'Frontend & Interaction',
      icon: Layout,
      items: ['React', 'Vue.js', 'TypeScript', 'WebRTC', 'Chart.js'],
      description: 'Stalk 프로젝트에서 WebRTC(OpenVidu)와 WebSocket을 결합하여 실시간 화상 채팅 및 차트 동기화 기능을 구현했습니다. MyFin 프로젝트에서는 Chart.js를 활용해 복잡한 금융 데이터를 직관적인 시각화 차트로 제공했습니다.',
      color: 'bg-orange-50 text-orange-700',
    },
  ];

  const techStack = [
    'Java (Spring Boot)', 'Python (Django/FastAPI)', 'TypeScript (React)', 'Kotlin (Android)',
    'MySQL & JPA', 'Redis (Caching)', 'WebRTC & Socket', 'MQTT (IoT)',
    'Docker & Jenkins', 'AWS (EC2)', 'GitLab CI/CD', 'Jira (Agile)',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Section */}
        <motion.div
          className="card p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Image with Initials */}
            <motion.div
              className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl border-4 border-white"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {profile.initials}
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {profile.name}
              </motion.h1>
              <motion.p
                className="text-2xl text-gray-600 mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {profile.title}
              </motion.p>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {profile.bio}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary-600" size={36} />
            Education
          </h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="card p-6"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <p className="text-lg text-primary-600 mb-2">{edu.major}</p>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-gray-500 text-sm mt-2">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section (Replaced) */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Database className="text-primary-600" size={36} />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="card p-6 h-full flex flex-col"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.color} bg-opacity-20`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Tags Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="card p-8 bg-white/50 backdrop-blur-sm border-2 border-primary-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
              Core Tools & Keywords
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:border-primary-300 hover:text-primary-600 hover:shadow-sm transition-all shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: 0.6 + index * 0.03 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Trophy className="text-secondary-600" size={36} />
            Awards & Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="card p-6"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{award.title}</h3>
                    <p className="text-primary-600">{award.organization}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{award.description}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-500 text-xs">{award.date}</p>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium">
                    {award.project}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FileCheck className="text-primary-600" size={36} />
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 ? <FileCheck className="text-white" size={32} /> : <Languages className="text-white" size={32} />}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{cert.organization}</p>
                <p className="text-sm text-primary-600 font-medium">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Project Call to Action Button */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link to="/projects">
            <motion.button
              className="group bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg inline-flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              프로젝트 상세 보기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
