import { distribution, activity } from '../data/compliance'

export default function DistributionAndActivity() {
  return (
    <div className="space-y-8">
      <div className="bg-surface-white p-6 rounded-xl shadow-[0_4px_20px_rgba(4,51,31,0.05)]">
        <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-wider">
          Today's Distribution
        </h3>
        <div className="flex flex-col gap-4">
          {distribution.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-[12px] font-bold">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.colorClass}`} style={{ width: `${item.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-white p-6 rounded-xl shadow-[0_4px_20px_rgba(4,51,31,0.05)]">
        <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-wider">
          Recent Activity
        </h3>
        <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[2px] before:bg-surface-container-high">
          {activity.map((item) => (
            <div key={item.title} className="relative pl-8">
              <div
                className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white z-10 ${item.iconClass}`}
              >
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
              </div>
              <p className="font-label-md text-label-md text-text-deep leading-tight">{item.title}</p>
              <p className="text-[12px] text-on-surface-variant mt-0.5">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
