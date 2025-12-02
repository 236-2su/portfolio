import { motion } from 'framer-motion';
import { GraduationCap, Code, FileCheck, Languages, Trophy } from 'lucide-react';

export default function Introduction() {
  const profile = {
    name: '이상욱',
    initials: 'SU',
    title: 'Full-Stack Developer · Backend Developer',
    bio: '다양한 기술 스택을 활용하여 실용적인 웹 애플리케이션을 개발하는 풀스택 개발자입니다. 백엔드 개발에 강점을 가지고 있으며, AI 기술을 활용한 혁신적인 서비스 구현 경험이 있습니다. 팀 프로젝트에서 리더십을 발휘하며 협업을 통해 성공적인 결과물을 만들어냅니다.',
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
      date: '2024.08',
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

  const skills = [
    { name: 'Spring Boot', level: 60, category: 'Backend', color: 'from-green-500 to-green-600' },
    { name: 'Django', level: 50, category: 'Backend', color: 'from-emerald-500 to-emerald-600' },
    { name: 'React', level: 50, category: 'Frontend', color: 'from-blue-500 to-blue-600' },
    { name: 'Vue.js', level: 30, category: 'Frontend', color: 'from-teal-500 to-teal-600' },
  ];

  const techStack = [
    'Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin',
    'MySQL', 'SQLite', 'FastAPI', 'OpenVidu', 'WebRTC',
    'YOLO', 'MediaPipe', 'MQTT', 'Docker', 'Git', 'Jira',
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

        {/* Skills Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Code className="text-primary-600" size={36} />
            Technical Skills
          </h2>

          {/* Main Skills with Progress Bars */}
          <div className="card p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Core Technologies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
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
      </div>
    </div>
  );
}
