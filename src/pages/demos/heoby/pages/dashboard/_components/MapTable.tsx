import Map from "../../map/_components/Map";

export function MapTable() {
    return (
        <div
            className={`rounded-[20px] relative hidden h-full w-full overflow-hidden bg-amber-50 lg:block border border-gray-100 shadow-sm`}
        >
            <Map className={`h-full w-full`} />
        </div>
    );
}
