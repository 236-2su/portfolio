import { useState } from 'react';
import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { Settings as SettingsIcon, User, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMMON_ALLERGENS = ['밀', '대두', '우유', '땅콩', '계란', '생선', '갑각류', '견과류'];

export default function Settings() {
    const { userAllergens, setUserAllergens, logout } = useLookey();
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>(userAllergens);

    const toggleAllergen = (allergen: string) => {
        setSelectedAllergens(prev =>
            prev.includes(allergen)
                ? prev.filter(a => a !== allergen)
                : [...prev, allergen]
        );
    };

    const handleSave = () => {
        setUserAllergens(selectedAllergens);
        alert('알레르기 정보가 저장되었습니다.');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="p-6 space-y-4 bg-white min-h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <SettingsIcon size={28} />
                                설정
                            </h1>
                            <Link to="/demo/lookey/home" className="text-blue-600 text-sm">
                                ← 돌아가기
                            </Link>
                        </div>

                        {/* 알레르기 정보 */}
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                                <AlertCircle size={20} className="text-amber-600 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-amber-900">알레르기 정보</h3>
                                    <p className="text-sm text-amber-700 mt-1">
                                        알레르기 성분이 포함된 상품을 스캔하면 경고를 받습니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-gray-700">알레르기 성분 선택</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {COMMON_ALLERGENS.map(allergen => (
                                    <button
                                        key={allergen}
                                        onClick={() => toggleAllergen(allergen)}
                                        className={`p-3 rounded-lg border-2 transition-all ${selectedAllergens.includes(allergen)
                                            ? 'border-red-500 bg-red-50 text-red-700'
                                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {allergen}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handleSave}
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                        >
                            저장하기
                        </button>

                        {/* 계정 */}
                        <div className="border-t pt-4 space-y-3">
                            <h3 className="font-semibold text-gray-700">계정</h3>
                            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3">
                                <User size={20} className="text-gray-600" />
                                <span>프로필 설정</span>
                            </button>
                            <button
                                onClick={() => {
                                    logout();
                                    window.location.href = '/demo/lookey';
                                }}
                                className="w-full text-left p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-red-600 font-semibold"
                            >
                                로그아웃
                            </button>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
