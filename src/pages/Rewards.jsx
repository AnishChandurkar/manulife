import './Rewards.css';

const badges = [
  { icon: 'military_tech', label: 'Top Closer', earned: true },
  { icon: 'workspace_premium', label: 'Client Champion', earned: true },
  { icon: 'trending_up', label: 'Growth Streak', earned: true },
  { icon: 'diversity_3', label: 'Referral Pro', earned: true },
  { icon: 'verified', label: 'Compliance Star', earned: true },
  { icon: 'auto_awesome', label: 'AI Power User', earned: false },
  { icon: 'emoji_events', label: 'Quarterly MVP', earned: false },
  { icon: 'bolt', label: 'Fast Responder', earned: false },
];

const challenges = [
  { label: 'Close 5 new policies this week', progress: 80, reward: '250 pts', current: '4/5' },
  { label: 'Complete 3 client reviews', progress: 33, reward: '150 pts', current: '1/3' },
  { label: 'Log 10 AI Copilot interactions', progress: 100, reward: '100 pts', current: '10/10' },
  { label: 'Refer 1 new advisor', progress: 0, reward: '400 pts', current: '0/1' },
];

const timeline = [
  { icon: 'military_tech', title: 'Earned "Top Closer" Badge', detail: '5 policies closed in one week', date: 'Oct 22', filled: true },
  { icon: 'trending_up', title: 'Reached Gold Tier', detail: 'Crossed 12,000 lifetime points', date: 'Oct 10', filled: true },
  { icon: 'redeem', title: 'Redeemed 2,000 pts', detail: 'Travel voucher redemption', date: 'Sep 28', filled: true },
  { icon: 'group_add', title: 'Referral Bonus Earned', detail: 'New advisor onboarded via referral', date: 'Sep 14', filled: true },
  { icon: 'flag', title: 'Weekly Challenge Streak Started', detail: '4-week streak in progress', date: 'Aug 30', filled: false },
];

const rewardsHistory = [
  { date: 'Oct 22, 2025', reward: 'Top Closer Bonus', points: '+250 pts', status: 'Credited' },
  { date: 'Oct 10, 2025', reward: 'Gold Tier Upgrade Bonus', points: '+500 pts', status: 'Credited' },
  { date: 'Sep 28, 2025', reward: 'Travel Voucher Redemption', points: '-2,000 pts', status: 'Redeemed' },
  { date: 'Sep 14, 2025', reward: 'Advisor Referral Bonus', points: '+400 pts', status: 'Credited' },
  { date: 'Aug 30, 2025', reward: 'Weekly Challenge Streak', points: '+100 pts', status: 'Credited' },
];

const incentives = [
  { icon: 'flight_takeoff', title: 'Q4 President\'s Club Trip', detail: 'Top 10 advisors by district qualify for the annual incentive trip.', deadline: 'Dec 31, 2025' },
  { icon: 'workspace_premium', title: 'Platinum Tier Unlock', detail: '1,550 pts to go — unlocks premium client concierge tools.', deadline: 'Ongoing' },
  { icon: 'savings', title: 'Year-End Performance Bonus', detail: 'Hit 110% of annual target to qualify for the accelerator bonus.', deadline: 'Dec 15, 2025' },
];

export default function Rewards() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Headline Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-headline-lg text-text-primary">Rewards &amp; Recognition</h2>
          <p className="text-body-md text-text-muted">Track your incentives, badges, and performance rewards.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 border border-primary text-primary text-label-md font-semibold rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">history</span> Rewards History
          </button>
          <button className="px-5 py-2.5 bg-primary text-white text-label-md font-semibold rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">redeem</span> Redeem Points
          </button>
        </div>
      </section>

      {/* KPI Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border-subtle">
          <p className="text-label-sm text-text-muted uppercase tracking-wider mb-2">Current Tier</p>
          <div className="flex items-baseline justify-between">
            <p className="text-kpi-value text-text-primary">Gold</p>
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border-subtle">
          <p className="text-label-sm text-text-muted uppercase tracking-wider mb-2">Reward Points</p>
          <div className="flex items-baseline justify-between">
            <p className="text-kpi-value text-text-primary">12,450</p>
            <span className="text-label-md text-primary font-bold flex items-center">↑ 8%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border-subtle">
          <p className="text-label-sm text-text-muted uppercase tracking-wider mb-2">Activity Streak</p>
          <div className="flex items-baseline justify-between">
            <p className="text-kpi-value text-text-primary">18 days</p>
            <span className="material-symbols-outlined text-accent-coral">local_fire_department</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border-subtle">
          <p className="text-label-sm text-text-muted uppercase tracking-wider mb-2">Leaderboard Rank</p>
          <div className="flex items-baseline justify-between">
            <p className="text-kpi-value text-text-primary">#4</p>
            <span className="text-label-md text-text-muted font-medium">of 86</span>
          </div>
        </div>
      </section>

      {/* Monthly Progress */}
      <section className="bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-title-lg text-text-primary">Progress to Platinum Tier</h3>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-label-md">89% Complete</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-label-sm text-text-muted uppercase tracking-wider">Current Points</p>
            <p className="text-headline-lg text-primary leading-none">12,450</p>
          </div>
          <div>
            <p className="text-label-sm text-text-muted uppercase tracking-wider">Points to Next Tier</p>
            <p className="text-headline-lg text-text-primary leading-none">1,550</p>
          </div>
          <div className="md:text-right">
            <p className="text-label-sm text-text-muted uppercase tracking-wider">Target</p>
            <p className="text-headline-lg text-text-primary leading-none">14,000</p>
          </div>
        </div>
        <div className="w-full h-3 bg-background rounded-full overflow-hidden relative mb-4">
          <div className="absolute top-0 left-0 h-full bg-primary w-[89%] rounded-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-body-sm text-text-muted italic">Monthly Goal: 14,000 pts</p>
          <p className="text-label-sm font-bold text-primary">Resets Nov 1</p>
        </div>
      </section>

      {/* Badges + Weekly Challenges */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
          <h3 className="font-title-lg text-text-primary mb-8">Badges Earned</h3>
          <div className="grid grid-cols-4 gap-6">
            {badges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${badge.earned ? 'bg-primary text-white' : 'bg-background text-text-muted border border-dashed border-border-subtle'}`}>
                  <span className="material-symbols-outlined" style={badge.earned ? { fontVariationSettings: "'FILL' 1" } : {}}>{badge.icon}</span>
                </div>
                <span className={`text-label-sm ${badge.earned ? 'text-text-primary font-medium' : 'text-text-muted'}`}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
          <h3 className="font-title-lg text-text-primary mb-8">Weekly Challenges</h3>
          <div className="space-y-5">
            {challenges.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-label-md text-text-primary">{c.label}</p>
                  <span className="text-label-sm font-bold text-primary">{c.reward}</span>
                </div>
                <div className="w-full h-2 bg-background rounded-full overflow-hidden relative">
                  <div className={`absolute top-0 left-0 h-full rounded-full ${c.progress === 100 ? 'bg-primary' : 'bg-primary/60'}`} style={{ width: `${c.progress}%` }}></div>
                </div>
                <p className="text-label-sm text-text-muted mt-1">{c.current} complete</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline + Commission Summary */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
          <h3 className="font-title-lg text-text-primary mb-8">Achievement Timeline</h3>
          <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[1.5px] before:bg-border-subtle">
            {timeline.map((item) => (
              <div key={item.title} className="relative pl-8">
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center z-10 border-2 border-white ${item.filled ? 'bg-primary' : 'bg-primary/40'}`}>
                  <span className="material-symbols-outlined text-white text-[12px]">{item.icon}</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-text-primary">{item.title}</p>
                    <p className="text-label-sm text-text-muted">{item.detail}</p>
                  </div>
                  <p className="font-label-sm text-text-muted">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
          <h3 className="font-title-lg text-text-primary mb-6">Commission &amp; Bonus Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border-subtle">
              <span className="text-body-md text-text-muted">Base Commission</span>
              <span className="text-label-md font-bold text-text-primary">$18,200</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border-subtle">
              <span className="text-body-md text-text-muted">Performance Bonus</span>
              <span className="text-label-md font-bold text-primary">+$3,400</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border-subtle">
              <span className="text-body-md text-text-muted">Referral Bonus</span>
              <span className="text-label-md font-bold text-primary">+$800</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-body-md font-semibold text-text-primary">Total Payout (MTD)</span>
              <span className="text-headline-md text-primary">$22,400</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards History */}
      <section className="bg-white rounded-xl shadow-sm border border-border-subtle overflow-hidden">
        <div className="p-8 pb-0 flex justify-between items-center">
          <h3 className="font-title-lg text-text-primary">Rewards History</h3>
          <button className="text-primary hover:underline text-label-md font-medium">View All →</button>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left">
            <thead className="bg-background text-text-muted font-label-md">
              <tr>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Reward</th>
                <th className="px-8 py-4">Points</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {rewardsHistory.map((row) => (
                <tr key={row.reward + row.date} className="hover:bg-primary/5 transition-colors">
                  <td className="px-8 py-5 text-body-md text-text-muted">{row.date}</td>
                  <td className="px-8 py-5 font-label-md text-text-primary">{row.reward}</td>
                  <td className={`px-8 py-5 text-body-md font-medium ${row.points.startsWith('+') ? 'text-primary' : 'text-accent-coral'}`}>{row.points}</td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-label-sm font-medium rounded-full">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Upcoming Incentives */}
      <section className="bg-white p-8 rounded-xl shadow-sm border border-border-subtle">
        <h3 className="font-title-lg text-text-primary mb-8">Upcoming Incentives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {incentives.map((inc) => (
            <div key={inc.title} className="bg-background p-5 rounded-xl border border-border-subtle flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{inc.icon}</span>
              </div>
              <p className="font-label-md text-text-primary">{inc.title}</p>
              <p className="text-label-sm text-text-muted flex-1">{inc.detail}</p>
              <p className="text-label-sm font-bold text-primary">{inc.deadline}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
