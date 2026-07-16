import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';
import { getRoleConfig } from '../config/roleConfig';

const portalPrefixes = ['/dashboard', '/approval-queue', '/performance-matrix', '/agency-explorer', '/agency-detail', '/recruitment-analytics', '/advisor-dashboard', '/customer-720', '/my-day', '/content-studio', '/meetings', '/proposal-intelligence', '/service-requests', '/rewards', '/notifications'];

export default function Sidebar({ onToggleAI }) {
  const { pathname } = useLocation();
  const { role } = usePrototype();
  if (pathname === '/login') return null;

  if (!portalPrefixes.some((prefix) => pathname.startsWith(prefix))) return null;
  const { nav } = getRoleConfig(role);

  return <nav aria-label={`${role} navigation`} className="fixed left-0 top-0 h-full w-[80px] flex flex-col items-center bg-sidebar-bg z-50">
    <div className="py-6 mb-3"><div className="w-10 h-10 flex items-center justify-center bg-active-green rounded-lg"><span className="material-symbols-outlined text-white text-3xl">filter_list</span></div></div>
    <div className="flex flex-col gap-1 w-full overflow-y-auto flex-grow no-scrollbar">
      {nav.map((item) => item.path === '#copilot' ? <button key={item.label} onClick={onToggleAI} className="w-full text-white/70 hover:text-white flex flex-col items-center justify-center py-3 transition-colors hover:bg-white/10"><span className="material-symbols-outlined mb-1 text-active-green">{item.icon}</span><span className="text-[10px] font-medium leading-[13px] px-1">{item.label}</span></button> : <NavLink key={item.path + item.label} to={item.path} className={({ isActive }) => `w-full flex flex-col items-center justify-center py-3 text-center transition-colors ${isActive ? 'text-active-green border-l-4 border-active-green bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'}`}><span className="material-symbols-outlined mb-1">{item.icon}</span><span className="text-[10px] font-medium leading-[13px] px-1">{item.label}</span></NavLink>)}
    </div>
    <NavLink to="/" className="w-full text-white/70 hover:text-white flex flex-col items-center justify-center py-4 hover:bg-white/10 border-t border-white/10"><span className="material-symbols-outlined mb-1">logout</span><span className="text-[10px] font-medium">Logout</span></NavLink>
  </nav>;
}
