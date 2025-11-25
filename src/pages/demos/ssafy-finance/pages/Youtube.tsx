import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { ChevronLeft, Video, Search } from 'lucide-react';

const videos = [
    { id: 1, title: '초보자를 위한 주식 투자 가이드', channel: '금융전문가 TV', views: '125K', thumbnail: 'https://via.placeholder.com/320x180/667eea/ffffff?text=Video+1' },
    { id: 2, title: '2024 경제 전망과 투자 전략', channel: '경제연구소', views: '89K', thumbnail: 'https://via.placeholder.com/320x180/764ba2/ffffff?text=Video+2' },
    { id: 3, title: '배당주 투자에 대한 모든 것', channel: '인베스트 마스터', views: '156K', thumbnail: 'https://via.placeholder.com/320x180/10b981/ffffff?text=Video+3' },
    { id: 4, title: 'ETF 투자 완전 가이드', channel: '투자 인사이트', views: '203K', thumbnail: 'https://via.placeholder.com/320x180/f59e0b/ffffff?text=Video+4' },
    { id: 5, title: '부동산 vs 주식, 어디에 투자할까?', channel: '자산관리 전문가', views: '178K', thumbnail: 'https://via.placeholder.com/320x180/ef4444/ffffff?text=Video+5' },
    { id: 6, title: '청년을 위한 적금 투자 방법', channel: '머니설계 연구소', views: '94K', thumbnail: 'https://via.placeholder.com/320x180/8b5cf6/ffffff?text=Video+6' },
];

const Youtube = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSsafyFinance();
    const [searchQuery, setSearchQuery] = useState('');

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 px-6">
                <div className="container mx-auto">
                    <button
                        onClick={() => navigate('/demo/ssafy-finance/home')}
                        className="mb-6 text-white hover:underline flex items-center gap-1"
                    >
                        <ChevronLeft size={20} />
                        메인으로 돌아가기
                    </button>
                    <h1 className="text-4xl font-bold mb-2">투자 영상</h1>
                    <p className="text-xl opacity-90">금융 전문가들의 투자 인사이트를 영상으로 만나보세요</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="투자 관련 영상을 검색하세요..."
                                className="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-full focus:border-primary-600 focus:outline-none text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600">
                                <Search size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videos
                        .filter((video) => video.title.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((video, index) => (
                            <motion.div
                                key={video.id}
                                className="card p-0 overflow-hidden cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                            <Video size={32} className="text-primary-600 ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
                                    <p className="text-sm text-gray-600 mb-1">{video.channel}</p>
                                    <p className="text-xs text-gray-500">{video.views} views</p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Youtube;
