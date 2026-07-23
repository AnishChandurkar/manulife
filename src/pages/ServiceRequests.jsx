import { useState } from 'react';
import './ServiceRequests.css';

const requests = [
  { id: 'SR-10412', customer: 'Jean-Pierre Tremblay', type: 'Claim Processing', priority: 'High', status: 'Open', assignee: 'Sarah Jenkins', updated: '12m ago' },
  { id: 'SR-10409', customer: 'Michael Chen', type: 'Beneficiary Update', priority: 'Medium', status: 'In Progress', assignee: 'David Wilson', updated: '48m ago' },
  { id: 'SR-10405', customer: 'Elena Rodriguez', type: 'Address Change', priority: 'Low', status: 'Closed', assignee: 'Sarah Jenkins', updated: '2h ago' },
  { id: 'SR-10398', customer: 'Amara Okafor', type: 'Policy Renewal', priority: 'High', status: 'Pending', assignee: 'Priya Nair', updated: '3h ago' },
  { id: 'SR-10391', customer: 'Liam O\u2019Connor', type: 'Policy Cancellation', priority: 'Medium', status: 'Open', assignee: 'David Wilson', updated: '5h ago' },
  { id: 'SR-10387', customer: 'Sofia Bianchi', type: 'Premium Correction', priority: 'Low', status: 'In Progress', assignee: 'Priya Nair', updated: '6h ago' },
  { id: 'SR-10380', customer: 'Marcus Webb', type: 'Claim Processing', priority: 'High', status: 'Open', assignee: 'Sarah Jenkins', updated: '8h ago' },
  { id: 'SR-10374', customer: 'Nadia Hassan', type: 'Beneficiary Update', priority: 'Low', status: 'Closed', assignee: 'David Wilson', updated: '1d ago' },
];

const priorityStyle = {
  High: 'bg-cta-coral/10 text-cta-coral',
  Medium: 'bg-amber-100 text-amber-700',
  Low: 'bg-background text-on-surface-variant border border-outline-variant',
};

const statusStyle = {
  Open: 'bg-cta-coral/10 text-cta-coral',
  'In Progress': 'bg-amber-100 text-amber-700',
  Pending: 'bg-background text-on-surface-variant border border-outline-variant',
  Closed: 'bg-primary/10 text-primary',
};

const filters = ['Status', 'Priority', 'Request Type', 'Assigned To'];

const aiSuggestions = [
  {
    icon: 'bolt',
    tag: 'SLA Risk',
    confidence: '91% Confidence',
    text: <><strong className="font-semibold">SR-10412</strong> is 2 hours from breaching SLA. Recommend reassigning to an available agent.</>,
    action: 'Reassign Now',
    actionIcon: 'swap_horiz',
    tone: 'coral',
  },
  {
    icon: 'auto_awesome',
    tag: 'Auto-Resolve Candidate',
    confidence: '87% Confidence',
    text: <><strong className="font-semibold">SR-10405</strong> (Address Change) matches a pattern that can be auto-verified and closed.</>,
    action: 'Auto-Resolve',
    actionIcon: 'check_circle',
    tone: 'primary',
  },
  {
    icon: 'groups',
    tag: 'Workload Imbalance',
    confidence: '78% Confidence',
    text: <>Sarah Jenkins has 3 High priority requests open. Consider redistributing to balance the queue.</>,
    action: 'Rebalance Queue',
    actionIcon: 'balance',
    tone: 'tertiary',
  },
];

const activity = [
  { icon: 'assignment_turned_in', color: 'primary', text: 'SR-10405 closed by Sarah Jenkins', time: '18m ago' },
  { icon: 'swap_horiz', color: 'blue', text: 'SR-10398 reassigned to Priya Nair', time: '52m ago' },
  { icon: 'priority_high', color: 'coral', text: 'SR-10412 flagged High priority', time: '1h ago' },
  { icon: 'chat', color: 'tertiary', text: 'Customer note added to SR-10391', time: '3h ago' },
];

export default function ServiceRequests() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Headline Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface">Service Requests</h2>
          <p className="text-sm text-on-surface-variant">Insurance servicing workspace — track, triage, and resolve customer requests.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 border border-primary text-primary text-sm font-semibold font-semibold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">group</span> Bulk Assign
          </button>
          <button className="px-5 py-2.5 border border-primary text-primary text-sm font-semibold font-semibold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">file_download</span> Export
          </button>
          <button className="px-5 py-2.5 bg-primary text-white text-sm font-semibold font-semibold rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">add</span> New Request
          </button>
        </div>
      </section>

      {/* KPI Row */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2">Open Requests</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-on-surface">42</p>
            <span className="material-symbols-outlined text-cta-coral">inbox</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2">Pending Requests</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-on-surface">17</p>
            <span className="material-symbols-outlined text-amber-600">hourglass_top</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2">Closed Requests</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-on-surface">128</p>
            <span className="material-symbols-outlined text-primary">task_alt</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2">SLA Compliance</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-on-surface">96%</p>
            <span className="text-sm font-semibold text-primary font-bold flex items-center">↑ 2%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant">
          <p className="text-xs text-on-surface-variant uppercase tracking-wider mb-2">Avg. Resolution</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-bold text-on-surface">6.4h</p>
            <span className="text-sm font-semibold text-primary font-bold flex items-center">↓ 0.8h</span>
          </div>
        </div>
      </section>

      {/* Main Grid: Table + Sidebar */}
      <section className="grid grid-cols-12 gap-6">
        {/* Table Column */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          {/* Toolbar */}
          <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center gap-3 justify-between">
            <div className="relative w-full md:max-w-xs">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
              <input
                className="w-full pl-10 pr-4 py-2.5 bg-background border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary text-sm outline-none"
                placeholder="Search requests, customers..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button key={f} className="px-3 py-2 bg-background border border-outline-variant rounded-lg text-sm font-semibold text-on-surface-variant hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                  {f}
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-background text-on-surface-variant text-sm font-semibold">
                <tr>
                  <th className="px-6 py-4">Request ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Request Type</th>
                  <th className="px-6 py-4">Priority</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Assigned To</th>
                  <th className="px-6 py-4">Last Updated</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {requests
                  .filter((r) => `${r.id} ${r.customer} ${r.type}`.toLowerCase().includes(search.toLowerCase()))
                  .map((r) => (
                    <tr key={r.id} className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-4 text-sm font-semibold text-on-surface">{r.id}</td>
                      <td className="px-6 py-4 text-sm text-on-surface">{r.customer}</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">{r.type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${priorityStyle[r.priority]}`}>{r.priority}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusStyle[r.status]}`}>{r.status}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[11px]">
                            {r.assignee.split(' ').map((n) => n[0]).join('')}
                          </div>
                          <span className="text-sm text-on-surface">{r.assignee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-on-surface-variant">{r.updated}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="View">
                            <span className="material-symbols-outlined text-lg">visibility</span>
                          </button>
                          <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Reassign">
                            <span className="material-symbols-outlined text-lg">swap_horiz</span>
                          </button>
                          <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Close">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 flex justify-between items-center border-t border-outline-variant">
            <p className="text-xs text-on-surface-variant">Showing {requests.length} of 187 requests</p>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="col-span-12 md:col-span-4 space-y-6">
          {/* AI Suggested Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="p-6 border-b border-outline-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="text-lg font-semibold text-on-surface">AI Suggested Actions</h3>
            </div>
            <div className="p-6 space-y-4">
              {aiSuggestions.map((s) => (
                <div
                  key={s.tag}
                  className={`p-4 rounded-lg border-l-4 ${
                    s.tone === 'coral' ? 'bg-cta-coral/5 border-cta-coral' :
                    s.tone === 'primary' ? 'bg-primary/5 border-primary' :
                    'bg-tertiary/5 border-tertiary'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      s.tone === 'coral' ? 'bg-cta-coral/10 text-cta-coral' :
                      s.tone === 'primary' ? 'bg-primary/10 text-primary' :
                      'bg-tertiary/10 text-tertiary'
                    }`}>{s.tag}</span>
                    <span className="text-[10px] font-bold text-on-surface-variant">{s.confidence}</span>
                  </div>
                  <p className="text-sm text-on-surface mb-3">{s.text}</p>
                  <button className="w-full px-4 py-2 rounded-lg bg-primary text-white font-bold text-xs shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-base">{s.actionIcon}</span> {s.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            <div className="p-6 border-b border-outline-variant">
              <h3 className="text-lg font-semibold text-on-surface">Recent Activity</h3>
            </div>
            <div className="divide-y divide-outline-variant">
              {activity.map((a) => (
                <div key={a.text} className="p-4 flex gap-3 hover:bg-background transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    a.color === 'primary' ? 'bg-primary/10 text-primary' :
                    a.color === 'coral' ? 'bg-cta-coral/10 text-cta-coral' :
                    a.color === 'tertiary' ? 'bg-tertiary/10 text-tertiary' :
                    'bg-blue-50 text-blue-600'
                  }`}>
                    <span className="material-symbols-outlined text-lg">{a.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface">{a.text}</p>
                    <p className="text-xs text-on-surface-variant">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
