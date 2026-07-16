const nav = (label, path, icon) => ({ label, path, icon });

export const ROLE_CONFIG = {
  Advisor: {
    title: 'Advisor Dashboard',
    nav: [nav('Dashboard', '/dashboard', 'dashboard'), nav('My Day', '/my-day', 'calendar_today'), nav('Customer 720', '/customer-720', 'person_search'), nav('Meetings', '/meetings', 'groups'), nav('Proposal Intelligence', '/proposal-intelligence', 'description'), nav('Content Studio', '/content-studio', 'edit_note'), nav('Service Requests', '/service-requests', 'support_agent'), nav('Rewards', '/rewards', 'workspace_premium'), nav('Notifications', '/notifications', 'notifications'), nav('AI Copilot', '#copilot', 'auto_awesome')],
    kpis: [['Active Customers', '428', '+4%'], ['Monthly Sales', '$12.4k', '+12%'], ['Pipeline Value', '$842k', '18 opportunities'], ['Policies Sold', '14', '+8%'], ['Premium Collected', '$42.1k', '84% of goal'], ['Renewal Rate', '98.2%', 'On track'], ['Meetings Scheduled', '6', '3 this week'], ['Tasks Due Today', '12', '3 high priority']],
    widgets: ['NextBestActions', 'ActivityStreak', 'RewardsPoints', 'AIProductivityScore'],
  },
  'Agency Leader': {
    title: 'Agency Executive Dashboard',
    nav: [nav('Executive Dashboard', '/dashboard', 'dashboard'), nav('Recruitment Pipeline', '/recruitment-analytics', 'person_add'), nav('Advisor Performance', '/agency-explorer', 'insights'), nav('Team Leaderboard', '/performance-matrix', 'leaderboard'), nav('Customer Insights', '/customer-720', 'groups'), nav('AI Copilot', '#copilot', 'auto_awesome'), nav('Notifications', '/notifications', 'notifications')],
    kpis: [['Total Advisors', '34', '+2 this month'], ['Active Advisors', '29', '85% active'], ['Recruitment Pipeline', '18', '6 interviews'], ['New Advisors This Month', '3', 'vs 2 target'], ['Interview Conversion Rate', '42%', '+6 pts'], ['Agency Revenue', '$1.86M', '+11%'], ['Team Sales Target Achievement', '87%', '$2.14M target']],
    widgets: ['TeamLeaderboard', 'RecruitmentFunnel'],
  },
  'District Leader': {
    title: 'District Executive Dashboard',
    nav: [nav('Executive Dashboard', '/dashboard', 'dashboard'), nav('Agency Comparison', '/performance-matrix', 'compare_arrows'), nav('District Analytics', '/agency-explorer', 'analytics'), nav('Recruitment Analytics', '/recruitment-analytics', 'person_add'), nav('Reports', '/agency-detail', 'summarize'), nav('AI Copilot', '#copilot', 'auto_awesome')],
    kpis: [['Total Agencies', '6', '+1 this year'], ['Total Advisors', '138', '+14'], ['District Revenue', '$8.4M', '+9.2%'], ['Premium Collection', '96.1%', 'Above target'], ['Recruitment Across District', '47', '12 interviews'], ['Policy Growth', '13.8%', '+2.1 pts']],
    widgets: ['AgencyPerformanceRanking', 'TopVsLowestAgency'],
  },
  Compliance: {
    title: 'Compliance Dashboard',
    nav: [nav('Compliance Dashboard', '/dashboard', 'fact_check'), nav('Approval Queue', '/approval-queue', 'approval'), nav('Content Studio', '/content-studio', 'edit_note'), nav('Communication Templates', '/content-studio', 'article'), nav('Audit Reports', '/performance-matrix', 'policy'), nav('AI Copilot', '#copilot', 'auto_awesome')],
    kpis: [['Pending Approvals', '24', '7 due today'], ['Approved Communications', '186', 'This month'], ['Rejected Communications', '9', '4.6% rate'], ['Compliance Score', '98.4%', '+0.7 pts'], ['SLA Compliance', '94%', 'Target: 92%'], ['Policy Violations', '3', 'Under review']],
    widgets: ['ApprovalQueue'],
  },
};

export const getRoleConfig = (role) => ROLE_CONFIG[role] ?? ROLE_CONFIG.Advisor;
