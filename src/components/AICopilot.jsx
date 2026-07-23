import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrototype } from '../context/PrototypeContext';

const screens = { '/customer-720': 'Customer 720', '/recruitment-analytics': 'Recruitment Pipeline', '/performance-matrix': 'Agency Comparison', '/approval-queue': 'Approval Queue', '/content-studio': 'Content Studio', '/meetings': 'Meetings', '/proposal-intelligence': 'Proposal Intelligence', '/dashboard': 'Dashboard' };
const guidance = { Advisor: { 'Customer 720': ['Summarize this customer', 'Draft a follow-up email'], default: ['Prioritize my next actions', 'Prepare meeting notes'] }, 'Agency Leader': { 'Recruitment Pipeline': ['Summarize this candidate', 'Suggest next engagement step'], default: ['Explain team performance', 'Identify coaching opportunities'] }, 'District Leader': { 'Agency Comparison': ['Explain this ranking', 'Summarize district trends'], default: ['Compare agency performance', 'Flag district risks'] }, Compliance: { 'Approval Queue': ['Explain why this was flagged', 'Suggest a compliant rewrite'], default: ['Summarize approval risk', 'Draft a compliant rewrite'] } };

export default function AICopilot({ isOpen, onClose }) {
  const [question, setQuestion] = useState(''); const { messages, askCopilot, role } = usePrototype(); const { pathname } = useLocation();
  const screen = screens[pathname] ?? 'Dashboard'; const options = guidance[role][screen] ?? guidance[role].default;
  const send = (value = question) => { if (value.trim()) askCopilot(value, `${role} · ${screen}`); setQuestion(''); };

  return (
    <>
      {/* Backdrop behind the overlay panel — mobile bottom sheet and tablet collapsible panel both use it; desktop's fixed panel does not need one */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={onClose} aria-hidden="true" />
      )}

      <aside
        className={`fixed z-30 shadow-2xl overflow-hidden flex flex-col bg-[#f0f9f4]/95 backdrop-blur-xl border-primary-container/20 transition-transform duration-300
          inset-x-0 bottom-0 top-auto max-h-[85vh] rounded-t-2xl border-t
          md:inset-x-auto md:right-0 md:top-16 md:bottom-0 md:left-auto md:w-[320px] md:max-h-none md:rounded-t-none md:border-t-0 md:border-l
          lg:w-[380px]
          ${isOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'}`}
      >
        <div className="p-6 border-b border-primary-container/10 flex justify-between bg-white flex-shrink-0">
          <div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">auto_awesome</span><h4 className="font-bold text-lg">AI Copilot</h4></div>
            <span className="inline-block mt-2 text-xs rounded-full bg-primary/10 text-primary px-2 py-1">Reading: {screen}</span>
          </div>
          <button className="material-symbols-outlined" onClick={onClose}>close</button>
        </div>
        <div className="flex-grow p-6 space-y-4 overflow-y-auto">
          <div className="bg-white p-4 rounded-xl border border-primary/10"><p className="font-bold text-primary text-sm">{role} insight</p><p className="mt-1 text-sm">I’m reading the {screen} context and can prepare a focused mock recommendation.</p></div>
          <div className="flex flex-wrap gap-2">{options.map((option) => <button key={option} onClick={() => send(option)} className="text-sm rounded-full border border-primary/30 px-3 py-2 text-primary hover:bg-primary/10">{option}</button>)}</div>
          {messages.map((message, index) => <div key={`${message.text}-${index}`} className={`p-3 rounded-xl text-sm ${message.from === 'user' ? 'bg-primary text-white ml-8' : 'bg-white border border-primary/10 mr-4'}`}>{message.text}</div>)}
        </div>
        <div className="p-4 sm:p-6 bg-white border-t flex-shrink-0">
          <div className="flex items-center gap-2 bg-surface-container rounded-full px-4 py-2">
            <input value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} className="bg-transparent w-full outline-none min-w-0" placeholder={`Ask about ${screen}…`} />
            <button onClick={() => send()} className="material-symbols-outlined text-primary flex-shrink-0">send</button>
          </div>
        </div>
      </aside>
    </>
  );
}
