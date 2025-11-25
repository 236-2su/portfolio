import { Routes, Route, Navigate } from 'react-router-dom';
import { LookeyProvider } from './context/LookeyContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Cart from './pages/Cart';
import Allergy from './pages/Allergy';
import Settings from './pages/Settings';
import StoreFinder from './pages/StoreFinder';
import Guide from './pages/Guide';
import History from './pages/History';

const LookeyDemo = () => {
    return (
        <LookeyProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/scan" element={<Scan />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/allergy" element={<Allergy />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/store-finder" element={<StoreFinder />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/history" element={<History />} />
                <Route path="*" element={<Navigate to="/demo/lookey" replace />} />
            </Routes>
        </LookeyProvider>
    );
};

export default LookeyDemo;
