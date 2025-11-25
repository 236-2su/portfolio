import { useHeobyStore } from "../../../store/heobyStore";

interface MapProps {
    className?: string;
}

export default function Map({ className }: MapProps) {
    const selectedHeoby = useHeobyStore((state) => state.selectedHeoby);

    return (
        <div className={`relative bg-gray-200 ${className} flex items-center justify-center overflow-hidden`}>
            {/* Placeholder for Map */}
            <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/e5e7eb/a3a3a3?text=Map+View')] bg-cover bg-center opacity-50" />

            <div className="relative z-10 text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <h3 className="font-bold text-lg text-gray-800">지도 뷰</h3>
                {selectedHeoby ? (
                    <div className="mt-2 text-sm text-gray-600">
                        <p>선택된 허수아비: <span className="font-semibold text-blue-600">{selectedHeoby.name}</span></p>
                        <p>위치: {selectedHeoby.location.lat}, {selectedHeoby.location.lon}</p>
                    </div>
                ) : (
                    <p className="mt-2 text-sm text-gray-500">허수아비를 선택해주세요</p>
                )}
            </div>
        </div>
    );
}
