import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { Check, X, AlertTriangle } from 'lucide-react';

const Admin = () => {
    const navigate = useNavigate();
    const { userRole, adminRequests, approveRequest, rejectRequest } = useStalk();
    const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

    if (userRole !== 'ADMIN') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
                    <h2 className="text-xl font-bold mb-2">접근 권한이 없습니다.</h2>
                    <p className="text-gray-600 mb-6">관리자 계정으로 로그인해주세요.</p>
                    <button
                        onClick={() => navigate('/demo/stalk/login')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                    >
                        로그인 페이지로 이동
                    </button>
                </div>
            </div>
        );
    }

    const filteredRequests = adminRequests.filter(req =>
        filter === 'all' ? true : req.status === filter
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">관리자 대시보드</h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-4 bg-gray-50 border-b border-gray-200 font-bold text-gray-700">
                                관리 메뉴
                            </div>
                            <nav className="flex flex-col p-2">
                                <button className="text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 font-medium">
                                    전문가 자격증 관리
                                </button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
                                    회원 관리
                                </button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
                                    게시글 관리
                                </button>
                                <button className="text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
                                    신고 내역
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900">자격증 승인 요청</h2>
                                <div className="flex gap-2">
                                    <select
                                        value={filter}
                                        onChange={(e) => setFilter(e.target.value as any)}
                                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="all">전체 보기</option>
                                        <option value="pending">대기중</option>
                                        <option value="approved">승인됨</option>
                                        <option value="rejected">거절됨</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {filteredRequests.length > 0 ? (
                                    filteredRequests.map(req => (
                                        <div key={req.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`px-2 py-1 rounded text-xs font-bold ${req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                                                req.status === 'approved' ? 'bg-green-100 text-green-700' :
                                                                    'bg-red-100 text-red-700'
                                                            }`}>
                                                            {req.status === 'pending' ? '승인 대기' :
                                                                req.status === 'approved' ? '승인됨' : '거절됨'}
                                                        </span>
                                                        <span className="text-gray-500 text-sm">{req.date}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                        {req.expertName}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        자격증명: <span className="font-medium text-gray-900">{req.certificateName}</span>
                                                    </p>
                                                </div>

                                                {req.status === 'pending' && (
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm('승인하시겠습니까?')) approveRequest(req.id);
                                                            }}
                                                            className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                                        >
                                                            <Check size={16} />
                                                            승인
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                if (window.confirm('거절하시겠습니까?')) rejectRequest(req.id);
                                                            }}
                                                            className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                                        >
                                                            <X size={16} />
                                                            거절
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-xl">
                                        요청 내역이 없습니다.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
