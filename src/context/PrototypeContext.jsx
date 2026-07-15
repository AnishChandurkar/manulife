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
    }, 650);
  };

  const value = useMemo(() => ({ role, setRole, tasks, completeTask, messages, askCopilot }), [role, tasks, messages]);
  return <PrototypeContext.Provider value={value}>{children}</PrototypeContext.Provider>;
}

export function usePrototype() {
  const value = useContext(PrototypeContext);
  if (!value) throw new Error('usePrototype must be used within PrototypeProvider');
  return value;
}
