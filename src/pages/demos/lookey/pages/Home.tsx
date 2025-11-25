import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { MapPin, ScanLine, ShoppingCart, AlertCircle, Settings as SettingsIcon, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import lookeyLogo from '../../../../assets/logos/lookey.svg';

const MENU_ITEMS = [
    { label: '편의점\n찾기', icon: MapPin, path: '/demo/lookey/store-finder', color: 'from-blue-500 to-blue-600' },
    { label: '상품 찾기', icon: ScanLine, path: '/demo/lookey/scan', color: 'from-purple-500 to-purple-600' },
    { label: '장바구니', icon: ShoppingCart, path: '/demo/lookey/cart', color: 'from-green-500 to-green-600' },
    { label: '알레르기\n정보 입력', icon: AlertCircle, path: '/demo/lookey/allergy', color: 'from-red-500 to-red-600' },
    { label: '설정', icon: SettingsIcon, path: '/demo/lookey/settings', color: 'from-gray-500 to-gray-600' },
    { label: '사용법', icon: HelpCircle, path: '/demo/lookey/guide', color: 'from-amber-500 to-amber-600' },
];

export default function Home() {
    const { userRole } = useLookey();
    const userName = userRole === 'user' ? '사용자' : '보조인';

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="p-6 bg-white min-h-full">
                        {/* 로고 헤더 */}
                        <div className="flex items-center justify-center mb-4">
                            <img src={lookeyLogo} alt="LooKey" className="h-14 w-14 object-contain" />
                            <span className="ml-3 text-2xl font-bold text-gray-800">LooKey</span>
                        </div>

                        {/* 구분선 */}
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                        {/* 인사 문구 */}
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
                            {userName}님,<br />
                            안녕하세요
                        </h2>

                        {/* 메뉴 그리드 (2열) */}
                        <div className="grid grid-cols-2 gap-3">
                            {MENU_ITEMS.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-all active:scale-95 flex flex-col items-center justify-center h-60`}
                                    >
                                        <div className="flex-1 flex items-center justify-center">
                                            <Icon size={65} className="text-white" />
                                        </div>
                                        <div className="text-white text-center font-bold text-lg leading-10 whitespace-pre-line">
                                            {item.label}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
