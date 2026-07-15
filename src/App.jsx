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
import AdvisorDashboard from './pages/AdvisorDashboard';
import Customer720 from './pages/Customer720';
import MyDay from './pages/MyDay';
import ContentStudio from './pages/ContentStudio';
import MeetingCopilot from './pages/MeetingCopilot';
import ProposalIntelligence from './pages/ProposalIntelligence';
import { PrototypeProvider } from './context/PrototypeContext';

function AppLayout() {
  const [aiOpen, setAiOpen] = useState(false);
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const isPortal = location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/performance-matrix') ||
    location.pathname.startsWith('/agency-explorer') ||
    location.pathname.startsWith('/agency-detail') ||
    location.pathname.startsWith('/recruitment-analytics') ||
    location.pathname.startsWith('/advisor-dashboard') ||
    location.pathname.startsWith('/customer-720') ||
    location.pathname.startsWith('/my-day') ||
    location.pathname.startsWith('/content-studio') ||
    location.pathname.startsWith('/meetings') ||
    location.pathname.startsWith('/proposal-intelligence');

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
            <Route path="/agency-explorer" element={<AgencyExplorer />} />
            <Route path="/agency-detail" element={<AgencyDetail />} />
            <Route path="/performance-matrix" element={<PerformanceMatrix />} />
            <Route path="/recruitment-analytics" element={<RecruitmentAnalytics />} />
            <Route path="/advisor-dashboard" element={<AdvisorDashboard />} />
            <Route path="/customer-720" element={<Customer720 />} />
            <Route path="/my-day" element={<MyDay />} />
            <Route path="/content-studio" element={<ContentStudio />} />
            <Route path="/meetings" element={<MeetingCopilot />} />
            <Route path="/proposal-intelligence" element={<ProposalIntelligence />} />
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
    <PrototypeProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </PrototypeProvider>
  );
}
