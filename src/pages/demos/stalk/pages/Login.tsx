import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStalk, type UserRole } from '../context/StalkContext';
import stalkLogo from '../../../../assets/logos/stalk.png';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useStalk();
    const [selectedRole, setSelectedRole] = useState<UserRole>('CLIENT');

    const handleLogin = () => {
        login(selectedRole);
        if (selectedRole === 'ADMIN') {
            navigate('/demo/stalk/admin');
        } else {
            navigate('/demo/stalk/home');
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Chart FX */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L0 80 L10 75 L20 85 L30 60 L40 70 L50 40 L60 50 L70 20 L80 30 L90 10 L100 0 V100 Z" fill="url(#grad)" />
                    <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/10 p-4 transform hover:scale-105 transition-all duration-500">
                        <img src={stalkLogo} alt="Stalk" className="w-full h-full object-contain" />
                    </div>
                </div>
                <h2 className="text-center text-4xl font-bold text-white mb-2 tracking-tight">
                    Stalk
                    <span className="text-blue-500">.</span>
                </h2>
                <p className="text-center text-lg text-slate-400 font-light">
                    당신의 투자를 위한 전문가 매칭 플랫폼
                </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg relative z-10">
                <div className="bg-slate-800/50 backdrop-blur-xl py-8 px-4 shadow-2xl sm:rounded-2xl sm:px-10 border border-slate-700/50">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider text-center">
                                Select Your Position
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => setSelectedRole('CLIENT')}
                                    className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all duration-300 ${selectedRole === 'CLIENT'
                                        ? 'border-blue-500 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/20'
                                        : 'border-slate-700 text-slate-500 hover:bg-slate-700/50 hover:text-slate-300'
                                        }`}
                                >
                                    <span className="text-2xl mb-2">💼</span>
                                    <span className="font-bold text-sm">의뢰인</span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('ADVISOR')}
                                    className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all duration-300 ${selectedRole === 'ADVISOR'
                                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20'
                                        : 'border-slate-700 text-slate-500 hover:bg-slate-700/50 hover:text-slate-300'
                                        }`}
                                >
                                    <span className="text-2xl mb-2">📈</span>
                                    <span className="font-bold text-sm">전문가</span>
                                </button>
                                <button
                                    onClick={() => setSelectedRole('ADMIN')}
                                    className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all duration-300 ${selectedRole === 'ADMIN'
                                        ? 'border-purple-500 bg-purple-500/10 text-purple-400 shadow-lg shadow-purple-500/20'
                                        : 'border-slate-700 text-slate-500 hover:bg-slate-700/50 hover:text-slate-300'
                                        }`}
                                >
                                    <span className="text-2xl mb-2">⚡</span>
                                    <span className="font-bold text-sm">관리자</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50">
                            <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                접근 권한 미리보기
                            </h4>
                            <ul className="text-sm text-slate-400 space-y-2">
                                {selectedRole === 'CLIENT' && (
                                    <>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> 검증된 주식 전문가 탐색</li>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> 1:1 투자 상담 시뮬레이션</li>
                                        <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> 맞춤형 포트폴리오 제안</li>
                                    </>
                                )}
                                {selectedRole === 'ADVISOR' && (
                                    <>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 투자 자문 프로필 관리</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 상담 스케줄링 대시보드</li>
                                        <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 인사이트 리포트 발행</li>
                                    </>
                                )}
                                {selectedRole === 'ADMIN' && (
                                    <>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> 전문가 자격 심사 및 승인</li>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> 전체 플랫폼 트래픽 모니터링</li>
                                        <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> 회원 및 콘텐츠 관리</li>
                                    </>
                                )}
                            </ul>
                        </div>

                        <button
                            onClick={handleLogin}
                            className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${selectedRole === 'CLIENT' ? 'bg-blue-600 hover:bg-blue-500 focus:ring-blue-500 shadow-blue-900/30' :
                                selectedRole === 'ADVISOR' ? 'bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-500 shadow-emerald-900/30' :
                                    'bg-purple-600 hover:bg-purple-500 focus:ring-purple-500 shadow-purple-900/30'
                                }`}
                        >
                            로그인 및 체험 시작
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
