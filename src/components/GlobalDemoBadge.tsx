import { useLocation } from 'react-router-dom';
import { Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalDemoBadge() {
    const location = useLocation();
    const isDemoRoute = location.pathname.startsWith('/demo/');

    return (
        <AnimatePresence>
            {isDemoRoute && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200 shadow-lg"
                    title="This page is a frontend-only simulation using mock data."
                >
                    <Info size={16} className="flex-shrink-0" />
                    <span className="text-sm font-medium">Interactive Demo Mode (Mock Data)</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
