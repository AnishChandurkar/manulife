import { useState } from 'react';
import { candidates as candidateRecords } from '../data/mockData';

const funnelStages = [
  { label: 'Total Leads', count: 2840, width: '100%', color: 'bg-sidebar-bg', pct: '100%' },
  { label: 'Contacted', count: 1920, width: '67%', color: 'bg-primary', pct: '67.6%' },
  { label: 'Interviewed', count: 890, width: '45%', color: 'bg-primary-container', pct: '31.3%' },
  { label: 'Offer Extended', count: 312, width: '25%', color: 'bg-[#6f9b80]', pct: '11.0%' },
  { label: 'Hired', count: 85, width: '12%', color: 'bg-active-green', pct: '3.0%' },
];

const candidates = candidateRecords.map((candidate, index) => ({ ...candidate, source: ['LinkedIn', 'Referral', 'University', 'Job Board'][index % 4], rating: (4 + (index % 10) / 10).toFixed(1), date: `Oct ${18 - index}` }));

const stageBadge = (stage) => {
  const map = {
    'Contacted': 'bg-surface-container text-on-surface-variant',
    'Interview': 'bg-yellow-100 text-yellow-700',
    'Offer': 'bg-primary-container/20 text-primary',
    'Onboarded': 'bg-green-100 text-green-700',
  };
  return map[stage] || 'bg-surface-container text-on-surface-variant';
};

export default function RecruitmentAnalytics() {
  const [selected, setSelected] = useState(null);
  const [actionSent, setActionSent] = useState(false);
  return (
    <div className="p-8 bg-surface-gray min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-[32px] font-semibold text-on-surface">Recruitment Analytics</h2>
          <p className="text-[16px] text-on-surface-variant mt-1">Q3 2023 — Ontario Central District</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-outline-variant rounded-lg text-[14px] hover:bg-white transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            Q3 2023
          </button>
          <button className="px-4 py-2 bg-active-green text-white rounded-lg text-[14px] hover:bg-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Applicants', value: '2,840', change: '+18%', up: true },
          { label: 'Hired This Quarter', value: '85', change: '+6.2%', up: true },
          { label: 'Avg Time to Hire', value: '21 Days', change: '-3 days', up: true },
          { label: 'Conversion Rate', value: '3.0%', change: '-0.4%', up: false },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant">
            <p className="text-[14px] text-on-surface-variant">{kpi.label}</p>
            <p className="text-[28px] font-bold text-on-surface mt-2">{kpi.value}</p>
            <p className={`text-[13px] font-medium mt-1 flex items-center gap-1 ${kpi.up ? 'text-active-green' : 'text-cta-coral'}`}>
              <span className="material-symbols-outlined text-[14px]">{kpi.up ? 'trending_up' : 'trending_down'}</span>
              {kpi.change} vs last quarter
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Recruitment Funnel */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-xl shadow-sm p-6 border border-outline-variant">
          <h3 className="text-[24px] font-semibold text-on-surface mb-6">Recruitment Funnel</h3>
          <div className="space-y-4">
            {funnelStages.map((stage) => (
              <div key={stage.label}>
                <div className="flex justify-between items-center text-[13px] mb-2">
                  <span className="font-medium text-on-surface">{stage.label}</span>
                  <span className="text-on-surface-variant">{stage.count.toLocaleString()} ({stage.pct})</span>
                </div>
                <div className="flex justify-center">
                  <div className={`${stage.color} rounded-sm transition-all duration-700 h-10`} style={{ width: stage.width }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-outline-variant">
            <div className="flex justify-between text-[14px]">
              <span className="text-on-surface-variant">Overall Conversion</span>
              <span className="font-bold text-on-surface">3.0%</span>
            </div>
          </div>
        </div>

        {/* Candidate Pipeline Table */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h3 className="text-[24px] font-semibold text-on-surface">Active Candidates</h3>
            <button className="text-primary text-[14px] font-medium hover:underline">View All →</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  {['Candidate', 'Source', 'Stage', 'Rating', 'Last Contact'].map(h => (
                    <th key={h} className="px-6 py-4 text-[13px] font-medium text-on-surface-variant">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-variant">
                {candidates.map(c => (
                  <tr key={c.name} onClick={() => { setSelected(c); setActionSent(false); }} className="hover:bg-surface-container-lowest transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container font-bold text-xs">
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-semibold text-on-surface text-[14px]">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[14px] text-on-surface-variant">{c.source}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[12px] font-bold ${stageBadge(c.stage)}`}>{c.stage}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-[14px] font-medium text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        {c.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[14px] text-on-surface-variant">{c.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Source Breakdown */}
        <div className="col-span-12 bg-white rounded-xl shadow-sm p-6 border border-outline-variant">
          <h3 className="text-[24px] font-semibold text-on-surface mb-6">Candidate Sources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { source: 'LinkedIn', count: 1240, pct: 43, color: 'bg-[#0077B5]' },
              { source: 'Referrals', count: 680, pct: 24, color: 'bg-active-green' },
              { source: 'Job Boards', count: 540, pct: 19, color: 'bg-[#6f9b80]' },
              { source: 'University', count: 380, pct: 14, color: 'bg-cta-coral' },
            ].map(s => (
              <div key={s.source} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[14px]">
                  <span className="font-medium text-on-surface">{s.source}</span>
                  <span className="text-on-surface-variant">{s.count.toLocaleString()}</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-3">
                  <div className={`${s.color} h-full rounded-full`} style={{ width: `${s.pct}%` }}></div>
                </div>
                <span className="text-[13px] font-bold text-on-surface">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selected && <div className="fixed inset-0 bg-black/30 z-50 flex justify-end"><aside className="w-full max-w-md bg-white h-full p-7 shadow-2xl"><div className="flex justify-between items-start"><div><p className="text-primary text-sm font-semibold">Candidate detail</p><h3 className="text-2xl font-bold mt-1">{selected.name}</h3></div><button onClick={() => setSelected(null)} className="material-symbols-outlined">close</button></div><div className="mt-8 space-y-5"><div className="rounded-xl bg-primary/10 border border-primary/20 p-4"><p className="font-semibold">AI fit score: {Math.round(selected.rating * 20)}%</p><p className="text-sm mt-2">Strong alignment with the Ontario Central growth plan. Recommended next action: invite to the advisor career discovery session.</p></div><div className="text-sm space-y-2"><p><b>Stage:</b> {selected.stage}</p><p><b>Source:</b> {selected.source}</p><p><b>Last contact:</b> {selected.date}</p></div><button onClick={() => setActionSent(true)} className="bg-primary text-white px-5 py-3 rounded-lg font-semibold">Send recommended invite</button>{actionSent && <p className="text-primary font-semibold text-sm">Mock invitation sent and reminder scheduled.</p>}</div></aside></div>}
    </div>
  );
}
