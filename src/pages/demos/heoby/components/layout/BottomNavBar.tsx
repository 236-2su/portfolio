import { Home, Map as MapIcon, Bell, Camera, User } from "lucide-react";

export function BottomNavBar() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 block border-t border-gray-200 bg-white pb-safe lg:hidden">
            <div className="flex h-16 items-center justify-around px-2">
                <NavItem icon={<Home className="h-6 w-6" />} label="홈" active />
                <NavItem icon={<MapIcon className="h-6 w-6" />} label="지도" />
                <NavItem icon={<Bell className="h-6 w-6" />} label="알림" />
                <NavItem icon={<Camera className="h-6 w-6" />} label="CCTV" />
                <NavItem icon={<User className="h-6 w-6" />} label="MY" />
            </div>
        </nav>
    );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <button
            className={`flex flex-col items-center justify-center gap-1 p-2 ${active ? "text-blue-600" : "text-gray-500 hover:text-gray-900"
                }`}
        >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    );
}
