export default function CandidateCard({ candidate }) {
  const {
    name,
    role,
    avatar,
    match,
    highMatch,
    alert,
    detail,
    secondary,
    timeInStage,
    showContactIcons,
    interviewNote,
    roundBadge,
    verified,
    progress,
    active,
  } = candidate

  const borderClass = highMatch
    ? 'border-l-4 border-l-status-red'
    : interviewNote
    ? 'border-l-4 border-l-tertiary'
    : active
    ? 'border-t-4 border-t-primary'
    : 'border border-outline-variant/10'

  const matchBadgeClass = highMatch || interviewNote || active
    ? 'px-2 py-1 bg-primary-container text-on-primary-container font-bold text-[10px] rounded-full'
    : 'px-2 py-1 bg-primary-container/10 text-primary-container font-bold text-[10px] rounded-full'

  return (
    <div
      className={`bg-surface-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(4,51,31,0.05)] hover:shadow-[0px_8px_30px_rgba(4,51,31,0.08)] transition-all cursor-grab active:cursor-grabbing ${borderClass}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-lg object-cover" alt={name} src={avatar} />
          <div>
            <p className="text-sm font-bold text-text-deep leading-tight">{name}</p>
            <p className="text-[11px] text-on-surface-variant">{role}</p>
          </div>
        </div>
        <span className={matchBadgeClass}>{match}</span>
      </div>

      {alert && (
        <div className="mb-3 px-3 py-2 bg-error-container/20 rounded-lg border border-error-container/30">
          <div className="flex items-center gap-2 text-[10px] text-error font-bold mb-1">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              warning
            </span>
            AI ALERT
          </div>
          <p className="text-[10px] text-on-error-container leading-tight">{alert}</p>
        </div>
      )}

      {interviewNote && (
        <div className="mb-3 px-3 py-2 bg-ai-tint rounded-lg border border-primary-fixed-dim/30">
          <p className="text-[10px] text-on-primary-container font-medium">{interviewNote}</p>
        </div>
      )}

      <div className="space-y-2">
        {detail && (
          <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
            <span className="material-symbols-outlined text-xs">
              {interviewNote ? 'calendar_today' : progress !== undefined ? 'task_alt' : 'work'}
            </span>
            <span>{detail}</span>
          </div>
        )}
        {secondary && (
          <div className="flex items-center gap-2 text-[11px] text-on-surface-variant">
            <span className="material-symbols-outlined text-xs">event_repeat</span>
            <span>{secondary}</span>
          </div>
        )}

        {progress !== undefined && (
          <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full" style={{ width: `${progress}%` }}></div>
          </div>
        )}

        <div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center text-[10px] text-outline">
          <span>{timeInStage}</span>
          {showContactIcons && (
            <div className="flex gap-1">
              <span className="material-symbols-outlined text-xs">mail</span>
              <span className="material-symbols-outlined text-xs">call</span>
            </div>
          )}
          {roundBadge && (
            <span className="px-2 py-0.5 bg-tertiary-container/10 text-tertiary-container rounded font-bold uppercase">
              {roundBadge}
            </span>
          )}
          {verified && <span className="material-symbols-outlined text-sm text-primary">verified</span>}
          {active && <span className="text-primary font-bold">Active</span>}
          {highMatch && (
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-primary-container text-[8px] flex items-center justify-center text-white border border-white">
                AI
              </div>
            </div>
          )}
          {!showContactIcons && !roundBadge && !verified && !active && !highMatch && (
            <span className="material-symbols-outlined text-sm">more_horiz</span>
          )}
        </div>
      </div>
    </div>
  )
}
