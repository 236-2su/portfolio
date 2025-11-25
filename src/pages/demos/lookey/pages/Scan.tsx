import { useState, useEffect } from 'react';
import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Volume2, ShoppingCart, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_PRODUCTS = [
    { id: 'P001', name: '신라면 컵', price: 1200, barcode: '8801043001953', category: '라면', allergens: ['밀', '대두'], location: '라면코너 2번 진열대' },
    { id: 'P002', name: '코카콜라 500ml', price: 2200, barcode: '8801094701017', category: '음료', allergens: [], location: '음료코너 1번 진열대' },
    { id: 'P003', name: '포카칩 오리지널', price: 1700, barcode: '8801117391010', category: '스낵', allergens: ['밀', '우유'], location: '스낵코너 3번 진열대' },
    { id: 'P004', name: '새우깡', price: 1500, barcode: '8801019600708', category: '스낵', allergens: ['새우', '밀'], location: '스낵코너 3번 진열대' },
];

type ScanMode = 'guide' | 'scan';

export default function Scan() {
    const navigate = useNavigate();
    const { addToCart, addScanHistory, userAllergens, cart } = useLookey();

    const [mode, setMode] = useState<ScanMode>('scan');
    const [scanning, setScanning] = useState(false);
    const [scanResult, setScanResult] = useState<typeof MOCK_PRODUCTS[0] | null>(null);
    const [banner, setBanner] = useState<{ text: string; type: 'info' | 'warning' | 'success' } | null>(null);
    const [showCartModal, setShowCartModal] = useState(false);
    const [cartModalProduct, setCartModalProduct] = useState<string | null>(null);

    // 배너 자동 숨김
    useEffect(() => {
        if (banner) {
            const timer = setTimeout(() => setBanner(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [banner]);

    const handleScan = () => {
        if (scanning) return;

        setScanning(true);
        setScanResult(null);
        setBanner({ text: '상품 탐색 중...', type: 'info' });

        setTimeout(() => {
            const product = MOCK_PRODUCTS[Math.floor(Math.random() * MOCK_PRODUCTS.length)];
            const confidence = 0.92 + Math.random() * 0.07;

            setScanResult(product);
            addScanHistory(product, confidence);
            setScanning(false);

            // 알레르기 체크
            const hasAllergen = product.allergens?.some(a => userAllergens.includes(a));

            if (hasAllergen) {
                setBanner({
                    text: `⚠️ 경고! ${product.name}에 알레르기 성분이 포함되어 있습니다!`,
                    type: 'warning'
                });
            } else {
                setBanner({
                    text: `${product.name}, ${product.price}원입니다.`,
                    type: 'success'
                });
            }

            // 장바구니에 이미 있는 상품인지 체크
            const inCart = cart.some(item => item.id === product.id);
            if (inCart) {
                setCartModalProduct(product.name);
                setShowCartModal(true);
            }

            // 음성 안내 시뮬레이션
            console.log('🔊 TTS:', hasAllergen
                ? `경고! ${product.name}, ${product.price}원입니다. 알레르기 성분이 포함되어 있습니다.`
                : `${product.name}, ${product.price}원입니다.`
            );
        }, 2000);
    };

    const handleGuide = () => {
        if (scanning) return;

        setScanning(true);
        setBanner({ text: '길 탐색 중...', type: 'info' });

        setTimeout(() => {
            const product = MOCK_PRODUCTS[Math.floor(Math.random() * MOCK_PRODUCTS.length)];
            setBanner({
                text: `${product.name}은(는) ${product.location}에 있습니다.`,
                type: 'success'
            });
            setScanning(false);

            console.log('🔊 TTS:', `${product.name}은(는) ${product.location}에 있습니다. 안내를 시작합니다.`);
        }, 2000);
    };

    const handleAddToCart = () => {
        if (scanResult) {
            addToCart(scanResult);
            setBanner({ text: '장바구니에 추가되었습니다!', type: 'success' });
            setScanResult(null);
        }
    };

    const handleCartGuideConfirm = () => {
        setShowCartModal(false);
        if (scanResult) {
            setBanner({ text: `${scanResult.location}로 안내합니다.`, type: 'info' });
            console.log('🔊 TTS:', `${scanResult.location}로 안내합니다.`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-gray-900 min-h-full flex flex-col relative">
                        {/* Camera Preview Area */}
                        <div className="flex-1 relative bg-black">
                            {/* Top Bar */}
                            <div className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center justify-between">
                                <button
                                    onClick={() => navigate('/demo/lookey/home')}
                                    className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors backdrop-blur-sm"
                                >
                                    <ArrowLeft size={24} className="text-white" />
                                </button>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate('/demo/lookey/cart')}
                                        className="relative p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors backdrop-blur-sm"
                                    >
                                        <ShoppingCart size={24} className="text-white" />
                                        {cart.length > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                                {cart.length}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Camera View */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-80 h-[630px] bg-gray-800 rounded-xl border-2 border-gray-600 flex items-center justify-center relative overflow-hidden">
                                    {scanning && (
                                        <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
                                    )}
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">📷</div>
                                        <p className="text-white/70">Camera Preview</p>
                                        <p className="text-white/50 text-sm mt-2">
                                            {mode === 'scan' ? '상품을 비춰보세요' : '편의점 내부를 비춰보세요'}
                                        </p>
                                    </div>

                                    {/* Banner Message */}
                                    {banner && (
                                        <div className={`absolute top-5 left-5 right-5 p-4 rounded-lg shadow-lg backdrop-blur-md ${banner.type === 'warning' ? 'bg-red-500/90' :
                                                banner.type === 'success' ? 'bg-green-500/90' :
                                                    'bg-blue-500/90'
                                            }`}>
                                            <div className="flex items-start gap-2">
                                                {banner.type === 'warning' && <AlertTriangle size={20} className="text-white shrink-0 mt-0.5" />}
                                                {banner.type === 'success' && <Volume2 size={20} className="text-white shrink-0 mt-0.5" />}
                                                <p className="text-white font-medium text-sm">{banner.text}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Cart Guide Modal */}
                                    {showCartModal && cartModalProduct && (
                                        <div className="absolute top-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg">
                                            <p className="text-gray-800 font-medium mb-4 text-sm">
                                                "{cartModalProduct}" 장바구니에 있습니다. 이걸로 안내할까요?
                                            </p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={handleCartGuideConfirm}
                                                    className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    예
                                                </button>
                                                <button
                                                    onClick={() => setShowCartModal(false)}
                                                    className="flex-1 bg-gray-300 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-400 transition-colors"
                                                >
                                                    아니요
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Button (inside camera view) */}
                                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                        <button
                                            onClick={mode === 'scan' ? handleScan : handleGuide}
                                            disabled={scanning}
                                            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all disabled:opacity-50 ${mode === 'scan'
                                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                    : 'bg-green-600 hover:bg-green-700 text-white'
                                                }`}
                                        >
                                            {scanning
                                                ? (mode === 'scan' ? '상품 탐색 중' : '길 안내 중')
                                                : (mode === 'scan' ? '상품 탐색 시작' : '길 탐색')
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mode Toggle (outside camera view, at bottom) */}
                        <div className="p-4 pb-6">
                            <div className="bg-white rounded-full p-1 shadow-lg flex">
                                <button
                                    onClick={() => setMode('guide')}
                                    className={`flex-1 py-3 rounded-full font-bold transition-all ${mode === 'guide'
                                            ? 'bg-green-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    길 안내
                                </button>
                                <button
                                    onClick={() => setMode('scan')}
                                    className={`flex-1 py-3 rounded-full font-bold transition-all ${mode === 'scan'
                                            ? 'bg-blue-600 text-white shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    상품 인식
                                </button>
                            </div>
                        </div>

                        {/* Scan Result (if any) */}
                        {scanResult && mode === 'scan' && (
                            <div className="absolute bottom-24 left-4 right-4 bg-white rounded-2xl shadow-2xl p-5 max-h-64 overflow-y-auto">
                                <div className="space-y-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800">{scanResult.name}</h3>
                                            <p className="text-sm text-gray-500 mt-1">{scanResult.category}</p>
                                        </div>
                                        <div className="text-xl font-bold text-blue-600">
                                            ₩{scanResult.price.toLocaleString()}
                                        </div>
                                    </div>

                                    {scanResult.allergens && scanResult.allergens.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {scanResult.allergens.map(allergen => {
                                                const isUserAllergen = userAllergens.includes(allergen);
                                                return (
                                                    <span
                                                        key={allergen}
                                                        className={`px-3 py-1 text-xs rounded-full font-semibold ${isUserAllergen
                                                                ? 'bg-red-100 text-red-700 border-2 border-red-500'
                                                                : 'bg-gray-100 text-gray-700'
                                                            }`}
                                                    >
                                                        {allergen}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    )}

                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <ShoppingCart size={20} />
                                        장바구니에 추가
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
