import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useStalk } from "../context/StalkContext";
import { Bell, ChevronRight, X, ChevronLeft, Calendar, Heart, Briefcase, BookOpen, ArrowUp, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
    const navigate = useNavigate();
    const { reservations, stocks } = useStalk();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("notifications");
    const [notifications, setNotifications] = useState([
        { id: 1, message: "김철수 전문가님과의 상담 예약이 확정되었습니다.", date: "방금 전", read: false },
        { id: 2, message: "관심종목 삼성전자가 목표가에 도달했습니다.", date: "1시간 전", read: false },
        { id: 3, message: "새로운 추천 리포트가 등록되었습니다.", date: "어제", read: true },
    ]);

    // 모바일 체크
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            const sidebar = document.getElementById("stalk-sidebar");
            const toggleBtn = document.getElementById("stalk-sidebar-toggle");
            if (sidebar && !sidebar.contains(event.target) && !toggleBtn?.contains(event.target) && !isCollapsed) {
                setIsCollapsed(true);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isCollapsed]);

    const handleMenuClick = (menu: string) => {
        if (selectedMenu === menu && !isCollapsed) {
            setIsCollapsed(true);
        } else {
            setSelectedMenu(menu);
            setIsCollapsed(false);
        }
    };

    const deleteNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    const watchlist = stocks.slice(0, 5); // Mock: 상위 5개를 관심종목으로 가정

    const getMenuLabel = () => {
        switch (selectedMenu) {
            case "notifications": return "알림";
            case "watchlist": return "관심종목";
            case "reservations": return "예약내역";
            case "knowledge": return "투자지식";
            case "holdings": return "보유종목";
            default: return "";
        }
    };

    return (
        <>
            {/* Collapsed Sidebar (Always Visible on Right) */}
            <div className="fixed right-0 top-16 bottom-0 w-16 bg-white border-l border-slate-200 z-40 flex flex-col items-center py-4 space-y-6 shadow-sm">

                {/* Toggle Button */}
                <button
                    id="stalk-sidebar-toggle"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
                >
                    {isCollapsed ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
                </button>

                {/* Menu Items */}
                <div className="flex-1 flex flex-col gap-4 w-full px-2">
                    <SidebarItem
                        icon={Bell} label="알림"
                        isActive={selectedMenu === "notifications" && !isCollapsed}
                        onClick={() => handleMenuClick("notifications")}
                        badge={notifications.filter(n => !n.read).length}
                    />
                    <SidebarItem
                        icon={Heart} label="관심"
                        isActive={selectedMenu === "watchlist" && !isCollapsed}
                        onClick={() => handleMenuClick("watchlist")}
                    />
                    <SidebarItem
                        icon={Briefcase} label="보유"
                        isActive={selectedMenu === "holdings" && !isCollapsed}
                        onClick={() => handleMenuClick("holdings")}
                    />
                    <SidebarItem
                        icon={Calendar} label="예약"
                        isActive={selectedMenu === "reservations" && !isCollapsed}
                        onClick={() => handleMenuClick("reservations")}
                    />
                    <SidebarItem
                        icon={BookOpen} label="지식"
                        isActive={selectedMenu === "knowledge" && !isCollapsed}
                        onClick={() => handleMenuClick("knowledge")}
                    />
                </div>

                {/* Scroll Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                >
                    <ArrowUp size={20} />
                </button>
            </div>

            {/* Expanded Content Panel */}
            <AnimatePresence>
                {!isCollapsed && (
                    <motion.div
                        id="stalk-sidebar"
                        initial={{ x: "100%", opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed top-16 bottom-0 right-16 bg-white border-l border-slate-200 shadow-2xl z-50 overflow-hidden flex flex-col
                            ${isMobile ? "w-[calc(100vw-4rem)]" : "w-80"}
                        `}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                {getMenuLabel()}
                            </h2>
                            <div className="flex gap-2">
                                {selectedMenu === "notifications" && (
                                    <button onClick={() => setNotifications([])} className="text-xs text-slate-400 hover:text-red-500">
                                        모두 지우기
                                    </button>
                                )}
                                <button onClick={() => setIsCollapsed(true)} className="text-slate-400 hover:text-slate-600">
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-slate-50/30">

                            {/* Notifications */}
                            {selectedMenu === "notifications" && (
                                <div className="space-y-3">
                                    {notifications.length === 0 ? (
                                        <EmptyState message="새로운 알림이 없습니다." />
                                    ) : (
                                        notifications.map((n) => (
                                            <div key={n.id} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm relative group">
                                                <div className="flex gap-3">
                                                    <div className="mt-1 text-blue-500"><Bell size={16} /></div>
                                                    <div>
                                                        <p className="text-sm text-slate-700 leading-snug mb-1">{n.message}</p>
                                                        <span className="text-xs text-slate-400">{n.date}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => deleteNotification(n.id)}
                                                    className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}

                            {/* Watchlist */}
                            {selectedMenu === "watchlist" && (
                                <div className="space-y-2">
                                    {watchlist.map((stock) => (
                                        <div key={stock.code} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors cursor-pointer" onClick={() => navigate('/demo/stalk/products')}>
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="font-bold text-slate-800">{stock.name}</span>
                                                <Heart size={16} className="text-red-500 fill-red-500" />
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-sm text-slate-500">{stock.code}</span>
                                                <div className="text-right">
                                                    <div className="font-bold text-slate-800">{stock.price.toLocaleString()}</div>
                                                    <div className={`text-xs font-medium ${stock.change > 0 ? 'text-red-500' : 'text-blue-500'}`}>
                                                        {stock.change > 0 ? '+' : ''}{stock.changeRate}%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="w-full py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg mt-2">
                                        + 관심종목 추가
                                    </button>
                                </div>
                            )}

                            {/* Reservations */}
                            {selectedMenu === "reservations" && (
                                <div className="space-y-3">
                                    {reservations.map((res) => (
                                        <div key={res.id} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${res.status === 'upcoming' ? 'bg-blue-100 text-blue-600' :
                                                    res.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                    {res.status === 'upcoming' ? '예정됨' : '완료됨'}
                                                </span>
                                                <span className="text-xs text-slate-400">{res.date} {res.time}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${res.expertId}`} alt="Expert" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm text-slate-800">{res.expertName}</div>
                                                    <div className="text-xs text-slate-500">화상 상담</div>
                                                </div>
                                            </div>
                                            {res.status === 'upcoming' && (
                                                <button className="w-full py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1">
                                                    <UserCheck size={14} />
                                                    상담실 입장
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Holdings (Mock) */}
                            {selectedMenu === "holdings" && (
                                <div className="space-y-3">
                                    <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg shadow-blue-200">
                                        <div className="text-blue-100 text-xs mb-1">총 평가금액</div>
                                        <div className="text-2xl font-bold">₩42,500,000</div>
                                        <div className="flex justify-between mt-2 text-sm">
                                            <span className="text-blue-100">평가손익</span>
                                            <span className="font-bold text-red-300">+2,500,000 (6.2%)</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                                            <div>
                                                <div className="font-bold text-slate-800">삼성전자</div>
                                                <div className="text-xs text-slate-500">100주</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">7,850,000</div>
                                                <div className="text-xs text-red-500">+5.2%</div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                                            <div>
                                                <div className="font-bold text-slate-800">현대차</div>
                                                <div className="text-xs text-slate-500">50주</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">12,500,000</div>
                                                <div className="text-xs text-blue-500">-2.1%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Knowledge (empty) */}
                            {selectedMenu === "knowledge" && (
                                <EmptyState message="저장된 지식글이 없습니다." />
                            )}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

const SidebarItem = ({ icon: Icon, label, isActive, onClick, badge }: any) => (
    <button
        onClick={onClick}
        className={`w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-1 transition-all relative
            ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}
        `}
    >
        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">{label}</span>
        {badge > 0 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        )}
    </button>
);

const EmptyState = ({ message }: { message: string }) => (
    <div className="h-40 flex flex-col items-center justify-center text-slate-400">
        <div className="bg-slate-100 p-3 rounded-full mb-2">
            <X size={20} className="text-slate-300" />
        </div>
        <span className="text-sm">{message}</span>
    </div>
);
