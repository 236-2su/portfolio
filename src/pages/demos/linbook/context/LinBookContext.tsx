import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'leader' | 'member';

interface Club {
    id: number;
    name: string;
    category: string;
    memberCount: number;
    balance: number;
    description?: string;
}

interface Transaction {
    id: number;
    date: string;
    category: string;
    description: string;
    amount: number;
    type: 'income' | 'expense';
    createdBy: string;
}

export interface AIReport {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    creator: string;
}

export interface GroupAccount {
    accountNo: string;
    bankName: string;
    balance: number;
    holder: string;
    linkedDate: string;
}

interface LinBookContextType {
    userRole: UserRole | null;
    isLoggedIn: boolean;
    currentClub: Club | null;
    transactions: Transaction[];
    clubs: Club[];
    aiReports: AIReport[];
    groupAccount: GroupAccount | null;
    isAccountLinked: boolean;
    login: (role: UserRole) => void;
    logout: () => void;
    selectClub: (club: Club) => void;
    addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
    deleteTransaction: (id: number) => void;
    linkGroupAccount: () => void;
    createGroupAccount: () => void;
    unlinkGroupAccount: () => void;
}

const LinBookContext = createContext<LinBookContextType | undefined>(undefined);

const MOCK_CLUBS: Club[] = [
    { id: 1, name: '코딩 동아리 (S.W.A.G)', category: '학술', memberCount: 25, balance: 1542000, description: '함께 코딩하고 성장하는 개발자들의 모임' },
    { id: 2, name: 'FC 슛돌이', category: '체육', memberCount: 30, balance: 840000, description: '매주 토요일 아침 풋살! 실력 무관 열정 환영' },
    { id: 3, name: '따뜻한 손길', category: '봉사', memberCount: 15, balance: 520000, description: '한 달에 한 번, 유기견 보호소 봉사활동' },
    { id: 4, name: 'Start-Up 구루', category: '창업', memberCount: 12, balance: 3200000, description: '아이디어를 현실로! 창업 경진대회 준비반' },
    { id: 5, name: '기타 등등 (Band)', category: '문화예술', memberCount: 20, balance: 120000, description: '초보 환영, 정기 공연 준비 중' },
];

const MOCK_TRANSACTIONS: Transaction[] = [
    // 코딩 동아리
    { id: 101, date: '2024-12-05', category: '회비', description: '12월 정기 회비 (25명)', amount: 250000, type: 'income', createdBy: '김총무' },
    { id: 102, date: '2024-12-04', category: '간식', description: '스터디 간식 (피자)', amount: 45000, type: 'expense', createdBy: '이운영' },
    { id: 103, date: '2024-12-01', category: '지원금', description: '학교 동아리 지원금', amount: 500000, type: 'income', createdBy: '박회장' },
    { id: 104, date: '2024-11-28', category: '비품', description: 'AWS 서버 비용 (11월)', amount: 32000, type: 'expense', createdBy: '최서버' },
    { id: 105, date: '2024-11-20', category: '회식', description: '프로젝트 마감 회식', amount: 150000, type: 'expense', createdBy: '김총무' },
    { id: 106, date: '2024-11-05', category: '회비', description: '11월 정기 회비 (24명)', amount: 240000, type: 'income', createdBy: '김총무' },

    // 축구 동아리
    { id: 201, date: '2024-12-02', category: '대관비', description: '12월 풋살장 대관', amount: 100000, type: 'expense', createdBy: '정주장' },
    { id: 202, date: '2024-11-25', category: '장비', description: '공용 축구공 2개 구매', amount: 80000, type: 'expense', createdBy: '정주장' },
];

const MOCK_AI_REPORTS: AIReport[] = [
    {
        id: 1,
        title: "11월 재정 운용 분석 리포트",
        content: "### 11월 재정 요약\n\n**총 수입:** 1,250,000원\n**총 지출:** 850,000원\n**잔액:** 400,000원\n\n=\n\n### 주요 지출 분석\n\n1. **회식비:** 150,000원 (17.6%)\n2. **장비 구입:** 200,000원 (23.5%)\n3. **간식비:** 50,000원 (5.9%)\n\n=\n\n### AI 제언\n\n- 지난 달 대비 **회식비 지출이 15% 감소**했습니다. 긍정적인 신호입니다.\n- 장비 구입 비용이 예산의 20%를 초과했습니다. 다음 달에는 긴축 재정이 필요합니다.\n- 현재 잔액은 **안정적인 수준**입니다.",
        createdDate: "2024.12.01",
        creator: "Lin.book AI"
    },
    {
        id: 2,
        title: "10월 재정 운용 분석 리포트",
        content: "### 10월 재정 요약\n\n**총 수입:** 1,000,000원\n**총 지출:** 950,000원\n**잔액:** 50,000원\n\n=\n\n### 주요 지출 분석\n\n1. **MT 비용:** 500,000원 (52.6%)\n2. **회식비:** 300,000원 (31.6%)\n\n=\n\n### AI 제언\n\n- **MT 비용 지출**로 인해 잔액이 크게 감소했습니다.\n- 다음 달 회비 수금이 시급합니다.",
        createdDate: "2024.11.01",
        creator: "Lin.book AI"
    }
];

export function LinBookProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentClub, setCurrentClub] = useState<Club | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
    const [clubs] = useState<Club[]>(MOCK_CLUBS);
    const [aiReports] = useState<AIReport[]>(MOCK_AI_REPORTS);
    const [isAccountLinked, setIsAccountLinked] = useState(false);
    const [groupAccount, setGroupAccount] = useState<GroupAccount | null>(null);

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

    const linkGroupAccount = () => {
        setGroupAccount({
            accountNo: "110-123-456789",
            bankName: "신한은행",
            balance: currentClub ? currentClub.balance : 0,
            holder: "김리더",
            linkedDate: "2024.12.11"
        });
        setIsAccountLinked(true);
    };

    const createGroupAccount = () => {
        setGroupAccount({
            accountNo: "110-987-654321",
            bankName: "신한은행",
            balance: 0,
            holder: "김리더",
            linkedDate: "2024.12.11"
        });
        setIsAccountLinked(true);
    };

    const unlinkGroupAccount = () => {
        setGroupAccount(null);
        setIsAccountLinked(false);
    }

    return (
        <LinBookContext.Provider
            value={{
                userRole,
                isLoggedIn,
                currentClub,
                transactions,
                clubs,
                aiReports,
                groupAccount,
                isAccountLinked,
                login,
                logout,
                selectClub,
                addTransaction,
                deleteTransaction,
                linkGroupAccount,
                createGroupAccount,
                unlinkGroupAccount
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
