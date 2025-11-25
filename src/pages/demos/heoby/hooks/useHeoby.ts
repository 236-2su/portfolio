export interface Heoby {
    uuid: string;
    name: string;
    status: 'NORMAL' | 'WARNING' | 'ERROR';
    owner_name: string;
    updated_at: string;
    location: { lat: number; lon: number };
}

export const MOCK_HEOBYS: Heoby[] = [
    {
        uuid: '1',
        name: '허수아비 1호',
        status: 'NORMAL',
        owner_name: '김농부',
        updated_at: new Date().toISOString(),
        location: { lat: 37.3595704, lon: 127.105399 }
    },
    {
        uuid: '2',
        name: '허수아비 2호',
        status: 'WARNING',
        owner_name: '이농부',
        updated_at: new Date().toISOString(),
        location: { lat: 37.3595316, lon: 127.1052133 }
    },
    {
        uuid: '3',
        name: '허수아비 3호',
        status: 'ERROR',
        owner_name: '박농부',
        updated_at: new Date().toISOString(),
        location: { lat: 37.3598, lon: 127.1055 }
    },
];

export function useHeobyList() {
    return {
        isLoading: false,
    };
}

export function useAutoSelectHeoby() {
    // No-op for mock
}
