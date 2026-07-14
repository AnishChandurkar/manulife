import { priorityQueue } from '../data/compliance'

export default function PriorityQueueTable() {
  return (
    <section className="xl:col-span-2 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-headline-md text-headline-md text-text-deep">Priority Review Queue</h3>
        <button className="text-primary font-bold text-label-md flex items-center gap-1 hover:underline">
          View all queue
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>
      <div className="bg-surface-white rounded-xl shadow-[0_4px_20px_rgba(4,51,31,0.05)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#F8F8F8] border-b border-outline-variant">
            <tr>
              <th className="px-6 py-4 font-label-sm text-label-sm uppercase text-on-surface-variant">Communication</th>
              <th className="px-6 py-4 font-label-sm text-label-sm uppercase text-on-surface-variant">Advisor</th>
              <th className="px-6 py-4 font-label-sm text-label-sm uppercase text-on-surface-variant">Risk Level</th>
              <th className="px-6 py-4 font-label-sm text-label-sm uppercase text-on-surface-variant">Channel</th>
              <th className="px-6 py-4 font-label-sm text-label-sm uppercase text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {priorityQueue.map((item) => (
              <tr key={item.title} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-label-md text-label-md text-text-deep">{item.title}</p>
                  <p className="text-[12px] text-on-surface-variant">{item.submitted}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${item.avatarBg}`}>
                      {item.initials}
                    </div>
                    <span className="text-body-md text-on-surface">{item.advisor}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full font-bold text-[11px] flex items-center w-fit gap-1 ${item.riskClass}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.riskDot}`}></span>
                    {item.risk}
                  </span>
                </td>
                <td className="px-6 py-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">{item.channelIcon}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:bg-primary/5 px-3 py-1 rounded-lg font-bold text-label-md">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
