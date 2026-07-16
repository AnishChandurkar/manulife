export const customers = [
  { id: 'C-1001', name: 'Jean-Pierre Tremblay', advisorId: 'A-01' },
  { id: 'C-1002', name: 'Sarah Chen', advisorId: 'A-01' },
  { id: 'C-1003', name: 'Michael Chen', advisorId: 'A-02' },
  { id: 'C-1004', name: 'Chloe Dubois', advisorId: 'A-03' },
];

export const advisors = [
  ['A-01', 'James Peterson', 'Downtown Toronto', 428, 214000, 842000, 14, 42100],
  ['A-02', 'Aisha Patel', 'Downtown Toronto', 391, 198000, 690000, 12, 38900],
  ['A-03', 'Daniel Wong', 'North York', 355, 181000, 610000, 11, 35200],
  ['A-04', 'Sophie Martin', 'North York', 340, 175000, 590000, 10, 33100],
  ['A-05', 'Olivia Grant', 'Mississauga', 322, 166000, 540000, 9, 30600],
  ['A-06', 'Noah Singh', 'Mississauga', 301, 153000, 510000, 9, 28800],
  ['A-07', 'Emma Wilson', 'Markham', 289, 142000, 470000, 8, 26700],
  ['A-08', 'Liam Roy', 'Markham', 277, 136000, 440000, 8, 25100],
  ['A-09', 'Maya Brown', 'Oakville', 264, 128000, 410000, 7, 23700],
  ['A-10', 'Ethan Lee', 'Oakville', 249, 119000, 390000, 7, 21900],
  ['A-11', 'Grace Kim', 'Kingston', 231, 108000, 350000, 6, 19800],
  ['A-12', 'Henry Adams', 'Kingston', 219, 101000, 330000, 6, 18400],
  ['A-13', 'Isla Moore', 'Burlington', 208, 97000, 310000, 5, 17600],
  ['A-14', 'Jack Green', 'Burlington', 196, 91000, 295000, 5, 16500],
].map(([id, name, agency, activeCustomers, monthlySales, pipelineValue, policiesSold, premiumCollected]) => ({ id, name, agency, activeCustomers, monthlySales, pipelineValue, policiesSold, premiumCollected }));

export const candidates = [
  ['Nora Ali', 'Sourced'], ['Owen Park', 'Sourced'], ['Priya Mehta', 'Contacted'], ['Carlos Gomez', 'Contacted'], ['Angela Foster', 'Interview'], ['Yasmine Ali', 'Interview'], ['Brian Tam', 'Offer'], ['Leah Wong', 'Offer'], ['Mateo Silva', 'Onboarded'], ['Avery Chen', 'Onboarded'],
].map(([name, stage], index) => ({ id: `R-${index + 1}`, name, stage }));

export const agencySummary = () => Object.values(advisors.reduce((all, advisor) => {
  const record = all[advisor.agency] ?? { name: advisor.agency, advisors: 0, revenue: 0, pipeline: 0, premium: 0 };
  record.advisors += 1; record.revenue += advisor.monthlySales; record.pipeline += advisor.pipelineValue; record.premium += advisor.premiumCollected;
  all[advisor.agency] = record; return all;
}, {})).map((agency, index) => ({ ...agency, target: [104, 98, 96, 88, 92, 94, 90][index] ?? 90 }));

export const sum = (items, field) => items.reduce((total, item) => total + item[field], 0);
