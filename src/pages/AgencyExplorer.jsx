import React from 'react';
import { Link } from 'react-router-dom';

const agencies = [
  { code: 'TW', name: 'Toronto West Hub', leader: 'Sarah Jenkins', agents: 34, revenue: '$3.8M', growth: '+12.4%', up: true, color: 'bg-primary-container/10', textColor: 'text-primary-container' },
  { code: 'TN', name: 'Toronto North', leader: 'Michael Chen', agents: 28, revenue: '$3.1M', growth: '+8.2%', up: true, color: 'bg-[#6f9b80]/10', textColor: 'text-[#6f9b80]' },
  { code: 'OV', name: 'Oakville Elite', leader: 'Elena Rodriguez', agents: 22, revenue: '$2.6M', growth: '+22.4%', up: true, color: 'bg-active-green/10', textColor: 'text-active-green' },
  { code: 'MS', name: 'Mississauga Hub', leader: 'Sarah Nakamura', agents: 19, revenue: '$1.9M', growth: '-1.5%', up: false, color: 'bg-yellow-100', textColor: 'text-yellow-700' },
  { code: 'BR', name: 'Brampton Central', leader: 'Marcus Vane', agents: 15, revenue: '$1.2M', growth: '-8.1%', up: false, color: 'bg-red-100', textColor: 'text-red-700' },
  { code: 'ET', name: 'East Toronto', leader: 'Diana Obi', agents: 20, revenue: '$2.2M', growth: '+5.3%', up: true, color: 'bg-primary-container/10', textColor: 'text-primary-container' },
];

export default function AgencyExplorer() {
  return (
    <div className="p-8 min-h-screen bg-surface-gray">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <nav className="flex text-[14px] text-outline-variant space-x-2 mb-1">
            <Link to="/dashboard" className="hover:text-primary">District Performance</Link>
            <span>/</span>
            <span className="text-primary">Agency Explorer</span>
          </nav>
          <h2 className="text-[32px] font-semibold text-on-surface">Agency Explorer</h2>
          <p className="text-[16px] text-on-surface-variant mt-1">Ontario Central District — 6 Agencies, 138 Active Advisors</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input className="pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-full text-[14px] focus:outline-none focus:ring-2 focus:ring-active-green w-64" placeholder="Search agencies..." type="text" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-[14px] hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-active-green text-white rounded-lg text-[14px] hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Agency
          </button>
        </div>
      </div>

      {/* District KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Advisors', value: '138', trend: '+14', icon: 'people' },
          { label: 'District Revenue', value: '$14.8M', trend: '+9.4%', icon: 'attach_money' },
          { label: 'Avg Compliance', value: '94.7', trend: 'Stable', icon: 'verified_user' },
          { label: 'Avg Growth', value: '+8.0%', trend: 'QoQ', icon: 'trending_up' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-white rounded-xl p-6 shadow-sm border border-outline-variant">
            <div className="flex items-start justify-between">
              <span className="text-[14px] text-on-surface-variant">{kpi.label}</span>
              <span className="material-symbols-outlined text-primary-container text-[20px]">{kpi.icon}</span>
            </div>
            <div className="mt-3">
              <span className="text-[28px] font-bold text-on-surface">{kpi.value}</span>
              <span className="ml-2 text-[14px] text-active-green font-medium">{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Agency Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {agencies.map(agency => (
          <Link key={agency.name} to="/agency-detail" className="bg-white rounded-xl shadow-sm border border-outline-variant p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${agency.color} flex items-center justify-center ${agency.textColor} font-bold text-lg`}>
                  {agency.code}
                </div>
                <div>
                  <h3 className="font-bold text-on-surface text-[16px] group-hover:text-primary transition-colors">{agency.name}</h3>
                  <p className="text-[13px] text-on-surface-variant">{agency.leader}</p>
                </div>
              </div>
              <span className={`flex items-center gap-1 text-[13px] font-bold ${agency.up ? 'text-active-green' : 'text-cta-coral'}`}>
                <span className="material-symbols-outlined text-sm">{agency.up ? 'trending_up' : 'trending_down'}</span>
                {agency.growth}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-outline-variant">
              <div>
                <p className="text-[12px] text-on-surface-variant mb-1">Active Advisors</p>
                <p className="text-[20px] font-bold text-on-surface">{agency.agents}</p>
              </div>
              <div>
                <p className="text-[12px] text-on-surface-variant mb-1">QTD Revenue</p>
                <p className="text-[20px] font-bold text-on-surface">{agency.revenue}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant">
              <div className="flex justify-between items-center text-[13px] text-on-surface-variant mb-2">
                <span>Revenue Target</span>
                <span className="font-medium text-on-surface">{agency.up ? '≥95%' : '<80%'}</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2">
                <div className={`h-full rounded-full ${agency.up ? 'bg-active-green' : 'bg-cta-coral'}`} style={{ width: agency.up ? '92%' : '72%' }}></div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[13px] text-primary font-medium group-hover:underline">View Details →</span>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-[20px]">more_vert</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
