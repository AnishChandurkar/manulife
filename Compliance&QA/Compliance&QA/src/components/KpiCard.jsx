export default function KpiCard({ kpi }) {
  return (
    <div className="bg-surface-white p-6 rounded-xl shadow-[0_4px_20px_rgba(4,51,31,0.05)] hover:shadow-[0_8px_30px_rgba(4,51,31,0.08)] transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${kpi.iconClass}`}>
          <span className="material-symbols-outlined">{kpi.icon}</span>
        </div>
        {kpi.tag && (
          <span className={`font-label-sm text-label-sm px-2 py-1 rounded ${kpi.tagClass}`}>{kpi.tag}</span>
        )}
      </div>
      <h3 className="font-label-md text-label-md text-on-surface-variant">{kpi.label}</h3>
      <p className="font-kpi-value text-kpi-value text-text-deep mt-1">{kpi.value}</p>

      {kpi.progress !== undefined && (
        <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-4">
          <div className={`h-full rounded-full ${kpi.progressClass}`} style={{ width: `${kpi.progress}%` }}></div>
        </div>
      )}

      {kpi.footer && (
        <p className={`text-[12px] font-bold mt-2 flex items-center gap-1 ${kpi.footerClass}`}>
          {kpi.footerIcon && <span className="material-symbols-outlined text-[14px]">{kpi.footerIcon}</span>}
          {kpi.footer}
        </p>
      )}
    </div>
  )
}
