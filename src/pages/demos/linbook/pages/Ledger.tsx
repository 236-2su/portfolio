import { useState } from 'react';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Plus, TrendingUp, TrendingDown, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Ledger() {
    const navigate = useNavigate();
    const { currentClub, transactions, userRole, deleteTransaction } = useLinBook();
    const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

    if (!currentClub) {
        navigate('/demo/linbook/clubs');
        return null;
    }

    const filteredTransactions = transactions.filter(t =>
        filter === 'all' ? true : t.type === filter
    );

    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col">
                        {/* Header */}
                        <div className="p-4 border-b bg-gradient-to-r from-indigo-600 to-purple-600">
                            <div className="flex items-center justify-between mb-4">
                                <button onClick={() => navigate('/demo/linbook/clubs')} className="p-2 bg-white/20 rounded-lg">
                                    <ArrowLeft size={24} className="text-white" />
                                </button>
                                <h1 className="text-xl font-bold text-white">{currentClub.name}</h1>
                                <div className="w-10"></div>
                            </div>

                            {/* Balance Summary */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <div className="text-white/70 text-sm mb-1">현재 잔액</div>
                                <div className="text-white text-3xl font-bold mb-4">
                                    ₩{currentClub.balance.toLocaleString()}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-green-500/20 rounded-lg p-3">
                                        <div className="flex items-center gap-2 text-green-100 text-sm mb-1">
                                            <TrendingUp size={16} />
                                            <span>수입</span>
                                        </div>
                                        <div className="text-white font-bold">₩{totalIncome.toLocaleString()}</div>
                                    </div>
                                    <div className="bg-red-500/20 rounded-lg p-3">
                                        <div className="flex items-center gap-2 text-red-100 text-sm mb-1">
                                            <TrendingDown size={16} />
                                            <span>지출</span>
                                        </div>
                                        <div className="text-white font-bold">₩{totalExpense.toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Filter */}
                        <div className="p-4 border-b bg-gray-50">
                            <div className="flex gap-2">
                                {[
                                    { key: 'all', label: '전체' },
                                    { key: 'income', label: '수입' },
                                    { key: 'expense', label: '지출' },
                                ].map((item) => (
                                    <button
                                        key={item.key}
                                        onClick={() => setFilter(item.key as typeof filter)}
                                        className={`flex-1 py-2 rounded-lg font-semibold transition-all ${filter === item.key
                                                ? 'bg-indigo-600 text-white shadow-md'
                                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Transactions */}
                        <div className="flex-1 p-4 overflow-y-auto">
                            {filteredTransactions.length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    거래 내역이 없습니다
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredTransactions.map((transaction) => (
                                        <div key={transaction.id} className="bg-gray-50 rounded-lg p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${transaction.type === 'income'
                                                                ? 'bg-green-100 text-green-700'
                                                                : 'bg-red-100 text-red-700'
                                                            }`}>
                                                            {transaction.category}
                                                        </span>
                                                        <span className="text-xs text-gray-500">{transaction.date}</span>
                                                    </div>
                                                    <h4 className="font-semibold text-gray-800">{transaction.description}</h4>
                                                    <p className="text-xs text-gray-500 mt-1">작성자: {transaction.createdBy}</p>
                                                </div>
                                                <div className="text-right flex items-start gap-2">
                                                    <div>
                                                        <div className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                                                            }`}>
                                                            {transaction.type === 'income' ? '+' : '-'}₩{transaction.amount.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    {userRole === 'leader' && (
                                                        <button
                                                            onClick={() => deleteTransaction(transaction.id)}
                                                            className="p-1 text-red-500 hover:bg-red-50 rounded"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Add Button */}
                        {userRole === 'leader' && (
                            <div className="p-4 border-t bg-white">
                                <button
                                    onClick={() => navigate('/demo/linbook/add-transaction')}
                                    className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Plus size={20} />
                                    거래 추가
                                </button>
                            </div>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
