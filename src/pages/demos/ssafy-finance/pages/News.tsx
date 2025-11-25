import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { ChevronLeft, Newspaper, TrendingUp, Clock } from 'lucide-react';

const News = () => {
    const navigate = useNavigate();
    const { isLoggedIn, news } = useSsafyFinance();
    const [selectedCategory, setSelectedCategory] = useState('all');

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const categories = [
        { id: 'all', label: '전체' },
        { id: 'market', label: '시장' },
        { id: 'central-bank', label: '중앙은행' },
        { id: 'tech', label: '기술' },
    ];

    const filteredNews = selectedCategory === 'all'
        ? news
        : news.filter(article => article.category === selectedCategory);

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
                    <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                        <Newspaper size={40} />
                        금융 뉴스
                    </h1>
                    <p className="text-xl opacity-90">최신 금융 시장 동향과 경제 뉴스를 확인하세요</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Category Filter */}
                <div className="flex justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured News */}
                {filteredNews.length > 0 && (
                    <motion.div
                        className="card p-0 overflow-hidden mb-8 cursor-pointer group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="grid md:grid-cols-2">
                            <div
                                className={`h-64 md:h-auto flex items-center justify-center text-white ${filteredNews[0].category === 'market'
                                        ? 'bg-gradient-to-br from-blue-800 to-blue-600'
                                        : filteredNews[0].category === 'central-bank'
                                            ? 'bg-gradient-to-br from-purple-700 to-green-600'
                                            : 'bg-gradient-to-br from-purple-600 to-purple-800'
                                    }`}
                            >
                                <TrendingUp size={120} className="opacity-40" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold">
                                        주요 뉴스
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                                        <Clock size={14} />
                                        {filteredNews[0].date}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors">
                                    {filteredNews[0].title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {filteredNews[0].summary}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.slice(1).map((article, index) => (
                        <motion.div
                            key={article.id}
                            className="card p-0 overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
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
                                <div className="flex items-center gap-2 mb-3">
                                    <Clock size={14} className="text-gray-400" />
                                    <small className="text-gray-500">{article.date}</small>
                                </div>
                                <h5 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h5>
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{article.summary}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredNews.length === 0 && (
                    <div className="text-center py-12">
                        <Newspaper size={64} className="text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">뉴스가 없습니다</h3>
                        <p className="text-gray-500">선택한 카테고리에 뉴스가 없습니다.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
