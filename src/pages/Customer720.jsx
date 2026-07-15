import './Customer720.css';

export default function Customer720() {
  return (
    <div className="customer-720-root flex overflow-hidden">
      {/* SideNavBar (Persistent Deep Green) */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-secondary dark:bg-inverse-surface border-r border-outline-variant flex flex-col py-6 z-50">
      <div className="px-6 mb-10">
      <h1 className="font-headline-md text-headline-md font-bold text-on-primary">Agency Digital</h1>
      <p className="font-label-sm text-label-sm text-secondary-fixed opacity-70">Enterprise CRM</p>
      </div>
      <nav className="flex-1 space-y-1"><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">dashboard</span><span className="font-label-md text-label-md">Dashboard</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">calendar_today</span><span className="font-label-md text-label-md">My Day</span></a><a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg mx-2 opacity-90 transition-all" href="#"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person_search</span><span className="font-label-md text-label-md">Customer 720</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">groups</span><span className="font-label-md text-label-md">Meetings</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">auto_awesome</span><span className="font-label-md text-label-md">Proposal Intelligence</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">support_agent</span><span className="font-label-md text-label-md">Service Requests</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">workspace_premium</span><span className="font-label-md text-label-md">Rewards</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">palette</span><span className="font-label-md text-label-md">Content Studio</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">trending_up</span><span className="font-label-md text-label-md">My Performance</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">notifications</span><span className="font-label-md text-label-md">Notifications</span></a><a className="flex items-center gap-3 px-4 py-3 text-secondary-fixed hover:bg-on-secondary-fixed-variant rounded-lg mx-2 transition-colors duration-200" href="#"><span className="material-symbols-outlined">settings</span><span className="font-label-md text-label-md">Settings</span></a></nav>
      <div className="px-4 mt-auto">
      <button className="w-full bg-primary-container text-on-primary-container font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
      <span className="material-symbols-outlined">add</span>
                  New Policy
              </button>
      </div>
      </aside>
      {/* Main Content Shell */}
      <main className="ml-64 mr-80 flex-1 h-screen flex flex-col overflow-hidden">
      {/* TopNavBar */}
      <header className="flex justify-between items-center h-16 px-8 sticky top-0 bg-surface-container-lowest dark:bg-surface-dim border-b border-border-subtle shadow-sm z-30">
      <div className="flex items-center gap-4 flex-1">
      <div className="relative w-96">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full focus:ring-2 focus:ring-primary text-body-md" placeholder="Search clients, policies, or claims..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">notifications</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">help</span>
      <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
      <span className="material-symbols-outlined text-on-secondary-fixed text-sm">account_circle</span>
      </div>
      </div>
      </div>
      </header>
      {/* Content Canvas */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pb-32 space-y-8">
      {/* Header Section */}
      <section className="flex gap-8 items-start">
      <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white flex-shrink-0">
      <img className="w-full h-full object-cover" data-alt="A professional, high-end studio portrait of a French-Canadian man in his late 40s named Jean-Pierre Tremblay, smiling confidently. He wears a charcoal grey business suit and a crisp white shirt. The lighting is soft and flattering, with a modern, bright corporate aesthetic against a soft blurred office background with green plants. High-resolution photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0PW2DQ0ssw7yFoC_4tL4ecGe8TwaGAwTdPdTEBUkzy-xVUXWi6wSJxrEw3FmezNlKrpj_J57DIpO-nO2QH2Oycs2nSo9C8RTlpWGOJTBY9ys3Aq8IpkhGiRgQoBYcp30KtfZgzK9U5bn9f4uet3k1QcheUUGm99f35x-Hvncq_oVZXp6VEwy_9ktfZLQJzxY3jP7y86ZtPC2YCDzoLJ5d1AvAAmV16ko0X87CGCjBedPhEYXtlmB" />
      </div>
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
      <h2 className="font-display-lg text-[32px] text-text-primary">Jean-Pierre Tremblay</h2>
      <span className="px-3 py-1 bg-accent-amber-light text-tertiary font-label-sm rounded-full flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              VIP Platinum
                          </span>
      </div>
      <p className="font-body-lg text-text-muted mb-4">Senior Executive at Montreal Tech Solutions • Client since 2012</p>
      <div className="flex gap-6">
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined">mail</span>
      <span className="font-body-md">jp.tremblay@techsolutions.ca</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined">call</span>
      <span className="font-body-md">+1 (514) 555-0192</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined">location_on</span>
      <span className="font-body-md">Westmount, QC</span>
      </div>
      </div>
      </div>
      <div className="flex flex-col items-end gap-2">
      <div className="text-right">
      <p className="font-label-sm text-text-muted uppercase tracking-wider">Assigned Agent</p>
      <p className="font-title-lg text-primary">Sarah Jenkins</p>
      </div>
      <div className="flex -space-x-2 mt-2">
      {/* Household Avatars */}
      <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden">
      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw8MVf4a1Wd0UUzlRM3kmOZceVLmvPjyqCzpJ-_LtC-Izxfd7QC8h_bC5JAORBetWtSNhMwNkpmzusKCAhKWBa6SnN9R6FnNOnIdWJKm1IsvNG5_ClejLNcXGFRZzMFSje7Bk-WRBBUQMjGha9-u_qX275W7q9jQ_KtkVjxyXsgzwf63j7ATgLmpjKRE5qpMlNHqSf3Z_3KNCmDYadgG72K8z84KEKUQ9cB6Df9ConkSR9UOo3JdSb" />
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden">
      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnBZyMjrs45YEL0OoaFNCrJ2F2Kz-1DTJkT0vK9wstbWSaol1fKVDNuRFCzB6HSnIl6bM3dOpjpkkEHFmBdu5Y76P4AeZ-HkExamG0fNtlea3PFUobVFlfUpO7mCiH0kZ9Sha3GTjS4O5Is87gBvwxj0BPpVcpmKOcXoz5BU3KHtDYEvQqtM5TxnTj-VU85oCiW1ukus7wqLTKfMx2OOmeYp0xE7yMLk4XOudxdEtoBKMw1bSSmu" />
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container overflow-hidden">
      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJDvK52eHgEnaO-I8MSnIdjQWZXk4Gmr83gXWHm6pl1dgHGZOYWZgpMbUAGW-Ti6lkN7SVckkPjwlpfiT20YYL5CIK74orR29rp785dGV5NbYI5kxLW6e68EVqL7c_1h0S6ehZ8V23_J7zySq1xR64YHRBmAD8p9hRkXClLbUKbvBGgT2JeCkCpdCByZDxraioPUeJcCDx75iWi-AWO_wB3EqS4rRM7y1TxgEPlVUG3huqrN45Ya" />
      </div>
      <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-label-sm">+1</div>
      </div>
      </div>
      </section>
      {/* KPI Grid */}
      <section className="grid grid-cols-6 gap-4">
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-border-subtle hover:border-primary transition-colors">
      <p className="font-label-sm text-text-muted mb-1">CLV</p>
      <p className="font-headline-md text-text-primary">$425k</p>
      <div className="flex items-center gap-1 text-[12px] text-primary mt-2">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span className="">+12% vs LY</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Annual Premium</p>
      <p className="font-headline-md text-text-primary">$12.4k</p>
      <div className="w-full h-1 bg-surface-container rounded-full mt-3">
      <div className="w-[85%] h-full bg-primary rounded-full"></div>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Active Policies</p>
      <p className="font-headline-md text-text-primary">4</p>
      <p className="font-label-sm text-text-muted mt-2">Life, Health, Wealth</p>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Open Requests</p>
      <p className="font-headline-md text-error">3</p>
      <div className="flex items-center gap-1 text-[12px] text-error mt-2">
      <span className="material-symbols-outlined text-[14px]">warning</span>
      <span className="">High Priority</span>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Health Score</p>
      <p className="font-headline-md text-primary">92</p>
      <div className="w-full h-1 bg-surface-container rounded-full mt-3 overflow-hidden">
      <div className="w-[92%] h-full bg-primary rounded-full"></div>
      </div>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-primary/20 bg-primary/5">
      <p className="font-label-sm text-primary mb-1">AI Opportunity</p>
      <p className="font-headline-md text-primary">88</p>
      <div className="flex items-center gap-1 text-[12px] text-tertiary mt-2">
      <span className="material-symbols-outlined text-[14px]">bolt</span>
      <span className="">High Propensity</span>
      </div>
      </div>
      </section>
      {/* Main Body Grid: Timeline & Portfolio */}
      <div className="grid grid-cols-3 gap-8">
      {/* Left Column: Portfolio & Meeting History */}
      <div className="col-span-2 space-y-8">
      {/* Portfolio Table */}
      <div className="bg-surface-card rounded-2xl shadow-sm border border-border-subtle overflow-hidden">
      <div className="p-6 border-b border-border-subtle flex justify-between items-center">
      <h3 className="font-title-lg text-text-primary">Policy Portfolio</h3>
      <button className="text-primary font-label-md flex items-center gap-1 hover:underline">
                                  View All <span className="material-symbols-outlined">chevron_right</span>
      </button>
      </div>
      <table className="w-full text-left">
      <thead className="bg-surface-container-low text-text-muted font-label-sm">
      <tr>
      <th className="px-6 py-4">Policy #</th>
      <th className="px-6 py-4">Coverage</th>
      <th className="px-6 py-4">Premium</th>
      <th className="px-6 py-4">Renewal</th>
      <th className="px-6 py-4">Status</th>
      <th className="px-6 py-4 text-right">Action</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-border-subtle">
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="px-6 py-4 font-label-md">LF-882901</td>
      <td className="px-6 py-4">
      <p className="font-label-md">Term Life 20</p>
      <p className="text-[12px] text-text-muted">$1.5M Face Value</p>
      </td>
      <td className="px-6 py-4 text-body-md">$4,200/yr</td>
      <td className="px-6 py-4 text-body-md">Oct 2025</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[12px] rounded-full">Active</span>
      </td>
      <td className="px-6 py-4 text-right">
      <button className="px-4 py-2 bg-surface-container text-primary font-label-md rounded-lg hover:bg-primary hover:text-white transition-all">Open</button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors">
      <td className="px-6 py-4 font-label-md">CI-002931</td>
      <td className="px-6 py-4">
      <p className="font-label-md">Critical Illness</p>
      <p className="text-[12px] text-text-muted">$250k Coverage</p>
      </td>
      <td className="px-6 py-4 text-body-md">$2,100/yr</td>
      <td className="px-6 py-4 text-body-md">Jan 2025</td>
      <td className="px-6 py-4">
      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[12px] rounded-full">Active</span>
      </td>
      <td className="px-6 py-4 text-right">
      <button className="px-4 py-2 bg-surface-container text-primary font-label-md rounded-lg hover:bg-primary hover:text-white transition-all">Open</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Service History & Meeting History Tabs */}
      <div className="bg-surface-card rounded-2xl shadow-sm border border-border-subtle p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">radar</span>
      <h3 className="font-title-lg text-text-primary">Opportunity Radar</h3>
      </div>
      <span className="text-label-sm text-text-muted uppercase tracking-wider">AI-Driven Propensity</span>
      </div>
      <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
      <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex justify-between items-center">
      <div>
      <p className="font-label-md text-text-primary">Critical Illness Top-up</p>
      <p className="text-[12px] text-text-muted">Gap detected in current coverage</p>
      </div>
      <div className="text-right">
      <p className="font-bold text-primary">94%</p>
      <p className="text-[10px] text-text-muted uppercase">Confidence</p>
      </div>
      </div>
      <div className="p-4 bg-surface-container-low border border-border-subtle rounded-xl flex justify-between items-center">
      <div>
      <p className="font-label-md text-text-primary">Retirement Annuity</p>
      <p className="text-[12px] text-text-muted">Based on recent liquidity event</p>
      </div>
      <div className="text-right">
      <p className="font-bold text-tertiary">82%</p>
      <p className="text-[10px] text-text-muted uppercase">Confidence</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-surface-container-lowest rounded-xl border border-border-subtle p-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
      <div className="absolute inset-2 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute inset-6 border border-primary/30 rounded-full"></div>
      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
      <div className="absolute bottom-8 left-2 w-3 h-3 bg-tertiary rounded-full shadow-lg shadow-tertiary/50"></div>
      </div>
      <p className="mt-4 font-label-sm text-text-muted">Likelihood to Purchase: <span className="text-primary font-bold">High</span></p>
      </div>
      </div>
      <div className="mt-6 flex gap-3">
      <button className="flex-1 py-2 bg-primary text-white font-label-md rounded-lg hover:opacity-90 transition-opacity">Next Best Action: Send Quote</button>
      <button className="flex-1 py-2 border border-primary text-primary font-label-md rounded-lg hover:bg-primary/5 transition-colors">Review Analysis</button>
      </div>
      </div><div className="bg-surface-card rounded-2xl shadow-sm border border-border-subtle overflow-hidden">
      <div className="flex border-b border-border-subtle">
      <button className="flex-1 py-4 font-label-md text-primary border-b-2 border-primary">Meeting History</button>
      <button className="flex-1 py-4 font-label-md text-text-muted hover:bg-surface-container-low transition-colors">Service Requests</button>
      <button className="flex-1 py-4 font-label-md text-text-muted hover:bg-surface-container-low transition-colors">Documents</button>
      </div>
      <div className="p-0 overflow-x-auto">
      <table className="w-full text-left">
      <thead className="bg-surface-container-low text-text-muted font-label-sm">
      <tr>
      <th className="px-6 py-3">Date</th>
      <th className="px-6 py-3">Meeting Type</th>
      <th className="px-6 py-3">Advisor</th>
      <th className="px-6 py-3">AI Context</th>
      <th className="px-6 py-3 text-right">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-border-subtle">
      <tr className="hover:bg-surface-container-lowest cursor-pointer transition-colors">
      <td className="px-6 py-4 text-body-md whitespace-nowrap">Oct 12, 2023</td>
      <td className="px-6 py-4 font-label-md">Annual Review</td>
      <td className="px-6 py-4 text-body-md">James Peterson</td>
      <td className="px-6 py-4">
      <button className="text-primary font-label-sm flex items-center gap-1 hover:underline">
      <span className="material-symbols-outlined text-sm">auto_awesome</span> View Summary
                                              </button>
      </td>
      <td className="px-6 py-4 text-right">
      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] rounded-full uppercase font-bold">Completed</span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest cursor-pointer transition-colors">
      <td className="px-6 py-4 text-body-md whitespace-nowrap">Mar 15, 2023</td>
      <td className="px-6 py-4 font-label-md">Portfolio Rebalancing</td>
      <td className="px-6 py-4 text-body-md">James Peterson</td>
      <td className="px-6 py-4">
      <button className="text-primary font-label-sm flex items-center gap-1 hover:underline">
      <span className="material-symbols-outlined text-sm">auto_awesome</span> View Summary
                                              </button>
      </td>
      <td className="px-6 py-4 text-right">
      <span className="px-2 py-1 bg-accent-amber-light text-tertiary text-[10px] rounded-full uppercase font-bold">Follow-up Sent</span>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest cursor-pointer transition-colors">
      <td className="px-6 py-4 text-body-md whitespace-nowrap">Nov 02, 2022</td>
      <td className="px-6 py-4 font-label-md">Initial Discovery</td>
      <td className="px-6 py-4 text-body-md">James Peterson</td>
      <td className="px-6 py-4">
      <button className="text-primary font-label-sm flex items-center gap-1 hover:underline">
      <span className="material-symbols-outlined text-sm">auto_awesome</span> View Summary
                                              </button>
      </td>
      <td className="px-6 py-4 text-right">
      <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] rounded-full uppercase font-bold">Completed</span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Service Requests List */}
      <div className="bg-surface-card rounded-2xl shadow-sm border border-border-subtle p-6">
      <h3 className="font-title-lg text-text-primary mb-4">Open Service Requests</h3>
      <div className="space-y-3">
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-border-subtle">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-accent-amber-light flex items-center justify-center">
      <span className="material-symbols-outlined text-tertiary">person_edit</span>
      </div>
      <div>
      <p className="font-label-md text-text-primary">Beneficiary Change</p>
      <p className="text-[12px] text-text-muted">Sarah Jenkins (Ops) • 2 hours ago</p>
      </div>
      </div>
      <div className="flex items-center gap-6">
      <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-full uppercase">Medium</span>
      <span className="text-primary font-label-sm">In Progress</span>
      </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-border-subtle">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center">
      <span className="material-symbols-outlined text-error">account_balance_wallet</span>
      </div>
      <div>
      <p className="font-label-md text-text-primary">Policy Loan Inquiry</p>
      <p className="text-[12px] text-text-muted">Marc-André Roy • 1 day ago</p>
      </div>
      </div>
      <div className="flex items-center gap-6">
      <span className="px-3 py-1 bg-error-container text-error text-[10px] font-bold rounded-full uppercase">High</span>
      <span className="text-tertiary font-label-sm">Pending</span>
      </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-border-subtle opacity-75">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-on-secondary-container">home</span>
      </div>
      <div>
      <p className="font-label-md text-text-primary">Address Update</p>
      <p className="text-[12px] text-text-muted">System Auto • 1 week ago</p>
      </div>
      </div>
      <div className="flex items-center gap-6">
      <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded-full uppercase">Low</span>
      <span className="text-secondary font-label-sm">Completed</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Timeline & Communication */}
      <div className="space-y-8">
      {/* Customer Timeline */}
      <div className="bg-surface-card p-6 rounded-2xl shadow-sm border border-border-subtle">
      <h3 className="font-title-lg text-text-primary mb-6">Customer Timeline</h3>
      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-surface-container">
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-container flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">notifications</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Renewal Reminder Sent</p>
      <p className="text-body-md text-text-muted">AI Automated</p>
      </div>
      <p className="font-label-sm text-text-muted">Oct 24</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">groups</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Meeting Completed</p>
      <p className="text-body-md text-text-muted">Annual Review</p>
      </div>
      <p className="font-label-sm text-text-muted">Oct 12</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-tertiary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">description</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Proposal Generated</p>
      <p className="text-body-md text-text-muted">Whole Life Upgrade</p>
      </div>
      <p className="font-label-sm text-text-muted">Sep 28</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">check_circle</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Claim Submitted</p>
      <p className="text-body-md text-text-muted">Health Expense (Approved)</p>
      </div>
      <p className="font-label-sm text-text-muted">Aug 15</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent-amber-light flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-tertiary text-[12px]">cake</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Birthday Greeting Sent</p>
      </div>
      <p className="font-label-sm text-text-muted">Jun 12</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-on-secondary-container text-[12px]">shopping_cart</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Policy Purchased</p>
      <p className="text-body-md text-text-muted">Critical Illness</p>
      </div>
      <p className="font-label-sm text-text-muted">May 05</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-on-surface-variant text-[12px]">email</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-label-md text-text-primary">Email Sent</p>
      <p className="text-body-md text-text-muted">Market Update Newsletter</p>
      </div>
      <p className="font-label-sm text-text-muted">Mar 20</p>
      </div>
      </div>
      </div>
      </div>
      {/* Communication History */}
      <div className="bg-surface-card p-6 rounded-2xl shadow-sm border border-border-subtle">
      <h3 className="font-title-lg text-text-primary mb-6">Recent Interactions</h3>
      <div className="space-y-4">
      <div className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border-subtle">
      <span className="material-symbols-outlined text-primary mt-1">mail</span>
      <div className="flex-1">
      <div className="flex justify-between mb-1">
      <p className="font-label-md text-text-primary">Email (Yesterday, 2:45 PM)</p>
      <span className="text-[10px] text-primary font-bold uppercase">Delivered</span>
      </div>
      <p className="text-body-md text-text-muted">"Your Policy Renewal for LF-882901"</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border-subtle">
      <span className="material-symbols-outlined text-green-600 mt-1">chat</span>
      <div className="flex-1">
      <div className="flex justify-between mb-1">
      <p className="font-label-md text-text-primary">WhatsApp (3 days ago)</p>
      <span className="text-[10px] text-primary font-bold uppercase">Read</span>
      </div>
      <p className="text-body-md text-text-muted">"Quick question about beneficiaries"</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border-subtle">
      <span className="material-symbols-outlined text-primary mt-1">call</span>
      <div className="flex-1">
      <div className="flex justify-between mb-1">
      <p className="font-label-md text-text-primary">Phone Call (Oct 12, 2023)</p>
      <span className="text-[10px] text-text-muted">42 mins</span>
      </div>
      <p className="text-body-md text-text-muted">Annual Review Discussion</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 hover:bg-surface-container-low rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-border-subtle">
      <span className="material-symbols-outlined text-on-surface-variant mt-1">sms</span>
      <div className="flex-1">
      <div className="flex justify-between mb-1">
      <p className="font-label-md text-text-primary">SMS (Oct 10, 2023)</p>
      <span className="text-[10px] text-primary font-bold uppercase">Delivered</span>
      </div>
      <p className="text-body-md text-text-muted">"Reminder: Meeting tomorrow at 10 AM"</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl border border-primary/20">
      <span className="material-symbols-outlined text-primary mt-1">auto_awesome</span>
      <div className="flex-1">
      <div className="flex justify-between mb-1">
      <p className="font-label-md text-primary">AI Message (Oct 01, 2023)</p>
      <span className="text-[10px] text-primary font-bold uppercase">Sent</span>
      </div>
      <p className="text-body-md text-text-primary">Automated Portfolio Insights</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Household Relationship Map Section */}
      <section className="bg-surface-card p-8 rounded-2xl shadow-sm border border-border-subtle">
      <h3 className="font-title-lg text-text-primary mb-10">Household Relationship Map</h3>
      <div className="relative flex flex-col items-center">
      {/* Main Customer */}
      <div className="flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-primary-container shadow-xl">
      <img className="w-full h-full rounded-full object-cover border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0PW2DQ0ssw7yFoC_4tL4ecGe8TwaGAwTdPdTEBUkzy-xVUXWi6wSJxrEw3FmezNlKrpj_J57DIpO-nO2QH2Oycs2nSo9C8RTlpWGOJTBY9ys3Aq8IpkhGiRgQoBYcp30KtfZgzK9U5bn9f4uet3k1QcheUUGm99f35x-Hvncq_oVZXp6VEwy_9ktfZLQJzxY3jP7y86ZtPC2YCDzoLJ5d1AvAAmV16ko0X87CGCjBedPhEYXtlmB" />
      </div>
      <div className="mt-3 text-center">
      <p className="font-title-lg text-text-primary">Jean-Pierre Tremblay</p>
      <p className="font-label-sm text-primary uppercase">Primary Customer</p>
      </div>
      </div>
      {/* Connectors */}
      <div className="w-[80%] max-w-4xl h-16 border-x-2 border-t-2 border-border-subtle rounded-t-3xl mt-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-border-subtle"></div>
      </div>
      {/* Family Members Row */}
      <div className="flex justify-between w-full max-w-5xl">
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full p-0.5 bg-border-subtle shadow-md">
      <img className="w-full h-full rounded-full object-cover border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw8MVf4a1Wd0UUzlRM3kmOZceVLmvPjyqCzpJ-_LtC-Izxfd7QC8h_bC5JAORBetWtSNhMwNkpmzusKCAhKWBa6SnN9R6FnNOnIdWJKm1IsvNG5_ClejLNcXGFRZzMFSje7Bk-WRBBUQMjGha9-u_qX275W7q9jQ_KtkVjxyXsgzwf63j7ATgLmpjKRE5qpMlNHqSf3Z_3KNCmDYadgG72K8z84KEKUQ9cB6Df9ConkSR9UOo3JdSb" />
      </div>
      <div className="mt-2 text-center">
      <p className="font-label-md text-text-primary">Marie-Claude (52)</p>
      <p className="text-[12px] text-text-muted">Spouse</p>
      </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full p-0.5 bg-border-subtle shadow-md">
      <img className="w-full h-full rounded-full object-cover border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnBZyMjrs45YEL0OoaFNCrJ2F2Kz-1DTJkT0vK9wstbWSaol1fKVDNuRFCzB6HSnIl6bM3dOpjpkkEHFmBdu5Y76P4AeZ-HkExamG0fNtlea3PFUobVFlfUpO7mCiH0kZ9Sha3GTjS4O5Is87gBvwxj0BPpVcpmKOcXoz5BU3KHtDYEvQqtM5TxnTj-VU85oCiW1ukus7wqLTKfMx2OOmeYp0xE7yMLk4XOudxdEtoBKMw1bSSmu" />
      </div>
      <div className="mt-2 text-center">
      <p className="font-label-md text-text-primary">Luc (24)</p>
      <p className="text-[12px] text-text-muted">Son</p>
      </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full p-0.5 bg-border-subtle shadow-md">
      <img className="w-full h-full rounded-full object-cover border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJDvK52eHgEnaO-I8MSnIdjQWZXk4Gmr83gXWHm6pl1dgHGZOYWZgpMbUAGW-Ti6lkN7SVckkPjwlpfiT20YYL5CIK74orR29rp785dGV5NbYI5kxLW6e68EVqL7c_1h0S6ehZ8V23_J7zySq1xR64YHRBmAD8p9hRkXClLbUKbvBGgT2JeCkCpdCByZDxraioPUeJcCDx75iWi-AWO_wB3EqS4rRM7y1TxgEPlVUG3huqrN45Ya" />
      </div>
      <div className="mt-2 text-center">
      <p className="font-label-md text-text-primary">Sophie (21)</p>
      <p className="text-[12px] text-text-muted">Daughter</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Sticky Action Bar */}
      <footer className="fixed bottom-6 left-64 right-80 px-8 z-40">
      <div className="glass-panel border border-border-subtle shadow-2xl rounded-2xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
      <p className="font-label-md text-text-primary">Jean-Pierre is active. High propensity for Life Insurance upgrade detected.</p>
      </div>
      <div className="flex gap-3">
      <button className="px-5 py-2.5 border border-primary text-primary font-label-md rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-colors">Schedule Meeting</button>
      <button className="px-5 py-2.5 bg-secondary text-white font-label-md rounded-xl hover:opacity-90 shadow-md">Generate Proposal</button>
      <button className="px-5 py-2.5 bg-primary text-white font-label-md rounded-xl flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
      <span className="material-symbols-outlined">auto_awesome</span> Meeting Copilot
                      </button>
      <button className="px-5 py-2.5 border border-outline text-on-surface font-label-md rounded-xl hover:bg-surface-container transition-colors">Service Request</button>
      <button className="px-5 py-2.5 border border-primary/30 text-primary font-label-md rounded-xl hover:bg-primary/5 transition-colors">Send Message</button>
      </div>
      </div>
      </footer>
      </main>
      {/* NavigationDrawer (AI Copilot) */}
      <aside className="h-screen w-80 fixed right-0 top-0 bg-surface-container-low dark:bg-surface-container-high border-l border-outline-variant shadow-lg flex flex-col z-50">
      <div className="p-6 border-b border-border-subtle">
      <h2 className="font-headline-md text-headline-md text-primary">AI Copilot</h2>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Intelligent Insights</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
      {/* Chat context */}
      <div className="bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-2">Summary for Sarah (Agent)</p>
      <p className="text-body-md text-text-primary italic">"Jean-Pierre recently sold a rental property in Montreal. He likely has $200k+ in liquid capital for reinvestment."</p>
      </div>
      <div className="bg-surface-card p-4 rounded-xl shadow-sm border border-border-subtle">
      <p className="font-label-md text-text-primary mb-3 flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-sm">psychology</span>
              Strategic Intelligence
          </p>
      <ul className="space-y-3">
      <li className="flex gap-2 text-body-md text-text-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Recent mortgage renewal detected (Aug 2023).
              </li>
      <li className="flex gap-2 text-body-md text-text-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Liquidity event from property sale ($200k+).
              </li>
      <li className="flex gap-2 text-body-md text-text-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  Increased engagement with wealth newsletters.
              </li>
      </ul>
      </div><div className="bg-primary-container/10 p-4 rounded-xl border border-primary-container/30">
      <p className="font-label-md text-primary mb-2">Suggested Talking Points</p>
      <ul className="space-y-2">
      <li className="flex gap-2 text-body-md text-text-primary">
      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          Re-allocate real estate proceeds to Segregated Funds.
                      </li>
      <li className="flex gap-2 text-body-md text-text-primary">
      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                          Discuss tax-efficient estate transfer for children.
                      </li>
      </ul>
      </div><div className="grid grid-cols-2 gap-3">
      <div className="bg-surface-card p-3 rounded-xl border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Sentiment</p>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-green-600">sentiment_satisfied</span>
      <span className="font-label-md text-text-primary">Positive</span>
      </div>
      </div>
      <div className="bg-surface-card p-3 rounded-xl border border-border-subtle">
      <p className="font-label-sm text-text-muted mb-1">Churn Risk</p>
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">verified_user</span>
      <span className="font-label-md text-text-primary">Very Low</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-low p-3 rounded-xl border border-border-subtle">
      <p className="text-[12px] text-text-muted">Relationship health is optimal. High trust score based on 12-year tenure and consistent premium payments.</p>
      </div>
      {/* Conversation history placeholder */}
      <div className="flex flex-col gap-3">
      <div className="self-end bg-primary-container text-on-primary-container p-3 rounded-2xl rounded-tr-none max-w-[85%] text-body-md">
                      What's the best wealth product for him?
                  </div>
      <div className="self-start bg-surface-container-high p-3 rounded-2xl rounded-tl-none max-w-[85%] text-body-md shadow-sm">
                      Based on his 92/100 risk score, I recommend the <strong>Global Growth Portfolios</strong> with an Estate Protection rider.
                  </div>
      </div>
      </div>
      <div className="p-4 border-t border-border-subtle">
      <div className="relative mb-4">
      <input className="w-full pl-4 pr-12 py-3 bg-surface-container-lowest border-outline-variant rounded-xl focus:ring-primary text-body-md" placeholder="Ask Copilot anything..." type="text" />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-primary-container hover:text-white rounded-lg transition-colors">
      <span className="material-symbols-outlined">send</span>
      </button>
      </div>
      <div className="flex justify-between items-center px-2">
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">history</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">tune</span>
      </div>
      <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-semibold text-label-sm scale-[0.99] transition-transform">Ask Copilot</button>
      </div>
      </div>
      </aside>
    </div>
  );
}
