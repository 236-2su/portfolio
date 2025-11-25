import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { Star, Plus } from 'lucide-react';

const Advisors = () => {
    const navigate = useNavigate();
    const { experts, userRole, isLoggedIn } = useStalk();

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState('recent');

    const categories = [
        "전체", "단기", "중단기", "중기", "중장기", "장기",
        "금융투자상담사", "CFA", "CPA", "증권분석사"
    ];

    const handleCategoryClick = (category: string) => {
        if (category === "전체") {
            setSelectedCategories([]);
        } else {
            setSelectedCategories(prev =>
                prev.includes(category)
                    ? prev.filter(c => c !== category)
                    : [...prev, category]
            );
        }
    };

    const filteredExperts = experts.filter(expert => {
        let matchesCategory = true;
        if (selectedCategories.length > 0) {
            // Check if expert matches ANY of the selected categories (tags or style)
            // Map style to Korean for comparison
            const styleMap: Record<string, string> = {
                'SHORT': '단기', 'MID_SHORT': '중단기', 'MID': '중기',
                'MID_LONG': '중장기', 'LONG': '장기'
            };

            const expertStyle = styleMap[expert.preferredStyle];

            matchesCategory = selectedCategories.some(cat =>
                expert.tags.some(tag => tag.includes(cat)) ||
                expert.certificates.some(cert => cert.includes(cat)) ||
                expertStyle === cat
            );
        }

        return matchesCategory;
    });

    const sortedExperts = [...filteredExperts].sort((a, b) => {
        if (sortBy === 'recent') return b.id - a.id;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        return 0;
    });

    const getStyleLabel = (style: string) => {
        const map: Record<string, string> = {
            'SHORT': '단기', 'MID_SHORT': '중단기', 'MID': '중기',
            'MID_LONG': '중장기', 'LONG': '장기'
        };
        return map[style] || style;
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header & Search */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">투자 전문가 찾기</h1>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                        {/* Keywords */}
                        <div className="flex-1 w-full overflow-x-auto hide-scrollbar">
                            <div className="flex gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${(cat === "전체" && selectedCategories.length === 0) || selectedCategories.includes(cat)
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="recent">최신순</option>
                            <option value="rating">평점순</option>
                            <option value="reviews">리뷰많은순</option>
                        </select>
                    </div>
                </div>

                {/* Expert List */}
                <div className="space-y-4">
                    {sortedExperts.map(expert => (
                        <div
                            key={expert.id}
                            onClick={() => navigate(`/demo/stalk/advisors/${expert.id}`)}
                            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all cursor-pointer flex flex-col md:flex-row gap-6"
                        >
                            {/* Left Info */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded text-xs font-bold">
                                            #{getStyleLabel(expert.preferredStyle)}
                                        </span>
                                        {expert.tags.map((tag, idx) => (
                                            <span key={idx} className="text-gray-600 bg-gray-100 px-2 py-1 rounded text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-end gap-3 mb-2">
                                        <h2 className="text-2xl font-bold text-gray-900">{expert.name}</h2>
                                        <span className="text-blue-600 font-medium mb-1">컨설턴트</span>
                                        <div className="flex items-center gap-1 mb-1 text-sm">
                                            <Star size={16} className="text-yellow-400 fill-current" />
                                            <span className="font-bold">{expert.rating}</span>
                                            <span className="text-gray-500">({expert.reviewCount})</span>
                                        </div>
                                    </div>

                                    <p className="text-lg text-gray-700 mb-4 font-medium">
                                        {expert.shortIntro}
                                    </p>
                                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                        {expert.longIntro}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-bold">
                                        시간당 {expert.consultationFee.toLocaleString()}원
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-48 h-48 flex-shrink-0">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}

                    {sortedExperts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">검색 결과가 없습니다</h3>
                            <p className="text-gray-500">다른 키워드로 검색해보세요.</p>
                        </div>
                    )}
                </div>

                {/* Register Button (Advisor Only) */}
                {isLoggedIn && userRole === 'ADVISOR' && (
                    <button
                        onClick={() => navigate('/demo/stalk/mypage?tab=전문가 페이지 수정')}
                        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 z-50 flex items-center gap-2 group"
                    >
                        <Plus size={24} />
                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                            전문가 등록/수정
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Advisors;
