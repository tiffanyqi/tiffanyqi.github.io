import {
  drawBubbleChart,
  drawColumnChart,
  drawLineChart,
  drawScatterChart,
} from "./graphs";

import "../../types.d.ts";

const SEMESTER_DATA_URL =
  "https://docs.google.com/spreadsheets/d/18hPB3_g7A_tC4RAvK6LbLyZYf8tilpum0lSdysCawzI/edit#gid=0";
const INDIVIDUAL_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1Lj1mwa9xA3SgPuOISCVY_TReWmf0ecMpHj31NxQRE4s/edit#gid=0";

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

const drawVisualization = () => {
  window.google.charts.load("current");
  window.google.charts.setOnLoadCallback(() => {
    // OVER TIME

    /* Looking at the productive time commitment by semester
     * A: Semester, horizontal axis
     * H: HW
     * I: Class
     * J: OH
     * N: Activities
     * S: Planning
     * T: Job Preparing
     */
    drawColumnChart({
      containerId: "SemTime",
      hAxisTitle: "Semester",
      isStacked: "true",
      query: "SELECT A,H,I,J,N,S,T",
      title: "Time Spent Productively by Semester",
      url: SEMESTER_DATA_URL,
      vAxisTitle: "Time Spent (Hours)",
    });

    /* Comparing semester and cumulative gpas by semester
     * A: Semester, cluster
     * G: Semester GPA
     * F: Cumulative GPA
     */
    drawLineChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,G,F",
      containerId: "SemVCumulative",
    });

    /* Comparing semester GPA and units
     * A: Semester, cluster
     * G: Semester GPA
     * E: Units (divided by 5)
     */
    drawLineChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,G,E",
      containerId: "UnitsVGPA",
    });

    // CORRELATION

    /* Comparing the grade and time spent on class
     * E: Grade received
     * J: Going to class
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,J",
      title: "Grade Received vs. Time Spent Going to Class",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "GradeVClass",
    });

    /* Comparing the grade and time spent on homework
     * E: Grade received
     * I: Going to homework
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,I",
      title: "Grade Received vs. Time Spent on Homework",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "GradeVHW",
    });

    /* Comparing the grade and time spent on office hours
     * E: Grade received
     * K: Going to office hours
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,K",
      title: "Grade Received vs. Time Spent Going to Office Hours",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "GradeVOH",
    });

    /* Comparing the grade and time spent on extra time
     * E: Grade received
     * P: Going to extra time
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,P",
      title: "Grade Received vs. Time Spent Before the Semester to Prepare",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "GradeVExtra",
    });

    /* Comparing the grade and the first exam grade
     * E: Grade received
     * Q: First exam grade received
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,Q",
      title: "Grade Received vs. First Exam Grade",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "First Exam Grade (%)",
      containerId: "GradeVFirst",
    });

    /* Comparing the grade and the Final exam grade
     * A: Class
     * E: Grade received, horizontal axis
     * R: Final exam grade, vertical axis
     * T: Percent the final is worth
     */
    drawBubbleChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT A,E,R,T",
      title: "Grade Received vs. Final Exam Grade w/ % Weights",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Final Exam Grade (%)",
      bubble: { textStyle: { color: "transparent" } },
      colorAxis: "null", // still looks weird
      containerId: "GradeVFinalGrade",
    });

    /* Comparing the first exam grade and the final exam grade
     * Q: First exam grade received
     * R: Final exam grade received
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT Q, R",
      title: "First Exam Grade vs. Final Exam Grade",
      hAxisTitle: "First Exam Grade (GPA)",
      vAxisTitle: "Final Exam Grade (GPA)",
      containerId: "FirstVFinal",
    });

    /* Comparing the grade and the final exam grade
     * A: Class
     * E: Grade, horizontal axis
     * S: Time studying for the final, vertical axis
     * T: Percent the final is worth
     */
    drawBubbleChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT A,E,S,T",
      title:
        "Grade Received w/ GPA Weights vs. Time Spent Studying on the Final",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Time Spent Studying",
      bubble: { textStyle: { color: "transparent" } },
      colorAxis: "null", // still looks weird
      containerId: "GradeVFinalTime",
    });

    /* Comparing the first exam grade and the final exam grade
     * R: Final exam grade received
     * S: Time spent studying for the final
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT R,S",
      title: "Final Test Grade Received vs. Time Spent Studying for the Final",
      hAxisTitle: "Final Test Grade (%)",
      vAxisTitle: "Time Spent Studying for the Final (hours)",
      containerId: "FinalVFinalTime",
    });

    /* Comparing the grade received and the final the percentage is worth
     * E: Grade received
     * T: Percentage the final is worth
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,T",
      title: "Grade Received vs. Percentage The Final is Worth",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Percentage the Final is Worth",
      containerId: "GradeVFinalPercent",
    });

    /* Comparing the average grade of the class and the final the percentage is worth
     * F: Average grade received
     * T: Percentage the final is worth
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT F,T",
      title: "Average Grade vs. Percentage The Final is Worth",
      hAxisTitle: "Average Grade (GPA)",
      vAxisTitle: "Percentage the Final is Worth",
      containerId: "AvGradeVFinalPercent",
    });

    /* Comparing the units and the grade received
     * G: Units
     * E: Grade received
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT G,E",
      title: "Units in the Class vs. Grade Received",
      hAxisTitle: "Units",
      vAxisTitle: "Grade Received (GPA)",
      containerId: "UnitsVGrade",
    });

    /* Comparing the units and the average grade of the class
     * G: Units
     * F: Average grade of the class
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT G,F",
      title: "Units in the Class vs. Average Grade",
      hAxisTitle: "Units",
      vAxisTitle: "Average Grade (GPA)",
      containerId: "UnitsVAvGrade",
    });

    /* Comparing the units and the size of the class
     * G: Units
     * O: Size of the class
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,O",
      title: "Grade Received vs. Class Size",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Class Size (Enrollment)",
      containerId: "GradeVSize",
    });

    /* Comparing the units and the grade received
     * F: Average grade of the class
     * O: Size of the class
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT F,O",
      title: "Average Grade vs. Class Size",
      hAxisTitle: "Average Grade (GPA)",
      vAxisTitle: "Class Size (Enrollment)",
      containerId: "AvGradeVSize",
    });

    /* Comparing the units and the average time spent on each
     * G: Units
     * M: Average time spent on the class
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT G,M",
      title: "Units vs. Average Time Spent on the Course",
      hAxisTitle: "Units",
      vAxisTitle: "Time Spent (hours)",
      containerId: "UnitsVAvTime",
    });

    // OTHER TIME

    /* Looking at time spent having fun by semester
     * A: Semester
     * R: Time having fun
     */
    drawColumnChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,R",
      title: "Time Spent Pleasurely by Semester",
      hAxisTitle: "Semester",
      vAxisTitle: "Time Spent (Hours)",
      showLegend: false,
      containerId: "SemFun",
    });

    /* Comparing units per semester and time spent having fun
     * D: Units per semester
     * R: Time having fun
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT D,R",
      title: "Units vs. Time Spent Having Fun",
      hAxisTitle: "Units",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemUnitsVFun",
    });

    /* Comparing semester GPA and time having fun
     * G: Semester GPA
     * R: Time spent having fun
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,R",
      title: "Semester GPA vs. Time having Fun",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVFun",
    });

    /* Comparing time having fun and total academic time
     * R: Time spent having fun
     * M: Time spent on total academic time
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT M,O",
      title: "Time Having Fun vs. Time on Academics",
      hAxisTitle: "Time Spent on Fun (hours)",
      vAxisTitle: "Time Spent on Academics (hours)",
      containerId: "FunVTotalAcademicTime",
    });

    /* Looking at time spent sleeping by semester
     * A: Semester
     * R: Time sleeping
     */
    drawColumnChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,Q",
      title: "Time Spent Sleeping by Semester",
      hAxisTitle: "Semester",
      vAxisTitle: "Time Spent (Hours)",
      showLegend: false,
      containerId: "SemSleep",
    });

    /* Comparing units per semester and time spent sleeping
     * D: Units per semester
     * Q: Time sleeping
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT D,Q",
      title: "Units vs. Time Spent Sleeping",
      hAxisTitle: "Units",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemUnitsVSleep",
    });

    /* Comparing semester GPA and time sleeping
     * G: Semester GPA
     * Q: Time spent sleeping
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,Q",
      title: "Semester GPA vs. Time Sleeping",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVSleep",
    });

    /* Comparing time sleeping and total academic time
     * Q: Time spent sleeping
     * M: Time spent on total academic time
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT Q,M",
      title: "Time Sleeping vs. Time on Academics",
      hAxisTitle: "Time Spent on Sleep (hours)",
      vAxisTitle: "Time Spent on Academics (hours)",
      containerId: "SleepVTotalAcademicTime",
    });

    /* Looking at time spent doing activities by semester
     * A: Semester
     * N: Time doing activities
     */
    drawColumnChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,N",
      title: "Time Spent Doing Activities by Semester",
      hAxisTitle: "Semester",
      vAxisTitle: "Time Spent (Hours)",
      showLegend: false,
      containerId: "SemActivities",
    });

    /* Comparing units per semester and time spent on Activities
     * D: Units per semester
     * Q: Time on Activities
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT D,N",
      title: "Units vs. Time Spent on Activities",
      hAxisTitle: "Units",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemUnitsVActivities",
    });

    /* Comparing semester GPA and time on Activities
     * G: Semester GPA
     * Q: Time spent on Activities
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,N",
      title: "Semester GPA vs. Time on Activities",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVActivities",
    });

    /* Comparing time on Activities and total academic time
     * Q: Time spent on Activities
     * M: Time spent on total academic time
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT N,M",
      title: "Time on Activities vs. Time on Academics",
      hAxisTitle: "Time Spent on Activities (hours)",
      vAxisTitle: "Time Spent on Academics (hours)",
      containerId: "ActivitiesVTotalAcademicTime",
    });

    /* Looking at time spent planning by semester
     * A: Semester
     * S: Time planning
     */
    drawColumnChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,S",
      title: "Time Spent Planning by Semester",
      hAxisTitle: "Semester",
      vAxisTitle: "Time Spent (Hours)",
      showLegend: false,
      containerId: "SemPlanning",
    });

    /* Comparing semester GPA and time planning
     * G: Semester GPA
     * S: Time planning
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,S",
      title: "Semester GPA vs. Time planning",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVPlan",
    });

    /* Looking at time spent job hunting by semester
     * A: Semester
     * S: Time job hunting
     */
    drawColumnChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT A,T",
      title: "Time Spent Job Hunting by Semester",
      hAxisTitle: "Semester",
      vAxisTitle: "Time Spent (Hours)",
      showLegend: false,
      containerId: "SemJobs",
    });

    /* Comparing semester GPA and time job hunting
     * G: Semester GPA
     * T: Time job hunting
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,T",
      title: "Semester GPA vs. Time Job Hunting",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVJobs",
    });

    /* Comparing semester GPA and other time
     * G: Semester GPA
     * U: Other time
     */
    drawScatterChart({
      url: SEMESTER_DATA_URL,
      query: "SELECT G,U",
      title: "Semester GPA vs. Other Time",
      hAxisTitle: "Semester GPA (GPA)",
      vAxisTitle: "Time Spent (hours)",
      containerId: "SemGradeVOtherTime",
    });

    // DEFLATION

    /* Comparing grade received and percentage received
     * E: Grade received
     * H: Percentage received
     * V: Predicted percentage
     */
    drawScatterChart({
      url: INDIVIDUAL_DATA_URL,
      query: "SELECT E,H,V",
      title: "Grade Received vs. Percentage Received",
      hAxisTitle: "Grade Received (GPA)",
      vAxisTitle: "Percentage (%)",
      extraTrendline: { lineWidth: 30 },
      containerId: "GradeVPercent",
    });
  });
};
