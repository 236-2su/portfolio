import { BaseLayout } from "../components/layout/BaseLayout";
import { HeobyTable } from "./dashboard/_components/HeobyTable";
import Map from "./map/_components/Map";
import { HeobyStoreProvider } from "../store/heobyStore";
import MobileFrame from "../../../../components/MobileFrame";

export default function MobileMapPage() {
    return (
        <HeobyStoreProvider>
            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="max-w-md mx-auto">
                    <MobileFrame>
                        <BaseLayout>
                            <div className="space-y-4">
                                {/* 지도 영역 */}
                                <div className="h-[300px] rounded-2xl overflow-hidden">
                                    <Map className="h-full w-full" />
                                </div>

                                {/* 허수아비 목록 */}
                                <HeobyTable className="h-[400px]" />
                            </div>
                        </BaseLayout>
                    </MobileFrame>
                </div>
            </div>
        </HeobyStoreProvider>
    );
}
