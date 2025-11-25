import { useState } from 'react';
import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, AlertCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COMMON_ALLERGENS = [
    '밀', '대두', '우유', '땅콩', '계란', '생선', '갑각류', '견과류',
    '복숭아', '토마토', '돼지고기', '쇠고기', '닭고기', '새우', '오징어', '고등어'
];

export default function Allergy() {
    const navigate = useNavigate();
    const { userAllergens, setUserAllergens } = useLookey();
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
        alert(`${selectedAllergens.length}개의 알레르기 정보가 저장되었습니다.`);
        navigate('/demo/lookey/home');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col">
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between border-b">
                            <button
                                onClick={() => navigate('/demo/lookey/home')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft size={24} className="text-gray-700" />
                            </button>
                            <h1 className="text-xl font-bold text-gray-800">알레르기 정보 입력</h1>
                            <div className="w-10"></div>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto">
                            {/* 안내 메시지 */}
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle size={24} className="text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 mb-1">알레르기 정보 등록</h3>
                                        <p className="text-sm text-amber-800">
                                            알레르기 성분이 포함된 상품을 스캔하면 음성으로 경고를 받습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 선택된 알레르기 수 */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-600">
                                    선택된 알레르기: <span className="font-bold text-blue-600">{selectedAllergens.length}개</span>
                                </p>
                            </div>

                            {/* 알레르기 선택 그리드 */}
                            <div className="grid grid-cols-2 gap-3">
                                {COMMON_ALLERGENS.map(allergen => {
                                    const isSelected = selectedAllergens.includes(allergen);
                                    return (
                                        <button
                                            key={allergen}
                                            onClick={() => toggleAllergen(allergen)}
                                            className={`p-4 rounded-xl border-2 transition-all relative ${isSelected
                                                    ? 'border-red-500 bg-red-50 shadow-md'
                                                    : 'border-gray-200 bg-white hover:border-gray-300'
                                                }`}
                                        >
                                            {isSelected && (
                                                <div className="absolute top-2 right-2 bg-red-500 rounded-full p-0.5">
                                                    <Check size={14} className="text-white" />
                                                </div>
                                            )}
                                            <span className={`font-semibold ${isSelected ? 'text-red-700' : 'text-gray-700'
                                                }`}>
                                                {allergen}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 저장 버튼 */}
                        <div className="p-6 border-t bg-white">
                            <button
                                onClick={handleSave}
                                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                저장하기
                            </button>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
