import React from 'react';
import { Link } from 'react-router-dom';

const matrixData = [
  { agency: 'Toronto West', leader: 'Sarah Jenkins', rev: 104, revColor: 'bg-active-green', revTextColor: 'text-active-green', recruit: '92%', compliance: '98.4', risk: 'Low', riskBg: 'bg-green-100', riskText: 'text-green-700' },
  { agency: 'Toronto North', leader: 'Michael Chen', rev: 98, revColor: 'bg-active-green', revTextColor: 'text-on-surface', recruit: '115%', compliance: '96.2', risk: 'Low', riskBg: 'bg-green-100', riskText: 'text-green-700' },
  { agency: 'Mississauga', leader: 'Elena Rodriguez', rev: 89, revColor: 'bg-primary', revTextColor: 'text-on-surface', recruit: '82%', compliance: '91.0', risk: 'Med', riskBg: 'bg-yellow-100', riskText: 'text-yellow-700' },
  { agency: 'Oakville', leader: 'David Thompson', rev: 112, revColor: 'bg-active-green', revTextColor: 'text-active-green', recruit: '105%', compliance: '99.1', risk: 'Low', riskBg: 'bg-green-100', riskText: 'text-green-700' },
  { agency: 'Brampton', leader: 'Marcus Vane', rev: 74, revColor: 'bg-cta-coral', revTextColor: 'text-cta-coral', recruit: '68%', compliance: '84.5', risk: 'High', riskBg: 'bg-red-100', riskText: 'text-red-700', isRisk: true },
];

export default function PerformanceMatrix() {
  return (
    <div className="pt-6 pb-12 px-4 md:px-8 grid grid-cols-12 gap-6 bg-background min-h-screen">
      {/* Header */}
      <div className="col-span-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4">
        <div>
          <nav className="flex text-[14px] text-outline-variant space-x-2 mb-1">
            <Link to="/dashboard" className="hover:text-primary">Districts</Link>
            <span>/</span>
            <span className="text-primary">Ontario Central</span>
          </nav>
          <h2 className="text-[24px] md:text-[32px] font-semibold text-on-surface">District Performance Matrix — Q3 2023</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-outline-variant rounded-lg text-[14px] hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-active-green text-white rounded-lg text-[14px] hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">download</span>
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Matrix Table + Risk Watchlist */}
      <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-6">
        {/* Matrix Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-surface-variant flex justify-between items-center bg-surface-bright">
            <span className="text-[14px] font-medium text-on-surface-variant uppercase tracking-wider">Agency Comparative View</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-active-green"></div>
                <span className="text-[12px] font-medium">On Track</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-cta-coral"></div>
                <span className="text-[12px] font-medium">Risk</span>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  {['Agency Name', 'Lead Leader', 'Revenue Target %', 'Recruitment Goal %', 'Compliance Index', 'AI Risk Rating'].map(h => (
                    <th key={h} className="px-6 py-4 text-[14px] font-medium text-on-surface-variant">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant">
                {matrixData.map(row => (
                  <tr key={row.agency} className={`hover:bg-surface-container-lowest transition-all duration-200 hover:translate-x-1 ${row.isRisk ? 'bg-red-50/30' : ''}`} style={{ transition: 'transform 0.2s ease-out, background-color 0.2s' }}>
                    <td className="px-6 py-5 font-bold text-primary">
                      <Link to="/agency-detail" className="hover:underline">{row.agency}</Link>
                    </td>
                    <td className="px-6 py-5 text-[16px]">{row.leader}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-surface-container h-2 rounded-full overflow-hidden">
                          <div className={`${row.revColor} h-full`} style={{ width: `${Math.min(row.rev, 100)}%` }}></div>
                        </div>
                        <span className={`text-[14px] font-bold ${row.revTextColor}`}>{row.rev}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-[14px]">{row.recruit}</td>
                    <td className={`px-6 py-5 text-[14px] ${row.isRisk ? 'text-cta-coral font-bold' : ''}`}>{row.compliance}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 ${row.riskBg} ${row.riskText} rounded-full text-[12px] font-bold`}>{row.risk}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Watchlist */}
        <div>
          <h3 className="text-[24px] font-semibold text-on-surface mb-4 flex items-center space-x-2">
            <span className="material-symbols-outlined text-cta-coral">warning</span>
            <span>Risk Watchlist</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cta-coral flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-[18px]">Brampton Branch</h4>
                    <p className="text-[14px] text-on-surface-variant italic">Critical Compliance &amp; Revenue Drop</p>
                  </div>
                  <span className="bg-red-50 text-cta-coral font-bold text-[12px] px-2 py-1 rounded">Urgent Intervention</span>
                </div>
                <p className="text-[16px] text-on-surface-variant mb-6">Trending 18% below district benchmark for compliance audits in the last 30 days. Revenue pipeline shows significant churn in middle-tier policies.</p>
              </div>
              <button className="w-full bg-cta-coral text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined">description</span>
                <span>Generate Recovery Plan</span>
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#fe7d67] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-[18px]">Mississauga North</h4>
                    <p className="text-[14px] text-on-surface-variant italic">Stagnant Recruitment Growth</p>
                  </div>
                  <span className="bg-orange-50 text-orange-700 font-bold text-[12px] px-2 py-1 rounded">Watch</span>
                </div>
                <p className="text-[16px] text-on-surface-variant mb-6">Recruitment goals are flatlining. Current candidate pipeline is 40% smaller than previous quarter, risking 2024 scale targets.</p>
              </div>
              <button className="w-full bg-[#fe7d67] text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined">description</span>
                <span>Generate Recovery Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6">
        {/* Top Performer */}
        <div className="bg-sidebar-bg text-white rounded-xl p-6 overflow-hidden relative group">
          <div className="absolute -right-4 -top-4 opacity-20 group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[120px] material-symbols-filled">workspace_premium</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-active-green text-[14px] font-medium uppercase tracking-widest mb-4">Top Performer Q3</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 rounded-full border-2 border-active-green p-1">
                <img className="w-full h-full object-cover rounded-full" alt="David Thompson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQCm4-mhJZA0euEZnXGoSopbIlfEhxPTUjnnnu4xBRk70H1STvoMRf7tkxguICAJN1v9wVsuFNJz8bdq4rYC88-j97R_8_duVC1Z4oudXZrXKaC8VWO1Ezfja7oFP0lDwwcWEwbZLDCDsdwjx9tzKJ2cm28yxB5_d2K6d4yXmz2dmLla1MAwfJpJCkhEOoi9wQoS0-Yh3C0ByFCyjdRA9nduwBYT09nE9LGlSGaN_3zhAZ2t1iEd09I23TJCgyhWDj2dKGt75NCzgM" />
              </div>
              <div>
                <p className="font-bold text-[24px]">Oakville</p>
                <p className="text-[14px] text-outline-variant">David Thompson</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-outline-variant">Quarterly Growth</span>
                <span className="text-active-green font-bold text-[18px]">+22.4%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full">
                <div className="bg-active-green h-full rounded-full w-[88%]"></div>
              </div>
            </div>
            <button className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[14px] font-bold transition-all border border-white/10">View Strategy</button>
          </div>
        </div>

        {/* AI Copilot Mini */}
        <div className="bg-[rgba(190,237,207,0.15)] rounded-xl p-6 border border-primary-container/20 flex flex-col backdrop-blur-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined material-symbols-filled">auto_awesome</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">AI Copilot</p>
              <p className="text-[12px] text-primary">District Summary Active</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/50 p-4 rounded-lg border border-white/80">
              <p className="text-[16px] text-on-surface-variant leading-relaxed">
                Across the district, recruitment is up <span className="text-primary font-bold">12% YoY</span>, but the <span className="text-cta-coral font-bold">Brampton branch</span> is seeing a dip in compliance audit completions.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-[14px] font-bold text-on-surface uppercase tracking-tight">Suggested Actions</p>
              <ul className="space-y-3">
                {[
                  { icon: 'chat_bubble', text: 'Draft feedback for Marcus Vane (Brampton)' },
                  { icon: 'schedule', text: 'Schedule District Audit Review' },
                  { icon: 'trending_up', text: "Apply Oakville's Sales Playbook to Mississauga" },
                ].map(a => (
                  <li key={a.text} className="flex items-start space-x-3 group cursor-pointer">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 group-hover:scale-110 transition-transform">{a.icon}</span>
                    <span className="text-[14px] text-on-surface-variant group-hover:text-primary transition-colors">{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-primary-container/10">
              <div className="flex items-center justify-between text-[11px] text-outline-variant font-medium mb-2 uppercase">
                <span>Matrix Analysis Confidence</span>
                <span>94%</span>
              </div>
              <div className="w-full bg-primary-container/10 h-1 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 relative">
            <input className="w-full bg-white border border-primary-container/20 rounded-xl py-3 px-4 pr-12 text-[14px] shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Ask follow up questions..." type="text" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary p-1 hover:bg-primary-container/10 rounded-lg transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </aside>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-cta-coral text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined text-[32px]">add</span>
      </button>
    </div>
  );
}
