import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { ChevronLeft, MapPin } from 'lucide-react';

const Bank = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSsafyFinance();
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedBank, setSelectedBank] = useState('');

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const regions = ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산'];
    const banks = ['국민은행', '신한은행', '우리은행', '하나은행', '농협은행', '기업은행'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 px-6">
                <div className="container mx-auto">
                    <button
                        onClick={() => navigate('/demo/ssafy-finance/home')}
                        className="mb-6 text-white hover:underline flex items-center gap-1"
                    >
                        <ChevronLeft size={20} />
                        메인으로 돌아가기
                    </button>
                    <h1 className="text-4xl font-bold mb-2">은행 찾기</h1>
                    <p className="text-xl opacity-90">가까운 은행과 ATM 위치를 빠르게 확인하세요</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="card p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <MapPin size={24} className="text-primary-600" />
                                위치와 은행을 선택
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">지역</label>
                                    <select
                                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none"
                                        value={selectedRegion}
                                        onChange={(e) => setSelectedRegion(e.target.value)}
                                    >
                                        <option value="">지역을 선택하세요</option>
                                        {regions.map((region) => (
                                            <option key={region} value={region}>
                                                {region}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">은행명</label>
                                    <select
                                        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none"
                                        value={selectedBank}
                                        onChange={(e) => setSelectedBank(e.target.value)}
                                    >
                                        <option value="">은행을 선택하세요</option>
                                        {banks.map((bank) => (
                                            <option key={bank} value={bank}>
                                                {bank}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    className="btn-primary w-full"
                                    disabled={!selectedRegion || !selectedBank}
                                >
                                    지점 검색
                                </button>
                            </div>
                        </div>

                        <div className="card p-6">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <span className="text-yellow-500">★</span>
                                인기 은행
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {banks.slice(0, 4).map((bank) => (
                                    <button
                                        key={bank}
                                        className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm hover:bg-primary-600 hover:text-white transition-all"
                                        onClick={() => setSelectedBank(bank)}
                                    >
                                        {bank}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="lg:col-span-3">
                        <div className="card p-0 overflow-hidden h-[600px] relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin size={64} className="text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-600 mb-2">지도 영역</h3>
                                    <p className="text-gray-500">
                                        실제 서비스에서는 지도 API를 연동하여
                                        <br />
                                        주변 은행과 ATM 위치를 표시합니다.
                                    </p>
                                    {selectedRegion && selectedBank && (
                                        <div className="mt-4 inline-block px-6 py-3 bg-primary-600 text-white rounded-lg">
                                            {selectedRegion} {selectedBank} 검색 중...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bank;
