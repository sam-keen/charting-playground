import { ResponsiveBar } from '@nivo/bar';
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@nivo/colors';
import { libraryData, LibraryData } from '@/app/data/library-data';
import { getSharedChartTheme } from '@/app/utils/getSharedChartTheme';
import { useDarkMode } from '@/app/hooks/useDarkMode';

const transformDataForBarChart = (data: LibraryData[]) => {
  return data
    .map((item) => ({
      library: item.library,
      Score: Number(item.totalWeightedScore),
    }))
    .sort((a, b) => a.Score - b.Score);
};

const transformedData = transformDataForBarChart(libraryData);

export const Bar = () => {
  const isDarkMode = useDarkMode();
  const theme = getSharedChartTheme(isDarkMode);

  return (
    <div className="aspect-[2/1]">
      <ResponsiveBar
        isFocusable={true}
        data={transformedData}
        keys={['Score']}
        indexBy="library"
        layout={'horizontal'}
        margin={{ top: 0, right: 0, bottom: 50, left: 90 }}
        padding={0.3}
        colors={{ scheme: 'yellow_green_blue' } as OrdinalColorScaleConfig}
        colorBy={'indexValue'}
        borderWidth={1}
        borderColor={
          {
            from: 'color',
            modifiers: [['darker', 0.5]],
          } as InheritedColorConfig<any>
        }
        animate={true}
        theme={theme}
      />
    </div>
  );
};
