import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Code, Video, Bell, Activity, Shield, BarChart3, Smartphone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeobyDetail() {
    const features = [
        {
            title: '실시간 영상 스트리밍',
            description: 'MediaMTX 서버를 통한 RTSP 기반 실시간 영상 스트리밍을 제공합니다. 웹과 모바일 앱에서 실시간으로 모니터링 영상을 확인할 수 있습니다.',
            icon: Video,
            gif: '/Portfolio/04.S13P31E106/assets/web_front.gif',
        },
        {
            title: 'AI 객체 감지 및 포즈 추정',
            description: 'YOLO를 활용한 실시간 객체 감지와 MediaPipe를 활용한 포즈 추정 기능을 제공합니다. SVM 분류기를 통해 앉기/서기/눕기 등의 자세를 분류하고 이상 행동을 탐지합니다.',
            icon: Activity,
        },
        {
            title: '실시간 알림 시스템',
            description: 'MQTT 프로토콜을 통해 이벤트를 실시간으로 수신하고, Firebase Cloud Messaging(FCM)을 통해 모바일 디바이스로 즉각적인 알림을 전송합니다.',
            icon: Bell,
            gif: '/Portfolio/04.S13P31E106/assets/fall_down_streaming+notification.gif',
        },
        {
            title: '모니터링 대시보드',
            description: '실시간 모니터링 현황, 이벤트 히스토리, 통계 등을 한눈에 확인할 수 있는 웹 대시보드를 제공합니다.',
            icon: BarChart3,
        },
        {
            title: '모바일 앱 & 워치 연동',
            description: 'Android 모바일 앱과 갤럭시 워치를 통해 언제 어디서나 알림을 받고 모니터링할 수 있습니다.',
            icon: Smartphone,
            gif: '/Portfolio/04.S13P31E106/assets/Phone_screen.gif',
        },
        {
            title: '인증 및 보안',
            description: 'Spring Security와 JWT를 활용한 안전한 인증/인가 시스템을 제공합니다. Redis 기반의 Refresh Token 관리로 세션을 효율적으로 관리합니다.',
            icon: Shield,
        },
    ];

    const techStack = {
        frontend: ['React 19', 'TypeScript', 'Vite 7', 'Tailwind CSS 4', 'Zustand', 'TanStack React Query v5', 'Axios', 'Typia'],
        backend: ['Spring Boot 3.3.4', 'Java 17', 'JPA (Hibernate)', 'MySQL 8.0', 'Redis 7.x', 'Spring Security'],
        ml: ['Python 3.10/3.11', 'FastAPI', 'Uvicorn', 'Ultralytics (YOLO v8)', 'MediaPipe', 'OpenCV', 'scikit-learn (SVM)'],
        infrastructure: ['Docker', 'Jenkins', 'Nginx', 'AWS S3', 'MediaMTX (RTSP)'],
        realtime: ['MQTT (Eclipse Paho)', 'Spring Integration MQTT', 'Firebase Cloud Messaging (FCM)'],
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">Heoby</h1>
                            <p className="text-xl text-gray-600">AI 기반 실시간 모니터링 시스템</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://charmed-sheet-c88.notion.site/28079a75be708085bcfefaadab7e59e8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                title="Notion 문서"
                            >
                                <FileText size={24} />
                            </a>
                            <a
                                href="https://lab.ssafy.com/s13-final/S13P31E106"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/demo/heoby"
                                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                <ExternalLink size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025.10.10 - 2025.11.28 (7주)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>6인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Team Leader, INFRA, AI</span>
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
                        <strong>Heoby</strong>는 AI 객체 감지 및 포즈 추정 기술을 활용한 실시간 모니터링 서비스입니다.
                        YOLO와 MediaPipe를 활용하여 실시간 영상 분석을 수행하고, MQTT 프로토콜을 통해 즉각적인 알림을 제공하여
                        안전하고 스마트한 모니터링 환경을 구축합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        마이크로 서비스 아키텍처를 기반으로 백엔드, 프론트엔드, ML 추론 서버가 유기적으로 연동되며,
                        웹과 모바일 앱, 그리고 갤럭시 워치까지 다양한 플랫폼에서 실시간 모니터링과 알림을 받을 수 있습니다.
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
                                    <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">ML/AI</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.ml.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.infrastructure.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
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
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">담당 역할</h2>
                    <div className="space-y-3 text-gray-700">
                        <div>
                            <span className="text-primary-600 font-semibold">Team Leader</span>
                            <span> : 프로젝트 기획 및 팀 관리</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Infrastructure</span>
                            <span> : Docker & Jenkins CI/CD 구축</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Backend</span>
                            <span> : FastAPI & MQTT 실시간 통신 구현</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">AI</span>
                            <span> : YOLO & MediaPipe 모델 연동</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
