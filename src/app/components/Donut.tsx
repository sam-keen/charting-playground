import { ResponsivePie } from '@nivo/pie';
import { OrdinalColorScaleConfig } from '@nivo/colors';
import { metricsData, MetricData } from '@/app/data/metrics-data';
import { getSharedChartTheme } from '@/app/utils/getSharedChartTheme';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const transformDataForDonutChart = (data: MetricData[]) => {
  return data
    .filter((item) => item.metric !== 'Total')
    .map((item) => ({
      id: item.metric,
      value: item.weight,
      label: item.metric,
    }))
    .sort((a, b) => b.value - a.value);
};

// Transform data
const transformedData = transformDataForDonutChart(metricsData);

export const Donut = () => {
  const isDarkMode = useDarkMode();
  const theme = getSharedChartTheme(isDarkMode);

  return (
    <div className="aspect-[4/3]">
      <ResponsivePie
        isInteractive={true}
        data={transformedData}
        margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={2}
        colors={{ scheme: 'spectral' } as OrdinalColorScaleConfig}
        arcLabelsTextColor={'black'}
        arcLinkLabelsTextColor={isDarkMode ? 'white' : 'black'}
        borderWidth={1}
        valueFormat={(value) => `${value}%`}
        sliceLabel={(d) => `${d.value}%`}
        theme={theme}
      />
    </div>
  );
};
