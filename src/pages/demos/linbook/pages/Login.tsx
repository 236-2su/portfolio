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
        <div className="min-h-screen bg-[#1a4731] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-6">
                    <img src={linbookLogo} alt="LinBook" className="h-28 w-auto object-contain drop-shadow-xl" />
                </div>
                <h2 className="text-center text-4xl font-extrabold text-white mb-2 tracking-tight">
                    Lin.Book
                </h2>
                <p className="text-center text-lg text-emerald-100 font-medium">
                    투명한 동아리 회계의 시작
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                {/* Note/Ledger Style Container */}
                <div className="bg-[#fcfbf9] py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10 border-t-8 border-[#2d6a4f] relative">
                    {/* Ring Binder Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-4 h-8 bg-gray-300 rounded-full shadow-inner border border-gray-400"></div>
                        ))}
                    </div>

                    <div className="space-y-6 mt-4">
                        <div>
                            <label className="block text-sm font-bold text-[#1a4731] mb-4 uppercase tracking-wider">
                                Role Selection
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setSelectedRole('leader')}
                                    className={`flex flex-col items-center justify-center p-5 border-2 rounded-lg transition-all duration-300 ${selectedRole === 'leader'
                                        ? 'border-[#2d6a4f] bg-[#e6f4ea] shadow-md scale-105'
                                        : 'border-gray-200 hover:border-[#2d6a4f]/50 hover:bg-gray-50'
                                        }`}
                                >
                                    <Shield size={32} className={selectedRole === 'leader' ? 'text-[#2d6a4f]' : 'text-gray-400'} />
                                    <span className={`mt-3 font-bold ${selectedRole === 'leader' ? 'text-[#2d6a4f]' : 'text-gray-500'}`}>
                                        총무/회장
                                    </span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('member')}
                                    className={`flex flex-col items-center justify-center p-5 border-2 rounded-lg transition-all duration-300 ${selectedRole === 'member'
                                        ? 'border-[#2d6a4f] bg-[#e6f4ea] shadow-md scale-105'
                                        : 'border-gray-200 hover:border-[#2d6a4f]/50 hover:bg-gray-50'
                                        }`}
                                >
                                    <User size={32} className={selectedRole === 'member' ? 'text-[#2d6a4f]' : 'text-gray-400'} />
                                    <span className={`mt-3 font-bold ${selectedRole === 'member' ? 'text-[#2d6a4f]' : 'text-gray-500'}`}>
                                        일반 부원
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#e6f4ea]/50 border border-[#2d6a4f]/20 p-4 rounded-md">
                            <h4 className="text-sm font-bold text-[#1a4731] mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#2d6a4f] rounded-full"></span>
                                접근 권한 안내
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1 list-none ml-1">
                                {selectedRole === 'leader' ? (
                                    <>
                                        <li>✓ 장부 기록 및 영수증 스캔</li>
                                        <li>✓ 회비 납부 현황 관리</li>
                                        <li>✓ AI 재정 리포트 분석</li>
                                    </>
                                ) : (
                                    <>
                                        <li>✓ 실시간 장부 조회</li>
                                        <li>✓ 나의 회비 납부 내역</li>
                                        <li>✓ 영수증 및 증빙 자료 확인</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-[#2d6a4f] hover:bg-[#1a4731] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d6a4f] transition-all transform hover:-translate-y-0.5"
                        >
                            장부 시작하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
