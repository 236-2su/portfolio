import { Routes, Route, Navigate } from 'react-router-dom';
import { HeobyProvider } from './context/HeobyContext';
import Login from './pages/Login';
import WebDashboard from './pages/WebDashboard';
import MobileDashboard from './pages/MobileDashboard';
import MapPage from './pages/MapPage';
import CctvPage from './pages/CctvPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import MobileMapPage from './pages/MobileMapPage';
import MobileCctvPage from './pages/MobileCctvPage';
import MobileNotificationsPage from './pages/MobileNotificationsPage';
import MobileProfilePage from './pages/MobileProfilePage';

const HeobyDemo = () => {
    return (
        <HeobyProvider>
            <Routes>
                {/* 로그인 (진입점) */}
                <Route path="/" element={<Login />} />

                {/* 웹 플랫폼 */}
                <Route path="/web" element={<WebDashboard />} />
                <Route path="/web/map" element={<MapPage />} />
                <Route path="/web/cctv" element={<CctvPage />} />
                <Route path="/web/notifications" element={<NotificationsPage />} />
                <Route path="/web/profile" element={<ProfilePage />} />

                {/* 모바일 플랫폼 */}
                <Route path="/mobile" element={<MobileDashboard />} />
                <Route path="/mobile/map" element={<MobileMapPage />} />
                <Route path="/mobile/cctv" element={<MobileCctvPage />} />
                <Route path="/mobile/notifications" element={<MobileNotificationsPage />} />
                <Route path="/mobile/profile" element={<MobileProfilePage />} />

                {/* 리다이렉트 */}
                <Route path="*" element={<Navigate to="/demo/heoby" replace />} />
            </Routes>
        </HeobyProvider>
    );
};

export default HeobyDemo;
