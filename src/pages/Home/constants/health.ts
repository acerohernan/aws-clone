type HealthStat = {
  dateInString: string;
  type: string;
  quantity: number;
};

export const healthStats: Array<HealthStat> = [
  {
    dateInString: 'Past 7 days',
    type: 'Open issues',
    quantity: 0,
  },
  {
    dateInString: 'Upcoming and past 7 days',
    type: 'Scheduled changes',
    quantity: 0,
  },
  {
    dateInString: 'Past 7 days',
    type: 'Other notifications',
    quantity: 0,
  },
];
