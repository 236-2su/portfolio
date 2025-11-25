import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_STORES = [
    { id: 1, name: 'CU 역삼점', address: '서울 강남구 역삼동 123-45', distance: '120m' },
    { id: 2, name: 'GS25 테헤란점', address: '서울 강남구 역삼동 234-56', distance: '250m' },
    { id: 3, name: '세븐일레븐 강남점', address: '서울 강남구 역삼동 345-67', distance: '380m' },
];

export default function StoreFinder() {
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
                            <h1 className="text-xl font-bold">편의점 찾기</h1>
                            <div className="w-10"></div>
                        </div>

                        <div className="h-64 bg-gray-200 flex items-center justify-center">
                            <MapPin size={48} className="text-gray-400" />
                            <span className="ml-2 text-gray-500">지도 (준비중)</span>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto">
                            <h2 className="font-bold text-lg mb-4">내 주변 편의점</h2>
                            <div className="space-y-3">
                                {MOCK_STORES.map(store => (
                                    <div key={store.id} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800">{store.name}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{store.address}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-blue-600 font-bold text-sm">{store.distance}</div>
                                                <button className="mt-2 p-1 bg-blue-50 rounded">
                                                    <Navigation size={16} className="text-blue-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
