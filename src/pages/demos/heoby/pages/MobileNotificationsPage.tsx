import { BaseLayout } from "../components/layout/BaseLayout";
import { BaseBox } from "../components/shared/BaseBox";
import { Bell } from "lucide-react";
import MobileFrame from "../../../../components/MobileFrame";

export default function MobileNotificationsPage() {
    const notifications = [
        {
            id: 1,
            type: "critical",
            title: "긴급 알림",
            message: "허수아비 #3에서 이상 감지",
            time: "5분 전",
        },
        {
            id: 2,
            type: "warning",
            title: "주의 알림",
            message: "허수아비 #1 배터리 부족",
            time: "1시간 전",
        },
        {
            id: 3,
            type: "info",
            title: "일반 알림",
            message: "날씨 정보 업데이트",
            time: "2시간 전",
        },
    ];

    const getNotificationStyle = (type: string) => {
        switch (type) {
            case "critical":
                return "border-l-4 border-red-500 bg-red-50";
            case "warning":
                return "border-l-4 border-amber-500 bg-amber-50";
            default:
                return "border-l-4 border-blue-500 bg-blue-50";
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <BaseLayout>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Bell className="w-6 h-6 text-gray-800" />
                                <h2 className="text-xl font-bold text-gray-800">알림</h2>
                            </div>

                            <BaseBox title="전체 알림">
                                <div className="space-y-3">
                                    {notifications.map((notification) => (
                                        <div
                                            key={notification.id}
                                            className={`p-3 rounded-lg ${getNotificationStyle(notification.type)}`}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800 text-sm">{notification.title}</h4>
                                                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                                                </div>
                                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                                    {notification.time}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </BaseBox>
                        </div>
                    </BaseLayout>
                </MobileFrame>
            </div>
        </div>
    );
}
