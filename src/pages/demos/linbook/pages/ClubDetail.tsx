import { useState } from 'react';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Settings, Plus, Share2, Menu, FileText, MessageSquare, Book, Calendar, CreditCard, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aiBotIcon from '../../../../assets/logos/linbook_ai_bot.png';
import coverImage from '../../../../assets/logos/linbook_cover.png';
import shinhanLogo from '../../../../assets/logos/linbook_shinhan.png';

type TabType = 'notice' | 'free' | 'public_ledger' | 'event_ledger' | 'meeting_account' | 'ai_report';

export default function ClubDetail() {
    const navigate = useNavigate();
    const { currentClub, userRole } = useLinBook();
    const [activeTab, setActiveTab] = useState<TabType>('notice');

    if (!currentClub) {
        navigate('/demo/linbook/clubs');
        return null;
    }

    const TABS = [
        { id: 'notice', label: '공지사항', icon: FileText },
        { id: 'free', label: '자유게시판', icon: MessageSquare },
        { id: 'public_ledger', label: '공개장부', icon: Book },
        { id: 'event_ledger', label: '행사장부', icon: Calendar },
        { id: 'meeting_account', label: '모임통장', icon: CreditCard },
        { id: 'ai_report', label: 'AI 리포트', icon: Bot },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'notice':
                return (
                    <div className="space-y-4 p-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-bold">필독</span>
                                <span className="text-gray-400 text-xs">2024.11.25</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">11월 정기총회 안내</h3>
                            <p className="text-gray-600 text-sm line-clamp-2">이번 주 금요일 오후 6시에 학생회관 421호에서 정기총회가 있습니다. 필참해주세요!</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-[#2457C5] text-xs px-2 py-1 rounded-full font-bold">공지</span>
                                <span className="text-gray-400 text-xs">2024.11.20</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1">회비 납부 안내</h3>
                            <p className="text-gray-600 text-sm line-clamp-2">11월 회비 납부 기간입니다. 25일까지 납부 부탁드립니다.</p>
                        </div>
                    </div>
                );
            case 'free':
                return (
                    <div className="space-y-4 p-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs">익명</div>
                                    <div>
                                        <div className="font-bold text-sm">익명</div>
                                        <div className="text-gray-400 text-xs">1시간 전</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-800 text-sm">오늘 회식 어디서 하나요? 너무 기대되네요!</p>
                            <div className="mt-3 flex gap-4 text-gray-400 text-xs">
                                <span className="flex items-center gap-1">❤️ 5</span>
                                <span className="flex items-center gap-1">💬 2</span>
                            </div>
                        </div>
                    </div>
                );
            case 'public_ledger':
                return (
                    <div className="p-4">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="bg-gray-50 p-4 border-b border-gray-100">
                                <h3 className="font-bold text-gray-800">11월 장부 현황</h3>
                                <p className="text-sm text-gray-500">현재 잔액: ₩{currentClub.balance.toLocaleString()}</p>
                            </div>
                            <div className="divide-y divide-gray-100">
                                <div className="p-4 flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-gray-800">회식비 지출</div>
                                        <div className="text-xs text-gray-500">2024.11.24</div>
                                    </div>
                                    <div className="text-red-600 font-bold">-150,000</div>
                                </div>
                                <div className="p-4 flex justify-between items-center">
                                    <div>
                                        <div className="font-bold text-gray-800">11월 회비 입금</div>
                                        <div className="text-xs text-gray-500">2024.11.20</div>
                                    </div>
                                    <div className="text-[#2457C5] font-bold">+500,000</div>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/demo/linbook/ledger')}
                                className="w-full py-3 text-center text-[#2457C5] text-sm font-bold border-t border-gray-100 hover:bg-gray-50"
                            >
                                전체 내역 보기
                            </button>
                        </div>
                    </div>
                );
            case 'ai_report':
                return (
                    <div className="p-4 flex flex-col items-center justify-center h-full text-center">
                        <img src={aiBotIcon} alt="AI Bot" className="w-24 h-24 mb-4 opacity-80" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">AI 재정 리포트</h3>
                        <p className="text-gray-500 text-sm mb-6">
                            지난 달 재정 데이터를 분석하여<br />
                            효율적인 예산 운용을 제안해드립니다.
                        </p>
                        <button className="bg-[#2457C5] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
                            리포트 생성하기
                        </button>
                    </div>
                );
            default:
                return <div className="p-8 text-center text-gray-400">준비 중인 기능입니다.</div>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-gray-50 min-h-full flex flex-col">
                        {/* Header with Cover Image */}
                        <div className="relative bg-white border-b sticky top-0 z-10">
                            <div className="absolute inset-0 h-32 overflow-hidden opacity-10">
                                <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <button onClick={() => navigate('/demo/linbook/clubs')} className="p-2 hover:bg-gray-100 rounded-full">
                                        <ArrowLeft size={24} className="text-gray-800" />
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <Share2 size={24} className="text-gray-800" />
                                        </button>
                                        {userRole === 'leader' && (
                                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                                <Settings size={24} className="text-gray-800" />
                                            </button>
                                        )}
                                        <button className="p-2 hover:bg-gray-100 rounded-full">
                                            <Menu size={24} className="text-gray-800" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">{currentClub.name}</h1>
                                    <p className="text-[#2457C5] font-medium text-sm mt-1">🖐🏻 Welcome</p>
                                    <p className="text-gray-500 text-sm mt-1">함께 성장하는 {currentClub.category} 동아리입니다.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs (Scrollable) */}
                        <div className="bg-white border-b overflow-x-auto">
                            <div className="flex min-w-max px-4">
                                {TABS.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as TabType)}
                                        className={`flex flex-col items-center gap-1 px-4 py-3 border-b-2 transition-all ${activeTab === tab.id
                                                ? 'border-[#2457C5] text-[#2457C5]'
                                                : 'border-transparent text-gray-400 hover:text-gray-600'
                                            }`}
                                    >
                                        <tab.icon size={20} />
                                        <span className="text-xs font-medium">{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto pb-20">
                            {renderContent()}
                        </div>

                        {/* Shinhan Logo Footer */}
                        <div className="p-4 flex justify-center opacity-50">
                            <img src={shinhanLogo} alt="Shinhan Bank" className="h-6 object-contain" />
                        </div>

                        {/* FAB (Only for Leader/Officer) */}
                        {userRole === 'leader' && (
                            <div className="absolute bottom-6 right-6">
                                <button
                                    onClick={() => navigate('/demo/linbook/add-transaction')}
                                    className="bg-[#2457C5] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center"
                                >
                                    <Plus size={24} />
                                </button>
                            </div>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
