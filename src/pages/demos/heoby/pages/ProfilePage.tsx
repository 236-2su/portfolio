import { BaseLayout } from "../components/layout/BaseLayout";
import { BaseBox } from "../components/shared/BaseBox";
import { Mail, MapPin, Calendar } from "lucide-react";

export default function ProfilePage() {
    const userInfo = {
        name: "김리더",
        email: "leaderkim@leader.com",
        location: "경기도 성남시",
        joinDate: "2024년 10월",
        heobyCount: 5,
    };

    return (
        <BaseLayout>
            <div className="py-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">프로필</h2>

                <div className="max-w-2xl mx-auto space-y-4">
                    {/* 사용자 정보 카드 */}
                    <BaseBox title="사용자 정보">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                    {userInfo.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{userInfo.name}</h3>
                                    <p className="text-sm text-gray-500">농장 관리자</p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-3">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <span>{userInfo.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-gray-400" />
                                    <span>{userInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <span>가입일: {userInfo.joinDate}</span>
                                </div>
                            </div>
                        </div>
                    </BaseBox>

                    {/* 통계 카드 */}
                    <BaseBox title="활동 통계">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-blue-600">{userInfo.heobyCount}</div>
                                <div className="text-sm text-gray-600 mt-1">등록된 허수아비</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                                <div className="text-3xl font-bold text-green-600">12</div>
                                <div className="text-sm text-gray-600 mt-1">처리된 알림</div>
                            </div>
                        </div>
                    </BaseBox>

                    {/* 설정 카드 */}
                    <BaseBox title="설정">
                        <div className="space-y-3">
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                                <span className="text-gray-700">알림 설정</span>
                                <span className="text-gray-400">›</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                                <span className="text-gray-700">계정 관리</span>
                                <span className="text-gray-400">›</span>
                            </button>
                            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
                                <span className="text-red-600">로그아웃</span>
                                <span className="text-gray-400">›</span>
                            </button>
                        </div>
                    </BaseBox>
                </div>
            </div>
        </BaseLayout>
    );
}
