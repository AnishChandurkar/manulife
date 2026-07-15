import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';

export default function AICopilot({ isOpen, onClose }) {
  const [question, setQuestion] = useState('');
  const { messages, askCopilot } = usePrototype();
  const { pathname } = useLocation();
  const context = pathname.split('/').filter(Boolean).join(' ') || 'the dashboard';
  const send = () => { askCopilot(question, context); setQuestion(''); };
  return (
    <aside className={`fixed right-0 top-16 bottom-0 w-[380px] bg-[#f0f9f4]/95 backdrop-blur-xl border-l border-primary-container/20 transition-transform duration-300 z-30 shadow-2xl overflow-hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6 border-b border-primary-container/10 flex justify-between items-center bg-white">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <h4 className="font-bold text-headline-md text-on-surface">AI Copilot</h4>
        </div>
        <button className="material-symbols-outlined text-on-surface-variant hover:text-primary" onClick={onClose}>close</button>
      </div>
      <div className="flex-grow p-6 space-y-4 overflow-y-auto">
        <p className="text-xs text-on-surface-variant uppercase tracking-wide">Context: {context}</p>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-primary-container/5">
          <p className="text-[14px] font-bold text-primary mb-1">Observation</p>
          <p className="text-[16px] text-on-surface">I've noticed recruitment conversion in Oakville has dropped by 15% compared to last month. Would you like me to prepare an outreach plan for the agency leader?</p>
        </div>
        {messages.map((message, index) => <div key={`${message.text}-${index}`} className={`p-3 rounded-xl text-sm ${message.from === 'user' ? 'bg-primary text-white ml-8' : 'bg-white border border-primary-container/10 mr-4'}`}>{message.text}</div>)}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-primary-container/5">
          <p className="text-[14px] font-bold text-primary mb-1">Action Needed</p>
          <ul className="text-[16px] text-on-surface list-disc pl-4 space-y-2 mt-2">
            <li>Approve 5 new advisor licensing fees</li>
            <li>Schedule Q4 District Townhall</li>
            <li>Review retention bonus structure for top 5%</li>
          </ul>
        </div>
      </div>
      <div className="p-6 bg-white border-t border-primary-container/10">
        <div className="flex items-center gap-2 bg-surface-container rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary transition-all">
          <input value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} className="bg-transparent border-none focus:ring-0 w-full text-[16px] outline-none" placeholder="Ask anything about this page..." type="text" />
          <button onClick={send} className="material-symbols-outlined text-primary-container" aria-label="Send Copilot message">send</button>
        </div>
      </div>
    </aside>
  );
}
