import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Code, Video, Bot, TrendingUp, MessageSquare, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StalkDetail() {
    const features = [
        {
            title: '실시간 화상 상담',
            description: 'OpenVidu를 활용한 WebRTC 기반 양방향 화상 상담 서비스로, 투자 전문가와 실시간으로 소통할 수 있습니다.',
            icon: Video,
            gif: '/Portfolio/02.S13P11E205/assets/상담 입장, 상담.gif',
        },
        {
            title: '인터랙티브 차트 드로잉',
            description: 'Konva.js를 활용하여 상담 중 차트 위에 실시간으로 그림을 그리며 직관적인 설명이 가능합니다.',
            icon: TrendingUp,
            gif: '/Portfolio/02.S13P11E205/assets/상품조회, 관심종목 저장.gif',
        },
        {
            title: 'AI 상담 요약 리포트',
            description: 'Google Vertex AI를 활용하여 상담 내용을 자동으로 분석하고 요약 리포트를 생성합니다.',
            icon: Bot,
            gif: '/Portfolio/02.S13P11E205/assets/AI요약.gif',
        },
        {
            title: '전문가 프로필 & 예약',
            description: '투자 전문가의 프로필을 조회하고, 찜하기 기능과 원하는 시간에 상담을 예약할 수 있습니다.',
            icon: Users,
            gif: '/Portfolio/02.S13P11E205/assets/전문가 찜, 예약.gif',
        },
        {
            title: '주식 상품 조회',
            description: '한국투자증권 API를 통해 실시간 주식 차트와 다양한 기술적 지표를 확인하고 관심 종목을 저장할 수 있습니다.',
            icon: TrendingUp,
        },
        {
            title: '투자 지식 iN',
            description: '투자 관련 지식을 자유롭게 공유하고 토론할 수 있는 커뮤니티 공간입니다.',
            icon: MessageSquare,
            gif: '/Portfolio/02.S13P11E205/assets/커뮤니티.gif',
        },
    ];

    const techStack = {
        frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Chart.js', 'Konva.js', 'Axios'],
        backend: ['Spring Boot 3.x', 'Java 17', 'MyBatis', 'MySQL 8.0', 'Redis 7.x'],
        infrastructure: ['Docker', 'Jenkins', 'GitLab', 'Nginx', 'AWS EC2', 'Google Cloud Platform'],
        realtime: ['OpenVidu 2.30.0', 'WebRTC'],
        ai: ['Google Vertex AI'],
        apis: ['한국투자증권 API (KIS)', '한국거래소 API (KRX)', '토스페이먼츠'],
    };

    return (
        <div className="min-h-screen pt-24 pb-16 px-6 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                {/* Back Button */}
                <Link to="/projects">
                    <motion.button
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
                        whileHover={{ x: -5 }}
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">프로젝트 목록으로</span>
                    </motion.button>
                </Link>

                {/* Header */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex items-start justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="text-yellow-500" size={32} />
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">
                                    SSAFY 우수 프로젝트
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Stalk</h1>
                            <p className="text-xl text-gray-600">WebRTC 기반 화상 상담 차트 드로잉 서비스</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://www.notion.so/E205-25679a75be70801fbfbbc15543cd387e"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                title="Notion 문서"
                            >
                                <FileText size={24} />
                            </a>
                            <a
                                href="https://lab.ssafy.com/s13-webmobile1-sub1/S13P11E205"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/demo/stalk"
                                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                <ExternalLink size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025.07.07 - 2025.08.22 (7주)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>6인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Frontend Developer</span>
                        </div>
                    </div>
                </motion.div>

                {/* Project Overview */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 소개</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Stalk</strong>는 투자 전문가와 사용자가 실시간으로 차트를 보며 소통하는 WebRTC 기반의 화상 상담 서비스입니다.
                        기존의 온라인 강의나 증권사 리포트와 같은 일방향적인 정보 제공 방식의 한계를 극복하고,
                        개인 맞춤형 투자 상담을 제공하여 투자 지식을 더 똑똑하게 공유하고 성장하는 것을 목표로 합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        OpenVidu 서버를 통한 실시간 화상 통신과 Konva.js를 활용한 인터랙티브 차트 드로잉 기능으로
                        전문가와 사용자 간의 효과적인 커뮤니케이션을 지원합니다. 또한 Google Vertex AI를 활용하여
                        상담 내용을 자동으로 분석하고 요약 리포트를 생성하는 혁신적인 기능을 제공합니다.
                    </p>
                </motion.div>

                {/* Key Features with GIFs */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">주요 기능</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="card p-6"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                {feature.gif && (
                                    <div className="mb-4 rounded-lg overflow-hidden">
                                        <img
                                            src={feature.gif}
                                            alt={feature.title}
                                            className="w-full h-48 object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                                        <feature.icon className="text-primary-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.frontend.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.backend.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Real-time Communication</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.realtime.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">AI & ML</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.ai.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Infrastructure & DevOps</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.infrastructure.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">External APIs</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.apis.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* My Role */}
                <motion.div
                    className="card p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">담당 역할</h2>
                    <div className="space-y-3 text-gray-700">
                        <div>
                            <span className="text-primary-600 font-semibold">Frontend</span>
                            <span> : React 웹 애플리케이션 개발</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
