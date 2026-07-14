export default function PipelineHeader() {
  return (
    <section className="p-8 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-text-deep">Recruitment Pipeline</h2>
          <p className="text-on-surface-variant mt-1">Manage and track high-potential advisor prospects.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary-container text-on-primary-container font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95">
          <span className="material-symbols-outlined">person_add</span>
          <span>Add Candidate</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 bg-surface-white p-4 rounded-xl border border-outline-variant shadow-sm">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Role:</span>
          <select className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-primary">
            <option>All Advisor Roles</option>
            <option>Financial Planner</option>
            <option>Insurance Specialist</option>
            <option>Wealth Manager</option>
          </select>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Source:</span>
          <select className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-primary">
            <option>All Sources</option>
            <option>LinkedIn Recruiter</option>
            <option>Referral</option>
            <option>Direct Apply</option>
          </select>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg border border-outline-variant/30">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Timeframe:</span>
          <select className="bg-transparent border-none text-sm font-semibold focus:ring-0 cursor-pointer text-primary">
            <option>This Quarter</option>
            <option>This Month</option>
            <option>Last 30 Days</option>
          </select>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
            Reset
          </button>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary-container/10 transition-all">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            More Filters
          </button>
        </div>
      </div>
    </section>
  )
}
