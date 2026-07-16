import { useEffect } from 'react';
import './MyDay.css';

export default function MyDay() {
  useEffect(() => {
    // Add a smooth background-color transition on hover (ported from the original inline script)
    const hoverItems = document.querySelectorAll('.hover\\:bg-background');
    const handleEnter = (e) => {
      e.currentTarget.style.transition = 'background-color 0.2s ease-in-out';
    };

    hoverItems.forEach((item) => item.addEventListener('mouseenter', handleEnter));

    return () => {
      hoverItems.forEach((item) => item.removeEventListener('mouseenter', handleEnter));
    };
  }, []);

  return (
    <div className="bg-background text-myday-text-primary font-sans">
      {/* Left Sidebar (SideNavBar) */}
      {/* Main Workspace */}
      <main className="min-h-screen">
      {/* TopNavBar */}
      {/* Content Area */}
      <div className="p-container-desktop">
      <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Center/Left Column */}
      <div className="flex-1 space-y-gutter">
      {/* AI Morning Brief (Hero Card) */}
      <section className="bg-white rounded-xl custom-shadow p-6 border border-border-subtle relative overflow-hidden ai-glow">
      <div className="absolute top-0 right-0 p-4">
      <span className="flex items-center gap-1.5 bg-status-green text-on-status-green px-3 py-1 rounded-full text-label-xs font-bold">
      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                  Luminous AI Engine
                              </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
      <h2 className="text-myday-headline-md text-deep-green mb-2">Good morning, James.</h2>
      <p className="text-body-lg text-text-muted mb-6">Today's priority is the <span className="font-bold text-primary">Tremblay renewal meeting</span> at 11:00 AM and following up on 3 high-propensity critical illness leads.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 bg-background rounded-lg border border-border-subtle">
      <div className="text-label-xs text-text-muted mb-1">Premium Target</div>
      <div className="text-title-lg font-bold text-primary">82%</div>
      </div>
      <div className="p-4 bg-background rounded-lg border border-border-subtle">
      <div className="text-label-xs text-text-muted mb-1">Meetings Today</div>
      <div className="text-title-lg font-bold text-deep-green">6</div>
      </div>
      <div className="p-4 bg-background rounded-lg border border-border-subtle">
      <div className="text-label-xs text-text-muted mb-1">Renewals Due</div>
      <div className="text-title-lg font-bold text-accent-coral">3</div>
      </div>
      <div className="p-4 bg-background rounded-lg border border-border-subtle">
      <div className="text-label-xs text-text-muted mb-1">Priority Leads</div>
      <div className="text-title-lg font-bold text-deep-green">2</div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* KPI Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-component-gap">
      <div className="bg-white p-6 rounded-xl border border-border-subtle custom-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-primary text-[22px]">check_circle</span>
      <span className="text-label-xs text-primary font-bold">+2 from avg</span>
      </div>
      <div className="text-myday-headline-md font-bold text-deep-green leading-none mb-1">8/12</div>
      <div className="text-myday-label-sm text-text-muted">Tasks Completed</div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-border-subtle custom-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-primary text-[22px]">payments</span>
      <span className="text-label-xs text-primary font-bold">On track</span>
      </div>
      <div className="text-myday-headline-md font-bold text-deep-green leading-none mb-1">$12.4k</div>
      <div className="text-myday-label-sm text-text-muted">Daily Premium</div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-border-subtle custom-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-primary text-[22px]">bolt</span>
      <span className="text-label-xs text-primary font-bold">Peak Flow</span>
      </div>
      <div className="text-myday-headline-md font-bold text-deep-green leading-none mb-1">94</div>
      <div className="text-myday-label-sm text-text-muted">AI Productivity</div>
      </div>
      <div className="bg-white p-6 rounded-xl border border-border-subtle custom-shadow">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-accent-coral text-[22px]">stars</span>
      <span className="text-label-xs text-accent-coral font-bold">Gold tier</span>
      </div>
      <div className="text-myday-headline-md font-bold text-deep-green leading-none mb-1">150</div>
      <div className="text-myday-label-sm text-text-muted">Rewards Earned</div>
      </div>
      </section>
      {/* Prioritized Tasks Section */}
      <section className="bg-white rounded-xl border border-border-subtle custom-shadow overflow-hidden">
      <div className="px-6 py-5 border-b border-border-subtle flex justify-between items-center">
      <h3 className="text-title-lg font-bold text-deep-green">Prioritized Tasks</h3>
      <button className="text-primary text-myday-label-sm font-bold hover:underline">View All</button>
      </div>
      <div className="divide-y divide-border-subtle">
      {/* Task 1 */}
      <div className="p-6 flex flex-col md:flex-row gap-4 hover:bg-background transition-colors">
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
      <span className="font-bold text-body-lg text-deep-green">Luc Tremblay</span>
      <span className="text-myday-label-sm text-text-muted">#MNL-8829-22</span>
      <span className="bg-status-red text-on-status-red px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">High Priority</span>
      </div>
      <p className="text-body-md text-text-muted mb-4 italic flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                                          AI Rec: High probability of upgrade to Premium Life based on recent mortgage update.
                                      </p>
      <div className="flex flex-wrap gap-3">
      <button className="bg-primary text-white px-5 py-2 rounded-lg text-myday-label-sm font-bold hover:opacity-90 transition-all">Generate Proposal</button>
      <button className="border border-primary text-primary px-5 py-2 rounded-lg text-myday-label-sm font-bold hover:bg-primary/5 transition-all">Open 720</button>
      <button className="text-text-muted px-4 py-2 rounded-lg text-myday-label-sm font-medium hover:text-deep-green">Mark Complete</button>
      </div>
      </div>
      </div>
      {/* Task 2 */}
      <div className="p-6 flex flex-col md:flex-row gap-4 hover:bg-background transition-colors">
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
      <span className="font-bold text-body-lg text-deep-green">Sarah Chen</span>
      <span className="text-myday-label-sm text-text-muted">#MNL-7712-04</span>
      <span className="bg-status-green text-on-status-green px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Renewal</span>
      </div>
      <p className="text-body-md text-text-muted mb-4 italic flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                                          AI Rec: Offer 5% loyalty discount; historical pattern shows high retention with early contact.
                                      </p>
      <div className="flex flex-wrap gap-3">
      <button className="bg-primary text-white px-5 py-2 rounded-lg text-myday-label-sm font-bold hover:opacity-90 transition-all">Call Customer</button>
      <button className="border border-primary text-primary px-5 py-2 rounded-lg text-myday-label-sm font-bold hover:bg-primary/5 transition-all">Open 720</button>
      <button className="text-text-muted px-4 py-2 rounded-lg text-myday-label-sm font-medium hover:text-deep-green">Defer</button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* AI Next Best Actions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-component-gap">
      <div className="bg-white rounded-xl p-6 border border-border-subtle custom-shadow">
      <h4 className="text-title-lg font-bold text-deep-green mb-5 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">groups</span>
                                  Contact First
                              </h4>
      <div className="space-y-3">
      <div className="bg-background p-4 rounded-lg border border-border-subtle flex items-center justify-between hover:border-primary/50 transition-colors">
      <div>
      <div className="font-bold text-body-md text-deep-green">Marc-Andre G.</div>
      <div className="text-label-xs text-text-muted">98% Lead Confidence</div>
      </div>
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold">HOT</span>
      </div>
      <div className="bg-background p-4 rounded-lg border border-border-subtle flex items-center justify-between hover:border-primary/50 transition-colors">
      <div>
      <div className="font-bold text-body-md text-deep-green">Elena Rodriguez</div>
      <div className="text-label-xs text-text-muted">95% Lead Confidence</div>
      </div>
      <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold">HOT</span>
      </div>
      </div>
      </div>
      <div className="bg-white rounded-xl p-6 border border-border-subtle custom-shadow">
      <h4 className="text-title-lg font-bold text-deep-green mb-5 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">trending_up</span>
                                  Cross-sell Ops
                              </h4>
      <div className="space-y-3">
      <div className="bg-background p-4 rounded-lg border border-border-subtle flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer group">
      <div>
      <div className="font-bold text-body-md text-deep-green">Critical Illness</div>
      <div className="text-label-xs text-text-muted">4 Matches Identified</div>
      </div>
      <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
      </div>
      <div className="bg-background p-4 rounded-lg border border-border-subtle flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer group">
      <div>
      <div className="font-bold text-body-md text-deep-green">Retirement Plan</div>
      <div className="text-label-xs text-text-muted">2 High-NW Matches</div>
      </div>
      <span className="material-symbols-outlined text-primary text-[20px] group-hover:translate-x-1 transition-transform">chevron_right</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Rail */}
      <div className="w-full lg:w-80 space-y-gutter">
      {/* Today's Agenda (Timeline) */}
      <section className="bg-white rounded-xl border border-border-subtle custom-shadow p-6">
      <h3 className="text-title-lg font-bold text-deep-green mb-6">Today's Agenda</h3>
      <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-border-subtle">
      {/* Event 1 */}
      <div className="relative">
      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></span>
      <div className="mb-3">
      <div className="text-label-xs text-text-muted font-bold">11:00 AM - 12:00 PM</div>
      <div className="font-bold text-body-md text-deep-green mt-0.5">Tremblay Renewal Meeting</div>
      <div className="text-myday-label-sm text-primary flex items-center gap-1 mt-1">
      <span className="material-symbols-outlined text-[16px]">videocam</span> Virtual
                                      </div>
      </div>
      <div className="flex gap-2">
      <button className="bg-primary text-white px-3 py-1 rounded text-[11px] font-bold hover:opacity-90">Copilot</button>
      <button className="border border-primary text-primary px-3 py-1 rounded text-[11px] font-bold hover:bg-primary/5">720</button>
      </div>
      </div>
      {/* Event 2 */}
      <div className="relative">
      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-border-subtle ring-4 ring-white"></span>
      <div className="mb-1">
      <div className="text-label-xs text-text-muted font-bold">02:00 PM - 02:45 PM</div>
      <div className="font-bold text-body-md text-deep-green mt-0.5">Team Quarterly Review</div>
      </div>
      </div>
      {/* Event 3 */}
      <div className="relative">
      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-border-subtle ring-4 ring-white"></span>
      <div className="mb-1">
      <div className="text-label-xs text-text-muted font-bold">04:30 PM - 05:00 PM</div>
      <div className="font-bold text-body-md text-deep-green mt-0.5">Proposal Walkthrough: Chen</div>
      </div>
      </div>
      </div>
      </section>
      {/* Performance Progress */}
      <section className="bg-white rounded-xl border border-border-subtle custom-shadow p-6">
      <h3 className="text-label-xs text-text-muted uppercase tracking-widest font-bold mb-5">Performance Progress</h3>
      <div className="space-y-6">
      <div>
      <div className="flex justify-between text-myday-label-sm mb-2">
      <span className="text-deep-green">Sales Target</span>
      <span className="font-bold text-primary">82%</span>
      </div>
      <div className="w-full bg-background rounded-full h-1.5 border border-border-subtle">
      <div className="bg-primary h-full rounded-full" style={{ width: "82%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-myday-label-sm mb-2">
      <span className="text-deep-green">Calls Logged</span>
      <span className="font-bold text-primary">14/20</span>
      </div>
      <div className="w-full bg-background rounded-full h-1.5 border border-border-subtle">
      <div className="bg-primary h-full rounded-full" style={{ width: "70%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-myday-label-sm mb-2">
      <span className="text-deep-green">Meetings Confirmed</span>
      <span className="font-bold text-primary">92%</span>
      </div>
      <div className="w-full bg-background rounded-full h-1.5 border border-border-subtle">
      <div className="bg-primary h-full rounded-full" style={{ width: "92%" }}></div>
      </div>
      </div>
      </div>
      </section>
      {/* Notifications Panel */}
      <section className="bg-white rounded-xl border border-border-subtle custom-shadow overflow-hidden">
      <div className="px-5 py-4 bg-background border-b border-border-subtle">
      <h3 className="text-myday-label-sm font-bold text-deep-green">Recent Alerts</h3>
      </div>
      <div className="divide-y divide-border-subtle">
      <div className="p-5 hover:bg-background transition-colors cursor-pointer">
      <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
      <div>
      <p className="text-myday-label-sm text-deep-green">Proposal viewed by <strong className="font-bold">Jean-Pierre</strong></p>
      <p className="text-[10px] text-text-muted font-medium mt-1">4 mins ago</p>
      </div>
      </div>
      </div>
      <div className="p-5 hover:bg-background transition-colors cursor-pointer">
      <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
      <div>
      <p className="text-myday-label-sm text-deep-green">Compliance approved for <strong className="font-bold">Wong Policy</strong></p>
      <p className="text-[10px] text-text-muted font-medium mt-1">1 hour ago</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Daily Summary */}
      <section className="bg-deep-green text-white rounded-xl p-6 custom-shadow">
      <h3 className="text-title-lg font-bold mb-3">Daily Forecast</h3>
      <p className="text-body-md text-white/80 mb-6 leading-relaxed">You have 4 tasks and 3 meetings remaining. Estimated EOD efficiency: <span className="text-primary font-bold">96%</span>.</p>
      <div className="p-4 bg-white/5 rounded-lg border border-white/10">
      <div className="text-label-xs text-white/60 mb-1 font-bold">Projected Commission</div>
      <div className="text-myday-headline-md font-bold text-white">$1,850.00</div>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
      {/* Contextual FAB (Only for Home/Dashboard/My Day) */}
      <div className="fixed bottom-8 right-8 group">
      <button className="bg-primary text-white h-14 w-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95 z-50">
      <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </button>
      <div className="absolute bottom-16 right-0 hidden group-hover:block w-48 space-y-2 py-2">
      <button className="w-full bg-white text-deep-green py-2.5 px-4 rounded-lg shadow-lg border border-border-subtle flex items-center justify-between hover:bg-background transition-colors">
      <span className="text-myday-label-sm font-bold">Ask Copilot</span>
      <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
      </button>
      <button className="w-full bg-white text-deep-green py-2.5 px-4 rounded-lg shadow-lg border border-border-subtle flex items-center justify-between hover:bg-background transition-colors">
      <span className="text-myday-label-sm font-bold">Quick Policy</span>
      <span className="material-symbols-outlined text-[18px] text-primary">note_add</span>
      </button>
      </div>
      </div>
    </div>
  );
}
