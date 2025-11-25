import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHeoby, type UserRole, type Platform } from '../context/HeobyContext';
import { User, Shield, Monitor, Smartphone } from 'lucide-react';
import heobyLogo from '../../../../assets/logos/heoby-logo.svg';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useHeoby();
    const [selectedRole, setSelectedRole] = useState<UserRole>('farmer');
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>('web');

    const handleLogin = () => {
        login(selectedRole, selectedPlatform);
        if (selectedPlatform === 'web') {
            navigate('/demo/heoby/web');
        } else {
            navigate('/demo/heoby/mobile');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eeedec] to-[#f0e6c6] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={heobyLogo} alt="Heoby" className="h-24 w-auto object-contain" />
                </div>
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-2" style={{ fontFamily: "'NanumMyeongjo', serif" }}>
                    Heoby
                </h2>
                <p className="text-center text-lg text-gray-700">
                    AI 기반 스마트 농장 모니터링 시스템
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white/90 backdrop-blur-sm py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-200">
                    <div className="space-y-6">
                        {/* 역할 선택 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                역할 선택
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setSelectedRole('farmer')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'farmer'
                                        ? 'border-[#b8875c] bg-[#b8875c]/10 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={32} className={selectedRole === 'farmer' ? 'text-[#b8875c]' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'farmer' ? 'text-[#b8875c]' : 'text-gray-600'}`}>
                                        농장주
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('admin')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'admin'
                                        ? 'border-[#b8875c] bg-[#b8875c]/10 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Shield size={32} className={selectedRole === 'admin' ? 'text-[#b8875c]' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'admin' ? 'text-[#b8875c]' : 'text-gray-600'}`}>
                                        관리자
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* 플랫폼 선택 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                플랫폼 선택
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setSelectedPlatform('web')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedPlatform === 'web'
                                        ? 'border-[#b8875c] bg-[#b8875c]/10 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Monitor size={32} className={selectedPlatform === 'web' ? 'text-[#b8875c]' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedPlatform === 'web' ? 'text-[#b8875c]' : 'text-gray-600'}`}>
                                        웹
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedPlatform('mobile')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedPlatform === 'mobile'
                                        ? 'border-[#b8875c] bg-[#b8875c]/10 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Smartphone size={32} className={selectedPlatform === 'mobile' ? 'text-[#b8875c]' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedPlatform === 'mobile' ? 'text-[#b8875c]' : 'text-gray-600'}`}>
                                        모바일
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* 권한 설명 */}
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">선택된 역할 권한:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                {selectedRole === 'farmer' ? (
                                    <>
                                        <li>허수아비 상태 실시간 모니터링</li>
                                        <li>지도에서 위치 확인 및 관리</li>
                                        <li>알림 수신 및 확인</li>
                                        <li>날씨 정보 조회</li>
                                    </>
                                ) : (
                                    <>
                                        <li>전체 시스템 관리 및 통계</li>
                                        <li>사용자 및 허수아비 관리</li>
                                        <li>CCTV 모니터링</li>
                                        <li>관리자 전용 대시보드</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-[#b8875c] hover:bg-[#8f6540] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b8875c] transition-all"
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
