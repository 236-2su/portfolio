import { useNotifications } from "../../../hooks/useNotifications";
import { BaseBox } from "../../../components/shared/BaseBox";

export function NotificationSummary() {
    const { data, isLoading, error } = useNotifications();
    const emergency = data?.summary.critical_unread ?? 0;
    const warning = data?.summary.warning_unread ?? 0;
    const hasAlert = emergency > 0 || warning > 0;
    const highlighted =
        emergency > 0
            ? { label: "긴급", count: emergency, tone: "critical" as const }
            : warning > 0
                ? { label: "주의", count: warning, tone: "warning" as const }
                : null;

    return (
        <BaseBox
            title="최근 알림"
            className="h-full w-full cursor-pointer hover:shadow-md transition-shadow"
            contentClassName="h-full flex items-center justify-center"
            contentPadding={12}
        >
            {isLoading ? (
                <p className="text-xs text-gray-400">로딩 중...</p>
            ) : error ? (
                <p className="text-xs text-red-400">에러 발생</p>
            ) : !hasAlert || !highlighted ? (
                <EmptyState />
            ) : (
                <AlertHighlight severity={highlighted} />
            )}
        </BaseBox>
    );
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full rounded-xl border-2 border-dashed border-green-200 bg-green-50/30 p-3">
            <div className="text-3xl mb-2 opacity-60">✓</div>
            <p className="text-xs font-semibold text-green-700">
                알림이 없습니다
            </p>
        </div>
    );
}

function AlertHighlight({
    severity,
}: {
    severity: { label: string; count: number; tone: "critical" | "warning" };
}) {
    const isCritical = severity.tone === "critical";
    const colors = isCritical
        ? {
            bg: "#FFF5F5",
            border: "#FECACA",
            labelBg: "#FFE4E6",
            labelBorder: "#FECACA",
            text: "#7F1D1D",
        }
        : {
            bg: "#FFFBEB",
            border: "#FDE68A",
            labelBg: "#FFF3C7",
            labelBorder: "#FDE68A",
            text: "#78350F",
        };

    return (
        <div className="w-full h-full flex flex-col justify-center gap-3">
            {/* 상단: 라벨 + 카운트 */}
            <div className="flex items-center justify-between">
                <div
                    className="px-2 py-1 rounded-md"
                    style={{
                        backgroundColor: colors.labelBg,
                        border: `1px solid ${colors.labelBorder}`,
                    }}
                >
                    <span
                        className="text-xs font-bold"
                        style={{ color: colors.text }}
                    >
                        {severity.label}
                    </span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span
                        className="text-2xl font-extrabold leading-none"
                        style={{ color: colors.text }}
                    >
                        {severity.count}
                    </span>
                    <span
                        className="text-sm font-semibold"
                        style={{ color: colors.text, opacity: 0.7 }}
                    >
                        건
                    </span>
                </div>
            </div>

            {/* 하단: 허수아비 정보 */}
            <div className="bg-gray-50 rounded-lg px-2 py-1.5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-800 truncate">
                    허수아비 1호
                </span>
                <span className="text-[10px] text-gray-500 ml-2 whitespace-nowrap">
                    5분 전
                </span>
            </div>
        </div>
    );
}
