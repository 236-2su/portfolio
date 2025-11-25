import { Routes, Route, Navigate } from 'react-router-dom';
import { SsafyFinanceProvider } from './context/SsafyFinanceContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Savings from './pages/Savings';
import Metal from './pages/Metal';
import Youtube from './pages/Youtube';
import Bank from './pages/Bank';
import News from './pages/News';

const SsafyFinanceDemo = () => {
  return (
    <SsafyFinanceProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/metal" element={<Metal />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Navigate to="/demo/ssafy-finance" replace />} />
      </Routes>
    </SsafyFinanceProvider>
  );
};

export default SsafyFinanceDemo;
