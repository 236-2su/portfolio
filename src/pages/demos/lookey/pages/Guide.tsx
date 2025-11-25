import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Guide() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col">
                        <div className="p-4 flex items-center justify-between border-b">
                            <button onClick={() => navigate('/demo/lookey/home')} className="p-2 hover:bg-gray-100 rounded-lg">
                                <ArrowLeft size={24} />
                            </button>
                            <h1 className="text-xl font-bold">사용법</h1>
                            <div className="w-10"></div>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto space-y-6">
                            <div className="text-center mb-8">
                                <HelpCircle size={64} className="mx-auto text-blue-600 mb-4" />
                                <h2 className="text-2xl font-bold text-gray-800">LooKey 사용 가이드</h2>
                            </div>

                            {[
                                { title: '1. 상품 스캔', desc: '카메라로 상품을 비추면 AI가 자동으로 인식하여 음성으로 안내합니다.' },
                                { title: '2. 알레르기 정보', desc: '알레르기 성분을 등록하면 해당 성분이 포함된 상품 스캔 시 경고를 받습니다.' },
                                { title: '3. 장바구니', desc: '스캔한 상품을 장바구니에 추가하고 총 금액을 확인할 수 있습니다.' },
                                { title: '4. 편의점 찾기', desc: '내 주변 편의점을 찾고 길찾기를 할 수 있습니다.' },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-blue-800">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
