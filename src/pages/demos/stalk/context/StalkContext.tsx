import React, { createContext, useContext, useState, type ReactNode } from 'react';

// --- Types ---
export type UserRole = 'CLIENT' | 'ADVISOR' | 'ADMIN';

export interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
    author: string;
    date: string;
    views: number;
    comments: number;
}

export interface Expert {
    id: number;
    name: string;
    role: string;
    image: string;
    tags: string[];
    shortIntro: string;
    longIntro: string;
    rating: number;
    reviewCount: number;
    consultationFee: number;
    careers: Career[];
    certificates: string[];
    reviews: Review[];
    preferredStyle: string; // SHORT, MID_SHORT, MID, MID_LONG, LONG
}

export interface Career {
    id: number;
    period: string;
    title: string;
    description: string;
}

export interface Review {
    id: number;
    author: string;
    rating: number;
    date: string;
    content: string;
}

export interface Reservation {
    id: number;
    date: string;
    time: string;
    expertName: string;
    expertId: number;
    status: 'upcoming' | 'completed' | 'canceled';
    type: 'video' | 'chat';
}

export interface AdminRequest {
    id: number;
    expertName: string;
    certificateName: string;
    date: string;
    status: 'pending' | 'approved' | 'rejected';
}

export interface Stock {
    rank: number;
    name: string;
    code: string;
    price: number;
    change: number;
    changeRate: number;
    volume: number;
    marketCap: number; // 억 원 단위
}

// --- Initial Mock Data ---
const initialPosts: Post[] = [
    { id: 1, title: "2024년 하반기 반도체 전망", content: "반도체 사이클이 돌아오고 있습니다...", category: "시황분석", author: "김철수", date: "2024.05.20", views: 1250, comments: 15 },
    { id: 2, title: "초보자를 위한 ETF 투자 가이드", content: "ETF란 무엇인가...", category: "투자일지", author: "이영희", date: "2024.05.19", views: 890, comments: 8 },
    { id: 3, title: "미국 금리 인하 시기는?", content: "연준의 발표를 분석해보면...", category: "시황분석", author: "박민수", date: "2024.05.18", views: 2100, comments: 32 },
    { id: 4, title: "2차전지 관련주 분석", content: "최근 조정은 기회일까...", category: "종목토론", author: "최지훈", date: "2024.05.17", views: 1500, comments: 20 },
    { id: 5, title: "배당주 포트폴리오 구성법", content: "월급처럼 따박따박...", category: "투자일지", author: "정수진", date: "2024.05.16", views: 950, comments: 12 },
];

const initialExperts: Expert[] = [
    {
        id: 1,
        name: "김철수",
        role: "주식 전문가",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        tags: ["#단기", "#기술적분석", "#차트매매"],
        shortIntro: "차트의 흐름을 읽는 기술적 분석의 대가",
        longIntro: "10년 이상의 실전 매매 경험을 바탕으로...",
        rating: 4.8,
        reviewCount: 120,
        consultationFee: 50000,
        preferredStyle: "SHORT",
        careers: [
            { id: 1, period: "2018-2023", title: "AA증권", description: "프랍트레이더" },
            { id: 2, period: "2015-2018", title: "BB투자자문", description: "주식 운용역" }
        ],
        certificates: ["투자자산운용사", "금융투자분석사"],
        reviews: [
            { id: 1, author: "user1", rating: 5, date: "2024.05.01", content: "명쾌한 분석 감사합니다." },
            { id: 2, author: "user2", rating: 4, date: "2024.04.28", content: "도움이 많이 되었습니다." }
        ]
    },
    {
        id: 2,
        name: "이영희",
        role: "자산 관리사",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        tags: ["#장기", "#가치투자", "#재무분석"],
        shortIntro: "기업의 가치를 꿰뚫어보는 혜안",
        longIntro: "재무제표 분석을 통한 저평가 우량주 발굴...",
        rating: 4.9,
        reviewCount: 98,
        consultationFee: 70000,
        preferredStyle: "LONG",
        careers: [
            { id: 1, period: "2019-2024", title: "CC자산운용", description: "펀드매니저" }
        ],
        certificates: ["CFA Level 3", "투자자산운용사"],
        reviews: [
            { id: 1, author: "user3", rating: 5, date: "2024.05.10", content: "장기적인 관점을 배웠습니다." }
        ]
    },
    {
        id: 3,
        name: "박민수",
        role: "부동산 전문가",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        tags: ["#중기", "#부동산", "#경매"],
        shortIntro: "부동산 흐름과 경매의 신",
        longIntro: "부동산 시장의 사이클을 분석하고...",
        rating: 4.7,
        reviewCount: 150,
        consultationFee: 60000,
        preferredStyle: "MID",
        careers: [],
        certificates: ["공인중개사"],
        reviews: []
    },
    {
        id: 4,
        name: "최지훈",
        role: "해외주식 전문가",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        tags: ["#중장기", "#미국주식", "#ETF"],
        shortIntro: "글로벌 시장을 리드하는 해외주식 전문가",
        longIntro: "미국 시장을 중심으로...",
        rating: 4.6,
        reviewCount: 80,
        consultationFee: 55000,
        preferredStyle: "MID_LONG",
        careers: [],
        certificates: [],
        reviews: []
    },
    {
        id: 5,
        name: "정수진",
        role: "재테크 전문가",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        tags: ["#중단기", "#재테크", "#절세"],
        shortIntro: "사회초년생을 위한 재테크 멘토",
        longIntro: "월급 관리부터 절세 전략까지...",
        rating: 4.9,
        reviewCount: 200,
        consultationFee: 40000,
        preferredStyle: "MID_SHORT",
        careers: [],
        certificates: [],
        reviews: []
    }
];

const initialReservations: Reservation[] = [
    { id: 1, date: "2024.05.25", time: "14:00", expertName: "김철수", expertId: 1, status: "upcoming", type: "video" },
    { id: 2, date: "2024.05.28", time: "10:00", expertName: "이영희", expertId: 2, status: "upcoming", type: "chat" },
    { id: 3, date: "2024.05.10", time: "16:00", expertName: "박민수", expertId: 3, status: "completed", type: "video" },
];

const initialAdminRequests: AdminRequest[] = [
    { id: 1, expertName: "홍길동", certificateName: "투자자산운용사", date: "2024.05.20", status: "pending" },
    { id: 2, expertName: "김미영", certificateName: "CFA Level 1", date: "2024.05.19", status: "pending" },
    { id: 3, expertName: "이철민", certificateName: "공인중개사", date: "2024.05.18", status: "approved" },
];

const initialStocks: Stock[] = [
    { rank: 1, name: "삼성전자", code: "005930", price: 78500, change: 500, changeRate: 0.64, volume: 15000000, marketCap: 4680000 },
    { rank: 2, name: "SK하이닉스", code: "000660", price: 185000, change: -2000, changeRate: -1.07, volume: 3000000, marketCap: 1340000 },
    { rank: 3, name: "LG에너지솔루션", code: "373220", price: 385000, change: 10000, changeRate: 2.67, volume: 250000, marketCap: 900000 },
    { rank: 4, name: "현대차", code: "005380", price: 250000, change: 1500, changeRate: 0.60, volume: 800000, marketCap: 520000 },
    { rank: 5, name: "NAVER", code: "035420", price: 180000, change: -1000, changeRate: -0.55, volume: 600000, marketCap: 290000 },
    { rank: 6, name: "카카오", code: "035720", price: 48000, change: 200, changeRate: 0.42, volume: 1200000, marketCap: 210000 },
    { rank: 7, name: "POSCO홀딩스", code: "005490", price: 390000, change: -5000, changeRate: -1.27, volume: 400000, marketCap: 330000 },
    { rank: 8, name: "삼성바이오로직스", code: "207940", price: 780000, change: 0, changeRate: 0.00, volume: 50000, marketCap: 550000 },
    { rank: 9, name: "기아", code: "000270", price: 115000, change: 2000, changeRate: 1.77, volume: 900000, marketCap: 460000 },
    { rank: 10, name: "KB금융", code: "105560", price: 72000, change: 1000, changeRate: 1.41, volume: 1100000, marketCap: 290000 },
];

// --- Context Definition ---
interface StalkContextType {
    userRole: UserRole;
    isLoggedIn: boolean;
    login: (role: UserRole) => void;
    logout: () => void;

    posts: Post[];
    addPost: (post: Omit<Post, 'id' | 'date' | 'views' | 'comments'>) => void;
    deletePost: (id: number) => void;

    experts: Expert[];
    updateExpert: (id: number, data: Partial<Expert>) => void;

    reservations: Reservation[];
    cancelReservation: (id: number) => void;

    adminRequests: AdminRequest[];
    approveRequest: (id: number) => void;
    rejectRequest: (id: number) => void;

    stocks: Stock[];
}

const StalkContext = createContext<StalkContextType | undefined>(undefined);

export const StalkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userRole, setUserRole] = useState<UserRole>('CLIENT');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [experts, setExperts] = useState<Expert[]>(initialExperts);
    const [reservations, setReservations] = useState<Reservation[]>(initialReservations);
    const [adminRequests, setAdminRequests] = useState<AdminRequest[]>(initialAdminRequests);
    const [stocks] = useState<Stock[]>(initialStocks); // Stocks are static for now

    const login = (role: UserRole) => {
        setUserRole(role);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserRole('CLIENT');
    };

    const addPost = (postData: Omit<Post, 'id' | 'date' | 'views' | 'comments'>) => {
        const newPost: Post = {
            id: Math.max(...posts.map(p => p.id), 0) + 1,
            date: new Date().toLocaleDateString(),
            views: 0,
            comments: 0,
            ...postData,
        };
        setPosts([newPost, ...posts]);
    };

    const deletePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    const updateExpert = (id: number, data: Partial<Expert>) => {
        setExperts(experts.map(e => e.id === id ? { ...e, ...data } : e));
    };

    const cancelReservation = (id: number) => {
        setReservations(reservations.map(r => r.id === id ? { ...r, status: 'canceled' } : r));
    };

    const approveRequest = (id: number) => {
        setAdminRequests(adminRequests.map(req => req.id === id ? { ...req, status: 'approved' } : req));
    };

    const rejectRequest = (id: number) => {
        setAdminRequests(adminRequests.map(req => req.id === id ? { ...req, status: 'rejected' } : req));
    };

    return (
        <StalkContext.Provider value={{
            userRole,
            isLoggedIn,
            login,
            logout,
            posts,
            addPost,
            deletePost,
            experts,
            updateExpert,
            reservations,
            cancelReservation,
            adminRequests,
            approveRequest,
            rejectRequest,
            stocks
        }}>
            {children}
        </StalkContext.Provider>
    );
};

export const useStalk = () => {
    const context = useContext(StalkContext);
    if (!context) {
        throw new Error('useStalk must be used within a StalkProvider');
    }
    return context;
};
