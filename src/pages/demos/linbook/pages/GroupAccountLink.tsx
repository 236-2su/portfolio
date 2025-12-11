import { useNavigate } from 'react-router-dom';
import { useLinBook } from '../context/LinBookContext';
import MobileFrame from '../../../../components/MobileFrame';
import { ArrowLeft } from 'lucide-react';
import shinhanLogo from '../../../../assets/logos/linbook_shinhan.png';

export default function GroupAccountLink() {
    const navigate = useNavigate();
    const { linkGroupAccount, createGroupAccount } = useLinBook();

    const handleLink = () => {
        linkGroupAccount();
        // 연동 후 바로 내역 페이지로
        navigate('/demo/linbook/account-history');
    };

    const handleCreate = () => {
        // 개설 로직(사실상 Mock 업데이트)은 다음 페이지에서 호출하거나 여기서 처리
        createGroupAccount();
        navigate('/demo/linbook/account-created');
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <div className="bg-white min-h-full flex flex-col font-sans">
                        {/* Header */}
                        <div className="p-4 flex items-center mb-4">
                            <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
                                <ArrowLeft size={24} className="text-gray-800" />
                            </button>
                            <span className="font-bold text-lg ml-2">모임통장 연결</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 px-8 flex flex-col items-center justify-center -mt-20">
                            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 shadow-inner animate-pulse">
                                <img src={shinhanLogo} alt="Shinhan" className="w-16 object-contain" />
                            </div>

                            <h2 className="text-2xl font-bold text-center mb-4">
                                투명한 회비를 위한 시작<br />
                                <span className="text-blue-600">신한 모임통장</span>
                            </h2>

                            <p className="text-gray-500 text-center mb-12 leading-relaxed text-sm">
                                동아리 회비 입출금 내역을<br />
                                클럽 멤버들과 실시간으로 공유해보세요.
                            </p>

                            <div className="w-full space-y-4">
                                <button
                                    onClick={handleLink}
                                    className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
                                >
                                    이미 있는 통장 연결하기
                                </button>
                                <button
                                    onClick={handleCreate}
                                    className="w-full py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-xl font-bold hover:bg-blue-50 transition-colors active:scale-95"
                                >
                                    새 모임통장 개설하기
                                </button>
                            </div>

                            <div className="mt-8 text-xs text-center text-gray-400">
                                * 신한은행 입출금 계좌만 연결 가능합니다.<br />
                                * 서비스 이용을 위해 정보 제공 동의가 필요합니다.
                            </div>
                        </div>
                    </div>
                </MobileFrame>
            </div>
        </div>
    );
}
