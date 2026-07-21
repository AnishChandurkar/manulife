import React from 'react';
import { Link } from 'react-router-dom';

const KPICard = ({ label, value, trend, trendPositive = true, highlight = false }) => (
  <div className={`bento-card flex flex-col justify-between ${highlight ? 'border-l-4 border-cta-coral' : ''}`}>
    <span className="text-[14px] font-medium text-on-surface-variant">{label}</span>
    <div className="flex items-end justify-between mt-2">
      <span className={`text-[40px] font-bold leading-tight ${highlight ? 'text-on-surface' : 'text-on-surface'}`}>{value}</span>
      {trend && (
        <span className={`text-sm flex items-center font-bold ${trendPositive ? 'text-active-green' : 'text-cta-coral'}`}>
          <span className="material-symbols-outlined text-sm">{trendPositive ? 'trending_up' : 'trending_down'}</span>
          {trend}
        </span>
      )}
    </div>
  </div>
);

export default function DistrictDashboard() {
  return (
    <div className="p-8 max-w-[1600px] mx-auto w-full flex flex-col gap-6">
      {/* KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <KPICard label="Total Agencies" value="12" trend="2" />
        <KPICard label="Total Advisors" value="420" trend="12%" />
        <KPICard label="District Revenue" value="$42.5M" trend="8.4%" />
        <KPICard label="Premium Collection" value="$18.2M" trend="5.1%" />
        <KPICard label="Recruitment" value="85" trend="New" highlight />
        <div className="bento-card flex flex-col justify-between bg-primary-container/5">
          <span className="text-[14px] font-medium text-on-surface-variant">AI Insights Score</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-[40px] font-bold leading-tight text-primary-container">94%</span>
            <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container text-sm">auto_awesome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Wide: Agency Performance Comparison */}
        <div className="col-span-12 lg:col-span-8 bento-card">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-[24px] font-semibold text-on-surface">Agency Performance Comparison</h3>
              <p className="text-[14px] font-medium text-on-surface-variant">Revenue and Retention across District Regions</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-surface-container px-4 py-2 rounded-lg text-[14px] font-medium hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">folder_open</span>Reports
              </button>
              <button className="bg-surface-container px-4 py-2 rounded-lg text-[14px] font-medium hover:bg-surface-container-highest transition-colors">Q3 2023</button>
              <button className="bg-primary-container text-white px-4 py-2 rounded-lg text-[14px] font-medium hover:opacity-90 transition-opacity">Export Report</button>
            </div>
          </div>
          {/* Chart */}
          <div className="relative h-64 flex items-end justify-around gap-4 px-4 pt-10">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 py-10">
              {[0,1,2,3].map(i => <div key={i} className="border-t border-on-surface h-0 w-full"></div>)}
            </div>
            {[
              { label: 'Toronto West', rev: '85%', ret: '70%' },
              { label: 'Toronto North', rev: '95%', ret: '80%' },
              { label: 'Mississauga', rev: '60%', ret: '55%' },
              { label: 'Oakville', rev: '75%', ret: '65%' },
              { label: 'Brampton', rev: '40%', ret: '42%' },
            ].map((agency) => (
              <div key={agency.label} className="group flex flex-col items-center gap-2 w-full">
                <div className="flex items-end gap-1 w-full h-48">
                  <div className="bg-primary-container w-1/2 rounded-t-sm transition-all duration-500 group-hover:opacity-90" style={{ height: agency.rev }}></div>
                  <div className="bg-[#6f9b80] w-1/2 rounded-t-sm transition-all duration-500 group-hover:opacity-90" style={{ height: agency.ret }}></div>
                </div>
                <span className="text-[11px] font-medium text-on-surface-variant truncate w-full text-center">{agency.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-container rounded-sm"></div>
              <span className="text-[14px] font-medium text-on-surface-variant">Revenue Target Achievement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#6f9b80] rounded-sm"></div>
              <span className="text-[14px] font-medium text-on-surface-variant">Retention Rate (%)</span>
            </div>
          </div>
        </div>

        {/* AI Predictive Insights */}
        <div className="col-span-12 lg:col-span-4 bento-card bg-[#eefaf3] border border-primary-container/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined material-symbols-filled">auto_awesome</span>
            </div>
            <h3 className="text-[24px] font-semibold text-on-surface">AI Predictive Insights</h3>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <span className="text-[14px] font-bold text-primary block mb-1">Growth Forecast</span>
              <p className="text-[16px] text-on-surface">District revenue projected to grow by <strong className="text-active-green">14.2%</strong> in Q4 based on current recruitment trends.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <span className="text-[14px] font-bold text-secondary block mb-1">Retention Risk</span>
              <p className="text-[16px] text-on-surface">High turnover probability detected in <strong className="text-secondary">Mississauga branch</strong>. Recommended intervention with Agency Leaders.</p>
            </div>
            <button className="w-full py-3 bg-primary-container text-white rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">lightbulb</span>
              Generate Full Strategy
            </button>
          </div>
        </div>

        {/* Recruitment Funnel */}
        <div className="col-span-12 lg:col-span-4 bento-card">
          <h3 className="text-[24px] font-semibold text-on-surface mb-6">Recruitment Funnel</h3>
          <div className="space-y-4">
            {[
              { label: 'Applications', count: '1,240', width: '100%', color: 'bg-primary-container' },
              { label: 'Interviews', count: '312', width: '75%', color: 'bg-primary-container/80' },
              { label: 'Offers', count: '142', width: '45%', color: 'bg-primary-container/60' },
              { label: 'Hired', count: '85', width: '25%', color: 'bg-cta-coral' },
            ].map(({ label, count, width, color }) => (
              <div key={label} className="relative w-full h-12 bg-surface-container rounded-lg overflow-hidden flex justify-center">
                <div className={`${color} transition-all duration-700 h-full`} style={{ width }}></div>
                <div className="absolute inset-0 z-10 flex justify-between items-center px-4 h-full text-white font-bold text-[14px]">
                  <span>{label}</span>
                  <span>{count}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-surface-container-low rounded-lg">
            <div className="flex justify-between items-center text-[14px] font-medium">
              <span className="text-on-surface-variant">Conversion Rate</span>
              <span className="font-bold text-on-surface">6.8%</span>
            </div>
          </div>
        </div>

        {/* Top Performing Agencies Table */}
        <div className="col-span-12 lg:col-span-8 bento-card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[24px] font-semibold text-on-surface">Top Performing Agencies</h3>
            <Link to="/agency-explorer" className="text-primary hover:underline text-[14px] font-medium">View All Agencies →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className="py-4 text-[14px] font-medium text-on-surface-variant">Agency Name</th>
                  <th className="py-4 text-[14px] font-medium text-on-surface-variant">Leader</th>
                  <th className="py-4 text-[14px] font-medium text-on-surface-variant">Target Achievement</th>
                  <th className="py-4 text-[14px] font-medium text-on-surface-variant">Growth Trend</th>
                  <th className="py-4 text-[14px] font-medium text-on-surface-variant text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { initials: 'TW', name: 'Toronto West Hub', leader: 'Sarah Jenkins', pct: 104, color: 'text-active-green', bgColor: 'bg-primary-container/10', fgColor: 'text-primary-container', barColor: 'bg-active-green', trend: '+12.4%', up: true },
                  { initials: 'TN', name: 'Toronto North', leader: 'Michael Chen', pct: 98, color: 'text-active-green', bgColor: 'bg-[#6f9b80]/10', fgColor: 'text-[#6f9b80]', barColor: 'bg-active-green', trend: '+8.2%', up: true },
                  { initials: 'OV', name: 'Oakville Elite', leader: 'Elena Rodriguez', pct: 82, color: 'text-cta-coral', bgColor: 'bg-cta-coral/10', fgColor: 'text-cta-coral', barColor: 'bg-cta-coral', trend: '-2.1%', up: false },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-surface-container-highest last:border-0 group hover:bg-surface-gray transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full ${row.bgColor} flex items-center justify-center ${row.fgColor} font-bold`}>{row.initials}</div>
                        <span className="font-bold text-on-surface">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[16px] text-on-surface-variant">{row.leader}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full max-w-[100px] bg-surface-container rounded-full h-2">
                          <div className={`${row.barColor} h-full rounded-full`} style={{ width: `${Math.min(row.pct, 100)}%` }}></div>
                        </div>
                        <span className={`text-[14px] font-bold ${row.color}`}>{row.pct}%</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`font-bold flex items-center gap-1 ${row.color}`}>
                        <span className="material-symbols-outlined text-sm">{row.up ? 'trending_up' : 'trending_down'}</span>
                        {row.trend}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <Link to="/agency-detail" className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">open_in_new</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto p-8 text-center border-t border-outline-variant bg-white/50 backdrop-blur-md rounded-xl">
        <p className="text-[14px] font-medium text-on-surface-variant">
          © 2023 Manulife Financial Corporation. All Rights Reserved. Agency District Performance Dashboard.
        </p>
      </footer>
    </div>
  );
}
