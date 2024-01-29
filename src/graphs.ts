import "./types.d.ts";

type ChartType =
  | "AreaChart"
  | "BubbleChart"
  | "ColumnChart"
  | "LineChart"
  | "ScatterChart";
type Options = any;

/* Parameters that apply to all chart types
 * {String} containerId: id of the graph to be displayed
 * {String} dataSourceUrl: source of data
 * {Object} options: options to control the graph
 * {String} query: query for the graph. looks like this: SELECT A,H,F, where the first letter is the column label
 */
function drawChart({
  chartType,
  containerId,
  dataSourceUrl,
  query,
  options,
}: {
  chartType: ChartType;
  containerId: string;
  dataSourceUrl: string;
  query: string;
  options: Options;
}) {
  const wrapper = new window.google.visualization.ChartWrapper({
    chartType,
    containerId,
    dataSourceUrl,
    query,
    options,
  });
  wrapper.draw();
}

/* Parameters that apply to all options
 * {String} hAxisTitle: title of the horzontal axis
 * {String} title: title of the graph
 * {String} vAxisTitle: title of the vertical axis
 */
function formatOptions({
  hAxisTitle = ``,
  showLegend = true,
  title = ``,
  vAxisTitle = ``,
  specialChartOptions = {},
}) {
  return {
    ...specialChartOptions,
    chartArea: {
      left: 60,
      right: 150,
    },
    hAxis: { title: hAxisTitle },
    legend: showLegend ? "right" : "none",
    title,
    vAxis: { title: vAxisTitle },
  };
}

/* Area Chart, extra options
 * {String} isStacked: stacked options, could be true, false, percent, relative
 */
export function drawAreaChart({
  containerId,
  hAxisTitle = ``,
  isStacked = "false",
  query,
  title,
  vAxisTitle = ``,
  url,
}: {
  containerId: string;
  hAxisTitle?: string;
  isStacked: "true" | "false" | "percent" | "relative";
  query: string;
  title: string;
  vAxisTitle?: string;
  url: string;
}) {
  const options = formatOptions({
    hAxisTitle,
    title,
    vAxisTitle,
    specialChartOptions: {
      isStacked,
    },
  });
  drawChart({
    containerId,
    chartType: "AreaChart",
    dataSourceUrl: url,
    query,
    options,
  });
}

/* Bubble Chart, extra options
 * {String} bubble: bubble options
 * {String} colorAxis: color of the axis
 */
export function drawBubbleChart({
  bubble,
  colorAxis,
  containerId,
  hAxisTitle = ``,
  query,
  title,
  vAxisTitle = ``,
  url,
}: {
  bubble: any;
  colorAxis: string;
  containerId: string;
  hAxisTitle: string;
  query: string;
  title: string;
  vAxisTitle: string;
  url: string;
}) {
  const options = formatOptions({
    hAxisTitle,
    title,
    vAxisTitle,
    specialChartOptions: {
      bubble,
      colorAxis,
    },
  });
  drawChart({
    containerId,
    query,
    chartType: "BubbleChart",
    dataSourceUrl: url,
    options,
  });
}

/* Column Chart, extra options
 * {String} isStacked: stacked options, could be true, false, percent, relative
 * {Boolean} showLegend: whether to show the legend at all
 */
export function drawColumnChart({
  containerId,
  hAxisTitle = ``,
  isStacked = "false",
  query,
  showLegend = true,
  title,
  url,
  vAxisTitle = ``,
}: {
  containerId: string;
  hAxisTitle?: string;
  isStacked?: "true" | "false";
  query: string;
  showLegend?: boolean;
  title: string;
  vAxisTitle?: string;
  url: string;
}) {
  let options = formatOptions({
    hAxisTitle,
    showLegend,
    title,
    vAxisTitle,
    specialChartOptions: {
      bar: { groupWidth: "50%" },
      isStacked,
    },
  });
  drawChart({
    containerId,
    chartType: "ColumnChart",
    dataSourceUrl: url,
    query,
    options,
  });
}

/* Line Chart
 */
export function drawLineChart({
  containerId,
  hAxisTitle = ``,
  query,
  showLegend = true,
  title,
  vAxisTitle = ``,
  url,
}: {
  containerId: string;
  hAxisTitle?: string;
  query: string;
  showLegend?: boolean;
  title?: string;
  vAxisTitle?: string;
  url: string;
}) {
  const options = formatOptions({
    hAxisTitle,
    showLegend,
    title,
    vAxisTitle,
    specialChartOptions: {
      curveType: "function",
    },
  });
  drawChart({
    containerId,
    chartType: "LineChart",
    dataSourceUrl: url,
    options,
    query,
  });
}

/* Scatter Chart, extra options
 * {Object} extraTrendline: display an extra trendline with the options passed in
 * {String} showR2: whether to display the r2 value, true/false
 * {String} visibleInLegend: whether to display the r2 value in the legend, true/false
 */
export function drawScatterChart({
  containerId,
  extraTrendline = null,
  hAxisTitle = ``,
  query,
  title,
  vAxisTitle = ``,
  url,
}: {
  containerId: string;
  extraTrendline?: any | null;
  hAxisTitle: string;
  query: string;
  title: string;
  vAxisTitle: string;
  url: string;
}) {
  let trendlines = {
    "0": { showR2: "true", visibleInLegend: "true" },
    ...(extraTrendline ? { "1": extraTrendline } : {}),
  };
  const options = formatOptions({
    hAxisTitle,
    title,
    vAxisTitle,
    specialChartOptions: {
      trendlines,
    },
  });
  drawChart({
    containerId,
    chartType: "ScatterChart",
    dataSourceUrl: url,
    options,
    query,
  });
}
