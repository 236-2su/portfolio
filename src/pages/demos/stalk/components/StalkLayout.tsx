import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function StalkLayout() {
    const location = useLocation();

    // 이 레이아웃이 쓰이는 시점에서 이미 Login은 제외되었겠지만, 혹시 모르니 확인
    const isLoginPage = location.pathname === '/demo/stalk' || location.pathname === '/demo/stalk/login';

    if (isLoginPage) {
        return <Outlet />;
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <div className="flex flex-1 pt-16">
                {/* Main Content Area */}
                {/* 오른쪽 사이드바(w-16) 공간 확보를 위해 mr-16 추가. 모바일에서는 사이드바가 덮으므로 제외 */}
                <main className="flex-1 w-full md:mr-16 transition-all duration-300">
                    <Outlet />
                </main>

                {/* Sidebar (Fixed right) */}
                <Sidebar />
            </div>
        </div>
    );
}
