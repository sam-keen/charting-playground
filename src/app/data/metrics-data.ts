export interface MetricData {
  metric: string;
  weight: number;
}

export const metricsData = [
  {
    metric: 'Community Activity',
    weight: 15,
  },
  {
    metric: 'Performance',
    weight: 10,
  },
  {
    metric: 'Customisation',
    weight: 15,
  },
  {
    metric: 'Learning Curve',
    weight: 10,
  },
  {
    metric: 'Feature Richness',
    weight: 15,
  },
  {
    metric: 'Extensibility',
    weight: 5,
  },
  {
    metric: 'Dev Experience',
    weight: 10,
  },
  {
    metric: 'Scalability',
    weight: 5,
  },
  {
    metric: 'Integration Ease',
    weight: 5,
  },
  {
    metric: 'GitHub Stars',
    weight: 5,
  },
  {
    metric: 'Recent Update Score',
    weight: 5,
  },
];
