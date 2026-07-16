import { useEffect } from 'react';
import './AdvisorDashboard.css';

export default function AdvisorDashboard() {
  useEffect(() => {
    // Animate KPI counters on mount (ported from the original inline script)
    const counters = document.querySelectorAll('.text-kpi-value');
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
    <div className="advisor-dashboard-root flex min-h-screen text-text-deep">
      {/* SideNavBar */}
      {/* Main Canvas */}
      <main className="flex-1 min-h-screen flex flex-col relative">
      {/* TopNavBar */}
      {/* Content Area */}
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Headline Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
      <h2 className="text-adv-headline-lg text-text-deep">Advisor Dashboard</h2>
      <p className="text-adv-body-md text-on-surface-variant">Welcome back, James. Here's your performance for August.</p>
      </div>
      <div className="flex gap-3">
      <button className="px-5 py-2.5 rounded-button border border-primary text-primary font-semibold hover:bg-primary/5 transition-all flex items-center gap-2 text-body-sm">
      <span className="material-symbols-outlined text-xl">download</span> Export Report
                      </button>
      <button className="px-5 py-2.5 rounded-button bg-primary text-white font-semibold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 text-body-sm">
      <span className="material-symbols-outlined text-xl">add</span> New Application
                      </button>
      </div>
      </section>
      {/* KPI Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {/* Row 1 */}
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Active Customers</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">428</p>
      <span className="text-label-md text-primary font-bold flex items-center">↑ 4%</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Monthly Sales</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">$12.4k</p>
      <span className="text-label-md text-primary font-bold flex items-center">↑ 12%</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Pipeline Value</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">$842k</p>
      <span className="text-label-md text-adv-status-red font-bold flex items-center">↓ 2%</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Policies Sold</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">14</p>
      <span className="text-label-md text-primary font-bold flex items-center">↑ 8%</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Premium Coll.</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">$42.1k</p>
      <span className="text-label-md text-primary font-bold">84% Goal</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Renewal Rate</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">98.2%</p>
      <span className="text-label-md text-primary font-bold">Stable</span>
      </div>
      </div>
      {/* Row 2 */}
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">CSAT Score</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">4.9</p>
      <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Meetings Today</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">6</p>
      <span className="text-label-md bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">Busy</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border border-adv-outline-variant card-shadow">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Tasks Due</p>
      <div className="flex items-baseline justify-between">
      <p className="text-kpi-value text-text-deep">12</p>
      <span className="text-label-md text-adv-status-red font-bold">3 High</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-card border-2 border-primary/20 card-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-1 bg-primary text-white rounded-bl-lg">
      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
      </div>
      <p className="text-label-sm text-primary font-bold uppercase mb-2">AI Productivity</p>
      <div className="flex items-center justify-between gap-2">
      <div>
      <p className="text-kpi-value text-primary leading-tight">94</p>
      <p className="text-[10px] text-primary/80 font-bold">Weekly +12%</p>
      </div>
      <div className="relative flex items-center justify-center">
      <svg className="w-10 h-10 transform -rotate-90">
      <circle className="text-background" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeWidth="4"></circle>
      <circle className="text-primary" cx="20" cy="20" fill="transparent" r="16" stroke="currentColor" strokeDasharray="100" strokeDashoffset="6" strokeLinecap="round" strokeWidth="4"></circle>
      </svg>
      <span className="absolute text-[8px] font-bold text-primary">94%</span>
      </div>
      </div>
      </div>
      {/* Highlight Cards (Amber/Gold) */}
      <div className="bg-[#FFF8EE] p-6 rounded-card border border-tertiary/20 card-shadow">
      <p className="text-label-sm text-tertiary font-bold uppercase tracking-wider mb-2">Reward Status</p>
      <div className="flex items-baseline justify-between mb-1">
      <div className="flex items-center gap-1">
      <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
      <p className="text-kpi-value text-tertiary">Gold</p>
      </div>
      </div>
      <p className="text-[10px] text-tertiary/80 font-bold">1,250 pts to Diamond</p>
      </div>
      <div className="bg-[#FFF8EE] p-6 rounded-card border border-tertiary/20 card-shadow">
      <p className="text-label-sm text-tertiary font-bold uppercase tracking-wider mb-2">Streak</p>
      <div className="flex items-baseline justify-between mb-1">
      <p className="text-kpi-value text-tertiary">14 Days</p>
      <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
      </div>
      <p className="text-[10px] text-tertiary/80 font-bold">4 Meetings today</p>
      </div>
      </section>
      {/* Recent Customers */}
      <section>
      <div className="flex items-center gap-2 px-2 mb-4">
      <span className="material-symbols-outlined text-primary">group</span>
      <h3 className="text-headline-md text-text-deep">Recent Customers</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-card border border-adv-outline-variant card-shadow flex items-center gap-4 hover:border-primary/30 transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3Udy6S47uDsI_88_-k5WTilbzuqj85_7qAR03ksKF3PYO_Z_f787jftZ_DTdwQvy7ha6-4BUJDjpuGQiDfz990u5D-PDv27pgXPjE2v0H5JOTkNJfKnetDc6Q0hndsGnyKMXu177zHlmPI_TD2GpasEF-jhcR2oCKFNmMh90jn7bJmlahpHY-f-a8nwAWMqi4eanUXa4FKQBHcuSTtksab8_NpbqPsPCi3y5wl1vmnV10TH0Ku8r"/>
      <div className="flex-1 min-w-0">
      <p className="text-body-sm font-semibold text-text-deep truncate">Jean-Pierre Tremblay</p>
      <p className="text-label-sm text-adv-status-red font-bold">Due in 15 days</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
      <span className="material-symbols-outlined text-xl">contact_page</span>
      </button>
      </div>
      <div className="bg-white p-4 rounded-card border border-adv-outline-variant card-shadow flex items-center gap-4 hover:border-primary/30 transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy_PkrITxP3ewBpI9VYp94mthr5tftM9maOj9z-TZfAgz1xcvYB06c5e7CkuQ_ODJtDjTVgmR7BoQWV5XUl4BHNANdcTzFsg3AvxQcHlfmhDieTIRG1mFxYube9ND9QD_hOi_OTaQjh-cIEMRzA1tZXl_cWHD_qlI6jLiAgTpL5h4A11CSzP_DsXlQQ0ECLARRH26m55Ewt-ocGiIgTCKTYX2rVEYfQPDSadhjUNCJBdk9M9l4Q53a"/>
      <div className="flex-1 min-w-0">
      <p className="text-body-sm font-semibold text-text-deep truncate">Sarah Jenkins</p>
      <p className="text-label-sm text-primary font-bold">Active</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
      <span className="material-symbols-outlined text-xl">contact_page</span>
      </button>
      </div>
      <div className="bg-white p-4 rounded-card border border-adv-outline-variant card-shadow flex items-center gap-4 hover:border-primary/30 transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAog6pAee2ap-D73alnDczt0JXgYwWb4t2xNrU0Oit2PIqarmicwZkLNJ7Q7O8Ow3d1B78sERdhthuu4yW3Lx8Jl6L5vlGZ7B31tleFC-qNcRFShDbmfogN0eQhQVv5LUtF04g218LTgDu8US68C0iy5ZLtAH6kK6GbL5WDh_L0LdLOb8TM5yZHDaOvXefLnQYrxqAict15TVWvoRtKqdKZ-SWo92OQoYXqM7VIulgNmTxGU56AxscE"/>
      <div className="flex-1 min-w-0">
      <p className="text-body-sm font-semibold text-text-deep truncate">Michael Chen</p>
      <p className="text-label-sm text-primary font-bold">Active</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
      <span className="material-symbols-outlined text-xl">contact_page</span>
      </button>
      </div>
      <div className="bg-white p-4 rounded-card border border-adv-outline-variant card-shadow flex items-center gap-4 hover:border-primary/30 transition-all group">
      <img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26vout4WCuGwKxg-U81naU4pRdlx1fOXH9YuWuSPw7YEVUov2brnR0IsTbAJceGKlQ717Pg7w2wTw801j5ofBxjdmzGB_iBGpO-I3U4R4X-S4dR30M2KTlkLpRyrgeWLnPtIRyD2KhWUDq4xno3RO91zo8W2o8323eVCdCtWdFlrC1316P3PQf05KnoaaxYiXN8NHbULwY1R_ObYmo1--CC60EcibKUhvWQEkls3_OvEAdNH6srIM"/>
      <div className="flex-1 min-w-0">
      <p className="text-body-sm font-semibold text-text-deep truncate">Chloe Dubois</p>
      <p className="text-label-sm text-adv-status-red font-bold">Due in 5 days</p>
      </div>
      <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
      <span className="material-symbols-outlined text-xl">contact_page</span>
      </button>
      </div>
      </div>
      </section>
      {/* Main Split Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Left Column (2/3) */}
      <div className="xl:col-span-2 space-y-8">
      {/* Chart Card */}
      <div className="bg-white p-8 rounded-card border border-adv-outline-variant card-shadow flex flex-col md:flex-row gap-8 relative overflow-hidden">
      <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
      <h3 className="text-headline-md text-text-deep">Monthly Premium vs Target</h3>
      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-label-md">84% Achieved</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div>
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Current Status</p>
      <p className="text-adv-headline-lg text-primary leading-none">$42,100</p>
      </div>
      <div>
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Forecasted</p>
      <p className="text-adv-headline-lg text-text-deep leading-none">$48,500</p>
      </div>
      <div className="md:text-right">
      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Expected Ach.</p>
      <p className="text-adv-headline-lg text-primary leading-none">97%</p>
      </div>
      </div>
      {/* Progress Bar */}
      <div className="w-full h-3 bg-background rounded-full overflow-hidden relative mb-4">
      <div className="absolute top-0 left-0 h-full bg-primary w-[84%] rounded-full"></div>
      </div>
      <div className="flex justify-between items-center">
      <p className="text-body-sm text-on-surface-variant italic">Monthly Goal: $50,000</p>
      <p className="text-label-sm font-bold text-primary">Aug 31 Deadline</p>
      </div>
      </div>
      <div className="w-full md:w-64 h-48 md:h-auto bg-background rounded-xl border border-dashed border-adv-outline-variant flex items-center justify-center relative group">
      {/* Chart Representation */}
      <div className="absolute inset-4 flex items-end gap-2">
      <div className="flex-1 bg-primary/20 rounded-t h-[40%]"></div>
      <div className="flex-1 bg-primary/30 rounded-t h-[60%]"></div>
      <div className="flex-1 bg-primary/40 rounded-t h-[55%]"></div>
      <div className="flex-1 bg-primary/50 rounded-t h-[75%]"></div>
      <div className="flex-1 bg-primary/60 rounded-t h-[65%]"></div>
      <div className="flex-1 bg-primary rounded-t h-[84%]"></div>
      </div>
      </div>
      </div>
      {/* Today's AI Brief */}
      <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      <h3 className="text-headline-md text-text-deep">Today's AI Brief</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
      {/* AI Item 1 */}
      <div className="bg-ai-tint border-l-4 border-primary p-6 rounded-r-card card-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-primary">
      <span className="material-symbols-outlined text-xl">trending_up</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">High Conversion</span>
      <span className="bg-primary text-white px-2 py-0.5 rounded text-[10px] font-bold">92% Confidence</span>
      </div>
      <p className="text-body-sm text-text-deep">
      <strong className="font-semibold">Jean-Pierre Tremblay:</strong> High propensity for Critical Illness upgrade. Term-20 expiring soon.
                                          </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-button bg-primary text-white font-bold text-label-md shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-lg">assignment</span> Prepare Quote
                                  </button>
      </div>
      {/* AI Item 2 */}
      <div className="bg-[#FFF8F7] border-l-4 border-adv-status-red p-6 rounded-r-card card-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-adv-status-red">
      <span className="material-symbols-outlined text-xl">alarm</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-adv-status-red/10 text-adv-status-red px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Policy Renewal Due</span>
      <span className="bg-adv-status-red text-white px-2 py-0.5 rounded text-[10px] font-bold">High Priority</span>
      </div>
      <p className="text-body-sm text-text-deep">
      <strong className="font-semibold">Sarah Jenkins:</strong> Term-20 expiring soon. Policy #LF-4421. Needs immediate review.
                                          </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-button bg-primary text-white font-bold text-label-md shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-lg">call</span> Start Call
                                  </button>
      </div>
      {/* AI Item 3 */}
      <div className="bg-ai-tint border-l-4 border-tertiary p-6 rounded-r-card card-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-tertiary">
      <span className="material-symbols-outlined text-xl">payments</span>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Upsell Opportunity</span>
      <span className="bg-tertiary text-white px-2 py-0.5 rounded text-[10px] font-bold">85% Confidence</span>
      </div>
      <p className="text-body-sm text-text-deep">
      <strong className="font-semibold">Michael Chen:</strong> Eligible for RRSP top-up based on recent income data.
                                          </p>
      </div>
      </div>
      <button className="whitespace-nowrap px-4 py-2 rounded-button bg-primary text-white font-bold text-label-md shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-lg">send</span> Send Suggestion
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column (1/3) */}
      <div className="space-y-8">
      {/* Appointments */}
      <div className="bg-white rounded-card border border-adv-outline-variant card-shadow overflow-hidden">
      <div className="p-6 border-b border-adv-outline-variant flex justify-between items-center">
      <h3 className="text-headline-md text-text-deep">Appointments</h3>
      <span className="text-label-sm font-bold text-on-surface-variant">Today, Aug 14</span>
      </div>
      <div className="divide-y divide-adv-outline-variant">
      <div className="p-5 hover:bg-background transition-colors group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-md font-bold text-primary">09:30</p>
      <p className="text-[10px] text-on-surface-variant uppercase">AM</p>
      </div>
      <div className="flex-1">
      <p className="text-body-sm font-semibold text-text-deep">Michael Chen</p>
      <p className="text-label-sm text-on-surface-variant">RRSP Portfolio Review</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">contact_page</span></button>
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">sticky_note_2</span></button>
      <button className="bg-primary text-white px-3 py-1 rounded text-[10px] font-bold">Join</button>
      </div>
      </div>
      <div className="p-5 bg-primary/5 border-l-4 border-primary group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-md font-bold text-primary">11:00</p>
      <p className="text-[10px] text-on-surface-variant uppercase">AM</p>
      </div>
      <div className="flex-1">
      <div className="flex items-center gap-2">
      <p className="text-body-sm font-semibold text-text-deep">Chloe Dubois</p>
      <span className="bg-primary text-[10px] text-white px-2 py-0.5 rounded-full font-bold">In 10m</span>
      </div>
      <p className="text-label-sm text-on-surface-variant">Needs Analysis Meeting</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3">
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">contact_page</span></button>
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">sticky_note_2</span></button>
      <button className="bg-primary text-white px-3 py-1 rounded text-[10px] font-bold">Join</button>
      </div>
      </div>
      <div className="p-5 hover:bg-background transition-colors group">
      <div className="flex items-center gap-4 mb-3">
      <div className="w-12 text-center">
      <p className="text-label-md font-bold text-on-surface-variant">02:00</p>
      <p className="text-[10px] text-on-surface-variant uppercase">PM</p>
      </div>
      <div className="flex-1">
      <p className="text-body-sm font-semibold text-text-deep">David Wilson</p>
      <p className="text-label-sm text-on-surface-variant">CI Policy Signing</p>
      </div>
      </div>
      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">contact_page</span></button>
      <button className="text-primary hover:bg-primary/10 p-1.5 rounded-full transition-colors"><span className="material-symbols-outlined text-lg">sticky_note_2</span></button>
      <button className="bg-primary text-white px-3 py-1 rounded text-[10px] font-bold">Join</button>
      </div>
      </div>
      </div>
      <button className="w-full p-4 text-center font-bold text-primary hover:bg-primary/5 transition-colors text-label-md border-t border-adv-outline-variant">
                              View All 6 Meetings
                          </button>
      </div>
      {/* Recent Activity */}
      <div className="bg-white rounded-card border border-adv-outline-variant card-shadow overflow-hidden">
      <div className="p-6 border-b border-adv-outline-variant">
      <h3 className="text-headline-md text-text-deep">Recent Activity</h3>
      </div>
      <div className="divide-y divide-adv-outline-variant">
      <div className="p-4 flex gap-3 hover:bg-background transition-colors">
      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
      <span className="material-symbols-outlined text-lg">mail</span>
      </div>
      <div>
      <p className="text-body-sm text-text-deep">Email sent to <span className="font-bold">Michael Chen</span></p>
      <p className="text-label-sm text-on-surface-variant">RRSP Follow-up • 10m ago</p>
      </div>
      </div>
      <div className="p-4 flex gap-3 hover:bg-background transition-colors">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
      <span className="material-symbols-outlined text-lg">description</span>
      </div>
      <div>
      <p className="text-body-sm text-text-deep">Application Submitted</p>
      <p className="text-label-sm text-on-surface-variant">David Wilson • 2h ago</p>
      </div>
      </div>
      <div className="p-4 flex gap-3 hover:bg-background transition-colors">
      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0 text-tertiary">
      <span className="material-symbols-outlined text-lg">payments</span>
      </div>
      <div>
      <p className="text-body-sm text-text-deep">Payment Received</p>
      <p className="text-label-sm text-on-surface-variant">Policy #LF-99231 • 4h ago</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* AI Copilot NavigationDrawer */}
      <div className="fixed right-0 top-0 h-full w-16 bg-white border-l-4 border-primary shadow-2xl z-50 flex flex-col items-center py-6 gap-6 transition-all duration-300 hover:w-96 group/drawer" id="ai-drawer">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg cursor-pointer">
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </div>
      <div className="hidden group-hover/drawer:flex flex-col w-full px-8 overflow-hidden">
      <div className="flex items-center justify-between mb-8">
      <h2 className="text-headline-md text-primary">AI Copilot</h2>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">close</span>
      </div>
      <div className="flex gap-2 mb-6">
      <button className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-label-md flex items-center gap-1 font-bold">
      <span className="material-symbols-outlined text-sm">history</span> History
                  </button>
      <button className="text-on-surface-variant hover:text-primary rounded-full px-4 py-1.5 text-label-md flex items-center gap-1 font-semibold">
      <span className="material-symbols-outlined text-sm">lightbulb</span> Suggestions
                  </button>
      </div>
      <div className="bg-ai-tint p-6 rounded-card border border-primary/10 mb-6">
      <p className="text-body-sm text-text-deep leading-relaxed italic">
                      "I noticed a gap in your schedule at 3:00 PM. Would you like me to draft outreach emails to the 12 under-insured families identified today?"
                  </p>
      <div className="flex gap-3 mt-6">
      <button className="flex-1 bg-primary text-white py-2 rounded-button font-bold text-label-md">Draft Email</button>
      <button className="flex-1 border border-primary text-primary py-2 rounded-button font-bold text-label-md">Later</button>
      </div>
      </div>
      <div className="mt-auto pb-6">
      <div className="relative">
      <input className="w-full bg-background border border-adv-outline-variant rounded-xl py-3 pl-4 pr-12 focus:ring-1 focus:ring-primary focus:border-primary outline-none text-body-sm" placeholder="Ask anything..." type="text"/>
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
      <span className="material-symbols-outlined">send</span>
      </button>
      </div>
      </div>
      </div>
      <div className="group-hover/drawer:hidden flex flex-col gap-8 mt-10">
      <span className="material-symbols-outlined text-on-surface-variant">history</span>
      <span className="material-symbols-outlined text-on-surface-variant">lightbulb</span>
      <div className="flex-1"></div>
      <span className="material-symbols-outlined text-on-surface-variant">keyboard_arrow_left</span>
      </div>
      </div>
    </div>
  );
}
