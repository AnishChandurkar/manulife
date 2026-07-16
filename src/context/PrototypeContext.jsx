import { createContext, useContext, useMemo, useState } from 'react';

const PrototypeContext = createContext(null);

export const roles = ['Advisor', 'Agency Leader', 'District Leader', 'Compliance'];

export function PrototypeProvider({ children }) {
  const [role, setRole] = useState('Advisor');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Confirm Tremblay renewal meeting', priority: 'High', points: 30, done: false },
    { id: 2, title: 'Follow up with Sarah Chen', priority: 'High', points: 20, done: false },
    { id: 3, title: 'Review two service requests', priority: 'Medium', points: 15, done: false },
  ]);
  const [messages, setMessages] = useState([]);
  const [approvals, setApprovals] = useState([
    ['Q-01', 'Retirement planning email', 'James Peterson', 'Pending'], ['Q-02', 'Whole Life social post', 'Aisha Patel', 'Pending'], ['Q-03', 'Critical Illness brochure', 'Daniel Wong', 'Pending'], ['Q-04', 'RRSP follow-up email', 'Sophie Martin', 'Approved'], ['Q-05', 'Policy renewal WhatsApp', 'Olivia Grant', 'Rejected'], ['Q-06', 'Estate planning post', 'Noah Singh', 'Pending'], ['Q-07', 'Segregated funds email', 'Emma Wilson', 'Approved'], ['Q-08', 'Coverage review email', 'Liam Roy', 'Rejected'],
  ].map(([id, title, submitter, status]) => ({ id, title, preview: `Draft communication: ${title}`, submitter, status })));

  const completeTask = (id) => setTasks((current) => current.map((task) =>
    task.id === id ? { ...task, done: true } : task,
  ));

  const askCopilot = (question, context) => {
    const prompt = question.trim();
    if (!prompt) return;
    setMessages((current) => [...current, { from: 'user', text: prompt }]);
    window.setTimeout(() => {
      setMessages((current) => [...current, {
        from: 'ai',
        text: `For ${context}, I recommend focusing on the highest-value follow-up first. I’ve prepared a mock next-best-action based on the customer and agency data shown here.`,
      }]);
    }, 900);
  };

  const submitForApproval = ({ title, preview }) => setApprovals((current) => [{ id: `Q-${Date.now()}`, title, preview, submitter: role === 'Advisor' ? 'James Peterson' : 'Sarah Jenkins', status: 'Pending' }, ...current]);
  const decideApproval = (id, status) => setApprovals((current) => current.map((item) => item.id === id ? { ...item, status } : item));

  const value = useMemo(() => ({ role, setRole, tasks, completeTask, messages, askCopilot, approvals, submitForApproval, decideApproval }), [role, tasks, messages, approvals]);
  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const value = useContext(PrototypeContext);
  if (!value) throw new Error('usePrototype must be used within PrototypeProvider');
  return value;
}
