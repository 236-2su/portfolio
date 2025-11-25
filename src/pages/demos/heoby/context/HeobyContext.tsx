import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'admin' | 'farmer';
export type Platform = 'web' | 'mobile';

interface DetectionEvent {
    id: number;
    timestamp: string;
    type: 'person' | 'fall' | 'fire' | 'intrusion';
    location: string;
    severity: 'low' | 'medium' | 'high';
    image?: string;
}

interface HeobyContextType {
    userRole: UserRole | null;
    platform: Platform | null;
    isLoggedIn: boolean;
    detectionEvents: DetectionEvent[];
    isMonitoring: boolean;
    login: (role: UserRole, platform: Platform) => void;
    logout: () => void;
    toggleMonitoring: () => void;
}

const HeobyContext = createContext<HeobyContextType | undefined>(undefined);

const mockEvents: DetectionEvent[] = [
    { id: 1, timestamp: '2024-11-24 14:30:15', type: 'person', location: 'Zone A - Entrance', severity: 'low' },
    { id: 2, timestamp: '2024-11-24 14:25:42', type: 'fall', location: 'Zone B - Warehouse', severity: 'high' },
    { id: 3, timestamp: '2024-11-24 14:20:33', type: 'intrusion', location: 'Zone C - Restricted Area', severity: 'high' },
    { id: 4, timestamp: '2024-11-24 14:15:21', type: 'person', location: 'Zone A - Entrance', severity: 'low' },
    { id: 5, timestamp: '2024-11-24 14:10:08', type: 'fire', location: 'Zone D - Storage', severity: 'high' },
];

export function HeobyProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [platform, setPlatform] = useState<Platform | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMonitoring, setIsMonitoring] = useState(false);

    const login = (role: UserRole, selectedPlatform: Platform) => {
        setUserRole(role);
        setPlatform(selectedPlatform);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUserRole(null);
        setPlatform(null);
        setIsLoggedIn(false);
        setIsMonitoring(false);
    };

    const toggleMonitoring = () => {
        setIsMonitoring(!isMonitoring);
    };

    return (
        <HeobyContext.Provider
            value={{
                userRole,
                platform,
                isLoggedIn,
                detectionEvents: mockEvents,
                isMonitoring,
                login,
                logout,
                toggleMonitoring,
            }}
        >
            {children}
        </HeobyContext.Provider>
    );
}

export function useHeoby() {
    const context = useContext(HeobyContext);
    if (!context) {
        throw new Error('useHeoby must be used within HeobyProvider');
    }
    return context;
}
