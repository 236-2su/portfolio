import { Routes, Route, Navigate } from 'react-router-dom';
import { LinBookProvider } from './context/LinBookContext';
import Login from './pages/Login';
import ClubList from './pages/ClubList';
import ClubDetail from './pages/ClubDetail';
import Ledger from './pages/Ledger';
import AddTransaction from './pages/AddTransaction';
import AIReportList from './pages/AIReportList';
import AIReportDetail from './pages/AIReportDetail';
import GroupAccountLink from './pages/GroupAccountLink';
import AccountCreated from './pages/AccountCreated';
import AccountHistory from './pages/AccountHistory';

const LinBookDemo = () => {
    return (
        <LinBookProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/clubs" element={<ClubList />} />
                <Route path="/club-detail" element={<ClubDetail />} />
                <Route path="/ledger" element={<Ledger />} />
                <Route path="/add-transaction" element={<AddTransaction />} />

                {/* AI Report */}
                <Route path="/ai-reports" element={<AIReportList />} />
                <Route path="/ai-reports/:id" element={<AIReportDetail />} />

                {/* Group Account */}
                <Route path="/group-account-link" element={<GroupAccountLink />} />
                <Route path="/account-created" element={<AccountCreated />} />
                <Route path="/account-history" element={<AccountHistory />} />
                <Route path="*" element={<Navigate to="/demo/linbook" replace />} />
            </Routes>
        </LinBookProvider>
    );
};

export default LinBookDemo;
