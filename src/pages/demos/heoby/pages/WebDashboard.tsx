import { BaseLayout } from "../components/layout/BaseLayout";
import { HeobyStoreProvider } from "../store/heobyStore";
import { WorkingSummary } from "./dashboard/_components/WorkingSummary";
import { NotificationSummary } from "./dashboard/_components/NotificationSummary";
import { HeobyTable } from "./dashboard/_components/HeobyTable";
import { WeatherTable } from "./dashboard/_components/WeatherTable";
import { MapTable } from "./dashboard/_components/MapTable";
import "../styles/theme.css";
import "../styles/dashboard.css";

import { useNavigate } from "react-router-dom";
import { useHeoby } from "../context/HeobyContext";

export default function WebDashboard() {
    const navigate = useNavigate();
    const { isLoggedIn, platform } = useHeoby();

    if (!isLoggedIn || platform !== 'web') {
        navigate('/demo/heoby');
        return null;
    }

    return (
        <HeobyStoreProvider>
            <BaseLayout>
                <div className="py-4 h-full">
                    <section className="custom-dashboard-grid h-full">
                        <div className="custom-dashboard-working">
                            <WorkingSummary />
                        </div>
                        <div className="custom-dashboard-notification">
                            <NotificationSummary />
                        </div>
                        <div className="custom-dashboard-heoby">
                            <HeobyTable className="heoby-list-responsive" />
                        </div>
                        <div className="custom-dashboard-weather">
                            <WeatherTable />
                        </div>
                        <div className="custom-dashboard-map">
                            <MapTable />
                        </div>
                    </section>
                </div>
            </BaseLayout>
        </HeobyStoreProvider>
    );
}
