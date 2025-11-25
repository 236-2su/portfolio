import { useNavigate } from 'react-router-dom';
import { useHeoby } from '../context/HeobyContext';
import MobileFrame from '../../../../components/MobileFrame';
import { HeobyStoreProvider } from '../store/heobyStore';
import { BaseLayout } from '../components/layout/BaseLayout';
import { WorkingSummary } from './dashboard/_components/WorkingSummary';
import { NotificationSummary } from './dashboard/_components/NotificationSummary';
import { HeobyTable } from './dashboard/_components/HeobyTable';
import { WeatherTable } from './dashboard/_components/WeatherTable';

const MobileDashboard = () => {
    const navigate = useNavigate();
    const { isLoggedIn, platform } = useHeoby();

    if (!isLoggedIn || platform !== 'mobile') {
        navigate('/demo/heoby');
        return null;
    }

    return (
        <HeobyStoreProvider>
            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="max-w-md mx-auto">
                    <MobileFrame>
                        <BaseLayout>
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <div className="flex-1 aspect-square">
                                        <WorkingSummary />
                                    </div>
                                    <div className="flex-1 aspect-square">
                                        <NotificationSummary />
                                    </div>
                                </div>

                                <WeatherTable />

                                <HeobyTable className="h-[400px]" />
                            </div>
                        </BaseLayout>
                    </MobileFrame>
                </div>
            </div>
        </HeobyStoreProvider>
    );
};

export default MobileDashboard;
