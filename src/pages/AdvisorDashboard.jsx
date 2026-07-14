import { useEffect } from 'react';
import './AdvisorDashboard.css';

export default function AdvisorDashboard() {
  useEffect(() => {
    // Animate KPI counters on mount (ported from the original inline script)
    const counters = document.querySelectorAll('.font-kpi-value');
    const intervals = [];

    counters.forEach((counter) => {
      const text = counter.innerText;
      if (text.includes('$') || text.includes('%') || isNaN(parseInt(text, 10)) || text.length > 5) return;

      const target = parseInt(text, 10);
      let current = 0;
      const increment = target / 20;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.innerText = target;
          clearInterval(interval);
        } else {
          counter.innerText = Math.floor(current);
        }
      }, 30);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="advisor-dashboard-root flex min-h-screen">
      {/* SideNavBar Anchor */}
      <aside className="fixed left-0 top-0 h-full w-[280px] bg-primary dark:bg-primary-fixed-dim text-on-primary shadow-lg hidden lg:flex flex-col py-6 z-50 overflow-y-auto" id="main-sidebar">
      <div className="px-6 mb-10 flex items-center gap-3">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
      <img className="w-8 h-8 object-contain" data-alt="A clean, minimalist vector logo of a global financial institution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlG3PYS9wrMMZDhp-JbRgRu--bseHl-jBeQNWvN2zLouQQKqbidK5zsc15pwgiF03x-IMdYgForKC2ADBV3Nd2JBcfUR89UIMB4qCX-dusCdsmVTGNmjl-xomnuKjOrbOBTjKebK9QrPUcNuzXSiOEy5yHj1NNYSC54F0JdVPKktdL7HQ6E7Cl8tc6PdVSFFx-73LEMi-HfWNxp5ujZouSUw-OcZYbpqt2dw219eNfaugjGpVE4r5q" />
      </div>
      <div>
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary leading-tight">Agency Digital</h1>
      <p className="text-[10px] uppercase tracking-widest opacity-70">Manulife Enterprise</p>
      </div>
      </div>
      <nav className="flex-1 space-y-6"><div><a className="flex items-center gap-3 bg-primary-container text-on-primary-container rounded-lg px-4 py-3 mx-4 transition-transform duration-200" href="#"><span className="material-symbols-outlined">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a></div><div><p className="px-8 text-[10px] uppercase tracking-widest text-on-primary/60 mb-2 font-bold">Advisor Workspace</p><div className="space-y-1"><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">event_note</span><span className="font-label-md text-label-md">My Day</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">contact_page</span><span className="font-label-md text-label-md">Customer 720</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">groups</span><span className="font-label-md text-label-md">Meetings</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">insights</span><span className="font-label-md text-label-md">Proposal Intelligence</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">support_agent</span><span className="font-label-md text-label-md">Service Requests</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">military_tech</span><span className="font-label-md text-label-md">Rewards</span></a></div></div><div><p className="px-8 text-[10px] uppercase tracking-widest text-on-primary/60 mb-2 font-bold">Content</p><div className="space-y-1"><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">movie_edit</span><span className="font-label-md text-label-md">Content Studio</span></a></div></div><div><p className="px-8 text-[10px] uppercase tracking-widest text-on-primary/60 mb-2 font-bold">Analytics</p><div className="space-y-1"><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">monitoring</span><span className="font-label-md text-label-md">My Performance</span></a></div></div><div className="pt-4 border-t border-on-primary/10"><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">notifications</span><span className="font-label-md text-label-md">Notifications</span></a><a className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 px-4 py-2.5 mx-4 rounded-lg transition-colors" href="#"><span className="material-symbols-outlined text-xl">settings</span><span className="font-label-md text-label-md">Settings</span></a></div></nav>
      <div className="px-4 mt-8">
      <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl border border-white/20 transition-all">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
      <span className="font-label-md">Ask AI Copilot</span>
      </button>
      </div>
      </aside>
      {/* Main Canvas */}
      <main className="flex-1 lg:ml-[280px] min-h-screen flex flex-col relative">
      {/* TopNavBar Anchor */}
      <header className="sticky top-0 w-full h-16 bg-surface-white border-b border-outline-variant flex justify-between items-center px-8 z-40 shadow-sm">
      <div className="flex items-center flex-1 max-w-xl">
      <div className="relative w-full">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
      <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary/20" placeholder="Search clients, policies, or insights..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-4 ml-8">
      <button className="relative p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-status-red rounded-full"></span>
      </button>
      <button className="p-2 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors">
      <span className="material-symbols-outlined">spark</span>
      </button>
      <div className="h-8 w-px bg-outline-variant mx-2"></div>
      <div className="flex items-center gap-3 cursor-pointer group">
      <div className="text-right hidden sm:block">
      <p className="font-label-md text-on-surface leading-none">James Peterson</p>
      <p className="text-label-sm text-on-surface-variant">Senior Advisor</p>
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 group-hover:border-primary transition-all">
      <img className="w-full h-full object-cover rounded-full" data-alt="A professional headshot of a middle-aged male insurance advisor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB05Kr9TNI-FOw-lZ4mCx7tEXcshxaHohR5PKg6xsQgPNAgnaam231hd1VWPaQUBAVJPljMPSN8x80RmorI81izFsEqYujtTEeHI04xxYC_MacQi6edgMde43qnCRGpTEOAdH1yfl3IL0IR0CGxaq44Boivpnkrr4BLg3OtEyjuNUkpidqEAtrCCMLu-8GnrmkFfUkZ3Z4mlalejVxAENnCywm3u7Pr_UjugNTTqm3N9Lp2hgIRMDvy" />
      </div>
      </div>
      </div>
      </header>
      {/* Content Area */}
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Headline Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <h2 className="font-headline-lg text-headline-lg text-text-deep">Advisor Dashboard</h2>
      <p className="text-body-md text-on-surface-variant">Welcome back, James. Here's your performance for August.</p>
      </div>
      <div className="flex gap-3">
      <button className="px-5 py-2.5 rounded-lg border border-outline text-primary font-bold hover:bg-primary/5 transition-all flex items-center gap-2">
      <span className="material-symbols-outlined">download</span> Export Report
                          </button>
      <button className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2">
      <span className="material-symbols-outlined">add</span> New Application
                          </button>
      </div>
      </section>
      {/* 12 KPI Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {/* Standard KPIs */}
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Active Customers</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">428</p>
      <span className="text-xs text-primary font-bold flex items-center">↑ 4%</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Monthly Sales</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">$12.4k</p>
      <span className="text-xs text-primary font-bold flex items-center">↑ 12%</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Pipeline Value</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">$842k</p>
      <span className="text-xs text-status-red font-bold flex items-center">↓ 2%</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Policies Sold</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">14</p>
      <span className="text-xs text-primary font-bold flex items-center">↑ 8%</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Premium Coll.</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">$42.1k</p>
      <span className="text-xs text-primary font-bold">84% of Goal</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Renewal Rate</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">98.2%</p>
      <span className="text-xs text-primary font-bold">Stable</span>
      </div>
      </div>
      {/* Row 2 */}
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">CSAT Score</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">4</p>
      <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Meetings Today</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">6</p>
      <span className="text-xs bg-primary-container/20 text-primary px-2 py-0.5 rounded-full font-bold">Busy</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase mb-1">Tasks Due</p>
      <div className="flex items-baseline justify-between">
      <p className="font-kpi-value text-kpi-value text-text-deep">12</p>
      <span className="text-xs text-status-red font-bold">3 High Priority</span>
      </div>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border-2 border-primary-container/30 shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-1 bg-primary text-on-primary rounded-bl-lg">
      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
      </div>
      <div className="flex items-center justify-between mb-1">
      <p className="text-label-sm text-primary font-bold uppercase">AI Productivity</p>
      <p className="text-[10px] text-primary font-bold">Top 5%</p>
      </div>
      <div className="flex items-center justify-between gap-2">
      <div>
      <p className="font-kpi-value text-kpi-value text-primary leading-tight">94</p>
      <p className="text-[10px] text-primary/80 font-bold leading-tight">Weekly improvement +12%</p>
      </div>
      <div className="relative flex items-center justify-center">
      <svg className="w-10 h-10 transform -rotate-90">
      <circle className="text-surface-container" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeWidth="4"></circle>
      <circle className="text-primary" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeDasharray="100" strokeDashoffset="6" strokeLinecap="round" strokeWidth="4"></circle>
      </svg>
      <span className="absolute text-[8px] font-bold text-primary">94%</span>
      </div>
      </div>
      </div>
      {/* Highlight Cards (Amber) */}
      <div className="bg-[#FFF8EE] p-4 rounded-xl border-2 border-tertiary-container shadow-[0px_4px_20px_rgba(227,154,43,0.1)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-tertiary font-bold uppercase mb-1">Reward Status</p>
      <div className="flex items-baseline justify-between mb-1">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
      <p className="font-kpi-value text-kpi-value text-tertiary">Gold</p>
      </div>
      <p className="text-[10px] text-tertiary/80 font-bold uppercase">Tier</p>
      </div>
      <p className="text-[10px] text-tertiary-container font-bold">1,250 points until Diamond</p>
      </div>
      <div className="bg-[#FFF8EE] p-4 rounded-xl border-2 border-tertiary-container shadow-[0px_4px_20px_rgba(227,154,43,0.1)] hover:shadow-md transition-shadow">
      <p className="text-label-sm text-tertiary font-bold uppercase mb-1">Activity Tracking</p>
      <div className="flex items-baseline justify-between mb-1">
      <p className="font-kpi-value text-kpi-value text-tertiary">14 Days</p>
      <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
      </div>
      <div className="space-y-0.5">
      <p className="text-[10px] text-tertiary font-medium">4 Meetings Completed Today</p>
      <p className="text-[10px] text-tertiary font-medium">2 Proposals Generated Today</p>
      </div>
      </div>
      </section>
      {/* Recent Customers Quick Access */}
      <section>
      <div className="flex items-center gap-2 px-2 mb-4">
      <span className="material-symbols-outlined text-primary">group</span>
      <h3 className="font-headline-md text-headline-md text-text-deep">Recent Customers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3Udy6S47uDsI_88_-k5WTilbzuqj85_7qAR03ksKF3PYO_Z_f787jftZ_DTdwQvy7ha6-4BUJDjpuGQiDfz990u5D-PDv27pgXPjE2v0H5JOTkNJfKnetDc6Q0hndsGnyKMXu177zHlmPI_TD2GpasEF-jhcR2oCKFNmMh90jn7bJmlahpHY-f-a8nwAWMqi4eanUXa4FKQBHcuSTtksab8_NpbqPsPCi3y5wl1vmnV10TH0Ku8r" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-on-surface truncate">Jean-Pierre Tremblay</p>
      <p className="text-label-sm text-status-red font-bold">Due in 15 days</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Open Customer 720">
      <span className="material-symbols-outlined">contact_page</span>
      </button>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy_PkrITxP3ewBpI9VYp94mthr5tftM9maOj9z-TZfAgz1xcvYB06c5e7CkuQ_ODJtDjTVgmR7BoQWV5XUl4BHNANdcTzFsg3AvxQcHlfmhDieTIRG1mFxYube9ND9QD_hOi_OTaQjh-cIEMRzA1tZXl_cWHD_qlI6jLiAgTpL5h4A11CSzP_DsXlQQ0ECLARRH26m55Ewt-ocGiIgTCKTYX2rVEYfQPDSadhjUNCJBdk9M9l4Q53a" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-on-surface truncate">Sarah Jenkins</p>
      <p className="text-label-sm text-primary font-bold">Active</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Open Customer 720">
      <span className="material-symbols-outlined">contact_page</span>
      </button>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAog6pAee2ap-D73alnDczt0JXgYwWb4t2xNrU0Oit2PIqarmicwZkLNJ7Q7O8Ow3d1B78sERdhthuu4yW3Lx8Jl6L5vlGZ7B31tleFC-qNcRFShDbmfogN0eQhQVv5LUtF04g218LTgDu8US68C0iy5ZLtAH6kK6GbL5WDh_L0LdLOb8TM5yZHDaOvXefLnQYrxqAict15TVWvoRtKqdKZ-SWo92OQoYXqM7VIulgNmTxGU56AxscE" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-on-surface truncate">Michael Chen</p>
      <p className="text-label-sm text-primary font-bold">Active</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Open Customer 720">
      <span className="material-symbols-outlined">contact_page</span>
      </button>
      </div>
      <div className="bg-surface-white p-4 rounded-xl border border-outline-variant shadow-sm flex items-center gap-4 hover:shadow-md transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26vout4WCuGwKxg-U81naU4pRdlx1fOXH9YuWuSPw7YEVUov2brnR0IsTbAJceGKlQ717Pg7w2wTw801j5ofBxjdmzGB_iBGpO-I3U4R4X-S4dR30M2KTlkLpRyrgeWLnPtIRyD2KhWUDq4xno3RO91zo8W2o8323eVCdCtWdFlrC1316P3PQf05KnoaaxYiXN8NHbULwY1R_ObYmo1--CC60EcibKUhvWQEkls3_OvEAdNH6srIM" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-on-surface truncate">Chloe Dubois</p>
      <p className="text-label-sm text-status-red font-bold">Due in 5 days</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors" title="Open Customer 720">
      <span className="material-symbols-outlined">contact_page</span>
      </button>
      </div>
      </div>
      </section>
      {/* Main Split Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
      {/* Left Column (2/3) */}
      <div className="xl:col-span-2 space-y-gutter">
      {/* Chart Card */}
      <div className="bg-surface-white p-8 rounded-xl border border-outline-variant shadow-lg flex flex-col md:flex-row gap-8 relative overflow-hidden">
      <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
      <h3 className="font-headline-md text-headline-md text-text-deep">Monthly Premium vs Target</h3>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-label-md">84% Achieved</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div>
      <p className="text-label-sm text-on-surface-variant uppercase">Current Status</p>
      <p className="text-headline-lg font-headline-lg text-primary leading-none">$42,100</p>
      </div>
      <div>
      <p className="text-label-sm text-on-surface-variant uppercase">Forecasted</p>
      <p className="text-headline-lg font-headline-lg text-on-surface leading-none">$48,500</p>
      </div>
      <div className="md:text-right">
      <p className="text-label-sm text-on-surface-variant uppercase">Expected Ach.</p>
      <p className="text-headline-lg font-headline-lg text-primary leading-none">97%</p>
      </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-4 bg-surface-container-high rounded-full overflow-hidden relative mb-4">
      <div className="absolute top-0 left-0 h-full bg-primary w-[84%] rounded-full shadow-[0_0_15px_rgba(0,167,88,0.4)]"></div>
      <div className="absolute top-0 left-[84%] h-full bg-primary/20 w-[13%] rounded-r-full"></div>
      </div>
      <div className="flex justify-between items-center">
      <p className="text-body-md text-on-surface-variant italic">Monthly Goal: $50,000</p>
      <p className="text-label-sm font-bold text-primary">Aug 31 Deadline</p>
      </div>
      </div>
      <div className="w-full md:w-64 h-48 md:h-auto bg-surface-container-lowest rounded-xl border border-dashed border-outline flex items-center justify-center relative group">
      {/* Visual representation of a chart */}
      <div className="absolute inset-4 flex items-end gap-2">
      <div className="flex-1 bg-primary/20 rounded-t-lg h-[40%]"></div>
      <div className="flex-1 bg-primary/30 rounded-t-lg h-[60%]"></div>
      <div className="flex-1 bg-primary/40 rounded-t-lg h-[55%]"></div>
      <div className="flex-1 bg-primary/50 rounded-t-lg h-[75%]"></div>
      <div className="flex-1 bg-primary/60 rounded-t-lg h-[65%]"></div>
      <div className="flex-1 bg-primary rounded-t-lg h-[84%] relative">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-deep text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">84%</div>
      </div>
      </div>
      </div>
      </div>
      {/* Today's AI Brief */}
      <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      <h3 className="font-headline-md text-headline-md text-text-deep">Today's AI Brief</h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
      {/* AI Item 1 */}
      <div className="bg-ai-tint border-l-4 border-primary p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary">
      <span className="material-symbols-outlined">trending_up</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase">High Conversion</span>
      <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold">92% Confidence</span>
      </div>
      <p className="text-body-md text-on-surface">
      <strong className="text-on-surface">Jean-Pierre Tremblay:</strong> High propensity for Critical Illness upgrade. Term-20 expiring soon.
                                      </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-label-sm shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">assignment</span> Prepare Quote
                                  </button>
      </div>
      {/* AI Item 2 */}
      <div className="bg-ai-tint border-l-4 border-status-red p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-status-red">
      <span className="material-symbols-outlined">alarm</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-status-red/10 text-status-red px-2 py-0.5 rounded text-[10px] font-bold uppercase">Policy Renewal Due</span>
      <span className="bg-status-red text-white px-2 py-0.5 rounded text-[10px] font-bold">High Priority</span>
      </div>
      <p className="text-body-md text-on-surface">
      <strong className="text-on-surface">Sarah Jenkins:</strong> Term-20 expiring soon. Policy #LF-4421. Needs immediate review.
                                      </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-label-sm shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">call</span> Start Call
                                  </button>
      </div>
      {/* AI Item 3 */}
      <div className="bg-ai-tint border-l-4 border-tertiary-container p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-tertiary">
      <span className="material-symbols-outlined">payments</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase">Upsell Opportunity</span>
      <span className="bg-tertiary text-white px-2 py-0.5 rounded text-[10px] font-bold">85% Confidence</span>
      </div>
      <p className="text-body-md text-on-surface">
      <strong className="text-on-surface">Michael Chen:</strong> Eligible for RRSP top-up based on recent income increase data.
                                      </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-label-sm shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">send</span> Send Suggestion
                                  </button>
      </div>
      {/* AI Item 4 */}
      <div className="bg-ai-tint border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-blue-500">
      <span className="material-symbols-outlined">cake</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Birthday Reminder</span>
      </div>
      <p className="text-body-md text-on-surface">
      <strong className="text-on-surface">David Wilson:</strong> Turning 45 tomorrow - ideal milestone for a full portfolio review.
                                      </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-label-sm shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">calendar_month</span> Schedule Meet
                                  </button>
      </div>
      {/* AI Item 5 */}
      <div className="bg-ai-tint border-l-4 border-outline p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-outline">
      <span className="material-symbols-outlined">history</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-outline-variant text-outline px-2 py-0.5 rounded text-[10px] font-bold uppercase">Follow-up Overdue</span>
      <span className="text-status-red text-[10px] font-bold uppercase">3 Days Over</span>
      </div>
      <p className="text-body-md text-on-surface">
      <strong className="text-on-surface">Chloe Dubois:</strong> Proposal sent 3 days ago - no response recorded. Recommend nudge.
                                      </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary text-on-primary font-bold text-label-sm shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm">mail</span> Send Nudge
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column (1/3) */}
      <div className="space-y-gutter">
      {/* Upcoming Appointments */}
      <div className="bg-surface-white rounded-xl border border-outline-variant shadow-lg overflow-hidden">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
      <h3 className="font-headline-md text-headline-md text-text-deep">Appointments</h3>
      <span className="text-label-sm font-bold text-on-surface-variant">Today, Aug 14</span>
      </div>
      <div className="p-2 space-y-1">
      <div className="p-4 hover:bg-surface-container-low rounded-lg transition-colors group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-sm font-bold text-primary">09:30</p>
      <p className="text-[10px] text-on-surface-variant uppercase">AM</p>
      </div>
      <div className="flex-1">
      <p className="font-label-md text-on-surface">Michael Chen</p>
      <p className="text-label-sm text-on-surface-variant">RRSP Portfolio Review</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Open 720">
      <span className="material-symbols-outlined text-lg">contact_page</span>
      </a>
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Notes">
      <span className="material-symbols-outlined text-lg">sticky_note_2</span>
      </a>
      <a className="bg-primary text-on-primary px-3 py-1 rounded text-[10px] font-bold" href="#">Join</a>
      </div>
      </div>
      <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-sm font-bold text-primary">11:00</p>
      <p className="text-[10px] text-on-surface-variant uppercase">AM</p>
      </div>
      <div className="flex-1">
      <div className="flex items-center gap-2">
      <p className="font-label-md text-on-surface">Chloe Dubois</p>
      <span className="bg-primary text-[10px] text-white px-2 py-0.5 rounded-full">In 10m</span>
      </div>
      <p className="text-label-sm text-on-surface-variant">Needs Analysis Meeting</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3">
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Open 720">
      <span className="material-symbols-outlined text-lg">contact_page</span>
      </a>
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Notes">
      <span className="material-symbols-outlined text-lg">sticky_note_2</span>
      </a>
      <a className="bg-primary text-on-primary px-3 py-1 rounded text-[10px] font-bold" href="#">Join</a>
      </div>
      </div>
      <div className="p-4 hover:bg-surface-container-low rounded-lg transition-colors group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-sm font-bold text-on-surface-variant">02:00</p>
      <p className="text-[10px] text-on-surface-variant uppercase">PM</p>
      </div>
      <div className="flex-1">
      <p className="font-label-md text-on-surface">David Wilson</p>
      <p className="text-label-sm text-on-surface-variant">CI Policy Signing</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Open 720">
      <span className="material-symbols-outlined text-lg">contact_page</span>
      </a>
      <a className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors" href="#" title="Notes">
      <span className="material-symbols-outlined text-lg">sticky_note_2</span>
      </a>
      <a className="bg-primary text-on-primary px-3 py-1 rounded text-[10px] font-bold" href="#">Join</a>
      </div>
      </div>
      </div>
      <button className="w-full p-4 text-center font-bold text-primary hover:bg-primary/5 transition-colors text-label-md border-t border-outline-variant">
                                  View All 6 Meetings
                              </button>
      </div>
      {/* Recent Activity */}
      <div className="bg-surface-white rounded-xl border border-outline-variant shadow-lg overflow-hidden">
      <div className="p-6 border-b border-outline-variant">
      <h3 className="font-headline-md text-headline-md text-text-deep">Recent Activity</h3>
      </div>
      <div className="divide-y divide-outline-variant">
      <div className="p-4 flex gap-3">
      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-blue-600 text-sm">mail</span>
      </div>
      <div>
      <p className="text-body-md text-on-surface">Email sent to <span className="font-bold">Michael Chen</span></p>
      <p className="text-label-sm text-on-surface-variant">RRSP Follow-up • 10m ago</p>
      </div>
      </div>
      <div className="p-4 flex gap-3">
      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-green-600 text-sm">description</span>
      </div>
      <div>
      <p className="text-body-md text-on-surface">Application Submitted</p>
      <p className="text-label-sm text-on-surface-variant">David Wilson (Critical Illness) • 2h ago</p>
      </div>
      </div>
      <div className="p-4 flex gap-3">
      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-tertiary text-sm">payments</span>
      </div>
      <div>
      <p className="text-body-md text-on-surface">Payment Received</p>
      <p className="text-label-sm text-on-surface-variant">Policy #LF-99231 (Lump Sum) • 4h ago</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* AI Copilot NavigationDrawer Anchor */}
      <div className="fixed right-0 top-0 h-full w-16 bg-surface-container-lowest border-l-4 border-primary shadow-xl z-50 flex flex-col items-center py-6 gap-6 transition-all duration-300 hover:w-96 group/drawer" id="ai-drawer">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-on-primary shadow-lg cursor-pointer">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>
      {/* Hidden content until hover */}
      <div className="hidden group-hover/drawer:flex flex-col w-full px-6 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
      <h2 className="font-headline-md text-headline-md text-primary">AI Copilot</h2>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">close</span>
      </div>
      <div className="flex gap-2 mb-6">
      <button className="bg-primary-container text-on-primary-container rounded-full px-4 py-1.5 text-label-md flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">history</span> History
                      </button>
      <button className="text-on-surface-variant hover:text-primary rounded-full px-4 py-1.5 text-label-md flex items-center gap-1">
      <span className="material-symbols-outlined text-sm">lightbulb</span> Suggestions
                      </button>
      </div>
      <div className="bg-ai-tint p-4 rounded-xl border border-primary/10 mb-4">
      <p className="text-body-md text-on-surface leading-relaxed">
                          "I noticed you have a gap in your schedule at 3:00 PM. Would you like me to draft an outreach email to the 12 under-insured families identified?"
                      </p>
      <div className="flex gap-2 mt-4">
      <button className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-bold text-label-sm">Draft Email</button>
      <button className="flex-1 border border-primary text-primary py-2 rounded-lg font-bold text-label-sm">Remind Me Later</button>
      </div>
      </div>
      <div className="mt-auto pb-6">
      <div className="relative">
      <input className="w-full bg-surface-container-high border-none rounded-xl py-3 pl-4 pr-12 focus:ring-primary" placeholder="Type a request..." type="text" />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
      <span className="material-symbols-outlined">send</span>
      </button>
      </div>
      </div>
      </div>
      {/* Collapsed vertical indicator */}
      <div className="group-hover/drawer:hidden flex flex-col gap-8 mt-10">
      <span className="material-symbols-outlined text-on-surface-variant">history</span>
      <span className="material-symbols-outlined text-on-surface-variant">lightbulb</span>
      <div className="flex-1"></div>
      <span className="material-symbols-outlined text-on-surface-variant">keyboard_arrow_left</span>
      </div>
      </div>
      {/* Micro-interaction Script */}
    </div>
  );
}
