import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Heoby } from '../hooks/useHeoby';
import { MOCK_HEOBYS } from '../hooks/useHeoby';

interface HeobyState {
    heobyList: { my: Heoby[]; other: Heoby[] } | null;
    selectedHeoby: Heoby | null;
    selectedAddress: string;
    setSelectedHeoby: (heoby: Heoby | null) => void;
    setSelectedAddress: (address: string) => void;
}

const HeobyStoreContext = createContext<HeobyState | null>(null);

export function HeobyStoreProvider({ children }: { children: ReactNode }) {
    const [selectedHeoby, setSelectedHeoby] = useState<Heoby | null>(MOCK_HEOBYS[0]);
    const [selectedAddress, setSelectedAddress] = useState<string>('');

    const value: HeobyState = {
        heobyList: { my: [MOCK_HEOBYS[0]], other: [MOCK_HEOBYS[1], MOCK_HEOBYS[2]] },
        selectedHeoby,
        selectedAddress,
        setSelectedHeoby,
        setSelectedAddress,
    };

    return (
        <HeobyStoreContext.Provider value={value}>
            {children}
        </HeobyStoreContext.Provider>
    );
}

export function useHeobyStore(): HeobyState;
export function useHeobyStore<T>(selector: (state: HeobyState) => T): T;
export function useHeobyStore<T>(selector?: (state: HeobyState) => T): T | HeobyState {
    const state = useContext(HeobyStoreContext);
    if (!state) {
        throw new Error('useHeobyStore must be used within HeobyStoreProvider');
    }
    if (selector) {
        return selector(state);
    }
    return state;
}
