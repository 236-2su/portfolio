import { useNavigate, useParams } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft, Share2, Bot } from 'lucide-react';

export default function AIReportDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { aiReports } = useLinBook();

    // ID 기반 리포트 조회
    const report = aiReports.find(r => r.id === Number(id));

    if (!report) {
        return <div className="flex justify-center items-center h-screen">리포트를 찾을 수 없습니다.</div>;
    }

    // 마크다운 스타일 텍스트 포매터를 React 엘리먼트로 변환
    const renderContent = (content: string) => {
        // 간단한 파서: 줄바꿈 기준으로 나눔
        return content.split('\n').map((line, index) => {
            if (line.startsWith('### ')) {
                // H3
                return <h3 key={index} className="text-lg font-bold text-teal-800 mt-6 mb-3 flex items-center gap-2">▶ {line.replace('### ', '')}</h3>;
            } else if (line.startsWith('**') && line.includes(':**')) {
                // Key-Value 강조 (예: **총 수입:** 1,000원)
                const parts = line.split(':**');
                return (
                    <div key={index} className="flex justify-between items-center py-1 border-b border-dashed border-gray-100 last:border-0">
                        <span className="font-bold text-gray-700">{parts[0].replace('**', '')}</span>
                        <span className="font-medium text-gray-900">{parts[1].trim()}</span>
                    </div>
                );
            } else if (line.startsWith('=')) {
                // 구분선
                return <hr key={index} className="my-6 border-gray-200" />;
            } else if (line.startsWith('1. ')) {
                // 숫자 리스트
                return <div key={index} className="ml-4 mb-1 text-sm text-gray-700 font-medium">{line}</div>;
            } else if (line.startsWith('- ')) {
                // 불릿 리스트
                return (
                    <div key={index} className="flex items-start gap-2 mb-2 ml-1">
                        <span className="text-teal-500 mt-1.5 text-[6px]">●</span>
                        <span className="text-sm text-gray-600 leading-relaxed">{line.replace('- ', '')}</span>
                    </div>
                );
            } else if (line.trim() === '') {
                // 빈 줄
                return <div key={index} className="h-2"></div>;
            } else {
                // 일반 텍스트 (Bold 처리 포함)
                const processedLine = line.split(/(\*\*.*?\*\*)/).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <span key={i} className="font-bold text-teal-700">{part.replace(/\*\*/g, '')}</span>;
                    }
                    return part;
                });
                return <p key={index} className="text-sm text-gray-600 leading-relaxed mb-1">{processedLine}</p>;
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col font-sans">
                        {/* Header */}
                        <div className="bg-white border-b sticky top-0 z-10 p-4 flex items-center justify-between">
                            <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full">
                                <ArrowLeft size={24} className="text-gray-800" />
                            </button>
                            <h1 className="text-lg font-bold text-gray-900">리포트 상세</h1>
                            <button className="p-2 hover:bg-gray-100 rounded-full">
                                <Share2 size={24} className="text-gray-800" />
                            </button>
                        </div>

                        {/* Title Card */}
                        <div className="p-6 bg-teal-50 border-b border-teal-100">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-teal-600 text-white text-xs px-2 py-1 rounded font-bold">AI 분석</span>
                                <span className="text-teal-700 text-xs font-medium">{report.createdDate}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">{report.title}</h2>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Bot size={16} />
                                <span>Created by {report.creator}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 pb-20 overflow-y-auto">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                {renderContent(report.content)}
                            </div>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
