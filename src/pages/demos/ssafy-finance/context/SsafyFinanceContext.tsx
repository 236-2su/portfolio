import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'user' | 'admin';

interface SavingProduct {
    id: number;
    type: '예금' | '적금';
    bank: string;
    name: string;
    rate: number;
    joinWay: string;
    joinMember: string;
    specialCondition: string;
}

interface Stock {
    code: string;
    name: string;
    price: number;
    change: number;
    changeRate: number;
    volume: number;
    marketCap: number;
}

interface NewsArticle {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string;
}

interface SsafyFinanceContextType {
    userRole: UserRole | null;
    isLoggedIn: boolean;
    savingProducts: SavingProduct[];
    stocks: Stock[];
    news: NewsArticle[];
    login: (role: UserRole) => void;
    logout: () => void;
}

const SsafyFinanceContext = createContext<SsafyFinanceContextType | undefined>(undefined);

const initialSavingProducts: SavingProduct[] = [
    { id: 1, type: '예금', bank: 'KB국민은행', name: '든든한 정기예금', rate: 3.5, joinWay: '인터넷, 영업점', joinMember: '제한 없음', specialCondition: '우대고객 금리 0.2%p' },
    { id: 2, type: '적금', bank: '신한은행', name: '내일을 위한 적금', rate: 4.2, joinWay: '인터넷, 모바일', joinMember: '만 19세 이상', specialCondition: '자동이체 시 0.1%p 추가' },
    { id: 3, type: '예금', bank: '우리은행', name: '자유입출금 예금', rate: 3.8, joinWay: '인터넷, 영업점, 모바일', joinMember: '제한 없음', specialCondition: '급여이체 시 0.3%p 추가' },
    { id: 4, type: '적금', bank: 'NH농협은행', name: '목돈만들기 적금', rate: 4.0, joinWay: '영업점', joinMember: '만 20세 이상', specialCondition: '카드 실적 3회 이상 0.2%p 추가' },
    { id: 5, type: '예금', bank: '하나은행', name: '스마트 예금', rate: 3.6, joinWay: '인터넷, 모바일', joinMember: '제한 없음', specialCondition: '거래 실적 구간별 최대 0.5%p' },
    { id: 6, type: '적금', bank: '카카오뱅크', name: '26주 적금', rate: 4.5, joinWay: '모바일', joinMember: '제한 없음', specialCondition: '연속 납입 시 우대 금리' },
];

const initialStocks: Stock[] = [
    { code: '005930', name: '삼성전자', price: 71000, change: 500, changeRate: 0.71, volume: 15234567, marketCap: 423000 },
    { code: '000660', name: 'SK하이닉스', price: 128000, change: -2000, changeRate: -1.54, volume: 8234123, marketCap: 93000 },
    { code: '035420', name: 'NAVER', price: 215000, change: 3500, changeRate: 1.66, volume: 1234567, marketCap: 35000 },
    { code: '005380', name: '현대차', price: 195000, change: -1500, changeRate: -0.76, volume: 2345678, marketCap: 42000 },
    { code: '051910', name: 'LG화학', price: 425000, change: 8000, changeRate: 1.92, volume: 987654, marketCap: 30000 },
    { code: '006400', name: '삼성SDI', price: 385000, change: -5000, changeRate: -1.28, volume: 1456789, marketCap: 27000 },
];

const initialNews: NewsArticle[] = [
    {
        id: 1,
        title: 'Market Volatility Continues Amidst Economic Uncertainty',
        summary: 'Global markets experienced another day of fluctuations as investors reacted to mixed economic signals and geopolitical developments.',
        date: '2 hours ago',
        category: 'market',
    },
    {
        id: 2,
        title: 'Central Bank Holds Steady on Interest Rates',
        summary: 'The Central Bank announced today that it would maintain current interest rates, citing a need to balance inflation concerns with supporting economic growth.',
        date: '4 hours ago',
        category: 'central-bank',
    },
    {
        id: 3,
        title: 'Tech Sector Leads Market Gains',
        summary: 'The technology sector outperformed other industries today, driven by strong earnings reports and optimism about future innovation.',
        date: '6 hours ago',
        category: 'tech',
    },
];

export function SsafyFinanceProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (role: UserRole) => {
        setUserRole(role);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUserRole(null);
        setIsLoggedIn(false);
    };

    return (
        <SsafyFinanceContext.Provider
            value={{
                userRole,
                isLoggedIn,
                savingProducts: initialSavingProducts,
                stocks: initialStocks,
                news: initialNews,
                login,
                logout,
            }}
        >
            {children}
        </SsafyFinanceContext.Provider>
    );
}

export function useSsafyFinance() {
    const context = useContext(SsafyFinanceContext);
    if (!context) {
        throw new Error('useSsafyFinance must be used within SsafyFinanceProvider');
    }
    return context;
}
