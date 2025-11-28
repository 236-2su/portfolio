import React from 'react';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { Pin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clubThumb from '../../../../assets/logos/linbook_club_thumb.png';

const CATEGORIES = [
    { id: 'all', label: '전체' },
    { id: 'academic', label: '학술' },
    { id: 'sports', label: '체육' },
    { id: 'culture', label: '문화예술' },
    { id: 'volunteer', label: '봉사' },
    { id: 'entrepreneur', label: '창업' },
    { id: 'religion', label: '종교' },
];

export default function ClubList() {
    const navigate = useNavigate();
    const { clubs, selectClub, userRole } = useLinBook();
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const filteredClubs = selectedCategory === 'all'
        ? clubs
        : clubs.filter(c => c.category === CATEGORIES.find(cat => cat.id === selectedCategory)?.label);

    const myClubs = clubs.slice(0, 2); // Mock data: first 2 clubs are "my clubs"

    const handleClubSelect = (club: typeof clubs[0]) => {
        selectClub(club);
        navigate('/demo/linbook/club-detail');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col">
                        {/* Header */}
                        <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-10">
                            <h1 className="text-xl font-bold text-gray-900">동아리</h1>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">
                                    {userRole === 'leader' ? '리더' : '회원'} 권한
                                </span>
                                <button
                                    onClick={() => navigate('/demo/linbook')}
                                    className="text-xs text-gray-400 underline"
                                >
                                    로그아웃
                                </button>
                            </div>
                        </div>

                        <div className="p-4 space-y-6 overflow-y-auto pb-20">
                            {/* My Clubs Section */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">내 동아리</h2>
                                <div className="flex overflow-x-auto gap-4 pb-2 -mx-4 px-4 snap-x">
                                    {myClubs.map(club => (
                                        <div
                                            key={club.id}
                                            onClick={() => handleClubSelect(club)}
                                            className="min-w-[300px] bg-blue-50 rounded-xl p-5 snap-center border border-blue-100 cursor-pointer active:scale-95 transition-transform"
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <div className="text-[#2457C5] text-xs font-medium mb-1">#분위기가 좋은 #동아리실이 편한</div>
                                                    <h3 className="font-bold text-lg text-black mb-1">{club.name}</h3>
                                                    <p className="text-[#666666] text-xs">{club.category} / 학생회관 421호</p>
                                                </div>
                                                <img src={clubThumb} alt="Club" className="w-20 h-16 object-cover rounded ml-4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Page Indicator (Mock) */}
                                <div className="flex justify-center gap-2 mt-2">
                                    <div className="w-2 h-2 rounded-full bg-[#2457C5]"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                            </section>

                            {/* Categories */}
                            <section>
                                <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCategory(cat.id)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.id
                                                ? 'bg-[#2457C5] text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Club List */}
                            <section className="space-y-4">
                                {filteredClubs.map(club => (
                                    <div
                                        key={club.id}
                                        onClick={() => handleClubSelect(club)}
                                        className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 cursor-pointer active:scale-95 transition-transform"
                                    >
                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="flex-1">
                                                    <div className="text-[#2457C5] text-xs font-medium mb-1">#열정적인 #함께성장하는</div>
                                                    <h3 className="font-bold text-xl text-black mb-1">{club.name}</h3>
                                                    <p className="text-[#666666] text-xs">{club.category} / 학생회관 421호</p>
                                                </div>
                                                <img src={clubThumb} alt="Club" className="w-24 h-20 object-cover rounded ml-4" />
                                            </div>

                                            {/* Intro Section */}
                                            <div className="bg-gray-200 rounded-lg p-3">
                                                <div className="flex items-center gap-1 mb-2">
                                                    <Pin size={16} className="text-red-500 rotate-45 fill-red-500" />
                                                    <span className="text-xs font-bold text-black">동아리 소개</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-base">💬</span>
                                                    <p className="text-[#333333] text-xs leading-relaxed line-clamp-2">
                                                        {club.description || "동아리 소개글이 없습니다."}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
