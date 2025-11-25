import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Code, BookOpen, DollarSign, BarChart3, MessageSquare, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LinbookDetail() {
    const features = [
        {
            title: '동아리 관리',
            description: '동아리 생성, 멤버 관리, 역할 권한 설정 등 동아리 운영에 필요한 모든 기능을 제공합니다.',
            icon: Users,
        },
        {
            title: '공금 장부',
            description: '동아리 공금의 수입과 지출을 투명하게 기록하고 관리할 수 있습니다. 영수증 사진 첨부 기능으로 증빙 자료를 함께 보관할 수 있습니다.',
            icon: DollarSign,
        },
        {
            title: '행사 장부',
            description: '동아리 행사별로 별도의 장부를 생성하여 행사 비용을 독립적으로 관리할 수 있습니다.',
            icon: BookOpen,
        },
        {
            title: '회비 관리',
            description: '회원별 회비 납부 현황을 추적하고 관리할 수 있습니다. 미납자 확인 및 알림 기능을 제공합니다.',
            icon: BarChart3,
        },
        {
            title: '게시판',
            description: '공지사항, 자유게시판 등 동아리 내 소통을 위한 게시판 기능을 제공합니다.',
            icon: MessageSquare,
        },
        {
            title: 'AI 리포트',
            description: 'AI가 동아리의 재정 상태를 분석하여 인사이트와 개선 방안을 제시합니다.',
            icon: Bot,
        },
    ];

    const techStack = {
        frontend: ['Android (Kotlin)', 'XML Layouts', 'Material Design'],
        backend: ['Spring Boot', 'Java', 'JPA', 'MySQL'],
        infrastructure: ['AWS EC2', 'AWS RDS'],
        security: ['Spring Security', 'JWT'],
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">LinBook</h1>
                            <p className="text-xl text-gray-600">동아리 공금 관리 서비스</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/236-2su/Lin.book"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/demo/linbook"
                                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                <ExternalLink size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025 Shinhan Hackathon</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>4인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Team Leader, Backend Developer, Infrastructure, Frontend Developer</span>
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
                            <strong>LinBook</strong>은 대학 동아리의 공금 관리를 투명하고 효율적으로 할 수 있도록 돕는 모바일 애플리케이션입니다.
                            동아리 회계 담당자들이 겪는 불편함을 해소하고, 모든 회원이 재정 상태를 쉽게 확인할 수 있도록 설계되었습니다.
                        </p>
                        <p>
                            엑셀이나 종이 장부로 관리하던 기존 방식의 한계를 극복하고, 모바일 환경에서 언제 어디서나
                            공금 내역을 기록하고 조회할 수 있습니다. 영수증 사진 첨부, 카테고리별 분류, 통계 기능 등을 통해
                            동아리 재정을 체계적으로 관리할 수 있습니다.
                        </p>
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.security.map((tech, index) => (
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
                            <span> : AWS EC2 배포</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Backend</span>
                            <span> : Django REST API 개발</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Frontend</span>
                            <span> : Android(Kotlin) 앱 구현</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Database</span>
                            <span> : SQLite 설계 및 최적화</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
