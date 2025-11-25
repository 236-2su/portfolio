import { motion } from 'framer-motion';
import { ArrowLeft, Github, Users, Calendar, Code, Award, Gamepad2, Map, MessageSquare, Trophy, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KHackathonDetail() {
    const features = [
        {
            title: '메타버스 마을',
            description: '3D 가상 공간에서 아바타로 자유롭게 이동하며 다른 사용자들과 실시간으로 소통할 수 있습니다.',
            icon: Map,
        },
        {
            title: '실시간 채팅',
            description: '마을 내에서 다른 사용자들과 실시간 채팅을 통해 소통하고 정보를 공유할 수 있습니다.',
            icon: MessageSquare,
        },
        {
            title: '미니 게임',
            description: '다양한 미니 게임을 통해 포인트를 획득하고 랭킹을 경쟁할 수 있습니다.',
            icon: Gamepad2,
        },
        {
            title: '커뮤니티 활동',
            description: '마을 주민들과 함께 다양한 커뮤니티 활동에 참여하고 친목을 다질 수 있습니다.',
            icon: Users,
        },
        {
            title: '랭킹 시스템',
            description: '활동 점수와 게임 성적을 기반으로 한 랭킹 시스템으로 경쟁심을 자극합니다.',
            icon: Trophy,
        },
        {
            title: '커스터마이징',
            description: '자신만의 아바타와 공간을 꾸밀 수 있는 다양한 커스터마이징 옵션을 제공합니다.',
            icon: Sparkles,
        },
    ];

    const techStack = {
        frontend: ['React', 'TypeScript', 'Vite'],
        backend: ['Spring Boot 3.3.3', 'Java 17', 'JPA', 'MySQL'],
        game: ['Zep Script', '메타버스 연동'],
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
                                    소프트웨어 교육혁신센터 이사장상 (최우수상)
                                </span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">First Step Town</h1>
                            <p className="text-xl text-gray-600">메타버스 기반 소셜 플랫폼</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/yourusername/first-step-town"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025 K-Hackathon (13th)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>4인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Team Leader, Backend Developer, Infrastructure</span>
                        </div>
                    </div>
                </motion.div>

                {/* Award Section */}
                <motion.div
                    className="card p-8 mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Trophy className="text-yellow-600" size={48} />
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">K-Hackathon 최우수상 수상</h2>
                            <p className="text-gray-700">소프트웨어 교육혁신센터 이사장상</p>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        전국 대학생 해커톤 대회인 K-Hackathon에서 메타버스 기반 소셜 플랫폼으로 대상을 수상하였습니다.
                        혁신적인 아이디어와 완성도 높은 구현으로 심사위원들의 높은 평가를 받았습니다.
                    </p>
                </motion.div>

                {/* Project Overview */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 소개</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <strong>First Step Town</strong>은 Unity 기반의 메타버스 소셜 플랫폼입니다.
                            사용자들이 가상의 마을에서 아바타로 활동하며 다양한 사람들과 소통하고 게임을 즐길 수 있는 공간을 제공합니다.
                        </p>
                        <p>
                            코로나19 이후 비대면 소통의 필요성이 증가하면서, 단순한 화상 회의를 넘어
                            더욱 몰입감 있고 재미있는 소통 방식을 제공하고자 개발되었습니다.
                            실시간 채팅, 미니 게임, 커뮤니티 활동 등을 통해 사용자들이 자연스럽게 교류할 수 있습니다.
                        </p>
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
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
                                transition={{ delay: 0.4 + index * 0.1 }}
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
                    transition={{ delay: 0.5 }}
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Game/Metaverse</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.game.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
                    transition={{ delay: 0.7 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">담당 역할</h2>
                    <div className="space-y-3 text-gray-700">
                        <div>
                            <span className="text-primary-600 font-semibold">Backend</span>
                            <span> : Spring Boot & MySQL 서버 구축</span>
                        </div>
                        <div>
                            <span className="text-primary-600 font-semibold">Frontend</span>
                            <span> : React & Zep Script 메타버스 연동</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
