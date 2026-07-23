import { useState } from 'react';

export default function Notifications() {
  const [items, setItems] = useState([{ id: 1, text: 'Proposal viewed by Jean-Pierre Tremblay' }, { id: 2, text: 'Compliance approved your retirement planning email' }]);
  return <section className="p-4 md:p-8 max-w-4xl mx-auto"><div className="flex justify-between items-end mb-6"><div><p className="text-primary font-semibold text-sm">Workspace</p><h2 className="text-3xl font-bold">Notifications</h2></div>{items.length > 0 && <button onClick={() => setItems([])} className="text-primary font-semibold">Mark all as read</button>}</div><section className="bg-white rounded-xl border border-outline-variant shadow-sm">{items.length === 0 ? <div className="py-16 text-center"><span className="material-symbols-outlined text-primary text-4xl">notifications_off</span><p className="mt-3 font-bold">You’re all caught up.</p><p className="text-sm text-on-surface-variant">No unread notifications right now.</p></div> : <div className="divide-y">{items.map((item) => <div key={item.id} className="p-5 flex gap-3"><span className="w-2 h-2 rounded-full bg-primary mt-2" /><p>{item.text}</p></div>)}</div>}</section></section>;
}
