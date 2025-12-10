import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Users, Calendar, Code, Database, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SsafyFinanceDetail() {
    const features = [
        {
            title: '예금/적금 금리 비교',
            description: '금융감독원 API를 활용하여 다양한 금융상품의 금리를 비교하고, 가입 기간별/은행별 필터링 기능을 제공합니다.',
            icon: Database,
        },
        {
            title: '현물 상품 가격 확인',
            description: '금과 은의 가격 변동을 Chart.js를 활용한 그래프로 시각화하여 투자 판단을 돕습니다.',
            icon: Code,
        },
        {
            title: '금융 상품 추천 알고리즘',
            description: '사용자의 가입 상품 이력과 선호도를 분석하여 맞춤형 금융 상품을 추천합니다.',
            icon: Lightbulb,
        },
        {
            title: '근처 은행 검색',
            description: 'Kakao Maps API를 활용하여 현재 위치 기반으로 주변 은행을 검색하고 지도에 표시합니다.',
            icon: ExternalLink,
        },
        {
            title: '커뮤니티 게시판',
            description: '금융 상품 리뷰와 정보를 공유할 수 있는 커뮤니티 공간을 제공합니다.',
            icon: Users,
        },
        {
            title: '프로필 & 포트폴리오',
            description: '가입한 금융 상품을 한눈에 확인하고, 금리를 차트로 시각화하여 관리할 수 있습니다.',
            icon: Calendar,
        },
    ];

    const techStack = {
        frontend: ['Vue.js', 'Bootstrap', 'Chart.js', 'Axios'],
        backend: ['Django', 'Django REST Framework', 'SQLite'],
        apis: ['금융감독원 API', 'Kakao Maps API', 'YouTube API', 'OpenAI API'],
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
                            <h1 className="text-4xl font-bold text-gray-900 mb-2">MyFin</h1>
                            <p className="text-xl text-gray-600">개인 금융 관리 플랫폼</p>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/236-2su/ssafy-finance"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <Link
                                to="/demo/ssafy-finance"
                                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                            >
                                <ExternalLink size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-primary-600" />
                            <span>2025.05 - 2025.06</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Users size={18} className="text-primary-600" />
                            <span>2인 팀 프로젝트</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <Code size={18} className="text-primary-600" />
                            <span>Full-Stack Developer</span>
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
                        MyFin은 개인의 금융 생활을 효율적으로 관리할 수 있도록 돕는 종합 금융 플랫폼입니다.
                        금융감독원 API를 활용하여 실시간 금융 상품 정보를 제공하고, 사용자 맞춤형 추천 알고리즘을 통해
                        최적의 금융 상품을 제안합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        또한 금과 은 같은 현물 상품의 가격 변동을 시각화하고, 주변 은행 검색 기능을 통해
                        오프라인 금융 서비스 접근성을 높였습니다. 커뮤니티 기능을 통해 사용자 간 금융 정보 공유도 가능합니다.
                    </p>
                </motion.div>

                {/* My Role (Moved Up) */}
                <motion.div
                    className="card p-8 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">담당 역할 (Team Leader & Full Stack)</h2>
                    <div className="space-y-6 text-gray-700">
                        {/* Backend */}
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                                Django 기반 금융 데이터 처리 서버 구축
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>
                                    <span className="font-medium text-gray-800">데이터 수집 및 가공:</span> 금융감독원 API로부터 대용량의 금융 상품 데이터를 수집하여 SQLite 데이터베이스에 적재하고, 사용자 맞춤 추천을 위한 데이터 가공 로직 구현
                                </li>
                                <li>
                                    <span className="font-medium text-gray-800">DRF API 개발:</span> RESTful API를 설계하여 프론트엔드에 효율적으로 데이터를 제공하고, Serializer를 활용한 데이터 검증 및 직렬화 처리
                                </li>
                            </ul>
                        </div>

                        {/* Frontend */}
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                                Vue.js 인터랙티브 웹 애플리케이션 개발
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                                <li>
                                    <span className="font-medium text-gray-800">데이터 시각화:</span> Chart.js를 활용하여 금/은 시세 변동 그래프와 환율 정보를 시각적으로 구현하여 사용자 경험(UX) 향상
                                </li>
                                <li>
                                    <span className="font-medium text-gray-800">컴포넌트 중심 설계:</span> 재사용 가능한 Vue 컴포넌트를 설계하여 유지보수성을 높이고, Pinia/Vuex를 활용한 효율적인 전역 상태 관리
                                </li>
                            </ul>
                        </div>
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
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.frontend.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.backend.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">External APIs</h3>
                            <div className="flex flex-wrap gap-2">
                                {techStack.apis.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                    >
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
