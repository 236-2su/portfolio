import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Code, Eye, Map, ShoppingCart, AlertTriangle, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LookeyDetail() {
    const features = [
        {
            title: 'AI 상품 인식',
            description: 'YOLO와 EfficientNet을 활용하여 카메라로 상품을 비추면 AI가 자동으로 인식하여 상품명, 가격, 영양정보를 음성으로 안내합니다.',
            icon: Eye,
        },
        {
            title: '스마트 장바구니',
            description: '인식된 상품을 자동으로 장바구니에 추가하고, 총 금액을 실시간으로 계산해 음성으로 알려줍니다.',
            icon: ShoppingCart,
        },
        {
            title: '알레르기 정보 제공',
            description: '사용자의 알레르기 정보를 등록하면, 해당 성분이 포함된 상품을 인식할 때 경고를 제공합니다.',
            icon: AlertTriangle,
        },
        {
            title: '편의점 길찾기',
            description: '원하는 상품이 있는 진열대까지의 경로를 음성으로 안내하여 쉽게 찾을 수 있도록 도와줍니다.',
            icon: Navigation,
        },
        {
            title: '실시간 카메라 안내',
            description: '카메라 화면에서 상품의 위치와 정보를 실시간으로 음성 안내로 제공합니다.',
            icon: Map,
        },
        {
            title: '음성 UI',
            description: '복잡한 터치 없이 음성으로 모든 기능을 이용할 수 있어 시각장애인의 접근성을 극대화했습니다.',
            icon: Users,
        },
    ];

    const techStack = {
        frontend: ['Android (Kotlin)', 'CameraX', 'TTS/STT'],
        backend: ['Spring Boot 3.5.5', 'Java 17', 'Spring Security', 'MySQL 8.0', 'Redis 7'],
        ai: ['FastAPI', 'PyTorch', 'YOLO', 'EfficientNet'],
        infrastructure: ['Docker', 'Jenkins'],
        apis: ['Google OAuth', 'Google Vision API', 'KAKAO API'],
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">LooKey</h1>
                            <p className="text-xl text-gray-600">AI 기반 편의점 상품 인식 및 추천 서비스</p>
                            <p className="text-md text-gray-500 mt-2">눈을 감아도 편의점 세상을 보여주는 루키</p>
                        </div>
                        <div className="flex gap-3">

                            <a
                                href="https://github.com/236-2su/lookey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/demo/lookey"
                                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                <ExternalLink size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025.08.25 - 2025.10.02 (6주)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>6인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Team Leader, Backend Developer, Infrastructure</span>
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
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <strong>LooKey</strong>는 시각장애인을 위한 AI 기반 편의점 상품 인식 및 음성 안내 서비스입니다.
                            시각장애인들이 편의점에서 자신이 원하는 물품을 정확하게 가져가기 어려운 현실적인 문제를 해결하기 위해 시작되었습니다.
                        </p>
                        <p>
                            현재 음료 등에 있는 점자는 구체적인 제품명이 아닌 큰 카테고리만 표시하고 있어,
                            시각장애인 유튜버들의 실제 경험담을 통해 확인된 불편함을 해결하고자 했습니다.
                        </p>
                        <p>
                            YOLO와 EfficientNet을 활용한 고정밀 AI 인식 기술과 직관적인 음성 UI를 통해
                            시각장애인의 편의점 이용을 더욱 편리하게 만들고, 독립성을 키우며, 편의성을 제공합니다.
                        </p>
                    </div>
                </motion.div>

                {/* My Role (Moved Up) */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">담당 역할 (Team Leader & Backend Developer)</h2>
                    <div className="space-y-6 text-gray-700">
                        {/* Backend & AI Pipeline */}
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                                Backend API 및 AI 서비스 파이프라인 구축
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>
                                    <span className="font-medium text-gray-800">FastAPI & AI 연동:</span> YOLO(객체 인식) 및 EfficientNet(이미지 분류) 모델을 서빙하는 FastAPI 서버를 구축하고, Spring Boot 백엔드와의 효율적인 통신 구조 설계
                                </li>
                                <li>
                                    <span className="font-medium text-gray-800">인증/보안 시스템:</span> Spring Security와 JWT, Redis를 활용하여 사용자 세션 관리 및 개인 맞춤형 정보(알레르기 데이터 등) 보호 로직 구현
                                </li>
                                <li>
                                    <span className="font-medium text-gray-800">CI/CD 인프라:</span> Jenkins와 Docker를 도입하여 백엔드/AI 서버의 배포 자동화 환경 구성
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* System Architecture */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">시스템 아키텍처</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                        <img
                            src="/assets/lookey/SystemArchitecture.png"
                            alt="Lookey System Architecture"
                            className="w-full h-auto object-contain bg-white"
                        />
                    </div>
                </motion.div>

                {/* Key Features */}
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
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary-100 p-3 rounded-lg">
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend (Android)</h3>
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Infrastructure</h3>
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


            </div>
        </div>
    );
}
