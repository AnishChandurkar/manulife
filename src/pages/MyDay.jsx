import { useEffect } from 'react';
import './MyDay.css';

export default function MyDay() {
  useEffect(() => {
    // Card hover micro-interaction (ported from the original inline script)
    const cards = document.querySelectorAll('.hover\\:bg-surface-container-lowest');

    const handleEnter = (e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.transition = 'all 0.2s ease-out';
    };
    const handleLeave = (e) => {
      e.currentTarget.style.transform = 'translateY(0)';
    };

    cards.forEach((card) => {
      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <div className="bg-background text-on-surface" style={{ cursor: "grabbing" }}>
      {/* Left Sidebar (SideNavBar) */}
      <aside className="h-screen w-64 fixed left-0 top-0 sidebar-gradient border-r border-outline-variant flex flex-col py-6 z-50">
      <div className="px-6 mb-10">
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">Agency Digital</h1>
      <p className="font-label-md text-label-md text-secondary-fixed opacity-70">Enterprise CRM</p>
      </div>
      <nav className="flex-1 space-y-1"><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg mx-2 opacity-90 transition-all" href="#">
      <span className="material-symbols-outlined">calendar_today</span>
      <span className="font-label-md text-label-md">My Day</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">person_search</span>
      <span className="font-label-md text-label-md">Customer 720</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">groups</span>
      <span className="font-label-md text-label-md">Meetings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">psychology</span>
      <span className="font-label-md text-label-md">Proposal Intelligence</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">support_agent</span>
      <span className="font-label-md text-label-md">Service Requests</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">workspace_premium</span>
      <span className="font-label-md text-label-md">Rewards</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">brush</span>
      <span className="font-label-md text-label-md">Content Studio</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">trending_up</span>
      <span className="font-label-md text-label-md">My Performance</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">notifications</span>
      <span className="font-label-md text-label-md">Notifications</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a></nav>
      <div className="px-4 mt-auto">
      <button className="w-full bg-primary py-3 px-4 rounded-xl text-on-primary font-label-md flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant transition-all">
      <span className="material-symbols-outlined">add_circle</span>
                      New Policy
                  </button>
      </div>
      </aside>
      {/* Main Workspace */}
      <main className="ml-64 min-h-screen">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-16 px-8 sticky top-0 bg-surface-container-lowest shadow-sm z-40 border-b border-border-subtle">
      <div className="flex items-center gap-8 flex-1">
      <div className="font-title-lg text-title-lg font-extrabold text-text-primary">Manulife Agency Digital</div>
      <div className="relative w-96 flex items-center bg-surface-container rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-primary transition-all">
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
      <input type="text" placeholder="Search customers, policies, or insights..." className="bg-transparent border-none focus:ring-0 text-body-md w-full ml-2" />
      </div>
      </div>
      <div className="flex items-center gap-6">
      <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors">
      <span className="material-symbols-outlined">help</span>
      </button>
      <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container">
      <img className="h-full w-full object-cover" data-alt="Professional corporate headshot of a financial advisor, James, mid-40s, friendly smile, clean-cut, wearing a modern business casual blazer. The background is a blurred high-end office environment with soft natural lighting, adhering to the clean Manulife Green aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJeYL0hJc_5IX7D35vzM-rcoRG-Z8pfRBXHJWKQDJrcvJjJbPfvnxgrmLzW2ts0q30mVd5Fxzn9aSGLxujxEHQd8x5KOWzUaFHSUZzy6f42dYTJXXV9pH7JFDWL7ENJPskzsETqQH-b7CIj9L1y4EZcuQfDE7pTqilP0JDEqgdY_hsAIP9i0fnHQn1rzyxkBMrW8v2N1UhTfOU0ZDFywXiUJTDq1JOGjq-dc71svpZqU5u5Xxztbh" />
      </div>
      </div>
      </header>
      {/* Content Area */}
      <div className="p-container-desktop">
      <div className="flex flex-col lg:flex-row gap-gutter">
      {/* Center/Left Column */}
      <div className="flex-1 space-y-gutter">
      {/* AI Morning Brief (Hero Card) */}
      <section className="bg-white rounded-xl shadow-lg p-6 border border-primary/20 relative overflow-hidden ai-glow">
      <div className="absolute top-0 right-0 p-4">
      <span className="flex items-center gap-1.5 bg-primary-container/10 text-primary-container px-3 py-1 rounded-full text-myday-label-sm">
      <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                                      Luminous AI Engine
                                  </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1">
      <h2 className="font-headline-md text-headline-md text-text-primary mb-2">Good morning, James.</h2>
      <p className="font-body-lg text-body-lg text-text-muted mb-6">Today's priority is the <span className="font-bold text-primary">Tremblay renewal meeting</span> at 11:00 AM and following up on 3 high-propensity critical illness leads.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-3 bg-surface-container rounded-lg">
      <div className="text-myday-label-sm text-text-muted mb-1">Premium Target</div>
      <div className="text-title-lg font-bold text-primary">82%</div>
      </div>
      <div className="p-3 bg-surface-container rounded-lg">
      <div className="text-myday-label-sm text-text-muted mb-1">Meetings Today</div>
      <div className="text-title-lg font-bold text-on-surface">6</div>
      </div>
      <div className="p-3 bg-surface-container rounded-lg">
      <div className="text-myday-label-sm text-text-muted mb-1">Renewals Due</div>
      <div className="text-title-lg font-bold text-tertiary">3</div>
      </div>
      <div className="p-3 bg-surface-container rounded-lg">
      <div className="text-myday-label-sm text-text-muted mb-1">Priority Leads</div>
      <div className="text-title-lg font-bold text-on-surface">2</div>
      </div>
      </div>
      </div>
      <div className="w-48 h-48 hidden md:block">

      </div>
      </div>
      </section>
      {/* KPI Row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-component-gap">
      <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-primary">check_circle</span>
      <span className="text-myday-label-sm text-primary">+2 from avg</span>
      </div>
      <div className="text-myday-display-lg font-display-lg text-on-surface leading-none mb-1">8/12</div>
      <div className="text-label-md text-text-muted">Tasks Completed</div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-secondary">payments</span>
      <span className="text-myday-label-sm text-secondary">On track</span>
      </div>
      <div className="text-myday-display-lg font-display-lg text-on-surface leading-none mb-1">$12.4k</div>
      <div className="text-label-md text-text-muted">Daily Premium</div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-primary-container">bolt</span>
      <span className="text-myday-label-sm text-primary-container">Peak Flow</span>
      </div>
      <div className="text-myday-display-lg font-display-lg text-on-surface leading-none mb-1">94</div>
      <div className="text-label-md text-text-muted">AI Productivity</div>
      </div>
      <div className="bg-white p-5 rounded-xl border border-border-subtle shadow-sm">
      <div className="flex justify-between items-start mb-2">
      <span className="material-symbols-outlined text-tertiary">stars</span>
      <span className="text-myday-label-sm text-tertiary">Gold tier</span>
      </div>
      <div className="text-myday-display-lg font-display-lg text-on-surface leading-none mb-1">150</div>
      <div className="text-label-md text-text-muted">Rewards Earned</div>
      </div>
      </section>
      {/* Prioritized Tasks Section */}
      <section className="bg-white rounded-xl border border-border-subtle shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border-subtle flex justify-between items-center">
      <h3 className="font-title-lg text-title-lg text-on-surface">Prioritized Tasks</h3>
      <button className="text-primary font-label-md hover:underline">View All</button>
      </div>
      <div className="divide-y divide-border-subtle">
      {/* Task 1 */}
      <div className="p-6 flex flex-col md:flex-row gap-4 hover:bg-surface-container-lowest transition-colors">
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
      <span className="font-bold text-body-lg">Luc Tremblay</span>
      <span className="text-myday-label-sm text-text-muted">#MNL-8829-22</span>
      <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">High Priority</span>
      </div>
      <p className="text-body-md text-text-muted mb-3 italic flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                                              AI Rec: High probability of upgrade to Premium Life based on recent mortgage update.
                                          </p>
      <div className="flex flex-wrap gap-2">
      <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-myday-label-sm hover:opacity-90 transition-all">Generate Proposal</button>
      <button className="border border-secondary text-secondary px-4 py-1.5 rounded-lg text-myday-label-sm hover:bg-secondary/5 transition-all">Open 720</button>
      <button className="text-text-muted px-4 py-1.5 rounded-lg text-myday-label-sm hover:text-on-surface">Mark Complete</button>
      </div>
      </div>
      </div>
      {/* Task 2 */}
      <div className="p-6 flex flex-col md:flex-row gap-4 hover:bg-surface-container-lowest transition-colors">
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
      <span className="font-bold text-body-lg">Sarah Chen</span>
      <span className="text-myday-label-sm text-text-muted">#MNL-7712-04</span>
      <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Renewal</span>
      </div>
      <p className="text-body-md text-text-muted mb-3 italic flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
                                              AI Rec: Offer 5% loyalty discount; historical pattern shows high retention with early contact.
                                          </p>
      <div className="flex flex-wrap gap-2">
      <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-myday-label-sm hover:opacity-90 transition-all">Call Customer</button>
      <button className="border border-secondary text-secondary px-4 py-1.5 rounded-lg text-myday-label-sm hover:bg-secondary/5 transition-all">Open 720</button>
      <button className="text-text-muted px-4 py-1.5 rounded-lg text-myday-label-sm hover:text-on-surface">Defer</button>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* AI Next Best Actions Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-component-gap">
      <div className="bg-surface-container-low rounded-xl p-6 border border-primary/10">
      <h4 className="font-title-lg text-title-lg text-text-primary mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">groups</span>
                                      Contact First
                                  </h4>
      <div className="space-y-3">
      <div className="bg-white p-3 rounded-lg border border-border-subtle flex items-center justify-between">
      <div>
      <div className="font-bold text-label-md">Marc-Andre G.</div>
      <div className="text-myday-label-sm text-text-muted">98% Lead Confidence</div>
      </div>
      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">HOT</span>
      </div>
      <div className="bg-white p-3 rounded-lg border border-border-subtle flex items-center justify-between">
      <div>
      <div className="font-bold text-label-md">Elena Rodriguez</div>
      <div className="text-myday-label-sm text-text-muted">95% Lead Confidence</div>
      </div>
      <span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full text-[10px] font-bold">HOT</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-low rounded-xl p-6 border border-tertiary/10">
      <h4 className="font-title-lg text-title-lg text-text-primary mb-4 flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary">trending_up</span>
                                      Cross-sell Ops
                                  </h4>
      <div className="space-y-3">
      <div className="bg-white p-3 rounded-lg border border-border-subtle flex items-center justify-between">
      <div>
      <div className="font-bold text-label-md">Critical Illness</div>
      <div className="text-myday-label-sm text-text-muted">4 Matches Identified</div>
      </div>
      <span className="material-symbols-outlined text-tertiary text-[20px]">chevron_right</span>
      </div>
      <div className="bg-white p-3 rounded-lg border border-border-subtle flex items-center justify-between">
      <div>
      <div className="font-bold text-label-md">Retirement Plan</div>
      <div className="text-myday-label-sm text-text-muted">2 High-NW Matches</div>
      </div>
      <span className="material-symbols-outlined text-tertiary text-[20px]">chevron_right</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Right Rail */}
      <div className="w-full lg:w-80 space-y-gutter">
      {/* Today's Agenda (Timeline) */}
      <section className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
      <h3 className="font-title-lg text-title-lg text-on-surface mb-6">Today's Agenda</h3>
      <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container">
      {/* Event 1 */}
      <div className="relative">
      <span className="absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-4 border-white shadow-sm"></span>
      <div className="mb-2">
      <div className="text-myday-label-sm text-text-muted">11:00 AM - 12:00 PM</div>
      <div className="font-bold text-body-md text-on-surface">Tremblay Renewal Meeting</div>
      <div className="text-myday-label-sm text-primary flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">videocam</span> Virtual
                                          </div>
      </div>
      <div className="flex gap-2">
      <button className="bg-primary/10 text-primary px-3 py-1 rounded text-[11px] font-bold hover:bg-primary/20">Copilot</button>
      <button className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-[11px] font-bold">720</button>
      </div>
      </div>
      {/* Event 2 */}
      <div className="relative">
      <span className="absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface-container border-4 border-white shadow-sm"></span>
      <div className="mb-2">
      <div className="text-myday-label-sm text-text-muted">02:00 PM - 02:45 PM</div>
      <div className="font-bold text-body-md text-on-surface">Team Quarterly Review</div>
      </div>
      </div>
      {/* Event 3 */}
      <div className="relative">
      <span className="absolute -left-[22px] top-1.5 w-3.5 h-3.5 rounded-full bg-surface-container border-4 border-white shadow-sm"></span>
      <div className="mb-2">
      <div className="text-myday-label-sm text-text-muted">04:30 PM - 05:00 PM</div>
      <div className="font-bold text-body-md text-on-surface">Proposal Walkthrough: Chen</div>
      </div>
      </div>
      </div>
      </section>
      {/* Performance Progress */}
      <section className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
      <h3 className="font-label-md text-label-md text-text-muted uppercase tracking-wider mb-4">Performance Progress</h3>
      <div className="space-y-5">
      <div>
      <div className="flex justify-between text-myday-label-sm mb-1.5">
      <span className="">Sales Target</span>
      <span className="font-bold">82%</span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-1.5">
      <div className="bg-primary h-1.5 rounded-full" style={{ width: "82%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-myday-label-sm mb-1.5">
      <span className="">Calls Logged</span>
      <span className="font-bold">14/20</span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-1.5">
      <div className="bg-secondary h-1.5 rounded-full" style={{ width: "70%" }}></div>
      </div>
      </div>
      <div>
      <div className="flex justify-between text-myday-label-sm mb-1.5">
      <span className="">Meetings Confirmed</span>
      <span className="font-bold">92%</span>
      </div>
      <div className="w-full bg-surface-container rounded-full h-1.5">
      <div className="bg-tertiary-container h-1.5 rounded-full" style={{ width: "92%" }}></div>
      </div>
      </div>
      </div>
      </section>
      {/* Notifications Panel */}
      <section className="bg-white rounded-xl border border-border-subtle shadow-sm overflow-hidden">
      <div className="p-4 bg-surface-container-low border-b border-border-subtle">
      <h3 className="font-label-md text-label-md text-on-surface">Recent Alerts</h3>
      </div>
      <div className="divide-y divide-border-subtle">
      <div className="p-4 hover:bg-surface-container-lowest transition-colors">
      <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
      <div>
      <p className="text-myday-label-sm text-on-surface">Proposal viewed by <strong>Jean-Pierre</strong></p>
      <p className="text-[10px] text-text-muted">4 mins ago</p>
      </div>
      </div>
      </div>
      <div className="p-4 hover:bg-surface-container-lowest transition-colors">
      <div className="flex gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
      <div>
      <p className="text-myday-label-sm text-on-surface">Compliance approved for <strong>Wong Policy</strong></p>
      <p className="text-[10px] text-text-muted">1 hour ago</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Daily Summary */}
      <section className="bg-primary text-on-primary rounded-xl p-6 shadow-lg">
      <h3 className="font-title-lg text-title-lg mb-2">Daily Forecast</h3>
      <p className="text-label-md opacity-90 mb-4">You have 4 tasks and 3 meetings remaining. Estimated EOD efficiency: 96%.</p>
      <div className="p-3 bg-white/10 rounded-lg border border-white/20">
      <div className="text-myday-label-sm mb-1">Projected Commission</div>
      <div className="text-headline-md font-bold">$1,850.00</div>
      </div>
      </section>
      </div>
      </div>
      </div>
      </main>
      {/* Contextual FAB (Only for Home/Dashboard/My Day) */}
      <div className="fixed bottom-8 right-8 group">
      <button className="bg-primary-container text-on-primary-container h-16 w-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50">
      <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
      </button>
      <div className="absolute bottom-20 right-0 hidden group-hover:block w-48 space-y-2">
      <button className="w-full bg-white text-on-surface py-3 px-4 rounded-xl shadow-lg border border-border-subtle flex items-center justify-between hover:bg-surface transition-colors">
      <span className="text-label-md">Ask Copilot</span>
      <span className="material-symbols-outlined text-[18px]">chat</span>
      </button>
      <button className="w-full bg-white text-on-surface py-3 px-4 rounded-xl shadow-lg border border-border-subtle flex items-center justify-between hover:bg-surface transition-colors">
      <span className="text-label-md">Quick Policy</span>
      <span className="material-symbols-outlined text-[18px]">note_add</span>
      </button>
      </div>
      </div>
    </div>
  );
}
