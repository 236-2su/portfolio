import { BaseLayout } from "../components/layout/BaseLayout";
import { BaseBox } from "../components/shared/BaseBox";

export default function CctvPage() {
    const cctvList = [
        { id: 1, name: "CCTV 1", location: "농장 입구", status: "정상" },
        { id: 2, name: "CCTV 2", location: "서쪽 밭", status: "정상" },
        { id: 3, name: "CCTV 3", location: "동쪽 밭", status: "점검중" },
    ];

    return (
        <BaseLayout>
            <div className="py-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">카메라 모니터링</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cctvList.map((cctv) => (
                        <BaseBox key={cctv.id} title={cctv.name} className="h-[300px]">
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-gray-500">📹 라이브 스트림</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p><strong>위치:</strong> {cctv.location}</p>
                                    <p className="mt-1">
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
            </div>
        </BaseLayout>
    );
}
