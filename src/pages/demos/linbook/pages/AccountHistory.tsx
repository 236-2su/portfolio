import { useNavigate } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, MoreVertical, Search, Download } from 'lucide-react';

export default function AccountHistory() {
    const navigate = useNavigate();
    const { groupAccount, transactions } = useLinBook();

    if (!groupAccount) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="text-center">
                    <p className="mb-4 text-gray-500">연동된 계좌가 없습니다.</p>
                    <button
                        onClick={() => navigate('/demo/linbook/group-account-link')}
                        className="text-blue-600 font-bold"
                    >
                        연동하러 가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col font-sans">
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between bg-white border-b border-gray-100">
                            <button onClick={() => navigate('/demo/linbook/club-detail')} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
                                <ArrowLeft size={24} className="text-gray-800" />
                            </button>
                            <h1 className="font-bold text-lg">거래 내역 조회</h1>
                            <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full">
                                <MoreVertical size={24} className="text-gray-800" />
                            </button>
                        </div>

                        {/* Account Summary */}
                        <div className="p-6 bg-blue-50 border-b border-blue-100">
                            <h2 className="text-sm text-gray-500 mb-1 underline decoration-gray-300 underline-offset-4 decoration-dotted">
                                {groupAccount.bankName} {groupAccount.accountNo}
                            </h2>
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-3xl font-bold text-gray-900">
                                    {groupAccount.balance.toLocaleString()}
                                </span>
                                <span className="text-lg font-medium text-gray-600 mb-1">원</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors">
                                    이체
                                </button>
                                <button className="flex-1 py-2 bg-white text-gray-800 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                    가져오기
                                </button>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="px-4 py-3 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-10">
                            <div className="flex gap-2">
                                <button className="text-sm font-bold text-gray-900">전체</button>
                                <span className="text-gray-300">|</span>
                                <button className="text-sm text-gray-500">입금</button>
                                <span className="text-gray-300">|</span>
                                <button className="text-sm text-gray-500">출금</button>
                            </div>
                            <div className="flex gap-3 text-gray-400">
                                <Search size={20} />
                                <Download size={20} />
                            </div>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto">
                            {transactions.length === 0 ? (
                                <div className="py-20 text-center text-gray-400 text-sm">거래 내역이 없습니다.</div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {transactions.map(t => (
                                        <div key={t.id} className="p-5 hover:bg-gray-50 transition-colors flex justify-between items-center">
                                            <div>
                                                <div className="text-gray-400 text-xs mb-0.5">{t.date}</div>
                                                <div className="font-bold text-gray-900 text-base">{t.category} ({t.description})</div>
                                                <div className="text-gray-500 text-xs mt-0.5">#{t.createdBy}</div>
                                            </div>
                                            <div className={`text-right font-bold ${t.type === 'income' ? 'text-blue-600' : 'text-gray-900'}`}>
                                                {t.type === 'income' ? '' : '-'}
                                                {t.amount.toLocaleString()}원
                                                <div className="text-gray-400 text-xs font-medium mt-0.5 font-mono">
                                                    잔액 {Math.floor(Math.random() * 1000000).toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
