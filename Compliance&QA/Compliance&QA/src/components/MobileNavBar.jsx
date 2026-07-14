export default function MobileNavBar() {
  const items = [
    { icon: 'dashboard', label: 'Overview', active: true },
    { icon: 'pending_actions', label: 'Queue' },
    { icon: 'spark', label: 'Copilot' },
    { icon: 'settings', label: 'Settings' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-surface-white border-t border-outline-variant flex lg:hidden items-center justify-around z-50">
      {items.map((item) => (
        <button
          key={item.label}
          className={`flex flex-col items-center gap-1 ${item.active ? 'text-primary' : 'text-on-surface-variant'}`}
        >
          <span
            className="material-symbols-outlined"
            style={item.active ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {item.icon}
          </span>
          <span className="text-[10px] font-bold">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
