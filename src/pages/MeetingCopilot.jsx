import { useState } from 'react';

export default function MeetingCopilot() {
  const [summary, setSummary] = useState(false);
  const [followUp, setFollowUp] = useState(false);
  return <section className="p-8 space-y-6 bg-surface-gray min-h-full">
    <div><p className="text-primary font-semibold text-sm">Sell</p><h2 className="text-3xl font-bold">Meeting Copilot</h2><p className="text-on-surface-variant mt-1">Guidance, notes and a simulated summary for the Tremblay annual review.</p></div>
    <div className="grid xl:grid-cols-[1.5fr_1fr] gap-6">
      <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6"><h3 className="text-xl font-bold mb-4">Meeting notes</h3><div className="space-y-4 text-sm leading-6"><p><b>Advisor:</b> Review retirement objectives and estate-planning priorities.</p><p><b>Customer:</b> Recently sold an investment property and wants to understand tax-efficient options.</p><p><b>Copilot prompt:</b> Confirm risk tolerance and explain that product values can fluctuate.</p></div><button onClick={() => { setSummary(false); window.setTimeout(() => setSummary(true), 600); }} className="mt-6 bg-primary text-white px-5 py-3 rounded-lg font-semibold">Generate meeting summary</button>{summary && <div className="mt-5 bg-primary/10 border border-primary/20 rounded-lg p-4"><p className="font-semibold">Mock AI summary</p><p className="text-sm mt-2">Jean-Pierre is interested in tax-efficient retirement investing and estate protection. Confirmed a moderate growth risk profile; proposal comparison requested.</p><button onClick={() => setFollowUp(true)} className="mt-3 text-primary font-semibold">Create follow-up task</button>{followUp && <p className="text-primary text-sm mt-2">Follow-up task created in My Day.</p>}</div>}</div>
      <aside className="bg-white rounded-xl border border-outline-variant shadow-sm p-6"><h3 className="text-xl font-bold mb-4">Conversation guidance</h3><ul className="space-y-4 text-sm"><li>• Ask about liquidity requirements after the property sale.</li><li>• Review beneficiary and estate objectives.</li><li>• Use approved, balanced product language.</li><li>• Confirm next step: proposal review on Friday.</li></ul></aside>
    </div>
  </section>;
}
