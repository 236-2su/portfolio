import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSsafyFinance } from '../context/SsafyFinanceContext';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const Savings = () => {
    const navigate = useNavigate();
    const { isLoggedIn, savingProducts } = useSsafyFinance();
    const [savingFilter, setSavingFilter] = useState<'all' | '예금' | '적금'>('all');

    if (!isLoggedIn) {
        navigate('/demo/ssafy-finance');
        return null;
    }

    const filteredProducts =
        savingFilter === 'all' ? savingProducts : savingProducts.filter((product) => product.type === savingFilter);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="container mx-auto px-6">
                <button
                    onClick={() => navigate('/demo/ssafy-finance/home')}
                    className="mb-6 text-primary-600 hover:underline flex items-center gap-1"
                >
                    <ChevronLeft size={20} />
                    메인으로 돌아가기
                </button>

                <h1 className="text-4xl font-bold text-gray-900 mb-8">예금/적금 금리 비교</h1>

                <div className="flex justify-center gap-4 mb-8">
                    {[
                        { label: '전체', value: 'all' as const },
                        { label: '예금', value: '예금' as const },
                        { label: '적금', value: '적금' as const },
                    ].map((option) => (
                        <button
                            key={option.value}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${savingFilter === option.value
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setSavingFilter(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="card p-6 hover:shadow-2xl transition-all cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span
                                    className={`px-4 py-1 rounded-full text-sm font-bold text-white ${product.type === '예금'
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                        }`}
                                >
                                    {product.type}
                                </span>
                                <span className="text-sm text-gray-600 font-semibold">{product.bank}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h3>

                            <div className="mb-4">
                                <div className="text-3xl font-bold text-primary-600 mb-1">최대 {product.rate}%</div>
                            </div>

                            <div className="space-y-2 text-sm mb-4">
                                <div className="flex">
                                    <span className="font-semibold text-gray-600 min-w-[80px]">가입경로:</span>
                                    <span className="text-gray-700">{product.joinWay}</span>
                                </div>
                                <div className="flex">
                                    <span className="font-semibold text-gray-600 min-w-[80px]">가입대상:</span>
                                    <span className="text-gray-700">{product.joinMember}</span>
                                </div>
                            </div>

                            <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                                <div className="text-xs font-semibold text-orange-800 mb-1">우대조건</div>
                                <div className="text-xs text-orange-700">{product.specialCondition}</div>
                            </div>

                            <div className="mt-4 text-right">
                                <span className="text-primary-600 font-semibold text-sm">자세히 보기 →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Savings;
