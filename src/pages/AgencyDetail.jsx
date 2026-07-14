import React from 'react';
import { Link } from 'react-router-dom';

const advisors = [
  { initials: 'MK', name: 'Michael Kovic', badge: 'Top Performer', badgeBg: 'bg-primary-fixed', badgeText: 'text-on-primary-fixed-variant', sales: '$245,000' },
  { initials: 'LR', name: 'Linda Rossi', badge: 'Active', badgeBg: 'bg-surface-container-highest', badgeText: 'text-on-surface-variant', sales: '$182,400' },
  { initials: 'JS', name: 'James Sterling', badge: 'On Probation', badgeBg: 'bg-error-container', badgeText: 'text-on-error-container', sales: '$42,000' },
  { initials: 'AW', name: 'Anita Wong', badge: 'Rising Star', badgeBg: 'bg-primary-fixed', badgeText: 'text-on-primary-fixed-variant', sales: '$168,900' },
];

const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const barHeights = ['40%', '55%', '65%', '80%', '75%', '95%'];
const barVals = ['$0.8M', '$0.9M', '$1.0M', '$1.1M', '$1.05M', '$1.2M'];

export default function AgencyDetail() {
  return (
    <div className="pt-6 pb-12 px-8 min-h-screen bg-surface-gray">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-[14px] text-on-surface-variant mb-6">
        <Link to="/dashboard" className="hover:text-primary cursor-pointer">District Performance</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <Link to="/agency-explorer" className="hover:text-primary cursor-pointer">Agency Explorer</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-primary font-semibold">Toronto West Hub</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-[32px] font-semibold text-on-surface mb-1">Agency Detail View — Toronto West Hub</h2>
          <div className="flex items-center text-[16px] text-on-surface-variant">
            <span className="material-symbols-outlined mr-2 text-active-green">person</span>
            Led by <span className="font-semibold text-on-surface ml-1">Sarah Jenkins</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 border border-outline px-4 py-2 rounded-lg text-[14px] hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg text-[14px] hover:bg-[#005228] transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">edit</span>
            <span>Manage Hub</span>
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Advisor Count', value: '34', trend: '+2', color: 'border-active-green', trendColor: 'text-active-green' },
          { label: 'Monthly Premium', value: '$1.2M', trend: '8%', color: 'border-primary', trendColor: 'text-active-green' },
          { label: 'Retention Rate', value: '94%', trend: '0%', color: 'border-[#3c674f]', trendColor: 'text-on-surface-variant' },
          { label: 'Compliance Score', value: '98.5%', trend: '+0.5', color: 'border-cta-coral', trendColor: 'text-active-green' },
        ].map(kpi => (
          <div key={kpi.label} className={`bg-white p-6 rounded-xl shadow-sm flex flex-col border-l-4 ${kpi.color}`}>
            <span className="text-[14px] text-on-surface-variant mb-2">{kpi.label}</span>
            <div className="flex items-end space-x-2">
              <span className="text-[40px] font-bold leading-tight text-on-surface">{kpi.value}</span>
              <span className={`font-semibold mb-2 flex items-center text-[14px] ${kpi.trendColor}`}>
                <span className="material-symbols-outlined text-[18px]">trending_up</span>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Advisor Roster */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-surface-variant flex justify-between items-center">
            <h3 className="text-[24px] font-semibold text-on-surface">Advisor Roster</h3>
            <span className="text-[14px] text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">34 Active Agents</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low text-[14px] text-on-surface-variant border-b border-surface-variant">
                <tr>
                  <th className="px-6 py-4 font-semibold">Agent Name</th>
                  <th className="px-4 py-4 font-semibold">Status</th>
                  <th className="px-4 py-4 font-semibold">YTD Sales</th>
                  <th className="px-4 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[16px] divide-y divide-surface-variant">
                {advisors.map(a => (
                  <tr key={a.name} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-[#beedcf] text-[#244f39] flex items-center justify-center font-bold text-xs">{a.initials}</div>
                      <span className="font-semibold">{a.name}</span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`${a.badgeBg} ${a.badgeText} px-2 py-1 rounded text-xs font-bold uppercase tracking-wider`}>{a.badge}</span>
                    </td>
                    <td className="px-4 py-4 font-medium text-on-surface">{a.sales}</td>
                    <td className="px-4 py-4 text-right">
                      <button className="text-primary font-semibold hover:underline text-[14px]">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-auto p-4 bg-surface-container-low text-center">
            <button className="text-[14px] font-bold text-primary hover:text-[#005228] transition-colors uppercase tracking-widest">
              View All 34 Advisors
            </button>
          </div>
        </div>

        {/* AI Insight */}
        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border-l-4 border-active-green flex flex-col relative overflow-hidden flex-grow">
            <div className="absolute -right-10 -top-10 opacity-10">
              <span className="material-symbols-outlined text-[120px] text-active-green">psychology</span>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-container text-white rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <h4 className="text-[20px] font-semibold text-on-surface">AI Strategic Insight</h4>
            </div>
            <p className="text-[16px] text-on-surface-variant leading-relaxed mb-6">
              "This agency is currently <span className="text-active-green font-bold text-lg">4% above</span> the district average for life insurance renewals. Recommend sharing Sarah's retention strategy with the Mississauga branch to optimize regional performance."
            </p>
            <div className="mt-auto flex flex-col space-y-3">
              <button className="bg-active-green text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-primary transition-all active:scale-95 shadow-md">
                <span className="material-symbols-outlined">share</span>
                <span>Share Strategy</span>
              </button>
              <button className="text-on-surface-variant font-semibold py-2 text-[14px] hover:text-primary transition-colors">
                Dismiss Insight
              </button>
            </div>
          </div>
          <div className="bg-sidebar-bg p-6 rounded-xl text-white relative group overflow-hidden">
            <span className="text-[14px] text-white/70 uppercase tracking-widest font-bold">Upcoming Review</span>
            <h5 className="text-[20px] font-semibold mt-1">Sarah Jenkins Q3</h5>
            <p className="text-[16px] text-white/60 mt-2">Scheduled for Oct 14th, 2023</p>
            <button className="mt-4 flex items-center space-x-2 text-active-green font-bold">
              <span>Prepare Brief</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Growth & Retention Charts */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[24px] font-semibold text-on-surface">Growth &amp; Retention Trends</h3>
          <div className="flex items-center space-x-2 text-[14px] bg-surface-container p-1 rounded-lg">
            <button className="px-4 py-1.5 rounded-md bg-white shadow-sm font-semibold text-primary">6 Months</button>
            <button className="px-4 py-1.5 rounded-md hover:bg-white/50 text-on-surface-variant">1 Year</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Premium Trend Bar Chart */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[14px] text-on-surface-variant">Monthly Premium Hub Growth</p>
                <h4 className="text-[20px] font-semibold">$1.2M Total</h4>
              </div>
              <p className="text-active-green font-bold text-[14px]">+8.2% vs Prev</p>
            </div>
            <div className="h-64 w-full relative flex items-end justify-between px-2 pt-8 gap-2">
              {barHeights.map((h, i) => (
                <div key={i} className={`flex-1 ${i === 5 ? 'bg-active-green' : 'bg-surface-container hover:bg-primary/20'} transition-colors rounded-t-lg relative group`} style={{ height: h }}>
                  <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold ${i === 5 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} whitespace-nowrap`}>{barVals[i]}</span>
                  {i === 5 && <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Current</div>}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Retention Line Chart */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[14px] text-on-surface-variant">Advisor Retention Trend</p>
                <h4 className="text-[20px] font-semibold">94% Avg</h4>
              </div>
              <p className="text-primary font-bold text-[14px]">Stable</p>
            </div>
            <div className="h-64 w-full relative flex items-end justify-between pt-8 group cursor-crosshair">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                <defs>
                  <linearGradient id="gradient-green" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00A758', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#00A758', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M0 40 Q 66 35, 133 45 T 266 20 T 400 30" fill="none" stroke="#00A758" strokeLinecap="round" strokeWidth="3" />
                <path d="M0 40 Q 66 35, 133 45 T 266 20 T 400 30 V 100 H 0 Z" fill="url(#gradient-green)" opacity="0.1" />
              </svg>
              <div className="absolute left-0 top-1/2 border-t border-dashed border-outline-variant w-full opacity-20"></div>
            </div>
            <div className="flex justify-between mt-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
