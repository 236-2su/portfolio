import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { User, Calendar, Heart, Settings, Clock, LogOut } from 'lucide-react';

const MyPage = () => {
    const navigate = useNavigate();
    const { userRole, reservations, cancelReservation, logout } = useStalk();
    const [activeTab, setActiveTab] = useState('info');

    const handleLogout = () => {
        logout();
        navigate('/demo/stalk');
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'info':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                                🦊
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">김싸피</h3>
                                <p className="text-gray-500">{userRole === 'ADVISOR' ? '전문가 회원' : '일반 회원'}</p>
                                <p className="text-gray-500 text-sm mt-1">ssafy@example.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <label className="block text-sm font-medium text-gray-500 mb-1">이름</label>
                                <div className="font-bold text-gray-900">김싸피</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <label className="block text-sm font-medium text-gray-500 mb-1">연락처</label>
                                <div className="font-bold text-gray-900">010-1234-5678</div>
                            </div>
                        </div>
                    </div>
                );

            case 'reservations':
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">내 상담 내역</h3>
                        {reservations.length > 0 ? (
                            reservations.map(res => (
                                <div key={res.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${res.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                                                res.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                    'bg-gray-100 text-gray-600'
                                                }`}>
                                                {res.status === 'upcoming' ? '예정됨' :
                                                    res.status === 'completed' ? '완료됨' : '취소됨'}
                                            </span>
                                            <span className="text-gray-500 text-sm">{res.date} {res.time}</span>
                                        </div>
                                        <div className="font-bold text-lg text-gray-900 mb-1">
                                            {res.expertName} 전문가와의 상담
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {res.type === 'video' ? '화상 상담' : '채팅 상담'}
                                        </div>
                                    </div>

                                    {res.status === 'upcoming' && (
                                        <div className="flex gap-2 w-full md:w-auto">
                                            <button
                                                className="flex-1 md:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                                                onClick={() => alert('상담 입장 기능은 데모에서 지원하지 않습니다.')}
                                            >
                                                입장하기
                                            </button>
                                            <button
                                                className="flex-1 md:flex-none px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                                                onClick={() => {
                                                    if (window.confirm('예약을 취소하시겠습니까?')) cancelReservation(res.id);
                                                }}
                                            >
                                                취소
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
                                예약된 상담 내역이 없습니다.
                            </div>
                        )}
                    </div>
                );

            case 'favorites':
                return (
                    <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
                        찜한 전문가가 없습니다.
                    </div>
                );

            case 'schedule': // Advisor Only
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">상담 영업 스케줄 관리</h3>
                            <button className="text-blue-600 font-medium hover:underline">
                                설정 저장
                            </button>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                            <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                            <p className="text-gray-500">
                                캘린더에서 상담 가능한 시간을 설정할 수 있습니다.<br />
                                (데모 버전에서는 시각적 요소만 제공됩니다)
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const tabs = [
        { id: 'info', label: '내 정보', icon: User },
        { id: 'reservations', label: '내 상담 내역', icon: Calendar },
    ];

    if (userRole === 'CLIENT') {
        tabs.push({ id: 'favorites', label: '찜한 전문가', icon: Heart });
    }

    if (userRole === 'ADVISOR') {
        tabs.push({ id: 'schedule', label: '상담 영업 스케줄', icon: Clock });
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">마이페이지</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <nav className="flex flex-col">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-3 px-6 py-4 text-left transition-colors ${activeTab === tab.id
                                            ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-bold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <tab.icon size={20} />
                                        {tab.label}
                                    </button>
                                ))}

                                {userRole === 'ADVISOR' && (
                                    <button
                                        onClick={() => navigate('/demo/stalk/advisor/edit')}
                                        className="flex items-center gap-3 px-6 py-4 text-left text-gray-600 hover:bg-gray-50 border-t border-gray-100"
                                    >
                                        <Settings size={20} />
                                        전문가 페이지 수정
                                    </button>
                                )}

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-6 py-4 text-left text-red-600 hover:bg-red-50 border-t border-gray-100 mt-auto"
                                >
                                    <LogOut size={20} />
                                    로그아웃
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[500px]">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
