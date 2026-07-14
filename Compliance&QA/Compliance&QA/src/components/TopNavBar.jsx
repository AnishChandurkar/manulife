export default function TopNavBar({
  onOpenCopilot,
  searchPlaceholder = 'Search candidates...',
  userName = 'Sarah Jenkins',
  userRole = 'Agency Principal',
  avatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoH9Qr32LVLnuXW6-eemD-DZV4dOeZHKPjWs4vA8aT1NVXSKo1-lJv28Qf-ERetBSW_kwK8RTRht0R_c8ekPTzmOwdRDcrLN1e1G1eo6NzuMTVTuXSKXUWmZK4oWw9VhUM3qDwtLhGqMEJsPf-BH8IvZMqnHw4GeoJCsL2CQ0fuShnj6TWTSvn-AaIovNdnIBNFmLXJV0rLa-IoMEHMjMoUkH67qp_0MDBTZLSBblpMXN_WEJClw4nSFn_bFoE8zNkQUV1MDzJbGiK',
}) {
  return (
    <header className="sticky top-0 w-full bg-surface-white border-b border-outline-variant shadow-sm h-16 flex justify-between items-center px-8 z-40">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full w-full text-sm focus:ring-2 focus:ring-primary focus:bg-surface-white transition-all"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-surface-variant transition-colors relative">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-surface-white"></span>
        </button>
        <button onClick={onOpenCopilot} className="p-2 rounded-full hover:bg-surface-variant transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">spark</span>
        </button>
        <div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-primary leading-tight">{userName}</p>
            <p className="text-[10px] text-on-surface-variant">{userRole}</p>
          </div>
          <img className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" alt={userName} src={avatar} />
        </div>
      </div>
    </header>
  )
}
