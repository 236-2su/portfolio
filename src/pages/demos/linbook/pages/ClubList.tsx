import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { Bell, Pin, Search } from 'lucide-react';
import clubThumb from '../../../../assets/logos/linbook_club_thumb.png';

export default function ClubList() {
    const navigate = useNavigate();
    const { clubs, userRole, selectClub } = useLinBook();
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    const CATEGORIES = [
        { id: 'ALL', label: '전체' },
        { id: '학술', label: '📖 학술' },
        { id: '체육', label: '⚽ 체육' },
        { id: '봉사', label: '🤝 봉사' },
        { id: '문화예술', label: '🎨 문화/예술' },
        { id: '종교', label: '🙏 종교' },
        { id: '창업', label: '🚀 창업' },
    ];

    const myClubs = clubs.slice(0, 2);

    // 검색 및 카테고리 필터링
    const filteredClubs = clubs.filter(club => {
        const matchesCategory = selectedCategory === 'ALL' || club.category === selectedCategory;
        const matchesSearch =
            club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.category.includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    const handleClubSelect = (club: any) => {
        selectClub(club);
        navigate('/demo/linbook/club-detail');
    };

    const getCategoryButtonClass = (isActive: boolean) => {
        const baseClass = "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors";
        const activeClass = "bg-emerald-600 text-white shadow-sm";
        const inactiveClass = "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50";

        return isActive ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-gray-50 min-h-full flex flex-col font-sans">
                        {/* Header area */}
                        <div className="bg-white sticky top-0 z-10 border-b border-gray-100 shadow-sm">
                            <div className="p-5 pb-2">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-800 to-teal-600 bg-clip-text text-transparent">
                                            Lin.book
                                        </h1>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {userRole === 'leader' ? '회장님, 오늘도 화이팅! 💪' : '동아리 활동의 모든 것 ✨'}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors relative">
                                        <Bell size={20} className="text-gray-600" />
                                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                    </div>
                                </div>

                                {/* Search Bar */}
                                <div className="relative mb-2">
                                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="동아리 이름, 태그 검색"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-gray-100 text-sm py-2.5 pl-10 pr-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Scroll Area */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-5 space-y-8">
                                {/* My Clubs Section */}
                                <section>
                                    <div className="flex justify-between items-end mb-3">
                                        <h2 className="font-bold text-gray-800 text-lg">내 동아리</h2>
                                        <button className="text-teal-600 text-xs font-bold">전체보기</button>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x scrollbar-hide">
                                        {myClubs.map(club => (
                                            <div
                                                key={club.id}
                                                onClick={() => handleClubSelect(club)}
                                                className="min-w-[300px] bg-emerald-50 rounded-xl p-5 snap-center border border-emerald-100 cursor-pointer active:scale-95 transition-transform hover:shadow-md"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div className="flex-1">
                                                        <div className="text-emerald-700 text-xs font-medium mb-1">
                                                            {club.category === '학술' ? '#성장하는 #학구적인' : '#열정가득 #활기찬'}
                                                        </div>
                                                        <h3 className="font-bold text-lg text-black mb-1">{club.name}</h3>
                                                        <p className="text-[#666666] text-xs font-medium">{club.category} / 학생회관 421호</p>
                                                        <div className="mt-3 text-emerald-800 font-bold text-sm">
                                                            잔액: ₩{club.balance.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <img src={clubThumb} alt="Club" className="w-20 h-16 object-cover rounded ml-4 shadow-sm" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Page Indicator (Mock) */}
                                    <div className="flex justify-center gap-2 mt-[-10px]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    </div>
                                </section>

                                {/* Recommended Clubs Section */}
                                <section>
                                    <div className="flex justify-between items-end mb-3">
                                        <h2 className="font-bold text-gray-800 text-lg">🔥 회원님을 위한 추천</h2>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x scrollbar-hide">
                                        {clubs.slice(2, 5).map((club) => (
                                            <div
                                                key={club.id}
                                                onClick={() => handleClubSelect(club)}
                                                className="min-w-[160px] bg-white rounded-xl p-4 snap-center border border-emerald-100 cursor-pointer active:scale-95 transition-transform shadow-sm hover:border-emerald-300"
                                            >
                                                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-3 text-emerald-600 font-bold text-lg">
                                                    {club.name.charAt(0)}
                                                </div>
                                                <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">{club.name}</h3>
                                                <p className="text-emerald-600 text-[10px] font-bold mb-2">{club.category}</p>
                                                <p className="text-gray-400 text-[10px] line-clamp-2 h-8">{club.description}</p>
                                            </div>
                                        ))}
                                        {/* Dummy Card for fun */}
                                        <div className="min-w-[160px] bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center border border-gray-100 border-dashed">
                                            <span className="text-2xl mb-2">👀</span>
                                            <span className="text-xs text-gray-500 font-medium">더 둘러보기</span>
                                        </div>
                                    </div>
                                </section>

                                {/* Categories */}
                                <section>
                                    <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
                                        {CATEGORIES.map(cat => (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={getCategoryButtonClass(selectedCategory === cat.id)}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                </section>

                                {/* Club List */}
                                <section className="space-y-4">
                                    {filteredClubs.length > 0 ? (
                                        filteredClubs.map(club => (
                                            <div
                                                key={club.id}
                                                onClick={() => handleClubSelect(club)}
                                                className="bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer active:scale-95 transition-transform shadow-sm hover:shadow-md hover:border-emerald-200"
                                            >
                                                <div className="p-5">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="flex-1">
                                                            <div className="text-emerald-600 text-xs font-medium mb-1">{club.category}</div>
                                                            <h3 className="font-bold text-xl text-gray-900 mb-1">{club.name}</h3>
                                                            <p className="text-gray-500 text-xs text-medium">회원 {club.memberCount}명</p>
                                                        </div>
                                                        <img src={clubThumb} alt="Club" className="w-24 h-20 object-cover rounded-lg shadow-sm ml-4" />
                                                    </div>

                                                    {/* Intro Section */}
                                                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                                        <div className="flex items-center gap-1 mb-2">
                                                            <Pin size={14} className="text-emerald-500 rotate-45 fill-emerald-500" />
                                                            <span className="text-xs font-bold text-gray-700">동아리 소개</span>
                                                        </div>
                                                        <div className="flex items-start gap-2">
                                                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                                                                {club.description || "동아리 소개글이 준비되어 있지 않습니다."}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="py-12 text-center text-gray-400 text-sm">
                                            검색 결과가 없습니다.
                                        </div>
                                    )}
                                </section>
                            </div>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
