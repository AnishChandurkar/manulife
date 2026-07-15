import { NavLink, useLocation } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';

const navByRole = {
  Advisor: [
    ['Advisor Dashboard', '/advisor-dashboard', 'dashboard'], ['My Day', '/my-day', 'today'], ['Customer 720', '/customer-720', 'person_search'], ['Meetings', '/meetings', 'groups'], ['Proposal Intelligence', '/proposal-intelligence', 'description'], ['Content Studio', '/content-studio', 'edit_note'],
  ],
  'Agency Leader': [
    ['Dashboard', '/dashboard', 'dashboard'], ['Recruitment', '/recruitment-analytics', 'person_add'], ['Advisor Performance', '/performance-matrix', 'monitoring'], ['Agency Explorer', '/agency-explorer', 'account_tree'], ['Content Studio', '/content-studio', 'edit_note'],
  ],
  'District Leader': [
    ['Dashboard', '/dashboard', 'dashboard'], ['Agency Explorer', '/agency-explorer', 'account_tree'], ['Performance Matrix', '/performance-matrix', 'monitoring'], ['Recruitment Analytics', '/recruitment-analytics', 'person_add'],
  ],
  Compliance: [
    ['Compliance Workspace', '/content-studio', 'verified_user'], ['Content Studio', '/content-studio', 'edit_note'], ['Recruitment Review', '/recruitment-analytics', 'fact_check'],
  ],
};

export default function Sidebar({ onToggleAI }) {
  const { role } = usePrototype();
  const { pathname } = useLocation();
  if (pathname === '/login') return null;
  const portal = pathname !== '/';
  if (!portal) return null;
  return <aside className="fixed left-0 top-0 h-full w-20 bg-sidebar-bg text-white z-50 flex flex-col items-center py-5 shadow-xl">
    <NavLink to="/dashboard" className="w-10 h-10 rounded-lg bg-active-green grid place-items-center mb-5" aria-label="Dashboard"><span className="material-symbols-outlined">health_and_safety</span></NavLink>
    <p className="text-[9px] text-white/60 uppercase tracking-wide mb-3 text-center px-1">{role}</p>
    <nav className="w-full flex-1 overflow-y-auto">{navByRole[role].map(([label, to, icon]) => <NavLink key={to + label} to={to} title={label} className={({ isActive }) => `relative w-full min-h-16 flex flex-col items-center justify-center gap-1 px-1 text-center text-[10px] ${isActive ? 'text-active-green bg-white/10 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-active-green' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}><span className="material-symbols-outlined text-xl">{icon}</span><span>{label}</span></NavLink>)}</nav>
    <button onClick={onToggleAI} className="w-full min-h-16 flex flex-col items-center justify-center gap-1 text-white/80 hover:bg-white/10"><span className="material-symbols-outlined text-active-green">auto_awesome</span><span className="text-[10px]">Ask AI</span></button>
    <NavLink to="/login" className="w-full min-h-14 flex flex-col items-center justify-center gap-1 text-white/70 hover:bg-white/10"><span className="material-symbols-outlined">logout</span><span className="text-[10px]">Logout</span></NavLink>
  </aside>;
}
