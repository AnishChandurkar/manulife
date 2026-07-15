import { useState } from 'react';

const products = [['Segregated Fund Portfolio', 'Moderate growth', '87%'], ['Participating Whole Life', 'Estate transfer', '79%'], ['Term Life + CI rider', 'Income protection', '71%']];
export default function ProposalIntelligence() {
  const [created, setCreated] = useState(false);
  return <section className="p-8 space-y-6 bg-surface-gray min-h-full"><div><p className="text-primary font-semibold text-sm">Sell</p><h2 className="text-3xl font-bold">Proposal Intelligence</h2><p className="text-on-surface-variant mt-1">Mock recommendations for Jean-Pierre Tremblay’s retirement and estate goals.</p></div>
    <div className="bg-primary/10 border border-primary/20 rounded-xl p-5"><b>Needs analysis:</b> Moderate growth appetite, recent liquidity event, retirement income and estate transfer are priorities.</div>
    <div className="grid lg:grid-cols-3 gap-5">{products.map(([name, fit, score], index) => <article key={name} className={`bg-white rounded-xl border p-6 shadow-sm ${index === 0 ? 'border-primary ring-1 ring-primary' : 'border-outline-variant'}`}><p className="text-primary text-sm font-semibold">Fit score {score}</p><h3 className="text-xl font-bold mt-2">{name}</h3><p className="text-on-surface-variant mt-3 text-sm">Best for: {fit}</p><ul className="mt-4 text-sm space-y-2"><li>• Aligned to stated needs</li><li>• Canadian insurance product framing</li><li>• Review disclosures before recommending</li></ul></article>)}</div>
    <button onClick={() => { setCreated(false); window.setTimeout(() => setCreated(true), 600); }} className="bg-primary text-white px-5 py-3 rounded-lg font-semibold">Generate proposal</button>{created && <p className="text-primary font-semibold">Mock proposal created and added to Jean-Pierre’s proposal history.</p>}
  </section>;
}
