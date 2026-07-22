import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
import RoleDashboard from './pages/RoleDashboard';
import Customer720 from './pages/Customer720';
import MyDay from './pages/MyDay';
import Rewards from "./pages/Rewards";
import ServiceRequests from "./pages/ServiceRequests";
import ContentStudio from './pages/ContentStudio';
import MeetingCopilot from './pages/MeetingCopilot';
import ProposalIntelligence from './pages/ProposalIntelligence';
import Notifications from './pages/Notifications';
import { PrototypeProvider, usePrototype } from './context/PrototypeContext';
import { getRoleConfig } from './config/roleConfig';

function DashboardHome() {
  return <RoleDashboard />;
}

function RoleRoute({ children }) {
  const { role } = usePrototype(); const { pathname } = useLocation();
  const allowed = getRoleConfig(role).nav.some((item) => item.path === pathname) || pathname === '/dashboard';
  return allowed ? children : <Navigate to="/dashboard" replace />;
}

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
    location.pathname.startsWith('/proposal-intelligence') ||
    location.pathname.startsWith('/service-requests') ||
    location.pathname.startsWith('/rewards') ||
    location.pathname.startsWith('/notifications');
    location.pathname.startsWith("/rewards") ||
    location.pathname.startsWith("/service-requests") ||
    

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
            <Route path="/dashboard" element={<RoleRoute><DashboardHome /></RoleRoute>} />
            <Route path="/approval-queue" element={<RoleRoute><RoleDashboard /></RoleRoute>} />
            <Route path="/agency-explorer" element={<RoleRoute><AgencyExplorer /></RoleRoute>} />
            <Route path="/agency-detail" element={<RoleRoute><AgencyDetail /></RoleRoute>} />
            <Route path="/performance-matrix" element={<RoleRoute><PerformanceMatrix /></RoleRoute>} />
            <Route path="/recruitment-analytics" element={<RoleRoute><RecruitmentAnalytics /></RoleRoute>} />
            <Route path="/advisor-dashboard" element={<RoleRoute><AdvisorDashboard /></RoleRoute>} />
            <Route path="/customer-720" element={<RoleRoute><Customer720 /></RoleRoute>} />
            <Route path="/my-day" element={<RoleRoute><MyDay /></RoleRoute>} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/service-requests" element={<ServiceRequests />} />
            <Route path="/content-studio" element={<RoleRoute><ContentStudio /></RoleRoute>} />
            <Route path="/meetings" element={<RoleRoute><MeetingCopilot /></RoleRoute>} />
            <Route path="/proposal-intelligence" element={<RoleRoute><ProposalIntelligence /></RoleRoute>} />
            <Route path="/service-requests" element={<RoleRoute><Customer720 /></RoleRoute>} />
            <Route path="/rewards" element={<RoleRoute><AdvisorDashboard /></RoleRoute>} />
            <Route path="/notifications" element={<RoleRoute><Notifications /></RoleRoute>} />
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
