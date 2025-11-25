import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const { isLoggedIn, reservations, posts, experts } = useStalk();

    const [expertIndex, setExpertIndex] = useState(0);
    const [selectedStyle, setSelectedStyle] = useState('ALL');

    // Filtered experts based on style
    const filteredExperts = selectedStyle === 'ALL'
        ? experts
        : experts.filter(e => e.preferredStyle === selectedStyle);

    const styles = [
        { id: 'ALL', label: '전체' },
        { id: 'SHORT', label: '단기 투자' },
        { id: 'MID_SHORT', label: '중단기 투자' },
        { id: 'MID', label: '중기 투자' },
        { id: 'MID_LONG', label: '중장기 투자' },
        { id: 'LONG', label: '장기 투자' },
    ];

    const getStyleColor = (style: string) => {
        switch (style) {
            case 'SHORT': return 'text-green-600 bg-green-100 border-green-200';
            case 'MID_SHORT': return 'text-blue-600 bg-blue-100 border-blue-200';
            case 'MID': return 'text-orange-600 bg-orange-100 border-orange-200';
            case 'MID_LONG': return 'text-purple-600 bg-purple-100 border-purple-200';
            case 'LONG': return 'text-red-600 bg-red-100 border-red-200';
            default: return 'text-gray-600 bg-gray-100 border-gray-200';
        }
    };

    const getStyleLabel = (style: string) => {
        const found = styles.find(s => s.id === style);
        return found ? found.label : style;
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Video */}
            <div className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/videos/stalk-background-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 text-center"
                    >
                        Fuel Your Future
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl opacity-90 text-center max-w-2xl"
                    >
                        투자 전문가를 통해 당신의 미래를 충전하세요
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        onClick={() => navigate('/demo/stalk/advisors')}
                        className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                        전문가 찾기
                    </motion.button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                {/* Reservations Section */}
                {isLoggedIn && (
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">예정된 상담 내역</h2>
                            <button
                                onClick={() => navigate('/demo/stalk/mypage')}
                                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                            >
                                더보기 <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="relative">
                            {reservations.length > 0 ? (
                                <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
                                    {reservations.filter(r => r.status === 'upcoming').map((reservation) => (
                                        <div
                                            key={reservation.id}
                                            className="min-w-[300px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                            onClick={() => navigate('/demo/stalk/mypage')}
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="text-sm text-gray-500 mb-1">{reservation.date}</p>
                                                    <p className="text-2xl font-bold text-gray-900">{reservation.time}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${reservation.type === 'video' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                                                    {reservation.type === 'video' ? '화상상담' : '채팅상담'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                                                    {reservation.expertName[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{reservation.expertName}</p>
                                                    <p className="text-sm text-blue-600">컨설턴트</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                    <p className="text-gray-500">예정된 상담이 없습니다.</p>
                                    <button
                                        onClick={() => navigate('/demo/stalk/advisors')}
                                        className="mt-4 text-blue-600 font-medium hover:underline"
                                    >
                                        상담 예약하러 가기
                                    </button>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Recent Posts Section */}
                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">최근 상담글</h2>
                        <button
                            onClick={() => navigate('/demo/stalk/knowledge')}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                            전체보기 <ChevronRight size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.slice(0, 4).map((post) => (
                            <div
                                key={post.id}
                                onClick={() => navigate(`/demo/stalk/knowledge/${post.id}`)}
                                className="group cursor-pointer border-b border-gray-200 pb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                            >
                                <span className="text-blue-600 font-semibold text-sm mb-2 block">
                                    #{post.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2 mb-4 text-sm">
                                    {post.content}
                                </p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span>{post.author} · {post.date}</span>
                                    <div className="flex gap-3">
                                        <span>조회 {post.views}</span>
                                        <span>댓글 {post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* New Consultants Section */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">새로 함께하는 컨설턴트</h2>
                        <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    </div>

                    {/* Style Filter */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {styles.map((style) => (
                            <button
                                key={style.id}
                                onClick={() => setSelectedStyle(style.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedStyle === style.id
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {style.label}
                            </button>
                        ))}
                    </div>

                    {/* Expert Cards Slider */}
                    <div className="relative group">
                        <div className="overflow-hidden">
                            <div className="flex gap-6 transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${expertIndex * 25}%)` }}>
                                {filteredExperts.map((expert) => {
                                    const styleColorClass = getStyleColor(expert.preferredStyle);
                                    return (
                                        <div
                                            key={expert.id}
                                            onClick={() => navigate(`/demo/stalk/advisors/${expert.id}`)}
                                            className="min-w-[280px] md:min-w-[300px] flex-shrink-0 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer bg-white"
                                        >
                                            <div className={`px-4 py-2 text-xs font-bold border-b ${styleColorClass.split(' ')[2]} ${styleColorClass.split(' ')[1]} ${styleColorClass.split(' ')[0]}`}>
                                                {getStyleLabel(expert.preferredStyle)}
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <img
                                                        src={expert.image}
                                                        alt={expert.name}
                                                        className="w-16 h-16 rounded-full object-cover border border-gray-100"
                                                    />
                                                    <div>
                                                        <h3 className="font-bold text-lg text-gray-900">{expert.name}</h3>
                                                        <p className="text-sm text-blue-600 font-medium">컨설턴트</p>
                                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                                            <Star size={12} className="text-yellow-400 fill-current" />
                                                            <span>{expert.rating}</span>
                                                            <span>({expert.reviewCount})</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-2 mb-4 h-10">
                                                    {expert.shortIntro}
                                                </p>
                                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                    <span className="text-xs text-gray-500">시간당 상담료</span>
                                                    <span className="font-bold text-blue-600">
                                                        {expert.consultationFee.toLocaleString()}원
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        {filteredExperts.length > 4 && (
                            <>
                                <button
                                    onClick={() => setExpertIndex(Math.max(0, expertIndex - 1))}
                                    disabled={expertIndex === 0}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 disabled:opacity-0 transition-opacity"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => setExpertIndex(Math.min(filteredExperts.length - 4, expertIndex + 1))}
                                    disabled={expertIndex >= filteredExperts.length - 4}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-blue-600 disabled:opacity-0 transition-opacity"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
