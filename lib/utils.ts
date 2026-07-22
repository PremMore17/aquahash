export const getRiskColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'critical': return '#ef4444';
    case 'high': return '#f97316';
    case 'medium': return '#eab308';
    default: return '#22c55e';
  }
};
