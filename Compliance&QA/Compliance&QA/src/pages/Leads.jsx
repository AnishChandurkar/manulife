import { useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import TopNavBar from '../components/TopNavBar'
import PipelineHeader from '../components/PipelineHeader'
import KanbanColumn from '../components/KanbanColumn'
import AICopilotDrawer from '../components/AICopilotDrawer'
import { columns } from '../data/candidates'

export default function Leads() {
  const [copilotOpen, setCopilotOpen] = useState(false)

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen flex overflow-hidden">
      <SideNavBar onOpenCopilot={() => setCopilotOpen(true)} />

      <main className="flex-1 flex flex-col min-w-0 lg:ml-[280px]">
        <TopNavBar onOpenCopilot={() => setCopilotOpen(true)} />
        <PipelineHeader />

        <section className="flex-1 overflow-x-auto p-8 pt-2">
          <div className="flex gap-6 h-full pb-4">
            {columns.map((column) => (
              <KanbanColumn key={column.id} column={column} />
            ))}
          </div>
        </section>
      </main>

      <AICopilotDrawer open={copilotOpen} onClose={() => setCopilotOpen(false)} />

      <button
        onClick={() => setCopilotOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:brightness-110 transition-all lg:hidden"
        aria-label="Toggle AI Copilot"
      >
        <span className="material-symbols-outlined">spark</span>
      </button>
    </div>
  )
}
