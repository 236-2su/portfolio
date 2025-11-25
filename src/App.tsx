import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import SsafyFinanceDemo from './pages/demos/ssafy-finance';
import StalkDemo from './pages/demos/stalk';
import LookeyDemo from './pages/demos/lookey';
import HeobyDemo from './pages/demos/heoby';
import LinbookDemo from './pages/demos/linbook';
import KHackathonDemo from './pages/demos/KHackathon';
import SsafyFinanceDetail from './pages/project-details/SsafyFinanceDetail';
import StalkDetail from './pages/project-details/StalkDetail';
import LookeyDetail from './pages/project-details/LookeyDetail';
import HeobyDetail from './pages/project-details/HeobyDetail';
import LinbookDetail from './pages/project-details/LinbookDetail';
import KHackathonDetail from './pages/project-details/KHackathonDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />

          {/* Project Detail Pages */}
          <Route path="/projects/ssafy-finance" element={<SsafyFinanceDetail />} />
          <Route path="/projects/stalk" element={<StalkDetail />} />
          <Route path="/projects/lookey" element={<LookeyDetail />} />
          <Route path="/projects/heoby" element={<HeobyDetail />} />
          <Route path="/projects/linbook" element={<LinbookDetail />} />
          <Route path="/projects/k-hackathon" element={<KHackathonDetail />} />

          {/* Demo Pages */}
          <Route path="/demo/ssafy-finance/*" element={<SsafyFinanceDemo />} />
          <Route path="/demo/stalk/*" element={<StalkDemo />} />
          <Route path="/demo/lookey/*" element={<LookeyDemo />} />
          <Route path="/demo/heoby/*" element={<HeobyDemo />} />
          <Route path="/demo/linbook/*" element={<LinbookDemo />} />
          <Route path="/demo/k-hackathon" element={<KHackathonDemo />} />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
