import heobyLogo from "../../../../../assets/logos/heoby-logo.svg";
import { HEADER_MENU_ITEMS } from "../../constants/menus";
import {
    APP_ROUTES,
    PAGE_TITLES,
    type AppRoute,
} from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./Container";
import { useHeoby } from "../../context/HeobyContext";

export function Header() {
    const location = useLocation().pathname as AppRoute;
    const { platform } = useHeoby();

    // Determine base path based on platform
    const basePath = platform === 'mobile' ? '/demo/heoby/mobile' : '/demo/heoby/web';

    // Handle sub-routes by finding the matching base route
    const currentRoute = Object.values(APP_ROUTES).find(route =>
        location.endsWith(route) || location === basePath
    ) || APP_ROUTES.home;

    const pageTitle = PAGE_TITLES[currentRoute as keyof typeof PAGE_TITLES];

    return (
        <header className="w-full shadow-sm bg-white/10 backdrop-blur-md border-b border-white/10">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <Link to={basePath}>
                        <div className="flex items-center gap-2">
                            {!location.endsWith(basePath) && location !== basePath + "/" ? (
                                <span className="text-2xl font-bold text-gray-800">{pageTitle}</span>
                            ) : (
                                <img src={heobyLogo} alt="Heoby" className="h-16 w-auto object-contain" />
                            )}
                        </div>
                    </Link>
                    <div className="flex items-center">
                        {/* 데스크탑 */}
                        <div className="hidden lg:block">
                            <div className="flex items-center">
                                {HEADER_MENU_ITEMS.map((item, index) => {
                                    return (
                                        <Link
                                            to={basePath + item.to}
                                            key={index}
                                            className="text-gray-600 hover:text-gray-900 px-4 py-2 transition-colors"
                                        >
                                            {item.icon}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 모바일 */}
                        <div className="block lg:hidden">
                            {HEADER_MENU_ITEMS.map((item, index) => {
                                if (item.to !== APP_ROUTES.notifications) return null;

                                return (
                                    <Link
                                        to={basePath + item.to}
                                        key={index}
                                        aria-label="알림"
                                        title="알림"
                                        className="
                      relative inline-flex items-center justify-center
                      w-10 h-10 rounded-full
                      bg-white/50 hover:bg-white/80 active:bg-white
                      transition-all duration-150 active:scale-95
                      focus-visible:outline-none
                    "
                                    >
                                        <div className="w-5 h-5 text-gray-700">{item.icon}</div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
