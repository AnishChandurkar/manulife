import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Sidebar({ onToggleAI }) {
  const location = useLocation();
  const path = location.pathname;

  // Determine if we are on client/public pages vs portal/dashboard pages
  const isPortal = path.startsWith('/dashboard') || 
                   path.startsWith('/performance-matrix') || 
                   path.startsWith('/agency-explorer') || 
                   path.startsWith('/agency-detail') || 
                   path.startsWith('/recruitment-analytics');

  if (path === '/login') return null; // No sidebar on login screen

  if (!isPortal) {
    // Client Side Sidebar
    return (
      <aside className="bg-sidebar-bg fixed left-0 top-0 h-full w-[80px] flex flex-col items-center z-50 py-6 overflow-y-auto">
        <div className="mb-8 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-active-green text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>dataset</span>
          <span className="text-white font-headline-md font-bold text-[10px] tracking-tighter uppercase">Manulife</span>
        </div>
        <nav className="flex flex-col gap-2 w-full">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
            <span className="material-symbols-outlined mb-1">menu_book</span>
            <span className="text-[10px] font-medium leading-[14px]">Plan & learn</span>
          </NavLink>
          <a href="#" className="flex flex-col items-center justify-center py-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1">assignment_ind</span>
            <span className="text-[10px] font-medium leading-[14px]">Group plans</span>
          </a>
          <NavLink to="/" className="flex flex-col items-center justify-center py-4 text-center text-active-green border-l-4 border-active-green bg-white/5 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            <span className="text-[10px] font-medium leading-[14px]">Insurance</span>
          </NavLink>
          <a href="#" className="flex flex-col items-center justify-center py-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1">trending_up</span>
            <span className="text-[10px] font-medium leading-[14px]">Investments</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center py-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1">account_balance</span>
            <span className="text-[10px] font-medium leading-[14px]">Bank</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center py-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1">vitals</span>
            <span className="text-[10px] font-medium leading-[14px]">Vitality</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center py-4 text-center text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200">
            <span className="material-symbols-outlined mb-1">help</span>
            <span className="text-[10px] font-medium leading-[14px]">Support</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/10 w-full flex flex-col items-center">
          <a className="flex flex-col items-center justify-center py-4 text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200 w-full" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-medium leading-[14px]">Settings</span>
          </a>
        </div>
      </aside>
    );
  }

  // Portal / Dashboard Sidebar
  return (
    <nav className="fixed left-0 top-0 h-full w-[80px] flex flex-col items-center bg-sidebar-bg z-50">
      <div className="py-6 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-active-green rounded-lg">
          <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full overflow-y-auto flex-grow no-scrollbar">
        <NavLink to="/dashboard" className={({ isActive }) => `w-full flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Dashboard</span>
        </NavLink>
        <NavLink to="/performance-matrix" className={({ isActive }) => `w-full flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
          <span className="material-symbols-outlined mb-1">compare_arrows</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Comparison</span>
        </NavLink>
        <NavLink to="/agency-explorer" className={({ isActive }) => `w-full flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
          <span className="material-symbols-outlined mb-1">analytics</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Explorer</span>
        </NavLink>
        <NavLink to="/recruitment-analytics" className={({ isActive }) => `w-full flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
          <span className="material-symbols-outlined mb-1">person_add</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Recruitment</span>
        </NavLink>
        <NavLink to="/dashboard-v2" className={({ isActive }) => `w-full flex flex-col items-center justify-center py-4 text-center transition-colors duration-200 ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
          <span className="material-symbols-outlined mb-1">layers</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Dashboard V2</span>
        </NavLink>
        <button onClick={onToggleAI} className="w-full text-white/70 hover:text-white flex flex-col items-center justify-center py-4 transition-colors duration-200 hover:bg-white/10">
          <span className="material-symbols-outlined mb-1 text-active-green">auto_awesome</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">AI Copilot</span>
        </button>
      </div>
      <div className="mt-auto pb-6 w-full flex flex-col items-center gap-4">
        <NavLink to="/" className="w-full text-white/70 hover:text-white flex flex-col items-center justify-center py-4 transition-colors duration-200 hover:bg-white/10 border-t border-white/10">
          <span className="material-symbols-outlined mb-1">logout</span>
          <span className="text-[10px] font-medium leading-[14px] px-1">Logout</span>
        </NavLink>
      </div>
    </nav>
  );
}
