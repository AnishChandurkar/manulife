export default function SideNavBar({ onOpenCopilot }) {
  const navItems = [
    { icon: 'dashboard', label: 'Overview' },
    { icon: 'trending_up', label: 'Performance' },
    { icon: 'map', label: 'Advisor Journey' },
    { icon: 'person_add', label: 'Leads', active: true },
    { icon: 'group', label: 'Customer Base' },
  ]

  return (
    <aside className="hidden lg:flex flex-col h-full py-6 fixed left-0 top-0 h-full w-[280px] bg-primary dark:bg-primary-fixed-dim text-on-primary shadow-lg z-50">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-surface-white rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-primary font-bold">corporate_fare</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-on-primary leading-none">
            Agency Digital
          </h1>
          <p className="text-[10px] opacity-70 tracking-wider font-bold">MANULIFE ENTERPRISE</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={
              item.active
                ? 'flex items-center gap-3 bg-primary-container text-on-primary-container rounded-lg px-4 py-3 mx-2 shadow-sm translate-x-1 transition-transform duration-200'
                : 'flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 transition-colors px-4 py-3 mx-2 rounded-lg'
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-label-md text-label-md">{item.label}</span>
          </a>
        ))}
        <a
          href="#"
          className="flex items-center gap-3 text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 transition-colors px-4 py-3 mx-2 rounded-lg mt-10"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </a>
      </nav>

      <div className="px-4 mt-auto">
        <button
          onClick={onOpenCopilot}
          className="w-full flex items-center justify-center gap-2 bg-primary-fixed text-on-primary-fixed font-bold py-3 px-4 rounded-xl shadow-lg hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined">spark</span>
          <span className="font-label-md text-label-md">Ask AI Copilot</span>
        </button>
      </div>
    </aside>
  )
}
