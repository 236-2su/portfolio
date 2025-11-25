import { BaseLayout } from "../components/layout/BaseLayout";
import { BaseBox } from "../components/shared/BaseBox";
import { Bell } from "lucide-react";

export default function NotificationsPage() {
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
        {
            id: 4,
            type: "info",
            title: "일반 알림",
            message: "시스템 점검 완료",
            time: "어제",
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
        <BaseLayout>
            <div className="py-4">
                <div className="flex items-center gap-3 mb-6">
                    <Bell className="w-8 h-8 text-gray-800" />
                    <h2 className="text-2xl font-bold text-gray-800">알림</h2>
                </div>

                <BaseBox title="전체 알림" className="max-w-4xl">
                    <div className="space-y-3">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`p-4 rounded-lg ${getNotificationStyle(notification.type)}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{notification.title}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </BaseBox>
            </div>
        </BaseLayout>
    );
}
