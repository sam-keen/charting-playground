export const getSharedChartTheme = (isDarkMode: boolean) => ({
  textColor: isDarkMode ? '#ededed' : '#171717',
  fontFamily: 'Figtree, sans-serif',
  axis: {
    ticks: {
      line: {
        stroke: isDarkMode ? '#777777' : '#cccccc',
      },
      text: {
        fill: isDarkMode ? '#ededed' : '#171717',
      },
    },
  },
  grid: {
    line: {
      stroke: isDarkMode ? '#444444' : '#e0e0e0',
    },
  },
  legends: {
    text: {
      fill: isDarkMode ? '#ededed' : '#171717',
    },
  },
  tooltip: {
    container: {
      background: isDarkMode ? '#333333' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#171717',
    },
  },
  // labels: {
  //   text: {
  //     fill: isDarkMode ? '#ededed' : '#171717',
  //   },
  // },
});
