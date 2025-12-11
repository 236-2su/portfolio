import { useNavigate } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Bot, Calendar, FileText } from 'lucide-react';

export default function AIReportList() {
    const navigate = useNavigate();
    const { aiReports, currentClub } = useLinBook();

    if (!currentClub) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <button onClick={() => navigate('/demo/linbook/clubs')} className="text-teal-600 font-bold">
                    동아리 목록으로 돌아가기
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-gray-50 min-h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-teal-700 p-4 flex items-center justify-between text-white shadow-md sticky top-0 z-10">
                            <button onClick={() => navigate('/demo/linbook/club-detail')} className="p-2 hover:bg-white/10 rounded-full">
                                <ArrowLeft size={24} />
                            </button>
                            <h1 className="text-lg font-bold">AI 재정 리포트</h1>
                            <div className="w-10"></div>
                        </div>

                        {/* List */}
                        <div className="p-4 space-y-4">
                            <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100 mb-6">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <Bot size={28} className="text-teal-600" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-bold text-teal-900 text-sm">Lin.book AI Analyst</h2>
                                    <p className="text-teal-700 text-xs mt-1">
                                        매월 재정 상태를 분석하여 효율적인 예산 운용 가이드를 제공합니다.
                                    </p>
                                </div>
                            </div>

                            {aiReports.map(report => (
                                <div
                                    key={report.id}
                                    onClick={() => navigate(`/demo/linbook/ai-reports/${report.id}`)}
                                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all cursor-pointer group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-teal-100 text-teal-700 text-[10px] px-2 py-0.5 rounded font-bold">NEW</span>
                                            <span className="text-gray-400 text-xs flex items-center gap-1">
                                                <Calendar size={12} />
                                                {report.createdDate}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-teal-700 transition-colors">
                                        {report.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <FileText size={14} />
                                        <span>생성자: {report.creator}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
