import {
  drawAreaChart,
  drawColumnChart,
  drawLineChart,
  drawScatterChart,
} from "../../graphs";

import "../../types.d.ts";

const MONTH_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1snVaG2XNltJHeJpsBj6ugGoX8Y-3xpqSNIBXdedl_Yg/edit#gid=374449975";
const RAW_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1PtHdOUadiaUj5RuRNTUY8912LzDZBlODD9jr7U7QAgI/edit#gid=0";
const SUMMARY_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1UWoxJr9I7AWL3IOlXJunp6DPnr9vA5QyZkbuEVSOhdk/edit#gid=34086219";

export const loadGoogleCharts = () => {
  const script = document.createElement("script");
  script.src = "https://www.gstatic.com/charts/loader.js";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    // Google Charts script has loaded, now you can use google.visualization in the global scope
    drawVisualization();
  };
};

function drawVisualization() {
  window.google.charts.load("current", { packages: [`corechart`] });
  window.google.charts.setOnLoadCallback(() => {
    // PRE-REVIEW AND POST-REVIEW

    drawColumnChart({
      containerId: "prpr-graph-av-pre-and-post",
      query: "SELECT A,B,C,D,E",
      title:
        "Average Hours Spent on Pre-Review and Post-Review per PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawLineChart({
      containerId: "prpr-graph-month-av-pre-and-post",
      query: "SELECT A,C,D,E,F",
      title:
        "Average Hours Spent on Pre-Review and Post-Review per PR by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawColumnChart({
      containerId: "prpr-graph-max-hours",
      isStacked: "false",
      query: "SELECT A,F,G",
      title: "Max Hours of Pre-Review and Post-Review in PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawScatterChart({
      containerId: "prpr-graph-pre-hours-vs-post-hours",
      hAxisTitle: "Hours of Pre-Review per PR",
      query: "SELECT C,D",
      title: "Hours of Pre-Review vs Hours of Post-Review per PR",
      url: RAW_DATA_URL,
      vAxisTitle: "Hours of Post-Review per PR",
    });

    drawScatterChart({
      containerId: "prpr-graph-no-outliers-pre-hours-vs-post-hours",
      hAxisTitle: "Hours of Pre-Review per PR",
      query: "SELECT C,D WHERE C < 12.625 AND D < 3.75",
      title:
        "Hours of Pre-Review vs Hours of Post-Review per PR without Outliers",
      url: RAW_DATA_URL,
      vAxisTitle: "Hours of Post-Review per PR",
    });

    drawAreaChart({
      containerId: "prpr-graph-pre-post-ratio",
      isStacked: "percent",
      query: "SELECT B,E,F",
      title: "Pre-Review vs Post-Review Ratio per PR Change Over Time",
      url: RAW_DATA_URL,
    });

    drawColumnChart({
      containerId: "prpr-graph-av-pre-post",
      isStacked: "true",
      query: "SELECT A,H,I",
      title: "Average Pre-Review and Post-Review Hours per PR over Time",
      url: SUMMARY_DATA_URL,
    });

    drawAreaChart({
      containerId: "prpr-graph-month-av-pre-post",
      isStacked: "true",
      query: "SELECT A,G,H",
      title: "Average Pre-Review and Post-Review Hours per PR by Month",
      url: MONTH_DATA_URL,
    });

    // WORKING TIME
    drawColumnChart({
      containerId: "time-graph-av-hours-pr-day",
      query: "SELECT A,L,M",
      title:
        "Average Total Hours Worked on PR and Average Hours Spent Per Day on PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawColumnChart({
      containerId: "time-graph-av-hours-coding",
      isStacked: "false",
      query: "SELECT A,N",
      showLegend: false,
      title: "Average Hours Spent on PRs per Day over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawLineChart({
      containerId: "time-graph-month-av-hours-coding",
      query: "SELECT A,R",
      showLegend: false,
      title: "Average Hours Spent on PRs per Day by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Hours",
    });

    drawColumnChart({
      containerId: "time-graph-av-hours-productive",
      isStacked: "true",
      query: "SELECT A,O,P,Q,R,S,T,U",
      title: "Average Hours Spent on Productive Work Per Day over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Hours",
    });

    // COMMENTS
    drawScatterChart({
      containerId: "comments-graph-hours-worked-vs-comments",
      hAxisTitle: "Hours",
      query: "SELECT H,K",
      title: "Hours Worked per PR vs Number of Comments per PR",
      url: RAW_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawScatterChart({
      containerId: "comments-graph-no-outliers-hours-worked-vs-comments",
      hAxisTitle: "Hours",
      query: "SELECT H,K WHERE H < 16 and K < 21",
      title:
        "Hours Worked per PR vs Number of Comments per PR without Outliers",
      url: RAW_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawColumnChart({
      containerId: "comments-graph-av-most-comments",
      isStacked: "false",
      query: "SELECT A,V,W",
      title: "Average Comments per PR and Most Comments in PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawLineChart({
      containerId: "comments-graph-month-av-comments",
      query: "SELECT A,M",
      showLegend: false,
      title: "Average Comments in PR by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawScatterChart({
      containerId: "comments-graph-month-av-hours-vs-av-comments",
      hAxisTitle: "Hours",
      query: "SELECT J,M",
      title: "Average Hours Worked per PR vs Average Comments per PR by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    // NUMBER OF PRS
    drawColumnChart({
      containerId: "prs-graph-percent-large-prs",
      query: "SELECT A,X",
      showLegend: false,
      title: "Percentage of Large PRs over Time",
      url: SUMMARY_DATA_URL,
    });

    drawColumnChart({
      containerId: "prs-graph-cadence",
      query: "SELECT A,Y",
      showLegend: false,
      title: "PR Every X Day over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Days",
    });

    drawLineChart({
      containerId: "prs-graph-month-cadence",
      query: "SELECT A,P",
      showLegend: false,
      title: "PR Every X Day by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Days",
    });

    drawScatterChart({
      containerId: "prs-graph-month-cadence-vs-comments",
      hAxisTitle: "Days",
      query: "SELECT P,M",
      title: "PR Every X Day vs Comments by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawScatterChart({
      containerId: "prs-graph-no-outliers-month-cadence-vs-comments",
      hAxisTitle: "Days",
      query: "SELECT P,M WHERE M > 1.5",
      title: "PR Every X Day vs Comments by Month without Outliers",
      url: MONTH_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawColumnChart({
      containerId: "prs-graph-type",
      isStacked: "true",
      query: "SELECT A,Z,AA,AB",
      title: "PR Types over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Number of PRs",
    });

    // CODE ADDED
    drawColumnChart({
      containerId: "code-graph-av-lines-code-day",
      query: "SELECT A,AC",
      showLegend: false,
      title: "Average Unique Lines of Code per Day over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawLineChart({
      containerId: "code-graph-month-av-lines-code-day",
      query: "SELECT A,O",
      showLegend: false,
      title: "Average Unique Lines of Code per Day by Month",
      url: MONTH_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawColumnChart({
      containerId: "code-graph-max-lines-code-pr",
      query: "SELECT A,AD",
      showLegend: false,
      title: "Max Unique Lines of Code in a PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawColumnChart({
      containerId: "code-graph-av-lines-code-pr",
      query: "SELECT A,AE",
      showLegend: false,
      title: "Average Unique Lines of Code per PR over Time",
      url: SUMMARY_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawScatterChart({
      containerId: "code-graph-hours-worked-vs-code-added",
      hAxisTitle: "Hours",
      query: "SELECT H,J",
      title: "Hours Worked per PR vs Code Added per PR",
      url: RAW_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawScatterChart({
      containerId: "code-graph-no-outliers-hours-worked-vs-code-added",
      hAxisTitle: "Hours",
      query: "SELECT H,J WHERE H < 16 AND J < 114 AND J > -66",
      title: "Hours Worked per PR vs Code Added per PR Without Outliers",
      url: RAW_DATA_URL,
      vAxisTitle: "Lines of Code",
    });

    drawScatterChart({
      containerId: "code-graph-code-added-vs-comments",
      hAxisTitle: "Lines of Code",
      query: "SELECT J,K",
      title: "Code Added per PR vs Comments per PR",
      url: RAW_DATA_URL,
      vAxisTitle: "Number of Comments",
    });

    drawScatterChart({
      containerId: "code-graph-no-outliers-code-added-vs-comments",
      hAxisTitle: "Lines of Code",
      query: "SELECT J,K WHERE J < 114 AND J > -66 AND K < 21",
      title: "Code Added per PR vs Comments per PR without Outliers",
      url: RAW_DATA_URL,
      vAxisTitle: "Number of Comments",
    });
  });
}
