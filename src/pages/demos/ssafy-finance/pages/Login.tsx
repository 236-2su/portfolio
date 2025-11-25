import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance, type UserRole } from '../context/SsafyFinanceContext';
import { User, Shield } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useSsafyFinance();
    const [selectedRole, setSelectedRole] = useState<UserRole>('user');

    const handleLogin = () => {
        login(selectedRole);
        navigate('/demo/ssafy-finance/home');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            M
                        </span>
                    </div>
                </div>
                <h2 className="text-center text-4xl font-extrabold text-white mb-2">
                    MyFin
                </h2>
                <p className="text-center text-lg text-white/90">
                    AI 기반 맞춤형 금융 상품 추천 서비스
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                역할 선택
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setSelectedRole('user')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'user'
                                            ? 'border-primary-600 bg-primary-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={32} className={selectedRole === 'user' ? 'text-primary-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'user' ? 'text-primary-600' : 'text-gray-600'}`}>
                                        일반 사용자
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('admin')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'admin'
                                            ? 'border-primary-600 bg-primary-50 shadow-md'
                                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Shield size={32} className={selectedRole === 'admin' ? 'text-primary-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'admin' ? 'text-primary-600' : 'text-gray-600'}`}>
                                        관리자
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">선택된 역할 권한:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                {selectedRole === 'user' ? (
                                    <>
                                        <li>금융 상품 추천 및 시세 조회</li>
                                        <li>AI 기반 맞춤형 투자 설문</li>
                                        <li>예금/적금 금리 비교</li>
                                        <li>금/은 시세 확인</li>
                                    </>
                                ) : (
                                    <>
                                        <li>시스템 관리 및 통계 확인</li>
                                        <li>사용자 데이터 분석</li>
                                        <li>상품 관리 및 업데이트</li>
                                        <li>관리자 전용 대시보드</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
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
