import { useState } from 'react'
import SideNavBar from '../components/SideNavBar'
import TopNavBar from '../components/TopNavBar'
import KpiCard from '../components/KpiCard'
import PriorityQueueTable from '../components/PriorityQueueTable'
import DistributionAndActivity from '../components/DistributionAndActivity'
import AIInsightCallouts from '../components/AIInsightCallouts'
import ComplianceCopilotPanel from '../components/ComplianceCopilotPanel'
import MobileNavBar from '../components/MobileNavBar'
import { kpis } from '../data/compliance'

export default function Overview() {
  const [copilotOpen, setCopilotOpen] = useState(true)

  return (
    <div className="bg-background overflow-hidden">
      <div className="flex h-screen w-full">
        <SideNavBar onOpenCopilot={() => setCopilotOpen(true)} />

        <main className={`flex-1 ml-0 lg:ml-[280px] mr-0 flex flex-col h-full overflow-y-auto ${copilotOpen ? 'xl:mr-96' : ''}`}>
        <TopNavBar
          onOpenCopilot={() => setCopilotOpen(true)}
          searchPlaceholder="Search operations, advisors, or policies..."
          userName="Sarah Mitchell"
          userRole="Compliance Officer"
          avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuCOey-zbu0kVcgTz818Sc8j68bCCoUNaJL8BzK4hNNj9UhlCZVmj8a_TePCGlCZSzRhMFKig9_0LXeMqQtwwdouy_t4R4qZvgYX1bzlZRgCOKvn636_TzXHX3k__TjPL8HFMNC260ZhUC469qb8cpqW2mlL71habDOF-2Vil3efKLzww8VAHCUYjg75rsAexClsYAb29E2MxZht1Z1nLAr_0oJpYKV_E0yYVPchK1HE0bClKQfuu8dMnZu7iHGc4vRfrOsFQx1vLTCR"
        />

        <div className="p-margin-desktop space-y-8">
          <section>
            <h2 className="font-headline-lg text-headline-lg text-text-deep">Good Morning, Sarah</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
              You have <span className="font-bold text-primary">18 communications</span> waiting for review. Three
              require immediate attention.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.label} kpi={kpi} />
            ))}
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
            <PriorityQueueTable />
            <DistributionAndActivity />
          </div>

          <AIInsightCallouts />
          </div>
        </main>

        {copilotOpen && <ComplianceCopilotPanel onClose={() => setCopilotOpen(false)} />}
      </div>
      <MobileNavBar />
    </div>
  )
}
