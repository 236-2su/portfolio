import type { ReactNode } from "react";
import { BottomNavBar } from "./BottomNavBar";
import { Container } from "./Container";
import { Header } from "./Header";

export interface BaseLayoutProps {
    title?: string;
    children: ReactNode;
    showHeader?: boolean;
    showBottomNav?: boolean;
}

export function BaseLayout({ children, showHeader = true, showBottomNav = true }: BaseLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#eeedec] to-[#f0e6c6] pt-16">
            {showHeader && <Header />}
            <main className={`flex-1 ${showBottomNav ? 'mb-[72px] lg:mb-6' : ''}`}>
                <Container>{children}</Container>
            </main>
            {showBottomNav && <BottomNavBar />}
        </div>
    );
}
