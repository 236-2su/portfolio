import React, { useState } from 'react';
import { useStalk } from '../context/StalkContext';
import { Search, TrendingUp, TrendingDown, DollarSign, BarChart2 } from 'lucide-react';

const Products = () => {
    const { stocks } = useStalk();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'volume' | 'rising' | 'falling' | 'marketCap'>('volume');
    const [selectedStock, setSelectedStock] = useState(stocks[0]);

    const filteredStocks = stocks.filter(stock =>
        stock.name.includes(searchTerm) || stock.code.includes(searchTerm)
    );

    const getSortedStocks = () => {
        let sorted = [...filteredStocks];
        switch (activeTab) {
            case 'volume':
                return sorted.sort((a, b) => b.volume - a.volume);
            case 'rising':
                return sorted.sort((a, b) => b.changeRate - a.changeRate);
            case 'falling':
                return sorted.sort((a, b) => a.changeRate - b.changeRate);
            case 'marketCap':
                return sorted.sort((a, b) => b.marketCap - a.marketCap);
            default:
                return sorted;
        }
    };

    const displayStocks = getSortedStocks();

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">주식 상품 조회</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: Stock List & Search */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Search Bar */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="종목명 또는 종목코드 검색"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                                />
                                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-gray-200">
                            {[
                                { id: 'volume', label: '거래량상위' },
                                { id: 'rising', label: '상승률상위' },
                                { id: 'falling', label: '하락률상위' },
                                { id: 'marketCap', label: '시가총액상위' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === tab.id
                                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-xs font-bold text-gray-500 border-b border-gray-200">
                            <div className="col-span-1 text-center">순위</div>
                            <div className="col-span-4">종목명</div>
                            <div className="col-span-3 text-right">현재가</div>
                            <div className="col-span-2 text-right">등락률</div>
                            <div className="col-span-2 text-right">거래량</div>
                        </div>

                        {/* Stock List */}
                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {displayStocks.map((stock, idx) => (
                                <div
                                    key={stock.code}
                                    onClick={() => setSelectedStock(stock)}
                                    className={`grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer transition-colors ${selectedStock.code === stock.code ? 'bg-blue-50' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="col-span-1 text-center font-bold text-gray-700">{idx + 1}</div>
                                    <div className="col-span-4">
                                        <div className="font-bold text-gray-900">{stock.name}</div>
                                        <div className="text-xs text-gray-500">{stock.code}</div>
                                    </div>
                                    <div className={`col-span-3 text-right font-medium ${stock.change > 0 ? 'text-red-600' : stock.change < 0 ? 'text-blue-600' : 'text-gray-900'
                                        }`}>
                                        {stock.price.toLocaleString()}
                                    </div>
                                    <div className={`col-span-2 text-right text-sm ${stock.changeRate > 0 ? 'text-red-600' : stock.changeRate < 0 ? 'text-blue-600' : 'text-gray-900'
                                        }`}>
                                        {stock.changeRate > 0 ? '+' : ''}{stock.changeRate}%
                                    </div>
                                    <div className="col-span-2 text-right text-sm text-gray-600">
                                        {(stock.volume / 1000).toFixed(0)}K
                                    </div>
                                </div>
                            ))}
                            {displayStocks.length === 0 && (
                                <div className="p-8 text-center text-gray-500">검색 결과가 없습니다.</div>
                            )}
                        </div>
                    </div>

                    {/* Right: Stock Detail */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedStock.name}</h2>
                                    <span className="text-sm text-gray-500">{selectedStock.code}</span>
                                </div>
                                <div className={`text-right ${selectedStock.change > 0 ? 'text-red-600' : selectedStock.change < 0 ? 'text-blue-600' : 'text-gray-900'
                                    }`}>
                                    <div className="text-3xl font-bold">{selectedStock.price.toLocaleString()}</div>
                                    <div className="text-sm font-medium flex items-center justify-end gap-1">
                                        {selectedStock.change > 0 ? <TrendingUp size={16} /> : selectedStock.change < 0 ? <TrendingDown size={16} /> : null}
                                        {selectedStock.change > 0 ? '+' : ''}{selectedStock.change.toLocaleString()}
                                        ({selectedStock.changeRate}%)
                                    </div>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="bg-gray-50 rounded-xl h-48 flex items-center justify-center mb-6 border border-gray-100">
                                <div className="text-center text-gray-400">
                                    <BarChart2 size={48} className="mx-auto mb-2 opacity-50" />
                                    <span className="text-sm">차트 데이터 준비중</span>
                                </div>
                            </div>

                            {/* Detail Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <div className="text-xs text-gray-500 mb-1">시가총액</div>
                                    <div className="font-bold text-gray-900">{selectedStock.marketCap.toLocaleString()}억</div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <div className="text-xs text-gray-500 mb-1">거래량</div>
                                    <div className="font-bold text-gray-900">{selectedStock.volume.toLocaleString()}</div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <div className="text-xs text-gray-500 mb-1">52주 최고</div>
                                    <div className="font-bold text-red-600">{(selectedStock.price * 1.2).toLocaleString()}</div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <div className="text-xs text-gray-500 mb-1">52주 최저</div>
                                    <div className="font-bold text-blue-600">{(selectedStock.price * 0.8).toLocaleString()}</div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md">
                                관심종목 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
