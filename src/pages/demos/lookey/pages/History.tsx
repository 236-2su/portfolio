import { useLookey } from '../context/LookeyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { History as HistoryIcon, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function History() {
    const { scanHistory } = useLookey();

    const formatTime = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);

        if (minutes < 1) return '방금';
        if (minutes < 60) return `${minutes}분 전`;
        if (minutes < 1440) return `${Math.floor(minutes / 60)}시간 전`;
        return `${Math.floor(minutes / 1440)}일 전`;
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="p-6 space-y-4 bg-white min-h-full">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <HistoryIcon size={28} />
                                스캔 기록
                            </h1>
                            <Link to="/demo/lookey/home" className="text-blue-600 text-sm">
                                ← 돌아가기
                            </Link>
                        </div>

                        {scanHistory.length === 0 ? (
                            <div className="text-center py-12">
                                <HistoryIcon size={64} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500">스캔 기록이 없습니다</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {scanHistory.map((scan) => (
                                    <div key={scan.id} className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800">{scan.product.name}</h3>
                                                <p className="text-sm text-gray-500">{scan.product.category}</p>
                                                <p className="text-blue-600 font-bold mt-1">
                                                    ₩ {scan.product.price.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <Clock size={12} />
                                                    {formatTime(scan.timestamp)}
                                                </div>
                                                <div className="text-xs text-gray-400 mt-1">
                                                    신뢰도 {(scan.confidence * 100).toFixed(0)}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
