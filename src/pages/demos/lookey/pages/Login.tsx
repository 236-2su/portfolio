import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLookey, type UserRole } from '../context/LookeyContext';
import { User, Shield } from 'lucide-react';
import lookeyLogo from '../../../../assets/logos/lookey.svg';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useLookey();
    const [selectedRole, setSelectedRole] = useState<UserRole>('user');

    const handleLogin = () => {
        login(selectedRole);
        navigate('/demo/lookey/home');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={lookeyLogo} alt="LooKey" className="h-24 w-auto object-contain" />
                </div>
                <h2 className="text-center text-4xl font-extrabold text-white mb-2">
                    LooKey
                </h2>
                <p className="text-center text-lg text-white/90">
                    시각장애인을 위한 AI 기반 편의점 상품 인식 서비스
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
                                    onClick={() => setSelectedRole('user')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'user'
                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={32} className={selectedRole === 'user' ? 'text-blue-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'user' ? 'text-blue-600' : 'text-gray-600'}`}>
                                        사용자
                                    </span>
                                    <span className="text-xs text-gray-500 mt-1 text-center">시각장애인</span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('helper')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'helper'
                                            ? 'border-blue-600 bg-blue-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Shield size={32} className={selectedRole === 'helper' ? 'text-blue-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'helper' ? 'text-blue-600' : 'text-gray-600'}`}>
                                        보조인
                                    </span>
                                    <span className="text-xs text-gray-500 mt-1 text-center">활동 보조</span>
                                </button>
                            </div>
                        </div>

                        {/* 권한 설명 */}
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">선택된 역할 권한:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                {selectedRole === 'user' ? (
                                    <>
                                        <li>상품 스캔 및 음성 안내</li>
                                        <li>장바구니 관리</li>
                                        <li>알레르기 정보 확인</li>
                                        <li>스캔 기록 조회</li>
                                    </>
                                ) : (
                                    <>
                                        <li>사용자 스캔 기록 확인</li>
                                        <li>알레르기 정보 관리</li>
                                        <li>장바구니 도움</li>
                                        <li>설정 변경</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
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
