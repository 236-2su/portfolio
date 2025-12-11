import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AccountCreated() {
    const navigate = useNavigate();
    const { groupAccount } = useLinBook();

    useEffect(() => {
        // 축하 폭죽 효과
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    if (!groupAccount) return null;

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col font-sans items-center justify-center p-8 text-center relative overflow-hidden">
                        {/* Background Deco */}
                        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-blue-50 to-white -z-10"></div>

                        <div className="mb-8 relative">
                            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center animate-bounce">
                                <Check size={48} className="text-blue-600" strokeWidth={3} />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full border-4 border-white">
                                <span className="text-xl">🎉</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            모임통장이 개설되었습니다!
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            이제부터 동아리 회비 관리가<br />
                            훨씬 투명하고 편리해집니다.
                        </p>

                        {/* Account Card */}
                        <div className="w-full bg-slate-800 text-white p-6 rounded-2xl shadow-xl mb-8 relative overflow-hidden text-left">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-white/60 text-xs font-medium mb-1">신한 주거래 우대통장</p>
                                    <h3 className="font-bold text-lg tracking-wide">{groupAccount.accountNo}</h3>
                                </div>
                                <button className="p-1.5 bg-white/10 rounded hover:bg-white/20 transition-colors">
                                    <Copy size={14} className="text-white/80" />
                                </button>
                            </div>

                            <div className="mt-4">
                                <p className="text-white/60 text-xs mb-1">현재 잔액</p>
                                <p className="text-2xl font-bold">₩ 0</p>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate('/demo/linbook/account-history')}
                            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg active:scale-95"
                        >
                            내역 확인하러 가기
                        </button>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
