import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { customers } from '../data/mockData';
import './Customer720.css';

export default function Customer720() {
  const [searchParams] = useSearchParams();
  const customer = customers.find((item) => item.id === searchParams.get('customerId')) ?? customers[0];
  useEffect(() => {
    // Pulse any "auto_awesome" AI icons on mount (ported from the original inline script)
    const aiIcons = document.querySelectorAll('.material-symbols-outlined');
    const pulsed = [];

    aiIcons.forEach((icon) => {
      if (icon.textContent.includes('auto_awesome')) {
        icon.classList.add('animate-pulse');
        pulsed.push(icon);
      }
    });

    return () => pulsed.forEach((icon) => icon.classList.remove('animate-pulse'));
  }, []);

  return (
    <div className="customer-720-root flex overflow-hidden bg-background">
      {/* Sidebar/Topbar are provided globally by AppLayout for this route */}
      <main className="flex-1 h-screen flex flex-col overflow-hidden">
      {/* Content Canvas */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-40 md:pb-32 space-y-8">
      {/* Header Section */}
      <section className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-sm border border-outline-variant flex-shrink-0">
      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0PW2DQ0ssw7yFoC_4tL4ecGe8TwaGAwTdPdTEBUkzy-xVUXWi6wSJxrEw3FmezNlKrpj_J57DIpO-nO2QH2Oycs2nSo9C8RTlpWGOJTBY9ys3Aq8IpkhGiRgQoBYcp30KtfZgzK9U5bn9f4uet3k1QcheUUGm99f35x-Hvncq_oVZXp6VEwy_9ktfZLQJzxY3jP7y86ZtPC2YCDzoLJ5d1AvAAmV16ko0X87CGCjBedPhEYXtlmB"/>
      </div>
      <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
      <h2 className="text-3xl font-bold text-3xl font-bold text-on-surface">{customer.name}</h2>
      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px] material-symbols-filled">star</span>
                                  VIP Platinum
                              </span>
      </div>
      <p className="text-base text-on-surface-variant mb-4">Senior Executive at Montreal Tech Solutions • Client since 2012</p>
      <div className="flex flex-wrap gap-4 sm:gap-6">
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[18px]">mail</span>
      <span className="text-sm">jp.tremblay@techsolutions.ca</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[18px]">call</span>
      <span className="text-sm">+1 (514) 555-0192</span>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant">
      <span className="material-symbols-outlined text-[18px]">location_on</span>
      <span className="text-sm">Westmount, QC</span>
      </div>
      </div>
      </div>
      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4 sm:gap-2 w-full sm:w-auto justify-between sm:justify-start">
      <div className="text-left sm:text-right">
      <p className="text-xs text-on-surface-variant uppercase">Assigned Agent</p>
      <p className="text-lg font-semibold text-primary">Sarah Jenkins</p>
      </div>
      <div className="flex -space-x-2 mt-2">
      <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw8MVf4a1Wd0UUzlRM3kmOZceVLmvPjyqCzpJ-_LtC-Izxfd7QC8h_bC5JAORBetWtSNhMwNkpmzusKCAhKWBa6SnN9R6FnNOnIdWJKm1IsvNG5_ClejLNcXGFRZzMFSje7Bk-WRBBUQMjGha9-u_qX275W7q9jQ_KtkVjxyXsgzwf63j7ATgLmpjKRE5qpMlNHqSf3Z_3KNCmDYadgG72K8z84KEKUQ9cB6Df9ConkSR9UOo3JdSb"/>
      <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnBZyMjrs45YEL0OoaFNCrJ2F2Kz-1DTJkT0vK9wstbWSaol1fKVDNuRFCzB6HSnIl6bM3dOpjpkkEHFmBdu5Y76P4AeZ-HkExamG0fNtlea3PFUobVFlfUpO7mCiH0kZ9Sha3GTjS4O5Is87gBvwxj0BPpVcpmKOcXoz5BU3KHtDYEvQqtM5TxnTj-VU85oCiW1ukus7wqLTKfMx2OOmeYp0xE7yMLk4XOudxdEtoBKMw1bSSmu"/>
      <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJDvK52eHgEnaO-I8MSnIdjQWZXk4Gmr83gXWHm6pl1dgHGZOYWZgpMbUAGW-Ti6lkN7SVckkPjwlpfiT20YYL5CIK74orR29rp785dGV5NbYI5kxLW6e68EVqL7c_1h0S6ehZ8V23_J7zySq1xR64YHRBmAD8p9hRkXClLbUKbvBGgT2JeCkCpdCByZDxraioPUeJcCDx75iWi-AWO_wB3EqS4rRM7y1TxgEPlVUG3huqrN45Ya"/>
      <div className="w-9 h-9 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-sm font-semibold">+1</div>
      </div>
      </div>
      </section>
      {/* KPI Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant hover:border-primary transition-colors">
      <p className="text-xs text-on-surface-variant mb-1">CLV</p>
      <p className="text-2xl font-bold text-primary">$425k</p>
      <div className="flex items-center gap-1 text-[11px] text-primary mt-2">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span className="font-medium">+12% vs LY</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
      <p className="text-xs text-on-surface-variant mb-1">Annual Premium</p>
      <p className="text-2xl font-bold text-on-surface">$12.4k</p>
      <div className="w-full h-1 bg-outline-variant rounded-full mt-3">
      <div className="w-[85%] h-full bg-primary rounded-full"></div>
      </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
      <p className="text-xs text-on-surface-variant mb-1">Active Policies</p>
      <p className="text-2xl font-bold text-on-surface">4</p>
      <p className="text-xs text-on-surface-variant mt-2">Life, Health, Wealth</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
      <p className="text-xs text-on-surface-variant mb-1">Open Requests</p>
      <p className="text-2xl font-bold text-cta-coral">3</p>
      <div className="flex items-center gap-1 text-[11px] text-cta-coral mt-2">
      <span className="material-symbols-outlined text-[14px]">warning</span>
      <span className="font-medium">High Priority</span>
      </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
      <p className="text-xs text-on-surface-variant mb-1">Health Score</p>
      <p className="text-2xl font-bold text-primary">92</p>
      <div className="w-full h-1 bg-outline-variant rounded-full mt-3 overflow-hidden">
      <div className="w-[92%] h-full bg-primary rounded-full"></div>
      </div>
      </div>
      <div className="bg-primary/5 p-6 rounded-xl shadow-sm border border-primary/20">
      <p className="text-xs text-primary mb-1">AI Opportunity</p>
      <p className="text-2xl font-bold text-primary">88</p>
      <div className="flex items-center gap-1 text-[11px] text-primary mt-2">
      <span className="material-symbols-outlined text-[14px]">bolt</span>
      <span className="font-medium">High Propensity</span>
      </div>
      </div>
      </section>
      {/* Main Body Grid: Timeline & Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-8">
      {/* Portfolio Table */}
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
      <h3 className="text-lg font-semibold text-on-surface">Policy Portfolio</h3>
      <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                                      View All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left">
      <thead className="bg-background text-on-surface-variant text-sm font-semibold">
      <tr>
      <th className="px-6 py-4">Policy #</th>
      <th className="px-6 py-4">Coverage</th>
      <th className="px-6 py-4">Premium</th>
      <th className="px-6 py-4">Renewal</th>
      <th className="px-6 py-4">Status</th>
      <th className="px-6 py-4 text-right">Action</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      <tr className="hover:bg-primary/5 transition-colors group">
      <td className="px-6 py-5 text-sm font-semibold">LF-882901</td>
      <td className="px-6 py-5">
      <p className="text-sm font-semibold text-on-surface">Term Life 20</p>
      <p className="text-xs text-on-surface-variant">$1.5M Face Value</p>
      </td>
      <td className="px-6 py-5 text-sm">$4,200/yr</td>
      <td className="px-6 py-5 text-sm">Oct 2025</td>
      <td className="px-6 py-5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">Active</span>
      </td>
      <td className="px-6 py-5 text-right">
      <button className="px-4 py-1.5 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">Open</button>
      </td>
      </tr>
      <tr className="hover:bg-primary/5 transition-colors group">
      <td className="px-6 py-5 text-sm font-semibold">CI-002931</td>
      <td className="px-6 py-5">
      <p className="text-sm font-semibold text-on-surface">Critical Illness</p>
      <p className="text-xs text-on-surface-variant">$250k Coverage</p>
      </td>
      <td className="px-6 py-5 text-sm">$2,100/yr</td>
      <td className="px-6 py-5 text-sm">Jan 2025</td>
      <td className="px-6 py-5">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">Active</span>
      </td>
      <td className="px-6 py-5 text-right">
      <button className="px-4 py-1.5 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">Open</button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant p-6">
      <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">radar</span>
      <h3 className="text-lg font-semibold text-on-surface">Opportunity Radar</h3>
      </div>
      <span className="text-xs text-on-surface-variant uppercase tracking-wider">AI-Driven Propensity</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
      <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex justify-between items-center">
      <div>
      <p className="text-sm font-semibold text-on-surface">Critical Illness Top-up</p>
      <p className="text-xs text-on-surface-variant">Gap detected in current coverage</p>
      </div>
      <div className="text-right">
      <p className="font-bold text-primary text-2xl">94%</p>
      <p className="text-xs text-on-surface-variant uppercase">Confidence</p>
      </div>
      </div>
      <div className="p-4 bg-background border border-outline-variant rounded-xl flex justify-between items-center">
      <div>
      <p className="text-sm font-semibold text-on-surface">Retirement Annuity</p>
      <p className="text-xs text-on-surface-variant">Based on recent liquidity event</p>
      </div>
      <div className="text-right">
      <p className="font-bold text-primary text-2xl">82%</p>
      <p className="text-xs text-on-surface-variant uppercase">Confidence</p>
      </div>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-background rounded-xl border border-outline-variant p-6">
      <div className="relative w-28 h-28 flex items-center justify-center">
      <div className="absolute inset-0 border-4 border-primary/10 rounded-full"></div>
      <div className="absolute inset-2 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute inset-5 border border-primary/30 rounded-full"></div>
      <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
      <div className="absolute bottom-6 left-1 w-3 h-3 bg-primary/60 rounded-full shadow-lg"></div>
      </div>
      <p className="mt-4 text-sm font-semibold text-on-surface-variant">Likelihood to Purchase: <span className="text-primary font-bold">High</span></p>
      </div>
      </div>
      <div className="mt-8 flex gap-4">
      <button className="flex-1 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">Next Best Action: Send Quote</button>
      <button className="flex-1 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">Review Analysis</button>
      </div>
      </div>
      {/* History Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
      <div className="flex border-b border-outline-variant overflow-x-auto no-scrollbar">
      <button className="flex-1 min-w-[110px] px-3 py-4 text-xs sm:text-sm font-semibold text-primary border-b-2 border-primary whitespace-nowrap">Meeting History</button>
      <button className="flex-1 min-w-[110px] px-3 py-4 text-xs sm:text-sm font-semibold text-on-surface-variant hover:bg-background transition-colors whitespace-nowrap">Service Requests</button>
      <button className="flex-1 min-w-[110px] px-3 py-4 text-xs sm:text-sm font-semibold text-on-surface-variant hover:bg-background transition-colors whitespace-nowrap">Documents</button>
      </div>
      <div className="p-0 overflow-x-auto">
      <table className="w-full text-left">
      <thead className="bg-background text-on-surface-variant text-xs">
      <tr>
      <th className="px-6 py-3">Date</th>
      <th className="px-6 py-3">Meeting Type</th>
      <th className="px-6 py-3">Advisor</th>
      <th className="px-6 py-3">AI Context</th>
      <th className="px-6 py-3 text-right">Status</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      <tr className="hover:bg-primary/5 cursor-pointer transition-colors">
      <td className="px-6 py-4 text-sm">Oct 12, 2023</td>
      <td className="px-6 py-4 text-sm font-semibold">Annual Review</td>
      <td className="px-6 py-4 text-sm">James Peterson</td>
      <td className="px-6 py-4">
      <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
      <span className="material-symbols-outlined text-[16px]">auto_awesome</span> View Summary
                                                  </button>
      </td>
      <td className="px-6 py-4 text-right">
      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-bold uppercase">Completed</span>
      </td>
      </tr>
      <tr className="hover:bg-primary/5 cursor-pointer transition-colors">
      <td className="px-6 py-4 text-sm">Mar 15, 2023</td>
      <td className="px-6 py-4 text-sm font-semibold">Portfolio Rebalancing</td>
      <td className="px-6 py-4 text-sm">James Peterson</td>
      <td className="px-6 py-4">
      <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
      <span className="material-symbols-outlined text-[16px]">auto_awesome</span> View Summary
                                                  </button>
      </td>
      <td className="px-6 py-4 text-right">
      <span className="px-2 py-0.5 bg-cta-coral/10 text-cta-coral text-[10px] rounded-full font-bold uppercase">Follow-up Sent</span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Open Requests */}
      <div className="bg-white rounded-xl shadow-sm border border-outline-variant p-6">
      <h3 className="text-lg font-semibold text-on-surface mb-6">Open Service Requests</h3>
      <div className="space-y-3">
      <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-outline-variant">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary text-[20px]">person_edit</span>
      </div>
      <div>
      <p className="text-sm font-semibold text-on-surface">Beneficiary Change</p>
      <p className="text-xs text-on-surface-variant">Sarah Jenkins (Ops) • 2 hours ago</p>
      </div>
      </div>
      <div className="flex items-center gap-6">
      <span className="px-2 py-0.5 bg-outline-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase">Medium</span>
      <span className="text-primary text-sm font-semibold font-semibold">In Progress</span>
      </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-outline-variant">
      <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-cta-coral/10 flex items-center justify-center">
      <span className="material-symbols-outlined text-cta-coral text-[20px]">account_balance_wallet</span>
      </div>
      <div>
      <p className="text-sm font-semibold text-on-surface">Policy Loan Inquiry</p>
      <p className="text-xs text-on-surface-variant">Marc-André Roy • 1 day ago</p>
      </div>
      </div>
      <div className="flex items-center gap-6">
      <span className="px-2 py-0.5 bg-cta-coral/20 text-cta-coral text-[10px] font-bold rounded-full uppercase">High</span>
      <span className="text-on-surface-variant text-sm font-semibold">Pending</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Timeline & Communication */}
      <div className="space-y-8">
      {/* Customer Timeline */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant">
      <h3 className="text-lg font-semibold text-on-surface mb-8">Customer Timeline</h3>
      <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[1.5px] before:bg-outline-variant">
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">notifications</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="text-sm font-semibold text-on-surface">Renewal Reminder Sent</p>
      <p className="text-xs text-on-surface-variant">AI Automated</p>
      </div>
      <p className="text-xs text-on-surface-variant">Oct 24</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">groups</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="text-sm font-semibold text-on-surface">Meeting Completed</p>
      <p className="text-xs text-on-surface-variant">Annual Review</p>
      </div>
      <p className="text-xs text-on-surface-variant">Oct 12</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">description</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="text-sm font-semibold text-on-surface">Proposal Generated</p>
      <p className="text-xs text-on-surface-variant">Whole Life Upgrade</p>
      </div>
      <p className="text-xs text-on-surface-variant">Sep 28</p>
      </div>
      </div>
      <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 border-2 border-white">
      <span className="material-symbols-outlined text-white text-[12px]">check_circle</span>
      </div>
      <div className="flex justify-between items-start">
      <div>
      <p className="text-sm font-semibold text-on-surface">Claim Submitted</p>
      <p className="text-xs text-on-surface-variant">Health Expense</p>
      </div>
      <p className="text-xs text-on-surface-variant">Aug 15</p>
      </div>
      </div>
      </div>
      </div>
      {/* Communication History */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant">
      <h3 className="text-lg font-semibold text-on-surface mb-8">Recent Interactions</h3>
      <div className="space-y-4">
      <div className="flex items-start gap-3 p-3 hover:bg-background rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
      <span className="material-symbols-outlined text-primary text-[20px] mt-1">mail</span>
      <div className="flex-1">
      <div className="flex justify-between mb-0.5">
      <p className="text-sm font-semibold text-on-surface">Email (Yesterday)</p>
      <span className="text-[9px] text-primary font-bold uppercase">Delivered</span>
      </div>
      <p className="text-sm text-on-surface-variant line-clamp-1">"Your Policy Renewal for LF-882901"</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 hover:bg-background rounded-lg transition-colors cursor-pointer border border-transparent hover:border-outline-variant">
      <span className="material-symbols-outlined text-primary text-[20px] mt-1">chat</span>
      <div className="flex-1">
      <div className="flex justify-between mb-0.5">
      <p className="text-sm font-semibold text-on-surface">WhatsApp (3d ago)</p>
      <span className="text-[9px] text-primary font-bold uppercase">Read</span>
      </div>
      <p className="text-sm text-on-surface-variant line-clamp-1">"Quick question about beneficiaries"</p>
      </div>
      </div>
      <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
      <span className="material-symbols-outlined text-primary text-[20px] mt-1">auto_awesome</span>
      <div className="flex-1">
      <div className="flex justify-between mb-0.5">
      <p className="text-sm font-semibold text-primary">AI Message (Oct 01)</p>
      <span className="text-[9px] text-primary font-bold uppercase">Sent</span>
      </div>
      <p className="text-sm text-on-surface font-medium">Automated Portfolio Insights</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Household Map Section */}
      <section className="bg-white p-5 md:p-10 rounded-xl shadow-sm border border-outline-variant">
      <h3 className="text-lg font-semibold text-on-surface mb-12">Household Relationship Map</h3>
      <div className="relative flex flex-col items-center">
      <div className="flex flex-col items-center z-10">
      <div className="w-24 h-24 rounded-full p-1 bg-primary shadow-lg">
      <img className="w-full h-full rounded-full object-cover border-4 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0PW2DQ0ssw7yFoC_4tL4ecGe8TwaGAwTdPdTEBUkzy-xVUXWi6wSJxrEw3FmezNlKrpj_J57DIpO-nO2QH2Oycs2nSo9C8RTlpWGOJTBY9ys3Aq8IpkhGiRgQoBYcp30KtfZgzK9U5bn9f4uet3k1QcheUUGm99f35x-Hvncq_oVZXp6VEwy_9ktfZLQJzxY3jP7y86ZtPC2YCDzoLJ5d1AvAAmV16ko0X87CGCjBedPhEYXtlmB"/>
      </div>
      <div className="mt-4 text-center">
      <p className="text-lg font-semibold text-on-surface">Jean-Pierre Tremblay</p>
      <p className="text-xs text-primary uppercase font-bold tracking-tight">Primary Customer</p>
      </div>
      </div>
      <div className="w-[70%] h-16 border-x border-t border-outline-variant rounded-t-2xl mt-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-outline-variant"></div>
      </div>
      <div className="flex justify-between w-full max-w-4xl">
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full border-2 border-outline-variant p-0.5">
      <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw8MVf4a1Wd0UUzlRM3kmOZceVLmvPjyqCzpJ-_LtC-Izxfd7QC8h_bC5JAORBetWtSNhMwNkpmzusKCAhKWBa6SnN9R6FnNOnIdWJKm1IsvNG5_ClejLNcXGFRZzMFSje7Bk-WRBBUQMjGha9-u_qX275W7q9jQ_KtkVjxyXsgzwf63j7ATgLmpjKRE5qpMlNHqSf3Z_3KNCmDYadgG72K8z84KEKUQ9cB6Df9ConkSR9UOo3JdSb"/>
      </div>
      <div className="mt-2 text-center">
      <p className="text-sm font-semibold text-on-surface">Marie-Claude (52)</p>
      <p className="text-xs text-on-surface-variant">Spouse</p>
      </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full border-2 border-outline-variant p-0.5">
      <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfnBZyMjrs45YEL0OoaFNCrJ2F2Kz-1DTJkT0vK9wstbWSaol1fKVDNuRFCzB6HSnIl6bM3dOpjpkkEHFmBdu5Y76P4AeZ-HkExamG0fNtlea3PFUobVFlfUpO7mCiH0kZ9Sha3GTjS4O5Is87gBvwxj0BPpVcpmKOcXoz5BU3KHtDYEvQqtM5TxnTj-VU85oCiW1ukus7wqLTKfMx2OOmeYp0xE7yMLk4XOudxdEtoBKMw1bSSmu"/>
      </div>
      <div className="mt-2 text-center">
      <p className="text-sm font-semibold text-on-surface">Luc (24)</p>
      <p className="text-xs text-on-surface-variant">Son</p>
      </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
      <div className="w-16 h-16 rounded-full border-2 border-outline-variant p-0.5">
      <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJDvK52eHgEnaO-I8MSnIdjQWZXk4Gmr83gXWHm6pl1dgHGZOYWZgpMbUAGW-Ti6lkN7SVckkPjwlpfiT20YYL5CIK74orR29rp785dGV5NbYI5kxLW6e68EVqL7c_1h0S6ehZ8V23_J7zySq1xR64YHRBmAD8p9hRkXClLbUKbvBGgT2JeCkCpdCByZDxraioPUeJcCDx75iWi-AWO_wB3EqS4rRM7y1TxgEPlVUG3huqrN45Ya"/>
      </div>
      <div className="mt-2 text-center">
      <p className="text-sm font-semibold text-on-surface">Sophie (21)</p>
      <p className="text-xs text-on-surface-variant">Daughter</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Sticky Action Bar */}
      <footer className="fixed bottom-0 md:bottom-6 inset-x-0 md:inset-x-auto md:px-8 z-40">
      <div className="bg-white/95 md:bg-white/90 backdrop-blur-sm border-t md:border border-outline-variant shadow-xl md:rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-[24px] material-symbols-filled">bolt</span>
      <p className="text-sm font-semibold text-on-surface">High propensity for Life Insurance upgrade detected.</p>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar md:flex-wrap md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
      <button className="flex-shrink-0 px-5 py-2.5 border border-primary text-primary font-semibold text-sm font-semibold rounded-lg hover:bg-primary/5 transition-colors">Schedule Meeting</button>
      <button className="flex-shrink-0 px-5 py-2.5 bg-primary text-white font-semibold text-sm font-semibold rounded-lg hover:opacity-90">Generate Proposal</button>
      <button className="flex-shrink-0 px-5 py-2.5 bg-primary text-white font-semibold text-sm font-semibold rounded-lg flex items-center gap-2 hover:scale-[1.02] transition-transform">
      <span className="material-symbols-outlined text-[18px]">auto_awesome</span> Meeting Copilot
                          </button>
      <button className="flex-shrink-0 px-5 py-2.5 border border-outline-variant text-on-surface-variant font-semibold text-sm font-semibold rounded-lg hover:bg-background transition-colors">Send Message</button>
      </div>
      </div>
      </footer>
      </main>
      {/* AI Copilot is rendered globally by AppLayout for this route — no local duplicate here */}
    </div>
  );
}
