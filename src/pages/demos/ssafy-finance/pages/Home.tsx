import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { Landmark, Video, MapPin, Newspaper, Coins, User, LogOut } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn, userRole, logout, news } = useSsafyFinance();

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate('/demo/ssafy-finance');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    MyFin
                </h1>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                    <User size={16} />
                    {userRole === 'admin' ? '관리자' : '사용자'}
                    <LogOut size={16} />
                </button>
            </div>

            {/* Hero Section */}
            <motion.section
                className="relative bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-[length:200%_200%] text-white py-20 px-6 cursor-pointer"
                onClick={() => navigate('/demo/ssafy-finance/survey')}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                    opacity: { duration: 0.5 },
                    backgroundPosition: { duration: 10, repeat: Infinity, ease: 'linear' },
                }}
                whileHover={{ y: -2 }}
            >
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-5xl font-bold mb-4">맞춤형 투자 추천 서비스</h1>
                            <p className="text-xl mb-6 opacity-90">
                                간단한 설문조사를 통해 당신에게 맞는 투자 상품과 주식을 추천해드립니다.
                            </p>
                            <motion.div
                                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-full border-2 border-white/30"
                                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', x: 5 }}
                            >
                                <span className="font-semibold text-lg">클릭하여 설문조사 시작하기</span>
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                    →
                                </motion.span>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="order-1 lg:order-2 flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <img src="/aibot.png" alt="AI Bot" className="max-w-[70%] h-auto rounded-2xl" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Feature Cards */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            className="card p-8 text-center cursor-pointer group"
                            onClick={() => navigate('/demo/ssafy-finance/savings')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Landmark size={64} />
                            </div>
                            <h5 className="text-xl font-bold text-gray-800 mb-3">예금/적금 금리 비교</h5>
                            <p className="text-gray-600 leading-relaxed">은행별 금리를 한눈에 보고 최고 금리를 찾으세요.</p>
                        </motion.div>

                        <motion.div
                            className="card p-8 text-center cursor-pointer group"
                            onClick={() => navigate('/demo/ssafy-finance/metal')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Coins size={64} />
                            </div>
                            <h5 className="text-xl font-bold text-gray-800 mb-3">금/은 시세 확인</h5>
                            <p className="text-gray-600 leading-relaxed">실시간 금속 시세와 추세 차트를 확인하세요.</p>
                        </motion.div>

                        <motion.div
                            className="card p-8 text-center cursor-pointer group"
                            onClick={() => navigate('/demo/ssafy-finance/youtube')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <Video size={64} />
                            </div>
                            <h5 className="text-xl font-bold text-gray-800 mb-3">관심 영상 검색</h5>
                            <p className="text-gray-600 leading-relaxed">투자·경제 관련 영상을 추천받고 시청하세요.</p>
                        </motion.div>

                        <motion.div
                            className="card p-8 text-center cursor-pointer group"
                            onClick={() => navigate('/demo/ssafy-finance/bank')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                <MapPin size={64} />
                            </div>
                            <h5 className="text-xl font-bold text-gray-800 mb-3">주변 은행 찾기</h5>
                            <p className="text-gray-600 leading-relaxed">가장 가까운 은행/ATM 위치를 확인하세요.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">오늘의 금융 뉴스</h2>
                        <button
                            className="btn-primary flex items-center gap-2"
                            onClick={() => navigate('/demo/ssafy-finance/news')}
                        >
                            전체 뉴스 보기 <span>→</span>
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {news.map((article, index) => (
                            <motion.div
                                key={article.id}
                                className="card p-0 overflow-hidden cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div
                                    className={`h-48 flex items-center justify-center text-white ${article.category === 'market'
                                        ? 'bg-gradient-to-br from-blue-800 to-blue-600'
                                        : article.category === 'central-bank'
                                            ? 'bg-gradient-to-br from-purple-700 to-green-600'
                                            : 'bg-gradient-to-br from-purple-600 to-purple-800'
                                        }`}
                                >
                                    <Newspaper size={80} className="opacity-40" />
                                </div>
                                <div className="p-6">
                                    <h5 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h5>
                                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{article.summary}</p>
                                    <small className="text-gray-500">{article.date}</small>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
