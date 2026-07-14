import { insights } from '../data/compliance'

export default function AIInsightCallouts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {insights.map((insight) => (
        <div
          key={insight.title}
          className={`bg-ai-tint border-l-4 p-6 rounded-r-xl flex gap-4 ${insight.borderClass}`}
        >
          <div className={`p-2 rounded-full h-fit ${insight.iconWrapClass}`}>
            <span className="material-symbols-outlined">{insight.icon}</span>
          </div>
          <div>
            <h4 className={`font-label-md text-label-md font-bold ${insight.titleClass}`}>{insight.title}</h4>
            <p className="text-body-md text-on-surface-variant mt-1">{insight.body}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
