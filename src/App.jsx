import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AICopilot from './components/AICopilot';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import DistrictDashboard from './pages/DistrictDashboard';
import AgencyExplorer from './pages/AgencyExplorer';
import AgencyDetail from './pages/AgencyDetail';
import PerformanceMatrix from './pages/PerformanceMatrix';
import RecruitmentAnalytics from './pages/RecruitmentAnalytics';

function AppLayout() {
  const [aiOpen, setAiOpen] = useState(false);
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const isPortal = location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/performance-matrix') ||
    location.pathname.startsWith('/agency-explorer') ||
    location.pathname.startsWith('/agency-detail') ||
    location.pathname.startsWith('/recruitment-analytics');

  return (
    <div className={`flex min-h-screen font-sans bg-[#f7faf8] text-on-surface antialiased`}>
      {/* Sidebar — hidden on login page */}
      {!isLogin && <Sidebar onToggleAI={() => setAiOpen(v => !v)} />}

      {/* Main Content */}
      <div className={`flex flex-col flex-grow ${!isLogin ? 'ml-[80px]' : ''}`}>
        {/* Topbar — hidden on login page */}
        {!isLogin && <Topbar onToggleAI={() => setAiOpen(v => !v)} />}

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/dashboard" element={<DistrictDashboard />} />
            <Route path="/dashboard-v2" element={<DistrictDashboard />} />
            <Route path="/agency-explorer" element={<AgencyExplorer />} />
            <Route path="/agency-detail" element={<AgencyDetail />} />
            <Route path="/performance-matrix" element={<PerformanceMatrix />} />
            <Route path="/recruitment-analytics" element={<RecruitmentAnalytics />} />
            {/* Fallback */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
      </div>

      {/* AI Copilot Panel — only on portal pages */}
      {isPortal && (
        <AICopilot isOpen={aiOpen} onClose={() => setAiOpen(false)} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
