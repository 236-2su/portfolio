import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'leader' | 'member';

interface Transaction {
    id: number;
    date: string;
    category: string;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    createdBy: string;
}

interface Club {
    id: number;
    name: string;
    category: string;
    memberCount: number;
    balance: number;
    description?: string;
}

interface LinBookContextType {
    userRole: UserRole | null;
    isLoggedIn: boolean;
    currentClub: Club | null;
    transactions: Transaction[];
    clubs: Club[];
    login: (role: UserRole) => void;
    logout: () => void;
    selectClub: (club: Club) => void;
    addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
    deleteTransaction: (id: number) => void;
}

const LinBookContext = createContext<LinBookContextType | undefined>(undefined);

const MOCK_CLUBS: Club[] = [
    { id: 1, name: '코딩 동아리', category: '학술', memberCount: 25, balance: 1500000 },
    { id: 2, name: '축구 동아리', category: '체육', memberCount: 30, balance: 800000 },
    { id: 3, name: '봉사 동아리', category: '봉사', memberCount: 15, balance: 500000 },
];

const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 1, date: '2024-11-20', category: '회비', description: '11월 회비', amount: 500000, type: 'income', createdBy: '김리더' },
    { id: 2, date: '2024-11-18', category: '장비', description: '노트북 구매', amount: 200000, type: 'expense', createdBy: '김리더' },
    { id: 3, date: '2024-11-15', category: '행사', description: 'MT 비용', amount: 300000, type: 'expense', createdBy: '이멤버' },
];

export function LinBookProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentClub, setCurrentClub] = useState<Club | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
    const [clubs] = useState<Club[]>(MOCK_CLUBS);

    const login = (role: UserRole) => {
        setUserRole(role);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUserRole(null);
        setIsLoggedIn(false);
        setCurrentClub(null);
    };

    const selectClub = (club: Club) => {
        setCurrentClub(club);
    };

    const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
        const newTransaction = {
            ...transaction,
            id: transactions.length + 1,
        };
        setTransactions([newTransaction, ...transactions]);
    };

    const deleteTransaction = (id: number) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <LinBookContext.Provider
            value={{
                userRole,
                isLoggedIn,
                currentClub,
                transactions,
                clubs,
                login,
                logout,
                selectClub,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </LinBookContext.Provider>
    );
}

export function useLinBook() {
    const context = useContext(LinBookContext);
    if (!context) {
        throw new Error('useLinBook must be used within LinBookProvider');
    }
    return context;
}
