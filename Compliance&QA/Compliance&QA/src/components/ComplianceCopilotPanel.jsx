export default function ComplianceCopilotPanel({ onClose }) {
  return (
    <aside className="fixed right-0 top-0 h-full w-96 bg-surface-container-lowest border-l-4 border-primary shadow-xl hidden xl:flex flex-col p-0 z-50 overflow-hidden">
      <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-white">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              spark
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary">AI Copilot</h2>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-surface-container-high rounded-lg text-on-surface-variant">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="space-y-4">
          <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none mr-8">
            <p className="font-body-md text-body-md text-on-surface">
              Hello Sarah! I've analyzed today's queue. How can I help you streamline your compliance checks?
            </p>
          </div>
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl rounded-tr-none ml-8">
            <p className="font-body-md text-body-md text-on-primary-container">Summarize pending approvals</p>
          </div>
          <div className="bg-surface-container-low p-4 rounded-2xl rounded-tl-none mr-8 space-y-3">
            <p className="font-body-md text-body-md text-on-surface">
              Currently, there are <span className="font-bold">18 pending items</span>. Highlights:
            </p>
            <ul className="space-y-2 text-on-surface-variant text-[13px] list-disc pl-4">
              <li>
                <span className="font-bold text-status-red">3 Critical</span>: Missing mandatory financial risk
                disclosures.
              </li>
              <li>
                <span className="font-bold text-tertiary">5 Warning</span>: High similarity to recently rejected
                templates.
              </li>
              <li>
                <span className="font-bold text-primary">10 Clear</span>: High confidence match for standard
                approvals.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-6 bg-surface-white border-t border-outline-variant/30 space-y-4">
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full text-[12px] font-bold text-on-surface-variant transition-colors border border-outline-variant/20">
            Explain today's risks
          </button>
          <button className="px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest rounded-full text-[12px] font-bold text-on-surface-variant transition-colors border border-outline-variant/20">
            Generate approval comments
          </button>
        </div>
        <div className="relative">
          <textarea
            className="w-full pl-4 pr-12 py-3 bg-surface-container-low border border-outline-variant rounded-xl font-body-md text-body-md focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none h-24 transition-all"
            placeholder="Ask AI Copilot..."
          ></textarea>
          <button className="absolute bottom-3 right-3 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant text-[11px] font-medium justify-center pt-2">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">history</span> Chat History
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">lightbulb</span> Suggestions
          </span>
        </div>
      </div>
    </aside>
  )
}
