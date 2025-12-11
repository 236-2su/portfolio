import { useState } from 'react';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Plus, TrendingUp, TrendingDown, Trash2, Wallet, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Ledger() {
    const navigate = useNavigate();
    const { currentClub, transactions, userRole, deleteTransaction } = useLinBook();
    const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

    if (!currentClub) {
        // 새로고침 등으로 club 정보가 없으면 목록으로 리턴
        return (
            <div className="flex h-screen items-center justify-center">
                <button onClick={() => navigate('/demo/linbook/clubs')} className="text-blue-500">
                    돌아가기
                </button>
            </div>
        );
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
                    <div className="bg-slate-50 min-h-full flex flex-col font-sans">
                        {/* Header Area */}
                        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white pb-6 rounded-b-[2rem] shadow-lg sticky top-0 z-10">
                            {/* Top Bar */}
                            <div className="p-4 flex items-center justify-between">
                                <button
                                    onClick={() => navigate('/demo/linbook/clubs')}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <ArrowLeft size={24} />
                                </button>
                                <h1 className="text-lg font-bold tracking-wide">{currentClub.name}</h1>
                                <div className="w-10"></div> {/* Spacer */}
                            </div>

                            {/* Balance Card */}
                            <div className="px-6 mt-2">
                                <div className="flex items-center gap-2 text-teal-200 text-sm mb-1">
                                    <Wallet size={16} />
                                    <span>현재 잔액</span>
                                </div>
                                <div className="text-4xl font-bold mb-6 tracking-tight">
                                    ₩ {currentClub.balance.toLocaleString()}
                                </div>

                                {/* Summary Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                                        <div className="flex items-center gap-2 text-teal-100 text-xs mb-2">
                                            <div className="p-1 bg-teal-500/20 rounded">
                                                <TrendingUp size={14} />
                                            </div>
                                            <span>총 수입</span>
                                        </div>
                                        <div className="text-lg font-bold text-teal-50">
                                            + {totalIncome.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                                        <div className="flex items-center gap-2 text-red-100 text-xs mb-2">
                                            <div className="p-1 bg-red-500/20 rounded">
                                                <TrendingDown size={14} />
                                            </div>
                                            <span>총 지출</span>
                                        </div>
                                        <div className="text-lg font-bold text-red-50">
                                            - {totalExpense.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Transactions Title & Filter */}
                        <div className="px-5 py-4 flex items-center justify-between sticky top-[220px] bg-slate-50 z-0">
                            <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                <span className="w-1 h-5 bg-teal-600 rounded-full"></span>
                                최근 거래 내역
                            </h2>
                            <div className="flex bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
                                {[
                                    { key: 'all', label: '전체' },
                                    { key: 'income', label: '수입' },
                                    { key: 'expense', label: '지출' },
                                ].map((item) => (
                                    <button
                                        key={item.key}
                                        onClick={() => setFilter(item.key as typeof filter)}
                                        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${filter === item.key
                                            ? 'bg-teal-600 text-white shadow-sm'
                                            : 'text-slate-500 hover:bg-slate-50'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Transaction List */}
                        <div className="flex-1 px-4 pb-20">
                            {filteredTransactions.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                                    <div className="p-4 bg-white rounded-full mb-4 shadow-sm">
                                        <Wallet size={32} className="text-slate-300" />
                                    </div>
                                    <p>거래 내역이 없습니다.</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {filteredTransactions.map((t) => (
                                        <div
                                            key={t.id}
                                            className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-teal-100 transition-colors group"
                                        >
                                            <div className="flex justify-between items-start mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${t.type === 'income'
                                                        ? 'bg-blue-50 text-blue-600'
                                                        : 'bg-red-50 text-red-600'
                                                        }`}>
                                                        {t.category}
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                                        <Calendar size={10} />
                                                        {t.date}
                                                    </span>
                                                </div>
                                                {userRole === 'leader' && (
                                                    <button
                                                        onClick={() => deleteTransaction(t.id)}
                                                        className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="flex justify-between items-center mt-2">
                                                <div>
                                                    <h3 className="font-bold text-slate-800">{t.description}</h3>
                                                    <p className="text-xs text-slate-500 mt-0.5">작성자: {t.createdBy}</p>
                                                </div>
                                                <div className={`text-lg font-bold tracking-tight ${t.type === 'income' ? 'text-blue-600' : 'text-red-600'
                                                    }`}>
                                                    {t.type === 'income' ? '+' : '-'} {t.amount.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Floating Action Button (Leader Only) */}
                        {userRole === 'leader' && (
                            <div className="absolute bottom-6 right-6 z-20">
                                <button
                                    onClick={() => navigate('/demo/linbook/add-transaction')}
                                    className="w-14 h-14 bg-teal-600 text-white rounded-full shadow-lg shadow-teal-600/30 flex items-center justify-center hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all"
                                >
                                    <Plus size={28} />
                                </button>
                            </div>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
