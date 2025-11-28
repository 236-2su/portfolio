import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { ChevronLeft, Camera, Plus, Trash2 } from 'lucide-react';

const AdvisorEdit = () => {
    const navigate = useNavigate();
    const { userRole, experts, updateExpert } = useStalk();

    // Mock: Assume logged in user is expert with ID 1
    const myExpertId = 1;
    const expert = experts.find(e => e.id === myExpertId);

    const [formData, setFormData] = useState({
        shortIntro: expert?.shortIntro || '',
        longIntro: expert?.longIntro || '',
        consultationFee: expert?.consultationFee || 0,
        preferredStyle: expert?.preferredStyle || 'SHORT',
    });

    const [careers, setCareers] = useState(expert?.careers || []);

    if (userRole !== 'ADVISOR') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-4">접근 권한이 없습니다.</h2>
                    <button
                        onClick={() => navigate('/demo/stalk')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    const handleSave = () => {
        updateExpert(myExpertId, {
            ...formData,
            careers
        });
        alert('프로필이 성공적으로 수정되었습니다.');
        navigate('/demo/stalk/mypage');
    };

    const addCareer = () => {
        const newId = Math.max(...careers.map(c => c.id), 0) + 1;
        setCareers([...careers, { id: newId, period: '', title: '', description: '' }]);
    };

    const updateCareer = (id: number, field: string, value: string) => {
        setCareers(careers.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const removeCareer = (id: number) => {
        setCareers(careers.filter(c => c.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/demo/stalk/mypage')}
                    className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="ml-1">마이페이지로 돌아가기</span>
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-8">전문가 프로필 수정</h1>

                    <div className="space-y-8">
                        {/* Profile Image */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">프로필 이미지</label>
                            <div className="flex items-center gap-6">
                                <img
                                    src={expert?.image}
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full object-cover border border-gray-200"
                                />
                                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700">
                                    <Camera size={18} />
                                    이미지 변경
                                </button>
                            </div>
                        </div>

                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">한줄 소개</label>
                                <input
                                    type="text"
                                    value={formData.shortIntro}
                                    onChange={(e) => setFormData({ ...formData, shortIntro: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">시간당 상담료 (원)</label>
                                <input
                                    type="number"
                                    value={formData.consultationFee}
                                    onChange={(e) => setFormData({ ...formData, consultationFee: Number(e.target.value) })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Investment Style */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">주력 투자 스타일</label>
                            <div className="flex flex-wrap gap-2">
                                {['SHORT', 'MID_SHORT', 'MID', 'MID_LONG', 'LONG'].map(style => (
                                    <button
                                        key={style}
                                        onClick={() => setFormData({ ...formData, preferredStyle: style })}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${formData.preferredStyle === style
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {style}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Long Intro */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">상세 소개</label>
                            <textarea
                                value={formData.longIntro}
                                onChange={(e) => setFormData({ ...formData, longIntro: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                            />
                        </div>

                        {/* Careers */}
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="block text-sm font-medium text-gray-700">경력 사항</label>
                                <button
                                    onClick={addCareer}
                                    className="flex items-center gap-1 text-sm text-blue-600 font-medium hover:text-blue-700"
                                >
                                    <Plus size={16} />
                                    경력 추가
                                </button>
                            </div>

                            <div className="space-y-4">
                                {careers.map((career, index) => (
                                    <div key={career.id} className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative">
                                        <button
                                            onClick={() => removeCareer(career.id)}
                                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pr-8">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="기간 (예: 2020-2023)"
                                                    value={career.period}
                                                    onChange={(e) => updateCareer(career.id, 'period', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="직함/회사명"
                                                    value={career.title}
                                                    onChange={(e) => updateCareer(career.id, 'title', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="설명"
                                                    value={career.description}
                                                    onChange={(e) => updateCareer(career.id, 'description', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-6 border-t border-gray-100">
                            <button
                                onClick={handleSave}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md"
                            >
                                저장하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvisorEdit;
