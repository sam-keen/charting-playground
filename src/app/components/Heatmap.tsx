import { ResponsiveHeatMap } from '@nivo/heatmap';
import { libraryData, LibraryData } from '@/app/data/library-data';
import { camelCaseToTitleCase } from '@/app/utils/camelCaseToTitleCase';
import { getSharedChartTheme } from '@/app/utils/getSharedChartTheme';
import { useDarkMode } from '@/app/hooks/useDarkMode';

interface HeatMapData {
  id: string;
  data: { x: string; y: number }[];
}

const convertLibraryDataToHeatmapData = (
  libraryData: LibraryData[]
): HeatMapData[] => {
  return libraryData.map((library) => {
    const { library: libraryName, ...metrics } = library;

    const metricData = Object.entries(metrics).map(([key, value]) => ({
      x: camelCaseToTitleCase(key),
      y: typeof value === 'number' ? value : 0,
    }));

    return {
      id: libraryName,
      data: metricData,
    };
  });
};

const heatmapLibraryData = convertLibraryDataToHeatmapData(libraryData);

export const Heatmap = () => {
  const isDarkMode = useDarkMode();
  const theme = getSharedChartTheme(isDarkMode);

  return (
    <div className="relative w-full max-w-full aspect-[4/3]">
      <ResponsiveHeatMap
        isInteractive={true}
        data={heatmapLibraryData}
        keys={['x']}
        indexBy="id"
        margin={{ top: 120, right: 0, bottom: 0, left: 90 }}
        valueFormat=">-.2s"
        axisTop={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: -90,
        }}
        axisLeft={{
          tickSize: 10,
          tickPadding: 5,
        }}
        colors={{
          type: 'sequential',
          scheme: 'greens',
        }}
        theme={theme}
      />
    </div>
  );
};
