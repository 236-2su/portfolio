import { BaseLayout } from "../components/layout/BaseLayout";
import { BaseBox } from "../components/shared/BaseBox";
import MobileFrame from "../../../../components/MobileFrame";

export default function MobileCctvPage() {
    const cctvList = [
        { id: 1, name: "CCTV 1", location: "농장 입구", status: "정상" },
        { id: 2, name: "CCTV 2", location: "서쪽 밭", status: "정상" },
        { id: 3, name: "CCTV 3", location: "동쪽 밭", status: "점검중" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-md mx-auto">
                <MobileFrame>
                    <BaseLayout>
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-gray-800">카메라 모니터링</h2>

                            {cctvList.map((cctv) => (
                                <BaseBox key={cctv.id} title={cctv.name}>
                                    <div className="flex flex-col">
                                        <div className="w-full h-32 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                                            <span className="text-gray-500 text-sm">📹 라이브 스트림</span>
                                        </div>
                                        <div className="text-sm text-gray-600 space-y-1">
                                            <p><strong>위치:</strong> {cctv.location}</p>
                                            <p>
                                                <strong>상태:</strong>{" "}
                                                <span className={cctv.status === "정상" ? "text-green-600" : "text-amber-600"}>
                                                    {cctv.status}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </BaseBox>
                            ))}
                        </div>
                    </BaseLayout>
                </MobileFrame>
            </div>
        </div>
    );
}
