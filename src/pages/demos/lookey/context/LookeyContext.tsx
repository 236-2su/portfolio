import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'user' | 'helper';

interface Product {
    id: string;
    name: string;
    price: number;
    barcode: string;
    category: string;
    allergens?: string[];
    image?: string;
}

interface CartItem extends Product {
    quantity: number;
    addedAt: string;
}

interface ScanHistory {
    id: string;
    product: Product;
    timestamp: string;
    confidence: number;
}

interface LookeyContextType {
    userRole: UserRole | null;
    isLoggedIn: boolean;
    cart: CartItem[];
    scanHistory: ScanHistory[];
    userAllergens: string[];
    login: (role: UserRole) => void;
    logout: () => void;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    addScanHistory: (product: Product, confidence: number) => void;
    setUserAllergens: (allergens: string[]) => void;
}

const LookeyContext = createContext<LookeyContextType | undefined>(undefined);

export function LookeyProvider({ children }: { children: ReactNode }) {
    const [userRole, setUserRole] = useState<UserRole | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [scanHistory, setScanHistory] = useState<ScanHistory[]>([]);
    const [userAllergens, setUserAllergensState] = useState<string[]>([]);

    const login = (role: UserRole) => {
        setUserRole(role);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUserRole(null);
        setIsLoggedIn(false);
        setCart([]);
        setScanHistory([]);
    };

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1, addedAt: new Date().toISOString() }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const addScanHistory = (product: Product, confidence: number) => {
        setScanHistory(prev => [
            {
                id: `scan-${Date.now()}`,
                product,
                timestamp: new Date().toISOString(),
                confidence
            },
            ...prev.slice(0, 19) // Keep last 20 scans
        ]);
    };

    const setUserAllergens = (allergens: string[]) => {
        setUserAllergensState(allergens);
    };

    return (
        <LookeyContext.Provider
            value={{
                userRole,
                isLoggedIn,
                cart,
                scanHistory,
                userAllergens,
                login,
                logout,
                addToCart,
                removeFromCart,
                clearCart,
                addScanHistory,
                setUserAllergens,
            }}
        >
            {children}
        </LookeyContext.Provider>
    );
}

export function useLookey() {
    const context = useContext(LookeyContext);
    if (!context) {
        throw new Error('useLookey must be used within LookeyProvider');
    }
    return context;
}
