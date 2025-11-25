import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStalk } from '../context/StalkContext';
import { User, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, userRole, logout } = useStalk();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const isHome = location.pathname === '/demo/stalk' || location.pathname === '/demo/stalk/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '전문가', path: '/demo/stalk/advisors' },
        { name: '상품', path: '/demo/stalk/products' },
        { name: '투자 지식 iN', path: '/demo/stalk/knowledge' },
    ];

    if (userRole === 'ADMIN') {
        navLinks.push({ name: '관리자 페이지', path: '/demo/stalk/admin' });
    }

    const handleLogout = () => {
        logout();
        navigate('/demo/stalk');
        setShowProfileMenu(false);
    };

    return (
        <nav
            className={`fixed top-20 left-0 right-0 z-40 transition-all duration-300 ${isHome && !isScrolled
                    ? 'bg-transparent text-white'
                    : 'bg-white text-gray-900 shadow-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div
                        className="flex-shrink-0 cursor-pointer flex items-center gap-2"
                        onClick={() => navigate('/demo/stalk')}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl ${isHome && !isScrolled ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                            }`}>
                            S
                        </div>
                        <span className="font-bold text-xl tracking-tight">Stalk</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => navigate(link.path)}
                                className={`font-medium transition-colors ${isHome && !isScrolled
                                        ? 'text-white/90 hover:text-white'
                                        : 'text-gray-600 hover:text-blue-600'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* User Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
                            <div className="relative">
                                <button
                                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                                    className="flex items-center space-x-2 focus:outline-none"
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isHome && !isScrolled ? 'border-white/50 bg-white/10' : 'border-gray-200 bg-gray-100'
                                        }`}>
                                        <User size={18} />
                                    </div>
                                </button>

                                {showProfileMenu && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 animate-fadeIn text-gray-900">
                                        <button
                                            onClick={() => {
                                                navigate('/demo/stalk/mypage');
                                                setShowProfileMenu(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                        >
                                            마이페이지
                                        </button>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            로그아웃
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => navigate('/demo/stalk/login')}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isHome && !isScrolled
                                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                로그인
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md focus:outline-none"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white text-gray-900 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => {
                                    navigate(link.path);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600"
                            >
                                {link.name}
                            </button>
                        ))}
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => {
                                        navigate('/demo/stalk/mypage');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600"
                                >
                                    마이페이지
                                </button>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100"
                                >
                                    로그아웃
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    navigate('/demo/stalk/login');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-gray-100"
                            >
                                로그인
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
