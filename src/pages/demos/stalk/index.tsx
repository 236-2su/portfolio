
import { Routes, Route, Navigate } from 'react-router-dom';
import { StalkProvider } from './context/StalkContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Advisors from './pages/Advisors';
import AdvisorDetail from './pages/AdvisorDetail';
import Products from './pages/Products';
import Knowledge from './pages/Knowledge';
import PostDetail from './pages/PostDetail';
import PostWrite from './pages/PostWrite';
import MyPage from './pages/MyPage';
import Admin from './pages/Admin';
import AdvisorEdit from './pages/AdvisorEdit';

const StalkDemo = () => {
    return (
        <StalkProvider>
            <div className="font-sans text-gray-900 antialiased">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/advisors" element={<Advisors />} />
                    <Route path="/advisors/:id" element={<AdvisorDetail />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/knowledge" element={<Knowledge />} />
                    <Route path="/knowledge/write" element={<PostWrite />} />
                    <Route path="/knowledge/:id" element={<PostDetail />} />
                    <Route path="/mypage" element={<MyPage />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/advisor/edit" element={<AdvisorEdit />} />
                    <Route path="*" element={<Navigate to="/demo/stalk" replace />} />
                </Routes>
            </div>
        </StalkProvider>
    );
};

export default StalkDemo;
