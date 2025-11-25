import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { ChevronLeft, Coins, TrendingUp, TrendingDown, Lightbulb } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

type MetalAsset = 'gold' | 'silver';
type MetalPeriod = '1M' | '3M' | '6M' | '1Y';

function generateMetalChart(asset: MetalAsset, period: MetalPeriod) {
    const daysByPeriod: Record<MetalPeriod, number> = { '1M': 30, '3M': 90, '6M': 180, '1Y': 365 };
    const labels: string[] = [];
    const prices: number[] = [];
    const basePrice = asset === 'gold' ? 2000 : 25;
    const days = daysByPeriod[period];

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }));
        const variation = (Math.random() - 0.5) * (basePrice * 0.03);
        prices.push(parseFloat((basePrice + variation).toFixed(2)));
    }

    return { labels, prices };
}

const Metal = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSsafyFinance();
    const [metalAsset, setMetalAsset] = useState<MetalAsset>('gold');
    const [metalPeriod, setMetalPeriod] = useState<MetalPeriod>('1M');

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const { labels, prices } = useMemo(() => generateMetalChart(metalAsset, metalPeriod), [metalAsset, metalPeriod]);

    const chartData = {
        labels,
        datasets: [
            {
                label: metalAsset === 'gold' ? '금 가격 (USD)' : '은 가격 (USD)',
                data: prices,
                fill: true,
                backgroundColor: metalAsset === 'gold' ? 'rgba(255, 193, 7, 0.1)' : 'rgba(108, 117, 125, 0.1)',
                borderColor: metalAsset === 'gold' ? '#ffc107' : '#6c757d',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top' as const },
            title: {
                display: true,
                text: metalAsset === 'gold' ? '금 가격 추이' : '은 가격 추이',
                font: { size: 18, weight: 'bold' as const },
            },
        },
        scales: {
            y: { beginAtZero: false },
        },
    };

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
                    <h1 className="text-4xl font-bold mb-2">귀금속 시세</h1>
                    <p className="text-xl opacity-90">실시간 금·은 가격 변동을 확인하세요</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-8">
                {/* Price Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        className="card p-8 border-t-4 border-yellow-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white">
                                <Coins size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">금 (Gold)</h3>
                                <p className="text-gray-600 text-sm">1온스 (USD)</p>
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-800 mb-2">$2,048.50</div>
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                            <TrendingUp size={20} />
                            +$12.30 (+0.6%)
                        </div>
                        <div className="mt-4 text-sm text-gray-500">최종 업데이트: 2시간 전</div>
                    </motion.div>

                    <motion.div
                        className="card p-8 border-t-4 border-gray-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-white">
                                <Coins size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">은 (Silver)</h3>
                                <p className="text-gray-600 text-sm">1온스 (USD)</p>
                            </div>
                        </div>
                        <div className="text-4xl font-bold text-gray-800 mb-2">$24.85</div>
                        <div className="flex items-center gap-2 text-red-600 font-semibold">
                            <TrendingDown size={20} />
                            -$0.45 (-1.8%)
                        </div>
                        <div className="mt-4 text-sm text-gray-500">최종 업데이트: 2시간 전</div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Chart Section */}
                    <div className="lg:col-span-2">
                        <div className="card p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">가격 변동 차트</h2>

                            <div className="flex gap-4 mb-6">
                                <select
                                    className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none"
                                    value={metalAsset}
                                    onChange={(e) => setMetalAsset(e.target.value as MetalAsset)}
                                >
                                    <option value="gold">금 (Gold)</option>
                                    <option value="silver">은 (Silver)</option>
                                </select>

                                <div className="flex gap-2">
                                    {(['1M', '3M', '6M', '1Y'] as MetalPeriod[]).map((p) => (
                                        <button
                                            key={p}
                                            className={`px-4 py-2 rounded-lg font-semibold transition-all ${metalPeriod === p ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                            onClick={() => setMetalPeriod(p)}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-96">
                                <Line data={chartData} options={chartOptions} />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="card p-6 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
                            <h4 className="text-xl font-bold mb-4">시장 정보</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="opacity-90">거래량</span>
                                    <span className="font-bold">1.2M oz</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="opacity-90">52주 최고</span>
                                    <span className="font-bold">$2,135.40</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="opacity-90">52주 최저</span>
                                    <span className="font-bold">$1,810.20</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="opacity-90">시가총액</span>
                                    <span className="font-bold">$12.8T</span>
                                </div>
                            </div>
                        </div>

                        <div className="card p-6 bg-gradient-to-br from-green-600 to-green-700 text-white">
                            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Lightbulb size={24} />
                                투자 인사이트
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex gap-2">
                                    <span className="text-yellow-300">•</span>
                                    <span>귀금속은 인플레이션 헤지 수단으로 활용됩니다.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-yellow-300">•</span>
                                    <span>달러 강세 시 금 가격이 조정될 수 있습니다.</span>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-yellow-300">•</span>
                                    <span>지정학적 리스크가 커질수록 안전자산 선호가 올라갑니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Metal;
