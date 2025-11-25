import { useState } from 'react';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AddTransaction() {
    const navigate = useNavigate();
    const { addTransaction, currentClub } = useLinBook();
    const [type, setType] = useState<'income' | 'expense'>('income');
    const [category, setCategory] = useState('회비');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description || !amount) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        addTransaction({
            type,
            category,
            description,
            amount: parseInt(amount),
            date,
            createdBy: '김리더',
        });

        alert('거래가 추가되었습니다!');
        navigate('/demo/linbook/ledger');
    };

    if (!currentClub) {
        navigate('/demo/linbook/clubs');
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col">
                        <div className="p-4 border-b flex items-center justify-between">
                            <button onClick={() => navigate('/demo/linbook/ledger')} className="p-2 hover:bg-gray-100 rounded-lg">
                                <ArrowLeft size={24} />
                            </button>
                            <h1 className="text-xl font-bold">거래 추가</h1>
                            <div className="w-10"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex-1 p-6 space-y-6">
                            {/* Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">거래 유형</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setType('income')}
                                        className={`py-3 rounded-lg font-semibold transition-all ${type === 'income'
                                                ? 'bg-green-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        수입
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setType('expense')}
                                        className={`py-3 rounded-lg font-semibold transition-all ${type === 'expense'
                                                ? 'bg-red-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        지출
                                    </button>
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                >
                                    <option value="회비">회비</option>
                                    <option value="행사">행사</option>
                                    <option value="장비">장비</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">내용</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="거래 내용을 입력하세요"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            {/* Amount */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">금액</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">날짜</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors"
                            >
                                추가하기
                            </button>
                        </form>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
