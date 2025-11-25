import { Routes, Route, Navigate } from 'react-router-dom';
import { LinBookProvider } from './context/LinBookContext';
import Login from './pages/Login';
import ClubList from './pages/ClubList';
import ClubDetail from './pages/ClubDetail';
import Ledger from './pages/Ledger';
import AddTransaction from './pages/AddTransaction';

const LinBookDemo = () => {
    return (
        <LinBookProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/clubs" element={<ClubList />} />
                <Route path="/club-detail" element={<ClubDetail />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="/add-transaction" element={<AddTransaction />} />
                <Route path="*" element={<Navigate to="/demo/linbook" replace />} />
            </Routes>
        </LinBookProvider>
    );
};

export default LinBookDemo;
