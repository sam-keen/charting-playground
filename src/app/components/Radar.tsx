'use client';

import { ResponsiveRadar } from '@nivo/radar';
import { OrdinalColorScaleConfig } from '@nivo/colors';
import { libraryData, LibraryData } from '@/app/data/library-data';
import { camelCaseToTitleCase } from '@/app/utils/camelCaseToTitleCase';
import { getSharedChartTheme } from '@/app/utils/getSharedChartTheme';
import { useDarkMode } from '@/app/hooks/useDarkMode';

interface RadarDataItem {
  metric: string;
  [library: string]: number;
}

const convertDataForRadarChart = (data: LibraryData[]): RadarDataItem[] => {
  const metrics = Object.keys(data[0]).filter((key) => key !== 'library');

  return metrics.map((metric) => {
    const dataItem = { metric: camelCaseToTitleCase(metric) } as RadarDataItem;

    data.forEach((library) => {
      dataItem[library.library] = library[metric] as number;
    });

    return dataItem;
  });
};

export const Radar = () => {
  const radarData = convertDataForRadarChart(libraryData);
  const keys = libraryData.map((library) => library.library);
  const isDarkMode = useDarkMode();
  const theme = getSharedChartTheme(isDarkMode);

  return (
    <div className="relative w-full aspect-[4/3]">
      <ResponsiveRadar
        data={radarData}
        keys={keys}
        indexBy="metric"
        maxValue={10}
        margin={{ top: 110, bottom: 30 }}
        curve="catmullRomClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={24}
        enableDots={true}
        dotBorderWidth={1}
        colors={{ scheme: 'red_yellow_green' } as OrdinalColorScaleConfig}
        fillOpacity={0.1}
        animate={true}
        isInteractive={true}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: 0,
            translateY: -110,
            itemWidth: 100,
            itemHeight: 20,
            itemTextColor: isDarkMode ? 'white' : 'black',
            symbolSize: 10,
            symbolShape: 'circle',
          },
        ]}
        theme={theme}
      />
    </div>
  );
};
