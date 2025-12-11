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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
            {/* Soft Pattern Background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fdba74 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <div className="flex justify-center mb-6 transform hover:scale-110 transition-transform duration-300">
                    <div className="bg-white p-4 rounded-full shadow-lg border-4 border-orange-100">
                        <img src={lookeyLogo} alt="LooKey" className="h-20 w-auto object-contain" />
                    </div>
                </div>
                <h2 className="text-center text-5xl font-black text-gray-800 mb-2 italic drop-shadow-sm tracking-tighter">
                    LooKey
                    <span className="text-orange-500 text-6xl">!</span>
                </h2>
                <p className="text-center text-xl text-gray-600 font-bold">
                    AI로 보는 세상, 스마트한 쇼핑
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                {/* Shopping Receipt Style Container */}
                <div className="bg-white relative shadow-xl transform rotate-1 transition-transform hover:rotate-0 duration-300">
                    {/* Zigzag Top */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-white -mt-2"
                        style={{ clipPath: 'polygon(0 100%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)' }}>
                    </div>

                    <div className="py-8 px-6 sm:px-10">
                        <div className="space-y-6">
                            <div className="text-center border-b-2 border-dashed border-gray-200 pb-6 mb-6">
                                <h3 className="text-xl font-bold text-gray-700">LOGIN RECEIPT</h3>
                                <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-black text-gray-700 mb-4 bg-orange-100 inline-block px-2 text-lg transform -rotate-2 rounded">
                                    SELECT ROLE
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setSelectedRole('user')}
                                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${selectedRole === 'user'
                                            ? 'border-orange-500 bg-orange-50 scale-105 shadow-md'
                                            : 'border-gray-100 hover:border-orange-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-full mb-2 ${selectedRole === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <User size={28} />
                                        </div>
                                        <span className={`font-bold text-lg ${selectedRole === 'user' ? 'text-orange-600' : 'text-gray-500'}`}>
                                            주인공
                                        </span>
                                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mt-1">시각장애인</span>
                                    </button>
                                    <button
                                        onClick={() => setSelectedRole('helper')}
                                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${selectedRole === 'helper'
                                            ? 'border-orange-500 bg-orange-50 scale-105 shadow-md'
                                            : 'border-gray-100 hover:border-orange-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-full mb-2 ${selectedRole === 'helper' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                            <Shield size={28} />
                                        </div>
                                        <span className={`font-bold text-lg ${selectedRole === 'helper' ? 'text-orange-600' : 'text-gray-500'}`}>
                                            서포터
                                        </span>
                                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mt-1">활동 보조인</span>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm border border-gray-100">
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-500">ITEM:</span>
                                    <span className="font-bold text-gray-700">ACCESS PERMISSION</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-500">PRICE:</span>
                                    <span className="font-bold text-orange-500">FREE</span>
                                </div>
                                <hr className="border-dashed border-gray-200 my-2" />
                                <ul className="text-gray-500 space-y-1 list-none text-xs">
                                    {selectedRole === 'user' ? (
                                        <>
                                            <li>* 음성 안내 서비스</li>
                                            <li>* 상품 인식 스캐너</li>
                                            <li>* 위험 상품 경고 알림</li>
                                        </>
                                    ) : (
                                        <>
                                            <li>* 보호자 모니터링</li>
                                            <li>* 설정 및 이력 관리</li>
                                            <li>* 긴급 호출 수신</li>
                                        </>
                                    )}
                                </ul>
                            </div>

                            <button
                                onClick={handleLogin}
                                className="w-full flex justify-center items-center gap-2 py-4 px-4 border-b-4 border-orange-700 rounded-lg shadow-md text-xl font-black text-white bg-orange-500 hover:bg-orange-600 hover:border-orange-800 transition-all active:border-b-0 active:translate-y-1"
                            >
                                <span>SHOP NOW</span>
                                <span className="bg-white text-orange-600 text-xs px-1 rounded font-bold">GO</span>
                            </button>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-gray-300 font-mono">BARCODE: ||| || ||| | ||||</p>
                            </div>
                        </div>
                    </div>
                    {/* Zigzag Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-white -mb-2"
                        style={{ clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)' }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
