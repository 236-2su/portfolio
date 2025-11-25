import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk, type UserRole } from '../context/StalkContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useStalk();
    const [selectedRole, setSelectedRole] = useState<UserRole>('CLIENT');

    const handleLogin = () => {
        login(selectedRole);
        if (selectedRole === 'ADMIN') {
            navigate('/demo/stalk/admin');
        } else {
            navigate('/demo/stalk');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                        S
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Stalk 로그인
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    원하시는 역할을 선택하여 체험해보세요
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                역할 선택
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setSelectedRole('CLIENT')}
                                    className={`flex items-center justify-center px-4 py-3 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedRole === 'CLIENT'
                                        ? 'border-blue-600 text-blue-600 bg-blue-50 ring-2 ring-blue-500'
                                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                                        }`}
                                >
                                    의뢰인
                                </button>
                                <button
                                    onClick={() => setSelectedRole('ADVISOR')}
                                    className={`flex items-center justify-center px-4 py-3 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedRole === 'ADVISOR'
                                        ? 'border-blue-600 text-blue-600 bg-blue-50 ring-2 ring-blue-500'
                                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                                        }`}
                                >
                                    전문가
                                </button>
                                <button
                                    onClick={() => setSelectedRole('ADMIN')}
                                    className={`flex items-center justify-center px-4 py-3 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${selectedRole === 'ADMIN'
                                        ? 'border-blue-600 text-blue-600 bg-blue-50 ring-2 ring-blue-500'
                                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                                        }`}
                                >
                                    관리자
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">선택된 역할 권한:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                {selectedRole === 'CLIENT' && (
                                    <>
                                        <li>전문가 목록 조회 및 검색</li>
                                        <li>전문가 상담 예약 (시뮬레이션)</li>
                                        <li>투자 지식 iN 게시글 조회</li>
                                        <li>마이페이지 (상담 내역, 찜한 전문가)</li>
                                    </>
                                )}
                                {selectedRole === 'ADVISOR' && (
                                    <>
                                        <li>본인 프로필 수정 및 관리</li>
                                        <li>상담 일정 관리</li>
                                        <li>투자 지식 iN 글 작성</li>
                                        <li>마이페이지 (상담 스케줄, 내 정보)</li>
                                    </>
                                )}
                                {selectedRole === 'ADMIN' && (
                                    <>
                                        <li>전문가 자격증 승인/거절 관리</li>
                                        <li>전체 회원 및 게시글 관리</li>
                                        <li>관리자 전용 대시보드 접근</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                            로그인하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
