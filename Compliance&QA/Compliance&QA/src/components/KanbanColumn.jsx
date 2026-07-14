import CandidateCard from './CandidateCard'

export default function KanbanColumn({ column }) {
  return (
    <div className="kanban-column flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${column.dotColor}`}></span>
          <h3 className="font-label-md text-label-md text-on-surface font-bold">{column.title}</h3>
        </div>
        <span className="px-2 py-0.5 bg-surface-container-highest rounded text-xs font-bold text-on-surface-variant">
          {column.count}
        </span>
      </div>
      <div className="flex-1 bg-surface-container-low/50 rounded-xl p-3 border border-outline-variant/20 space-y-4">
        {column.candidates.map((candidate) => (
          <CandidateCard key={candidate.name} candidate={candidate} />
        ))}
      </div>
    </div>
  )
}
