export const kpis = [
  {
    icon: 'pending_actions',
    iconClass: 'bg-secondary-container/30 text-secondary',
    tag: 'Real-time',
    tagClass: 'bg-surface-container-high text-on-surface-variant',
    label: 'Pending Approvals',
    value: '18',
    footer: '3 Priority Urgent',
    footerIcon: 'warning',
    footerClass: 'text-status-red',
  },
  {
    icon: 'verified_user',
    iconClass: 'bg-primary-container/10 text-primary',
    tag: 'Target: 98%',
    tagClass: 'bg-primary-container/10 text-primary',
    label: 'Compliance Score',
    value: '97%',
    footer: '2% vs last month',
    footerIcon: 'trending_up',
    footerClass: 'text-primary',
  },
  {
    icon: 'schedule',
    iconClass: 'bg-muted-blue/10 text-muted-blue',
    label: 'SLA Compliance',
    value: '94%',
    progress: 94,
    progressClass: 'bg-muted-blue',
  },
  {
    icon: 'report_problem',
    iconClass: 'bg-error-container/40 text-error',
    label: 'Policy Violations',
    value: '2',
    footer: 'Active investigations',
    footerClass: 'text-on-surface-variant',
  },
]

export const priorityQueue = [
  {
    title: 'Retirement Planning Email',
    submitted: 'Submitted 14m ago',
    advisor: 'James Leung',
    initials: 'JL',
    avatarBg: 'bg-secondary-container text-on-secondary-container',
    risk: 'High',
    riskClass: 'bg-error-container/50 text-error',
    riskDot: 'bg-error',
    channelIcon: 'mail',
  },
  {
    title: 'Family Protection WhatsApp',
    submitted: 'Submitted 1h ago',
    advisor: 'Sarah Chen',
    initials: 'SC',
    avatarBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
    risk: 'Medium',
    riskClass: 'bg-tertiary-container/10 text-tertiary',
    riskDot: 'bg-tertiary',
    channelIcon: 'chat',
  },
  {
    title: 'Q3 Investment Newsletter',
    submitted: 'Submitted 3h ago',
    advisor: 'Robert Wong',
    initials: 'RW',
    avatarBg: 'bg-secondary-fixed text-on-secondary-fixed',
    risk: 'Low',
    riskClass: 'bg-primary-container/10 text-primary',
    riskDot: 'bg-primary',
    channelIcon: 'newspaper',
  },
]

export const distribution = [
  { label: 'Approved', value: 142, percent: 75, colorClass: 'bg-primary' },
  { label: 'Pending', value: 18, percent: 15, colorClass: 'bg-tertiary' },
  { label: 'Rejected', value: 4, percent: 10, colorClass: 'bg-status-red' },
]

export const activity = [
  {
    icon: 'check_circle',
    iconClass: 'bg-primary-container/20 text-primary',
    title: 'Retirement Campaign Approved',
    meta: 'By Sarah Mitchell at 09:12 AM',
  },
  {
    icon: 'cancel',
    iconClass: 'bg-status-red/10 text-status-red',
    title: 'Client Flyer Rejected',
    meta: 'Automated Risk Check at 08:45 AM',
  },
  {
    icon: 'sync',
    iconClass: 'bg-muted-blue/10 text-muted-blue',
    title: 'Policy DB Sync Completed',
    meta: 'System Update at 07:00 AM',
  },
]

export const insights = [
  {
    icon: 'lightbulb',
    borderClass: 'border-primary',
    iconWrapClass: 'bg-primary/10 text-primary',
    titleClass: 'text-primary',
    title: 'Policy Compliance Recommendation',
    body: 'Three communications may require legal disclaimer updates due to the new Q3 Regulatory framework issued this morning.',
  },
  {
    icon: 'trending_up',
    borderClass: 'border-muted-blue',
    iconWrapClass: 'bg-muted-blue/10 text-muted-blue',
    titleClass: 'text-muted-blue',
    title: 'Anomaly Detected',
    body: 'WhatsApp campaign rejection rate increased by 12% among the Greater China Region agencies. Reviewing common fail triggers.',
  },
]
