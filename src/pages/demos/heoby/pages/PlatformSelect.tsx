import { useNavigate } from 'react-router-dom';
import { useHeoby } from '../context/HeobyContext';
import { motion } from 'framer-motion';
import { Monitor, Smartphone } from 'lucide-react';

const PlatformSelect = () => {
    const navigate = useNavigate();
    const { isLoggedIn, selectPlatform } = useHeoby();

    if (!isLoggedIn) {
        navigate('/demo/heoby');
        return null;
    }

    const handlePlatformSelect = (platform: 'web' | 'mobile') => {
        selectPlatform(platform);
        navigate(`/demo/heoby/${platform}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col justify-center py-12 px-4">
            <div className="max-w-4xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">플랫폼 선택</h1>
                    <p className="text-xl text-gray-300">
                        사용하실 플랫폼을 선택해주세요
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Web Platform */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePlatformSelect('web')}
                        className="bg-white rounded-2xl p-8 cursor-pointer shadow-2xl hover:shadow-blue-500/50 transition-all"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                                <Monitor size={48} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">웹 대시보드</h2>
                            <p className="text-gray-600 mb-6">
                                관리자용 실시간 모니터링 대시보드
                            </p>
                            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">✓</span>
                                    실시간 CCTV 모니터링
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">✓</span>
                                    AI 감지 이벤트 관리
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">✓</span>
                                    통계 및 분석 대시보드
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-blue-600">✓</span>
                                    알림 및 설정 관리
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all">
                                웹으로 시작하기
                            </button>
                        </div>
                    </motion.div>

                    {/* Mobile Platform */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handlePlatformSelect('mobile')}
                        className="bg-white rounded-2xl p-8 cursor-pointer shadow-2xl hover:shadow-green-500/50 transition-all"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-6">
                                <Smartphone size={48} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">모바일 앱</h2>
                            <p className="text-gray-600 mb-6">
                                사용자용 모바일 모니터링 앱
                            </p>
                            <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    실시간 알림 수신
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    이벤트 히스토리 조회
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    간편한 모바일 UI
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-600">✓</span>
                                    위치 기반 모니터링
                                </li>
                            </ul>
                            <button className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                                모바일로 시작하기
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PlatformSelect;
