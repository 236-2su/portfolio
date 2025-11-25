import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLinBook, type UserRole } from '../context/LinBookContext';
import { User, Shield } from 'lucide-react';
import linbookLogo from '../../../../assets/logos/linbook_real.png';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useLinBook();
    const [selectedRole, setSelectedRole] = useState<UserRole>('leader');

    const handleLogin = () => {
        login(selectedRole);
        navigate('/demo/linbook/clubs');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center mb-6">
                    <img src={linbookLogo} alt="LinBook" className="h-24 w-auto object-contain" />
                </div>
                <h2 className="text-center text-4xl font-extrabold text-white mb-2">
                    Lin.Book
                </h2>
                <p className="text-center text-lg text-white/90">
                    통합 동아리 장부 관리 시스템
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white/90 backdrop-blur-sm py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-gray-200">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">
                                역할 선택
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setSelectedRole('leader')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'leader'
                                        ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <Shield size={32} className={selectedRole === 'leader' ? 'text-indigo-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'leader' ? 'text-indigo-600' : 'text-gray-600'}`}>
                                        동아리 리더
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('member')}
                                    className={`flex flex-col items-center justify-center p-6 border-2 rounded-xl transition-all ${selectedRole === 'member'
                                        ? 'border-indigo-600 bg-indigo-50 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={32} className={selectedRole === 'member' ? 'text-indigo-600' : 'text-gray-400'} />
                                    <span className={`mt-2 font-semibold ${selectedRole === 'member' ? 'text-indigo-600' : 'text-gray-600'}`}>
                                        일반 회원
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">선택된 역할 권한:</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                                {selectedRole === 'leader' ? (
                                    <>
                                        <li>장부 생성 및 수정</li>
                                        <li>거래 내역 관리</li>
                                        <li>회비 관리</li>
                                        <li>AI 보고서 생성</li>
                                    </>
                                ) : (
                                    <>
                                        <li>장부 조회</li>
                                        <li>거래 내역 확인</li>
                                        <li>게시판 이용</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
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
