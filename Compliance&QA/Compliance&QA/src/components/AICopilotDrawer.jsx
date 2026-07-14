export default function AICopilotDrawer({ open, onClose }) {
  return (
    <aside
      className={`fixed right-0 top-0 h-full w-96 bg-surface-container-lowest dark:bg-inverse-surface shadow-xl z-50 flex flex-col p-6 transition-transform duration-300 border-l-4 border-primary ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-headline-md text-headline-md text-primary">AI Copilot</h3>
        <button className="p-2 hover:bg-surface-variant rounded-full" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-primary-container text-on-primary-container rounded-full px-3 py-2 text-sm font-bold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">history</span>
          History
        </button>
        <button className="flex-1 text-on-surface-variant hover:text-primary rounded-full px-3 py-2 text-sm font-bold flex items-center justify-center gap-2 border border-outline-variant/30">
          <span className="material-symbols-outlined text-sm">lightbulb</span>
          Quick
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        <div className="bg-ai-tint p-4 rounded-xl border border-primary-fixed-dim/20">
          <p className="text-xs font-bold text-primary mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            SUGGESTED ACTION
          </p>
          <p className="text-sm text-on-primary-container">
            "Elena Rossi is a high-priority match. Based on recent market trends, her current firm is
            restructuring. Sending a personalized invite today increases conversion by 40%."
          </p>
          <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg text-xs font-bold shadow-sm">
            Draft Invite Message
          </button>
        </div>
        <div className="p-4 rounded-xl border border-outline-variant/30 bg-surface-white">
          <p className="text-xs font-bold text-on-surface-variant mb-2">Pipeline Health</p>
          <p className="text-sm text-on-surface-variant">
            Your current sourcing-to-interview ratio is 15% higher than the regional average.
          </p>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-outline-variant/30">
        <div className="relative">
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-primary focus:bg-surface-white transition-all"
            placeholder="Ask AI anything..."
            type="text"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary p-2 rounded-lg text-white">
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </aside>
  )
}
