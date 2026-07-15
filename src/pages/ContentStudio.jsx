import { useState } from 'react';

export default function ContentStudio() {
  const [type, setType] = useState('Email');
  const [generated, setGenerated] = useState(false);
  const [approved, setApproved] = useState(false);
  const generate = () => {
    setGenerated(false);
    window.setTimeout(() => setGenerated(true), 500);
  };

  return <section className="p-8 space-y-6 bg-surface-gray min-h-full">
    <div><p className="text-primary font-semibold text-sm">Prospect + Sell</p><h2 className="text-3xl font-bold">Content Studio</h2><p className="text-on-surface-variant mt-1">Draft compliant customer communications with mock AI assistance.</p></div>
    <div className="grid xl:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6 space-y-5">
        <h3 className="text-xl font-bold">Create a communication</h3>
        <label className="block text-sm font-semibold">Content type<select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 w-full rounded-lg border border-outline-variant p-3"><option>Email</option><option>WhatsApp</option><option>Social post</option></select></label>
        <label className="block text-sm font-semibold">Customer<input defaultValue="Jean-Pierre Tremblay" className="mt-2 w-full rounded-lg border border-outline-variant p-3" /></label>
        <label className="block text-sm font-semibold">Objective<textarea defaultValue="Invite the customer to review retirement and estate-planning needs." className="mt-2 w-full rounded-lg border border-outline-variant p-3 min-h-28" /></label>
        <button onClick={generate} className="bg-primary text-white px-5 py-3 rounded-lg font-semibold">Generate {type} draft</button>
      </div>
      <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Draft and compliance check</h3>
        {!generated ? <p className="text-on-surface-variant">Choose a content type and generate a draft to begin.</p> : <><div className="rounded-lg bg-surface-container-low p-4 text-sm leading-6"><strong>Subject: Your retirement planning review</strong><br /><br />Hello Jean-Pierre, based on your recent priorities, I’d welcome the opportunity to review your retirement and estate-planning goals. We can explore options that suit your needs and risk profile.</div>
          <div className="mt-5 space-y-3 text-sm"><p className="font-semibold">Compliance checklist</p><p className="text-primary">✓ Approved product language</p><p className="text-primary">✓ No performance guarantees</p><p className="text-primary">✓ Customer consent recorded</p></div>
          <button onClick={() => setApproved(true)} className="mt-5 border border-primary text-primary px-4 py-2 rounded-lg font-semibold">Route for approval</button>{approved && <p className="mt-3 text-primary font-semibold">Mock approval request sent to Compliance.</p>}</>}
      </div>
    </div>
  </section>;
}
