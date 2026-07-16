import { useState } from 'react';
import { usePrototype } from '../context/PrototypeContext';
import { getRoleConfig } from '../config/roleConfig';
import { advisors, agencySummary, sum } from '../data/mockData';
import { Link } from 'react-router-dom';

const actions = [
  ['C-1001', 'Jean-Pierre Tremblay', 'Prepare Critical Illness top-up quote', '94%'],
  ['C-1002', 'Sarah Chen', 'Call before Term Life renewal window closes', '91%'],
  ['C-1003', 'Michael Chen', 'Send RRSP contribution suggestion', '85%'],
];

function NextBestActions() {
  return <Panel title="Next Best Actions" icon="auto_awesome" className="xl:col-span-2"><div className="divide-y divide-outline-variant">{actions.map(([id, customer, action, confidence]) => <div key={id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"><div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><span className="material-symbols-outlined">person</span></div><div className="flex-1"><Link to={`/customer-720?customerId=${id}`} className="font-semibold text-primary hover:underline">{customer}</Link><p className="text-sm text-on-surface-variant">{action}</p></div><span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{confidence} confidence</span><button className="text-primary font-semibold text-sm">Start</button></div>)}</div></Panel>;
}

function ActivityStreak() { return <Gamification icon="local_fire_department" label="Activity Streak" value="14 days" note="4 client touchpoints today" />; }
function RewardsPoints() { return <Gamification icon="workspace_premium" label="Rewards Points" value="3,750" note="250 points to Gold" />; }
function AIProductivityScore() { return <Gamification icon="auto_awesome" label="AI Productivity Score" value="94 / 100" note="Up 12 points this week" />; }
function Gamification({ icon, label, value, note }) { return <div className="rounded-2xl p-5 bg-[#fff8ee] border border-[#E39A2B]/30"><span className="material-symbols-outlined text-[#E39A2B]">{icon}</span><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#9a6518]">{label}</p><p className="mt-1 text-2xl font-bold text-[#70460d]">{value}</p><p className="mt-1 text-xs text-[#9a6518]">{note}</p></div>; }

function TeamLeaderboard() { const rows = advisors.slice().sort((a, b) => b.monthlySales - a.monthlySales).slice(0, 10).map((a) => [a.name, `$${(a.monthlySales / 1000).toFixed(0)}k`, `$${(a.premiumCollected / 1000).toFixed(1)}k`, Math.round(a.monthlySales / 2200)]); return <Panel title="Team Leaderboard" icon="leaderboard" className="xl:col-span-2"><Table headers={['Advisor', 'Sales', 'Premium', 'Score']} rows={rows} /></Panel>; }
function RecruitmentFunnel() { const stages = [['Sourced', 46], ['Contacted', 32], ['Interview', 18], ['Offer', 9], ['Onboarded', 4]]; return <Panel title="Recruitment Funnel" icon="person_add"><div className="space-y-4">{stages.map(([stage, number], index) => <div key={stage}><div className="flex justify-between text-sm mb-1"><span>{stage}</span><b>{number}</b></div><div className="h-3 rounded-full bg-surface-container"><div className="h-full rounded-full bg-primary" style={{ width: `${100 - index * 17}%` }} /></div></div>)}</div></Panel>; }

function AgencyPerformanceRanking() { const rows = agencySummary().map((a) => [a.name, `$${(a.revenue / 1000).toFixed(0)}k`, `${a.target}%`]); return <Panel title="Agency Performance Ranking" icon="business" className="xl:col-span-2"><Table headers={['Agency', 'Revenue', 'Target']} rows={rows} /></Panel>; }
function TopVsLowestAgency() { return <Panel title="Top vs. Lowest Agency" icon="compare_arrows"><div className="grid gap-3"><Compare label="Top performer" agency="Downtown Toronto" value="104%" color="text-primary bg-primary/10" /><Compare label="Needs attention" agency="Markham" value="88%" color="text-[#b45309] bg-[#fff8ee]" /></div></Panel>; }
function Compare({ label, agency, value, color }) { return <div className={`rounded-xl p-4 ${color}`}><p className="text-xs font-bold uppercase">{label}</p><p className="font-semibold mt-1">{agency}</p><p className="text-2xl font-bold mt-2">{value} target</p></div>; }

function ApprovalQueue() { const { approvals, decideApproval } = usePrototype(); const pending = approvals.filter((item) => item.status === 'Pending'); return <Panel title="Approval Queue" icon="approval" className="xl:col-span-3"><p className="text-sm text-on-surface-variant mb-4">Review inbox — communications requiring a compliance decision.</p>{pending.length === 0 ? <div className="py-10 text-center"><span className="material-symbols-outlined text-primary text-4xl">task_alt</span><p className="mt-2 font-semibold">All caught up — no pending approvals.</p></div> : <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="text-left text-on-surface-variant border-b border-outline-variant"><tr><th className="pb-3">Content item</th><th className="pb-3">Submitter</th><th className="pb-3">Preview</th><th className="pb-3 text-right">Decision</th></tr></thead><tbody>{pending.map((item) => <tr key={item.id} className="border-b border-outline-variant"><td className="py-4 font-semibold">{item.title}</td><td>{item.submitter}</td><td className="max-w-48 truncate">{item.preview}</td><td className="text-right space-x-2"><button onClick={() => decideApproval(item.id, 'Approved')} className="px-3 py-1.5 rounded-lg bg-primary text-white font-semibold">Approve</button><button onClick={() => decideApproval(item.id, 'Rejected')} className="px-3 py-1.5 rounded-lg border border-red-200 text-red-700 font-semibold">Reject</button></td></tr>)}</tbody></table></div>}</Panel>; }

function Table({ headers, rows }) { return <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="border-b border-outline-variant text-left text-on-surface-variant"><tr>{headers.map((h) => <th key={h} className="pb-3">{h}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]} className="border-b border-outline-variant last:border-0">{row.map((cell, index) => <td key={cell} className={`py-4 ${index === 0 ? 'font-semibold' : ''}`}>{cell}</td>)}</tr>)}</tbody></table></div>; }
function Panel({ title, icon, children, className = '' }) { return <section className={`bg-white rounded-2xl border border-outline-variant shadow-sm p-6 ${className}`}><h2 className="flex gap-2 items-center text-lg font-bold mb-5"><span className="material-symbols-outlined text-primary">{icon}</span>{title}</h2>{children}</section>; }

const widgets = { NextBestActions, ActivityStreak, RewardsPoints, AIProductivityScore, TeamLeaderboard, RecruitmentFunnel, AgencyPerformanceRanking, TopVsLowestAgency, ApprovalQueue };

function derivedKpis(role) {
  const mine = advisors.find((advisor) => advisor.id === 'A-01'); const agencies = agencySummary(); const totalRevenue = sum(advisors, 'monthlySales');
  if (role === 'Advisor') return [['Active Customers', mine.activeCustomers], ['Monthly Sales', `$${(mine.monthlySales / 1000).toFixed(0)}k`], ['Pipeline Value', `$${(mine.pipelineValue / 1000).toFixed(0)}k`], ['Policies Sold', mine.policiesSold], ['Premium Collected', `$${(mine.premiumCollected / 1000).toFixed(1)}k`], ['Renewal Rate', '98.2%'], ['Meetings Scheduled', '6'], ['Tasks Due Today', '12']].map(([label, value]) => [label, value, 'Live mock data']);
  if (role === 'Agency Leader') { const agency = agencies.find((item) => item.name === 'Downtown Toronto'); return [['Total Advisors', agency.advisors], ['Active Advisors', agency.advisors], ['Recruitment Pipeline', '18'], ['New Advisors This Month', '3'], ['Interview Conversion Rate', '42%'], ['Agency Revenue', `$${(agency.revenue / 1000).toFixed(0)}k`], ['Team Sales Target Achievement', `${agency.target}%`]].map(([label, value]) => [label, value, 'Aggregated']); }
  if (role === 'District Leader') return [['Total Agencies', agencies.length], ['Total Advisors', advisors.length], ['District Revenue', `$${(totalRevenue / 1000000).toFixed(2)}M`], ['Premium Collection', '96.1%'], ['Recruitment Across District', '47'], ['Policy Growth', '13.8%']].map(([label, value]) => [label, value, 'Aggregated']);
  return getRoleConfig(role).kpis;
}

export default function RoleDashboard() {
  const { role } = usePrototype();
  const config = getRoleConfig(role);
  return <div className="p-8 max-w-[1600px] mx-auto"><header className="flex items-end justify-between gap-4 mb-8"><div><p className="text-sm font-bold text-primary uppercase tracking-wider">{role}</p><h1 className="text-3xl font-bold text-on-surface mt-1">{config.title}</h1><p className="text-on-surface-variant mt-2">A focused view of the work that matters to you today.</p></div><button className="px-4 py-2 rounded-lg bg-primary text-white font-semibold">View report</button></header><section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-4 mb-8">{derivedKpis(role).map(([label, value, detail]) => <div key={label} className="bg-white rounded-xl border border-outline-variant p-4 shadow-sm"><p className="text-xs text-on-surface-variant font-semibold">{label}</p><p className="text-2xl font-bold text-on-surface mt-3">{value}</p><p className="text-xs text-primary mt-2">{detail}</p></div>)}</section><section className="grid grid-cols-1 xl:grid-cols-3 gap-6">{config.widgets.map((name) => { const Widget = widgets[name]; return <Widget key={name} />; })}</section></div>;
}
