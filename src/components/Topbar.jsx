import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { roles, usePrototype } from '../context/PrototypeContext';
import { getRoleConfig } from '../config/roleConfig';

export default function Topbar({ onToggleAI }) {
  const location = useLocation();
  const path = location.pathname;
  const { role, setRole } = usePrototype();
  const roleConfig = getRoleConfig(role);

  const isPortal = path.startsWith('/dashboard') || 
                   path.startsWith('/approval-queue') ||
                   path.startsWith('/performance-matrix') || 
                   path.startsWith('/agency-explorer') || 
                   path.startsWith('/agency-detail') || 
                   path.startsWith('/recruitment-analytics') ||
                   path.startsWith('/advisor-dashboard') ||
                   path.startsWith('/customer-720') ||
                   path.startsWith('/my-day') ||
                   path.startsWith('/content-studio') ||
                   path.startsWith('/meetings') ||
                   path.startsWith('/proposal-intelligence') ||
                   path.startsWith('/service-requests') ||
                   path.startsWith('/rewards') ||
                   path.startsWith('/notifications');

  if (path === '/login') return null; // No topbar on login screen

  if (!isPortal) {
    // Client Side Topbar
    return (
      <header className="bg-white sticky top-0 z-40 border-b border-outline-variant shadow-sm h-16 flex justify-between items-center px-8 w-full">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[14px] font-bold text-primary border-b-2 border-primary pb-2 -mb-[22px]">Personal</Link>
            <a href="#" className="text-[14px] font-medium text-on-surface-variant hover:text-primary transition-colors pb-2 -mb-[22px]">Business</a>
            <a href="#" className="text-[14px] font-medium text-on-surface-variant hover:text-primary transition-colors pb-2 -mb-[22px]">Advisors</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
        <select aria-label="Demo role switcher" value={role} onChange={(e) => setRole(e.target.value)} className="hidden lg:block rounded-lg border border-outline-variant bg-white px-3 py-2 text-sm font-semibold text-on-surface">
          {roles.map((item) => <option key={item}>{item}</option>)}
        </select>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span className="text-[14px] font-medium">Search</span>
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors border-l border-outline-variant pl-4">
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span className="text-[14px] font-medium">Contact us</span>
            </button>
            <span className="text-[14px] font-medium border-l border-outline-variant pl-4 cursor-pointer hover:text-primary">FR</span>
          </div>
          <Link to="/login" className="bg-cta-coral hover:opacity-90 text-white font-bold px-6 py-2 rounded transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">person</span>
            Sign in
          </Link>
        </div>
      </header>
    );
  }

  // Portal / Dashboard Topbar
  return (
    <header className="sticky top-0 w-full h-16 bg-white flex justify-between items-center px-8 shadow-sm z-40 border-b border-outline-variant">
      <div className="flex items-center gap-8">
        <h1 className="text-[24px] font-semibold text-on-surface">{roleConfig.title}</h1>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={onToggleAI} className="bg-cta-coral text-white px-6 py-2 rounded-full font-bold text-[14px] shadow-md hover:opacity-90 transition-all flex items-center gap-2 active:scale-95">
          <span className="material-symbols-outlined text-sm">bolt</span>
          Ask AI Copilot
        </button>
        <div className="flex items-center gap-4 text-on-surface-variant">
          <button className="material-symbols-outlined hover:text-primary transition-colors">notifications</button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-outline-variant">
              <img className="w-full h-full object-cover" alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-waDZQgjoAPoiuAptNqx65DPxS1ARHykhjBp0MCzj4TbrQiQTlmGvFHkerMd0npY0hnGr_PG4byeShYslCciIyXf5G26Epq-sECqMqjT9AJkGKlS5PT1XJiZ14i6TsYADA3KYTm4pDG55GqFgnxtvdHG2y-rzW6P84Ny_UdMLcxbq4Q3LXd7f1uE5OPvrHqPmrcKb-T8KyMk5lIlq65Z-7tAUXqbcOLN0zzc3iVETMNYAKR5RTUbYCAReVmGLRddpX46r5nAXr7g" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
