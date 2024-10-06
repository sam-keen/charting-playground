'use client';

import { ReactNode } from 'react';
import { Radar } from '@/app/components/Radar';
import { Heatmap } from '@/app/components/Heatmap';
import { Donut } from '@/app/components/Donut';
import { Bar } from '@/app/components/Bar';

const Card = ({ children }: { children: ReactNode }) => (
  <div className="min-h-full bg-stone-50 dark:bg-zinc-800/75 border border-stone-200 dark:border-zinc-700/70 rounded-lg py-4 px-5">
    {children}
  </div>
);

const Home = () => (
  <div className="p-4">
    <h1 className="text-center">Chart Evaluations for Entity-X</h1>
    <p>
      Based on some articles, github pages and documentation, I created a
      shortlist of charting libraries for React potentially suited to the
      project. They all needed to be responsive, work with animations, be
      performant, and have good documentation. They were Nivo, Recharts,
      ApexCharts, React Chartjs 2, and Victory.
    </p>

    <p>
      I created a series of metrics to evaluate the libraries with, each being
      scored out of 10. I then assigned weights to each metric to reflect
      importance. Then with some more research and some shameless GPT usage, I
      generated scores and a total weighted score for each library.
    </p>

    <p>
      The winner was Nivo. Built on D3, it's feature rich, powerful,
      customisable, with solid responsive and interactive features out the box,
      and great documentation. The charts below are built with it.{' '}
      <a href="https://nivo.rocks/" target="_blank" className="link">
        https://nivo.rocks/
      </a>{' '}
    </p>

    <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-stretch my-12">
      <div className="xl:col-span-3 min-h-full">
        <Card>
          <h2>Overall winner: Nivo 🏆</h2>
          <Bar />
        </Card>
      </div>

      <div className="xl:col-span-2">
        <Card>
          <h2>Metrics and their weightings</h2>
          <Donut />
        </Card>
      </div>
    </div>

    <h2 className="mt-12 mb-6">Visualisations of the metric scoring</h2>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
      <Card>
        <Radar />
      </Card>
      <Card>
        <Heatmap />
      </Card>
    </div>
  </div>
);

export default Home;
