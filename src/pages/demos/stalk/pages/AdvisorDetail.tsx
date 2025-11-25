import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { Star, ChevronLeft, Calendar, Clock, CheckCircle, Award } from 'lucide-react';

const AdvisorDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { experts, isLoggedIn } = useStalk();
    const expert = experts.find(e => e.id === Number(id));

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    if (!expert) {
        return <div className="p-20 text-center">전문가를 찾을 수 없습니다.</div>;
    }

    // Mock available times
    const availableTimes = ['10:00', '11:00', '14:00', '15:00', '16:00'];

    // Mock calendar dates (next 5 days)
    const dates = Array.from({ length: 5 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return {
            date: d.getDate(),
            day: ['일', '월', '화', '수', '목', '금', '토'][d.getDay()],
            fullDate: d.toLocaleDateString()
        };
    });

    const handleReservation = () => {
        if (!isLoggedIn) {
            alert('로그인이 필요한 서비스입니다.');
            navigate('/demo/stalk/login');
            return;
        }
        if (!selectedDate || !selectedTime) {
            alert('날짜와 시간을 선택해주세요.');
            return;
        }
        alert(`${expert.name} 전문가님과의 상담 예약이 완료되었습니다.\n일시: ${selectedDate} ${selectedTime}`);
        navigate('/demo/stalk/mypage');
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="ml-1">돌아가기</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Profile Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Main Profile Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-50"
                                />
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {expert.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        {expert.name}
                                        <span className="text-base font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded">컨설턴트</span>
                                    </h1>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                        <div className="flex items-center gap-1">
                                            <Star className="text-yellow-400 fill-current" size={18} />
                                            <span className="font-bold text-gray-900">{expert.rating}</span>
                                            <span>({expert.reviewCount}개의 리뷰)</span>
                                        </div>
                                        <div className="w-px h-4 bg-gray-300"></div>
                                        <div>시간당 {expert.consultationFee.toLocaleString()}원</div>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {expert.shortIntro}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Info */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">상세 소개</h2>
                            <p className="text-gray-600 whitespace-pre-line leading-relaxed mb-8">
                                {expert.longIntro}
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-4">경력 사항</h3>
                            <div className="space-y-4 mb-8">
                                {expert.careers.length > 0 ? (
                                    expert.careers.map(career => (
                                        <div key={career.id} className="flex gap-4">
                                            <div className="w-24 flex-shrink-0 text-gray-500 text-sm pt-1">{career.period}</div>
                                            <div>
                                                <div className="font-bold text-gray-900">{career.title}</div>
                                                <div className="text-gray-600 text-sm">{career.description}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-500 text-sm">등록된 경력이 없습니다.</div>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-4">자격증</h3>
                            <div className="flex flex-wrap gap-3">
                                {expert.certificates.length > 0 ? (
                                    expert.certificates.map((cert, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                                            <Award size={16} className="text-blue-600" />
                                            <span className="text-gray-700 font-medium">{cert}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-gray-500 text-sm">등록된 자격증이 없습니다.</div>
                                )}
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                리뷰 <span className="text-blue-600">{expert.reviews.length}</span>
                            </h2>
                            <div className="space-y-6">
                                {expert.reviews.length > 0 ? (
                                    expert.reviews.map(review => (
                                        <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="font-bold text-gray-900">{review.author}</div>
                                                <div className="text-sm text-gray-500">{review.date}</div>
                                            </div>
                                            <div className="flex items-center gap-1 mb-2">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-600">{review.content}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-gray-500">아직 작성된 리뷰가 없습니다.</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Reservation Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Calendar className="text-blue-600" size={20} />
                                상담 예약하기
                            </h3>

                            {/* Date Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">날짜 선택</label>
                                <div className="grid grid-cols-5 gap-2">
                                    {dates.map((d, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedDate(d.fullDate)}
                                            className={`flex flex-col items-center p-2 rounded-lg border transition-all ${selectedDate === d.fullDate
                                                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                                                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className="text-xs text-gray-500 mb-1">{d.day}</span>
                                            <span className="font-bold">{d.date}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Selection */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-3">시간 선택</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {availableTimes.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-2 rounded-lg text-sm font-medium border transition-all ${selectedTime === time
                                                    ? 'border-blue-600 bg-blue-600 text-white'
                                                    : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-gray-50'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Summary & Action */}
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-600">총 결제금액</span>
                                    <span className="text-xl font-bold text-blue-600">
                                        {expert.consultationFee.toLocaleString()}원
                                    </span>
                                </div>
                                <button
                                    onClick={handleReservation}
                                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform active:scale-95"
                                >
                                    예약하기
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    예약 확정 시 카카오톡으로 알림이 발송됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorDetail;
