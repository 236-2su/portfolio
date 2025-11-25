import { BaseLayout } from "../components/layout/BaseLayout";
import { HeobyTable } from "./dashboard/_components/HeobyTable";
import Map from "./map/_components/Map";
import { HeobyStoreProvider } from "../store/heobyStore";

export default function MapPage() {
    return (
        <HeobyStoreProvider>
            <BaseLayout>
                <div className="py-4 h-full">
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
                        {/* 지도 영역 */}
                        <div className="lg:col-span-2 h-[400px] lg:h-full">
                            <div className="relative w-full h-full rounded-3xl bg-amber-50 shadow-md overflow-hidden">
                                <Map className="rounded-3xl h-full w-full" />
                            </div>
                        </div>

                        {/* 허수아비 목록 */}
                        <div className="h-[400px] lg:h-full">
                            <HeobyTable className="h-full" />
                        </div>
                    </section>
                </div>
            </BaseLayout>
        </HeobyStoreProvider>
    );
}
