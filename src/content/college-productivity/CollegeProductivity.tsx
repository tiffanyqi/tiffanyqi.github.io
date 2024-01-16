import { clsx } from "clsx";
import { NextSeo } from "next-seo";

import Dec15Calendar from "../../../public/img/dec15.png";
import Oct14Calendar from "../../../public/img/oct14.png";

import style from "../../theme/blog.module.scss";

export default function CollegeProductivity() {
  return (
    <div className={style.pageContainer}>
      <NextSeo
        title="Productivity | Tiffany Qi"
        description="Correlations between Habits and Grades in College"
      />
      <nav id="navbar" className={style.navbar}>
        <a href="#top" className={clsx(style.navbarItem, style.active)}>
          About
        </a>
        <a href="#about-methodology" className={style.navbarSubItem}>
          My Diary: Getting Time Data
        </a>
        <a href="#about-terminology" className={style.navbarSubItem}>
          Terminology
        </a>
        <a href="#about-other" className={style.navbarSubItem}>
          Other Sources of Data
        </a>
        <a href="#time" className={style.navbarItem}>
          Time
        </a>
        <a href="#time-grades" className={style.navbarSubItem}>
          My Grades
        </a>
        <a href="#correlation" className={style.navbarItem}>
          Academic Correlation
        </a>
        <a href="#correlation-time" className={style.navbarSubItem}>
          Time and Grades
        </a>
        <a href="#correlation-tests" className={style.navbarSubItem}>
          Tests and Grades
        </a>
        <a href="#correlation-units" className={style.navbarSubItem}>
          Units, Class Sizes and Grades
        </a>
        <a href="#other-time" className={style.navbarItem}>
          Non-Academic Correlation
        </a>
        <a href="#other-time-sleep" className={style.navbarSubItem}>
          Sleep
        </a>
        <a href="#other-time-activities" className={style.navbarSubItem}>
          Activities
        </a>
        <a href="#other-time-planning" className={style.navbarSubItem}>
          Planning
        </a>
        <a href="#other-time-jobs" className={style.navbarSubItem}>
          Jobs
        </a>
        <a href="#other-time-summary" className={style.navbarSubItem}>
          Putting it all together
        </a>
        <a href="#deflation" className={style.navbarItem}>
          Grade Deflation
        </a>
        <a href="#findings" className={style.navbarItem}>
          Findings
        </a>
      </nav>
      <div className={style.container}>
        {/* <!-- ABOUT AND INTRODUCTION --> */}
        <h1 id="top" className={style.heading}>
          Correlations between Habits and Grades in College
        </h1>
        <div className={style.date}>June 2016</div>
        <p>
          Hi there, and welcome to my Productivity Project. Since I started
          college at UC Berkeley, I have been tracking my productivity through
          Google Calendar, then migrating the data onto a spreadsheet through a
          calculator application I built called{" "}
          <a href="https://github.com/tiffanyqi/calenTools">CalenTools</a> for
          the command line. With this information, I thought it would be fun to
          take all this data, analyze it, and make some conclusions about how
          time management and grades all correlate using Google Charts.
        </p>

        <p>
          As such, this project is an analysis of{" "}
          <strong>one person's life</strong>, and should not be taken as
          absolute fact. I found this data interesting to share, and hope that
          it helps you when you think that one test can make or break your
          grade. Here is the data, and if you're interested in a high level
          overview, feel free to check out my{" "}
          <a href="https://medium.com/@tiffanyqi/a-college-students-individual-analysis-of-productivity-of-four-years-e51e5ec3af6">
            post
          </a>
          .
        </p>

        <h3 className={style.heading}>About Me</h3>
        <p>
          My name is Tiffany Qi, and I graduated from UC Berkeley in Sring 2016,
          studying Business Administration. I primarily took classes in the
          Undergraduate Business Administration department, but have dabbled
          into language-related courses, psychology, and computer science. As
          such, this data hinges on those specific areas, and thus is not fully
          comprehensive of all departments at Berkeley.
        </p>

        <p>
          I was an above-average student with a final GPA of 3.55. The average
          GPA at Haas is a 3.4. I did pretty well when I first started college
          and received a 3.8 my first semester, then it fell pretty consistently
          to 3.52 until my last semester.
        </p>

        <p>
          I studied a <em>lot</em> of classes outside of my major, and I
          typically took on heavy workloads throughout my college career. I did
          42 letter-graded classes in total, 20 of which were in my major, which
          means more than half of the classes I took here were not
          business-related! Most of these classes did not fulfill general
          education requirements. This is an average of 17.3 units and around 5
          classes per semester, whereas most students tend to take 15-16 units
          and around 4 classes. On top of letter-graded units, I frequently
          tacked Pass/No Pass classes (such as academic interning, computer
          science, breadth or teaching techniques) on top of that.
        </p>

        <p>
          I spent a lot of my time on extra-curricular activities, which
          comprised more than half of all my productive time. I was somewhat of
          a workaholic, but I enjoyed these activities considerably. Thus, while
          I highly enjoyed my activities, I classified it in my calendar as work
          and productive time. For now, "fun" is defined as time set aside for
          something non-work related.
        </p>

        <p>I am interested in these points:</p>
        <ul>
          <li>
            <strong>Time:</strong> how a student's grades and academic time
            commitment change over time,
          </li>
          <li>
            <strong>Academic Correlation:</strong> whether time spent, units,
            specific tests, or class size and the grades received in the class
            have any correlation,
          </li>
          <li>
            <strong>Non-Academic Correlation: </strong>whether time spent having
            fun, sleeping, on activities, planning, and job hunting affects GPA,
          </li>
          <li>
            <strong>Grade Deflation:</strong> and whether grade deflation is
            really a concept at Berkeley.
          </li>
        </ul>

        <p>
          While I took basic statistics in high school and in college, I do not
          have a background in data science or analysis. Thus, my analysis is
          limited to the lens of linear correlations and timescales. If you'd
          like to play with my data, feel free to{" "}
          <a href="mailto:tiffany19qi@gmail.com">contact me.</a>
        </p>

        <p>
          I will do my best to deeply analyze the data through the eyes of one
          student.
        </p>

        <h3 id="about-methodology" className={style.heading}>
          My Diary: Getting Time Data
        </h3>
        <p>
          I am a Google Calendar Super User, and I am quite proud of that fact.
          Since November 2012, I have consistently logged my productive (and
          non-productive) moments of my life. (Most of Fall 2012 is an estimate
          of time spent except for the last two weeks of the semester.) As such,
          I am able to go back to any given day and reveal all the moments and
          feelings of the past. This improves my memory and gives me helpful
          insights along the way. Below are a couple of examples of a given
          week: one is of October 2014, while the other is slightly more recent
          at December 2015, which also happened to be the week of final exams.
        </p>

        <img
          className={style.calendar}
          src={Oct14Calendar.src}
          alt="October 2014"
        />
        <p>
          You can see that each category is represented by a calendar of
          different colors. I describe each event with some description. Some
          are more obvious, such as sleep, and so many events have "No Title".
        </p>

        <p>
          Each week, I calculate how much time I spend in each calendar, further
          calculating statistics about each class and activity I pursue. For
          this analysis, the calendar data I use are:
        </p>
        <ul>
          <li>Class</li>
          <li>Homework & Studying</li>
          <li>Jobs, Internships, & Activities</li>
          <li>Job Searching</li>
          <li>Sleep</li>
          <li>Hobbies (a recent addition)</li>
          <li>Games & Time Wasters</li>
          <li>Social / Calls</li>
          <li>♥♥♥</li>
        </ul>
        <p>
          I split up each calendar and attribute it to each given category,
          which includes the specific class and activity. As such, I calculate
          productivity strictly from the first four calendars. I have other
          things like "fun", which is calcuated from hobbies, games & time
          wasters, and social (spending time talking or doing something with
          someone not work-related), and time with my significant other. I have
          more than three years worth of quantifiable data on my productive (and
          not so productive) moments.
        </p>
        <img
          className={style.calendar}
          src={Dec15Calendar.src}
          alt="December 2015"
        />

        <h3 id="about-terminology" className={style.heading}>
          Terminology
        </h3>
        <p>
          There are a few statistics and college terms I use throughout the
          project. I define them below in case something doesn't make sense:
        </p>
        <ul>
          <li>
            <strong>Coefficient of Correlation (R):</strong> a statistical
            measure of the linear strength of two sets of data. 0-0.1 means no
            correlation, 0.1-0.3 means weak correlation, 0.3-0.5 means moderate
            correlation, and 0.5+ means a strong correlation (
            <a href="https://explorable.com/statistical-correlation">source</a>
            ).
          </li>
          <li>
            <strong>Coefficient of Determination (R2):</strong> a statistical
            measure of how well the regression line approximates the real data
            points.
          </li>
          <li>
            <strong>GPA:</strong> stands for "grade point average". It is a way
            for schools to average a student's academic achievement in a single
            number. The maximum GPA a student may receive at Berkeley is a 4.0
          </li>
          <li>
            <strong>P/NP:</strong> stands for "pass/no pass". These grades do
            not factor into GPA, and students must receive at least a C- to pass
            the class. If a student receives a NP on a graduation requirement,
            he or she must retake the class. It is often difficult to receive a
            "NP" on purpose. (Some students try to get a NP for different
            reasons, such as retaking the class to get a better grade that can
            replace it.)
          </li>
          <li>
            <strong>Semester:</strong> period of academic study. UC Berkeley has
            two required semesters: fall (August to December) and spring
            (January to May). Each semester is approximately 16 weeks long.
            Students have a week long break to study between their final week of
            classes and final exams.
          </li>
        </ul>

        <h3 id="about-other" className={style.heading}>
          Other Sources of Data
        </h3>
        <p>
          In addition to time, I also calculate grades very closely. This is
          typically a spreadsheet with every assignment and their weights to
          either recreate the exact percentage received at the end, or to
          estimate a percentage. I have lost specific test grades for the first
          four semesters. In addition, many classes do not release final exam
          grades, participation, or final course grades, so about half of the
          percentages here are likely estimates.
        </p>

        <p>
          I also have some average grades on the site as well. I went on{" "}
          <a href="http://schedulebuilder.berkeley.edu">Schedule Builder</a>, a
          UC Berkeley resource, to find the average grade associated with my
          class and its given semester. If a particular semester wasn't given, I
          took a look at previous semesters, and if it was a constant grade
          average, I used that one. If it didn't exist, I estimated.
        </p>

        <p>
          At UC Berkeley, we use a 4.0 grading scale. In my graphs, I frequently
          use number representations to present results visually. This is what
          the specific scale looks like:
        </p>

        <table className={style.table}>
          <th></th>
          <tbody>
            <tr>
              <td>A+ : 4.0</td> <td>B+ : 3.3</td> <td>C+ : 2.3</td>
              <td>D+ : 1.3</td> <td>F</td> <td>0</td>
            </tr>
            <tr>
              <td>A : 4.0</td> <td>B : 3.0</td> <td>C: 2.0</td> <td>D : 1.0</td>
            </tr>
            <tr>
              <td>A- : 3.7</td> <td>B- : 2.7</td> <td>C- : 1.7</td>
              <td>D- : 0.7</td>
            </tr>
          </tbody>
        </table>

        <p>
          We also have Pass/No Pass grades, which is not represented in the GPA.
          I took six classes P/NP, three of which I do not have grades for.
          These six grades, despite being in this data, is not calculated in my
          GPA.
        </p>

        <p>
          As for units and class sizes, this information was obtained on{" "}
          <a href="http://schedule.berkeley.edu">Schedule of Classes</a>,
          another official UC Berkeley website.
        </p>

        <p>
          <strong>
            DISCLAIMER: My findings here worked for me, but they may not work
            for you. Proceed with caution.
          </strong>
        </p>
        <p>Let's get started.</p>

        {/* <!-- OVER TIME CALCULATIONS --> */}
        <h2 id="time" className={style.heading}>
          Time: How a Student's Grades and Time Commitment Change Over Time
        </h2>

        <h3 className={style.heading}> My Time</h3>
        <p>
          The below graph is a visual display of all the time I spent in each
          semester on HW (homework & studying outside of class), Class time, OH
          (office hours, or time asking for help), Activities
          (extra-curriculars, jobs, internships--basically anything that wasn't
          class related), Planning (academic, life, etc.), and Job Hunting
          (searching, interviewing, etc). In Fall 2014, I was the least
          motivated academically but still spent more than half of my semester
          at my part-time job, tutoring, lab assisting, and spinning up a new
          student organization.
        </p>
        <div className={style.graphTall} id="SemTime" />

        <p>
          In terms of motivation, I peaked in Fall 2014 and tried my best to be
          a productive member of the student body. I still don't know how I
          managed to spend 1000+ hours in a semester productively. For context,
          if each semester is 16 weeks long, each week having 7 days and 24
          hours in one day, then the duration of one semester is 24 x 7 x 16 ={" "}
          <strong>2,688 hours</strong> long. According to these numbers, I spent
          over <strong>40%</strong> of my time productively. I spent 30.6% of my
          time sleeping, which is approximately 7 hours a day.{" "}
          <strong>I spent more time working than I did sleeping</strong>. To put
          this into perspective, a full time job (assuming 40 hours/week) would
          be 24% of time spent. Throughout my college career, I was productive
          about 28% to 47% of the time. (The first calendar depicted a typical
          week in Fall 2014.)
        </p>

        <p>
          So yeah, even though I was little crazy when it came to activities,
          the time I spent on my academics decreased. The most time I spent on
          my classes was in Spring 2013 (still a freshman in college).
        </p>

        <h3 id="time-grades" className={style.heading}>
          My Grades
        </h3>
        <p>
          <em>
            Note: these graphs related to grades show up occasionally. If one or
            the other does not appear, please try refreshing until the other
            appears.
          </em>
        </p>

        <div className={style.graphShort} id="SemVCumulative" />
        <p>
          This graph compares my semester and cumulative GPAs. Over time, it
          appears that my GPA fell pretty consistently until my final semester.
          Sometimes, huge decreases in semester GPA does not affect cumulative
          GPA by that much. This is due to the decrease in units taken for a
          letter grade, which is reflected in the below graph.
        </p>

        <div className={style.graphShort} id="UnitsVGPA" />
        <p>
          In this graph, I show how many units and what my Semester GPA is like
          over time. I included P/NP units and divided it by 5 so that the
          overall trend fits on the GPA graph. You can see that I took more
          units in the beginning of college, and a bumpy road back to a more
          reasonable unit level.
        </p>

        <p>
          In conclusion,{" "}
          <strong>
            my motivation peaked in Fall 2014, and fell throughout consecutive
            semesters. In addition, I spent time consistently across semesters
            on homework, and classes. I spent more time planning in the first
            half of college, and more time job hunting on the latter half.
          </strong>{" "}
          This next section will go into specific correlations.
        </p>

        {/* <!-- CORRELATION --> */}
        <h2 id="correlation" className={style.heading}>
          Academic Correlation: How Everything is Connected
        </h2>
        <p>I will be covering the following correlations:</p>
        <ul>
          <li>Time spent and grade received</li>
          <li>Test results and grade received</li>
          <li>Number of units and grade received</li>
          <li>Class sizes and grade received</li>
        </ul>
        <p>Let's begin!</p>

        <h3 id="correlation-time" className={style.heading}>
          Time & Grades
        </h3>
        <p>
          I have had the good fortune of documenting how much time I spent going
          to class, doing homework and studying, going to office hours, and
          studying before the semester. I went to most of my classes, as most
          were participation based. In addition, I only went to office hours
          diligently for my computer science classes, so there will be some bias
          there. Here, I'll provide some pictorials of grade earned and each of
          these four factors.
        </p>

        <div className={style.graphShort} id="GradeVClass" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time going to
            class
          </li>
          <li>
            <strong>Why it matters</strong>: Is grade influenced by how much you
            go to class?
          </li>
          <li>
            <strong>R</strong>: -0.286
          </li>
          <li>
            <strong>R2</strong>: -0.075
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: -0.069
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.00487
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVHW" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time on homework
            and studying
          </li>
          <li>
            <strong>Why it matters</strong>: Is grade influenced by how much you
            study?
          </li>
          <li>
            <strong>R</strong>: -0.205
          </li>
          <li>
            <strong>R2</strong>: 0.042
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.12
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.0144
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVOH" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time spent going
            to office hours
          </li>
          <li>
            <strong>Why it matters</strong>: Is grade influenced by how much you
            go to office hours to clarify questions?
          </li>
          <li>
            <strong>R</strong>: -0.366
          </li>
          <li>
            <strong>R2</strong>: 0.134
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.1048
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.011
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVExtra" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. extra time spent
            before the semester began
          </li>
          <li>
            <strong>Why it matters</strong>: Is grade influenced by how much you
            spend in the beginning of the semester to prepare?
          </li>
          <li>
            <strong>R</strong>: -0.242
          </li>
          <li>
            <strong>R2</strong>: 0.059
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.094
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.0089
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <p>
          One reason for the consistent lack of linear correlation may be
          because there were two conflicting factors at play. One may be because
          although I may have went to class, studied, etc more, I had to in
          order to understand the material and my grade was still lower than the
          others. Another may be because I understood the material well, and as
          a result did not go to class. Since both phenomena happened, bimodal
          correlations wouldn't reflect in the data.{" "}
          <strong>
            Overall, there is no linear correlation between spending time in the
            class before the semester, studying, going to class, or going to
            office hours.
          </strong>
        </p>

        <h3 id="correlation-tests" className={style.heading}>
          Tests & Grades
        </h3>
        <p>
          Next, I'd like to explore the relationship between test results and
          the grades received in the class. I classified "First Test" with
          either the first midterm, quiz, assignment, or essay. Some classes
          didn't have any of these, so those I left blank. "Final Test" was
          either the final exam, presentation, or paper. I avoided using a final
          quiz if there was one, as that may have been just a normal exam. Is
          there a correlation between studying your ass off and getting a good
          grade? Let's see.
        </p>

        <div className={style.graphShort} id="GradeVFirst" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. First Test Score
          </li>
          <li>
            <strong>Why it matters</strong>: Is the first test outcome a strong
            indicator on what you get at the very end?
          </li>
          <li>
            <strong>R</strong>: 0.3958
          </li>
          <li>
            <strong>R2</strong>: 0.1567
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.1891
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.0358
          </li>
          <li>
            <strong>Conclusion</strong>: Weak positive linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVFinalGrade" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. Final Grade, with
            weights on how much the final was worth in the calculation of the
            grade
          </li>
          <li>
            <strong>Why it matters</strong>: Is the grade received heavily
            affected by the final test score?
          </li>
          <li>
            <strong>R</strong>: 0.811
          </li>
          <li>
            <strong>R2</strong>: 0.6577
          </li>
          <li>
            <strong>Conclusion</strong>: Strong positive linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="FirstVFinal" />
        <ul>
          <li>
            <strong>Relationship</strong>: First Grade vs. Final Grade
          </li>
          <li>
            <strong>Why it matters</strong>: Can you improve later on in the
            semester?
          </li>
          <li>
            <strong>R</strong>: 0.5592
          </li>
          <li>
            <strong>R2</strong>: 0.3127
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.3505
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.1229
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate positive correlation
          </li>
        </ul>

        <div className={style.graphShort} id="FinalVFinalTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Final Test Grade vs. Time Spent on
            the Final
          </li>
          <li>
            <strong>Why it matters</strong>: Does the time spent studying for a
            test relate to the grade you get on that test?
          </li>
          <li>
            <strong>R</strong>: -0.1018
          </li>
          <li>
            <strong>R2</strong>: 0.0104{" "}
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: -0.0389
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.0015
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVFinalTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade Received vs. Time Spent on the
            Final, with weights the exam held in final grade determination
          </li>
          <li>
            <strong>Why it matters</strong>: Does the time spent studying for
            the final test relate to the grade you received at the end of the
            semester? (Does it really matter if you study your butt of during
            Dead Week?)
          </li>
          <li>
            <strong>R</strong>: -0.1254
          </li>
          <li>
            <strong>R2</strong>: 0.0157
          </li>
          <li>
            <strong>Conclusion</strong>: Weak negative linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVFinalPercent" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade Received vs. Final Percentage
          </li>
          <li>
            <strong>Why it matters</strong>: Does the grade received correlate
            to percentage the final is worth?
          </li>
          <li>
            <strong>R</strong>: -0.0818
          </li>
          <li>
            <strong>R2</strong>: 0.0067
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="AvGradeVFinalPercent" />
        <ul>
          <li>
            <strong>Relationship</strong>: Average Grade Received vs. Percentage
            the Final is Worth
          </li>
          <li>
            <strong>Why it matters</strong>: Is the average grade received in a
            class correlated to the percentage the final is actually worth?
          </li>
          <li>
            <strong>R</strong>: 0.1923
          </li>
          <li>
            <strong>R2</strong>: 0.037
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <p>
          Phew! That was a lot of information. Essentially, it appears that just
          as we learned in time spent vs. grade outcome,{" "}
          <strong>
            there is no or weak linear correlation between time spent on an exam
            vs the test and grade outcome
          </strong>
          . There also does not appear to be any linear correlation in terms of
          what the percentage is actually worth.
        </p>

        <p>
          However, it appears that there is a moderate positive correlation
          between the first and final test scores, which seems to suggest that I
          did not improve too much between tests. In addition, there is a strong
          positive linear correlation between the grade received and the final
          grade, which shows that the{" "}
          <strong>
            final grade is still an extremely important factor in the final
            grade distributions
          </strong>
          . It makes sense that students continue to study a lot to do well on
          their final. And in some sense,{" "}
          <strong>
            their overall grade can improve if they do well on the final
          </strong>
          .
        </p>

        <h3 id="correlation-units" className={style.heading}>
          Units, Class Sizes, & Grades
        </h3>
        <p>
          The next set of factors include how many units the class offered, and
          how big the class was in determining the final grade.
        </p>

        <div className={style.graphShort} id="UnitsVGrade" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units in the class vs. Grade received
          </li>
          <li>
            <strong>R</strong>: 0.077
          </li>
          <li>
            <strong>R2</strong>: 0.0060
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="UnitsVAvGrade" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units in the class vs. the average
            grade received
          </li>
          <li>
            <strong>R</strong>: -0.06
          </li>
          <li>
            <strong>R2</strong>: 0.0036
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="UnitsVAvTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units vs. the average time I spent in
            the class
          </li>
          <li>
            <strong>Why it matters</strong>: At Berkeley, there is a saying that
            students must spend about 4 times as many units of the class. Thus,
            if one class was 4 units, then students should spend about 16 hours
            a week studying, going to class, office hours, etc. Is this true?
          </li>
          <li>
            <strong>R</strong>: 0.3478
          </li>
          <li>
            <strong>R2</strong>: 0.121
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: 0.4369
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.1909
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate positive linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="GradeVSize" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs the class size
          </li>
          <li>
            <strong>Why it matters</strong>: One of the major plusses of other
            colleges is the fact that there is a "low student to faculty ratio".
            Because Berkeley is such a bigger school, do class sizes have an
            impact on grade ratio?
          </li>
          <li>
            <strong>R</strong>: -0.4147
          </li>
          <li>
            <strong>R2</strong>: 0.172
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: -0.3749
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.1406
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate negative linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="AvGradeVSize" />
        <ul>
          <li>
            <strong>Relationship</strong>: Average grade received vs the class
            size
          </li>
          <li>
            <strong>Why it matters</strong>: One of the major plusses of other
            colleges is the fact that there is a "low student to faculty ratio".
            Because Berkeley is such a bigger school, do class sizes have an
            impact on grade ratio? In the context of averages.
          </li>
          <li>
            <strong>R</strong>: -0.3949
          </li>
          <li>
            <strong>R2</strong>: 0.156
          </li>
          <li>
            <strong>R (Outliers removed)</strong>: -0.3436
          </li>
          <li>
            <strong>R2 (Outliers removed)</strong>: 0.1181
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate negative linear correlation
          </li>
        </ul>

        <p>
          Overall, it appears that there isn't a correlation between units and
          the grade received. However, it appears that the notion that{" "}
          <strong>
            students need to spend more time on a higher unit course does hold
            true, but not by too much
          </strong>{" "}
          (only a moderate positive correlation). Finally, there does appear to
          be{" "}
          <strong>
            some negative impact of class size and the grade received in the
            class.
          </strong>
        </p>

        {/* <!-- OTHER TIME --> */}
        <h2 id="other-time" className={style.heading}>
          Other Time: Non-Academic Factors Affect Productivity and GPA
        </h2>
        <p>
          Now that we've explored certain aspects of how our grades turn out
          based on chosen factors such as how many units we take, how big the
          class is, or how much time we study; what about the other more human
          factors like having fun, sleeping, planning, job hunting, and
          participating in activities? I take each one in turn.
        </p>

        <p>
          Note: There are only 8 data points here, so it's harder to make
          conclusions from sparse data.
        </p>

        <h3 id="other-time-fun" className={style.heading}>
          Fun
        </h3>
        <p>
          I calculated "fun" as time spent on my hobbies like baking or doing
          jigsaw puzzles, hanging out with friends and family, hanging out with
          my boyfriend, and wasting time like playing games and watching TV.
          Each of these activities are logged in their respective calendars.{" "}
        </p>

        <p>There are two questions I am interested here, and they are:</p>
        <ul>
          <li>Does spending time unproductively result in lower results?</li>
          <li>
            Does having a significant other lower productivity and grades?
          </li>
          <li>Does "work hard, play hard" actually hold true?</li>
        </ul>
        <p>
          I measure this through the amount of time I spend versus units taken,
          grade, and how much time I spend on academics per semester.
        </p>

        <div className={style.graphShort} id="SemFun" />
        <p>
          Here's all the time I spent on fun. I didn't start a "hobbies" or
          "fun" section in Fall 2012, which is why I do not have any data on it.
          I started dating my boyfriend in Spring 2015, which is why there is a
          sudden spike in this category from Spring 2015 to Spring 2016.
        </p>

        <div className={style.graphShort} id="SemUnitsVFun" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units taken per semester vs. Time
            spent on fun
          </li>
          <li>
            <strong>Why it matters</strong>: Does units correlate with how much
            time I decide to have fun?
          </li>
          <li>
            <strong>R</strong>: -0.3389
          </li>
          <li>
            <strong>R2</strong>: 0.115
          </li>
          <li>
            <strong>R (Relationship removed)</strong>: -0.2636
          </li>
          <li>
            <strong>R2 (Relationship removed)</strong>: 0.0695
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate negative linear correlation,
            relationship removed weakens correlation
          </li>
        </ul>

        <div className={style.graphShort} id="SemGradeVFun" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time spent on fun
          </li>
          <li>
            <strong>Why it matters</strong>: Does the grade received relate to
            fun in any way?
          </li>
          <li>
            <strong>R</strong>: -0.0718
          </li>
          <li>
            <strong>R2</strong>: 0.005159
          </li>
          <li>
            <strong>R (Relationship removed)</strong>: -0.579
          </li>
          <li>
            <strong>R2 (Relationship removed)</strong>: 0.3352{" "}
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation, relationship
            removed created a strong negative linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="FunVTotalAcademicTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: How much time spent on fun vs. how
            much time spent on academics total
          </li>
          <li>
            <strong>Why it matters</strong>: Does fun and academic time vary?
          </li>
          <li>
            <strong>R</strong>: 0.2144
          </li>
          <li>
            <strong>R2</strong>: 0.046
          </li>
          <li>
            <strong>R (Relationship removed)</strong>: 0.4748
          </li>
          <li>
            <strong>R2 (Relationship removed)</strong>: 0.2254
          </li>
          <li>
            <strong>Conclusion</strong>: Moderage positive linear correlation,
            relationship removed created a stronger moderate positive
            correlation
          </li>
        </ul>

        <p>In conclusion:</p>
        <ul>
          <li>
            Does spending time unproductively result in lower results?:{" "}
            <strong>
              While correlation does not imply causation, it does appear that
              more time on fun does lower grades in some way
            </strong>
            .
          </li>
          <li>
            Does having a significant other lower productivity and grades?:{" "}
            <strong>
              Yes and no. When relationship data was removed, it appears to have
              strengthened the correlation between fun and academics and fun and
              GPA, but weakened in workload
            </strong>
            . This may be because my significant other was able to help me in
            some of my classes, and the time we spent hanging out were also
            times where we would work together as well.
          </li>
          <li>
            Does "work hard, play hard" actually hold true? Yes, and no.{" "}
            <strong>
              It appears that I took fewer units when I had more fun, but I also
              spent more time on fun while also spending more time on academics
            </strong>
            . Again, these are all moderate correlations, and only when I did
            not have my relationship. With my relationship, these numbers were
            stronger mostly.
          </li>
        </ul>

        <h3 id="other-time-sleep" className={style.heading}>
          Sleep
        </h3>

        <div className={style.graphShort} id="SemSleep" />
        <p>
          According to this data, I slept pretty consistently throughout each
          semester from 800 to 900 hours of sleep. Let's look into the
          specifics.
        </p>

        <div className={style.graphShort} id="SemUnitsVSleep" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units per semester vs. time slept
          </li>
          <li>
            <strong>Why it matters</strong>: Do units, or how much coursework
            you have, relate to how much you sleep?
          </li>
          <li>
            <strong>R</strong>: -0.01378
          </li>
          <li>
            <strong>R2</strong>: 0.00019
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="SemGradeVSleep" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time slept
          </li>
          <li>
            <strong>Why it matters</strong>: Is the grade outcome related to how
            much time you sleep?
          </li>
          <li>
            <strong>R</strong>: 0.3049
          </li>
          <li>
            <strong>R2</strong>: 0.093
          </li>
          <li>
            <strong>Conclusion</strong>: Moderate positive linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="SleepVTotalAcademicTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Time slept vs. time spent on
            academics
          </li>
          <li>
            <strong>Why it matters</strong>: Is sleeping related to how much
            time spent on academics?
          </li>
          <li>
            <strong>R</strong>: 0.0379
          </li>
          <li>
            <strong>R2</strong>: 0.0014
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>

        <p>
          One thing to note is that I didn't purposely experiment with my sleep
          schedule. While there can be correlations being drawn from the data,
          take it with a grain of salt.
        </p>

        <p>
          While there doesn't appear to be a linear correlation between how many
          units I take and how much I sleep, as well as between how much time I
          spend on academics and sleep, the grade received and how much I sleep
          is moderately correlated.{" "}
          <strong>
            Thus, it's important to sleep consistently, and it may have an
            effect on grades!
          </strong>
        </p>

        <h3 id="other-time-activities" className={style.heading}>
          Activities
        </h3>

        <p>
          Activities were a big part of my college experience. While I classify
          it as productive time, they were largely a release of stress and
          another way I could have fun at college. I ask the same questions here
          as in fun and sleep.
        </p>

        <div className={style.graphShort} id="SemActivities" />
        <p>
          I've written about{" "}
          <a href="https://advicefromahaasmajor.wordpress.com/2014/08/05/my-extracurriculars-and-past-affiliations/">
            my activities before Fall 2014
          </a>
          . I also interned at Go Overseas and worked part-time at Intera Growth
          Partners. After BCEC, BMC, and Perfect Fifth, I did a lot of teaching
          and tutoring in introductory computer science. I founded{" "}
          <a href="csmberkeley.github.io">Computer Science Mentors</a>, an
          organization focused on group tutoring in all introductory computer
          science courses. In total, I spent 670 hours in three semesters, which
          is a significant portion of my activities here.
        </p>

        <div className={style.graphShort} id="SemUnitsVActivities" />
        <ul>
          <li>
            <strong>Relationship</strong>: Units per semester vs time spent on
            activities
          </li>
          <li>
            <strong>Why it matters</strong>: Do units, or how much coursework
            you have, relate to how much you spend on activities?
          </li>
          <li>
            <strong>R</strong>: -0.5774
          </li>
          <li>
            <strong>R2</strong>: 0.333
          </li>
          <li>
            <strong>R (Fall 2014 removed)</strong>: -0.9065
          </li>
          <li>
            <strong>R2 (Fall 2014 removed)</strong>: 0.8217
          </li>
          <li>
            <strong>Conclusion</strong>: Strong negative linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="SemGradeVActivities" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade vs time spent on activities
          </li>
          <li>
            <strong>Why it matters</strong>: Is the grade outcome related to how
            much time you spend on activities?
          </li>
          <li>
            <strong>R</strong>: -0.493
          </li>
          <li>
            <strong>R2</strong>: 0.243
          </li>
          <li>
            <strong>R (Fall 2014 removed)</strong>: -0.9572
          </li>
          <li>
            <strong>R2 (Fall 2014 removed)</strong>: 0.9162
          </li>
          <li>
            <strong>Conclusion</strong>: Strong negative linear correlation
          </li>
        </ul>

        <div className={style.graphShort} id="ActivitiesVTotalAcademicTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Time spent on activities vs. time
            spent on academics
          </li>
          <li>
            <strong>Why it matters</strong>: Is activity time spent related to
            how much time spent on academics?
          </li>
          <li>
            <strong>R</strong>: -0.9203
          </li>
          <li>
            <strong>R2</strong>: 0.847
          </li>
          <li>
            <strong>Conclusion</strong>: Strong negative linear correlation
          </li>
        </ul>

        <p>
          Essentially, this data shows that{" "}
          <strong>
            everything is strongly negatively correlated with activities
          </strong>
          . Apparently without Fall 2014, I spend significantly less time on
          academics, my grades are lower, and my workload is lower if I have
          more activities.
        </p>

        <p>
          However, I also want to point out that there was a reason that a
          semester like Fall 2014 exists. It was one of my favorite semesters,
          and while it was the most crazy, I did not receive a low GPA or a
          lower unit count, as a result. Thus, we cannot explain all these
          outcomes as a result to activities. In addition, I would not turn back
          the time and spend less time on activities, as this was one of my
          favorite parts of college.
        </p>

        <h3 id="other-time-planning" className={style.heading}>
          Planning
        </h3>

        <p>
          I'm really big on planning. I would frequently plan out my four year
          schedule, tear them down, and make new ones, as well as figure out
          best ways to represent data on Google Calendar and my multiple
          spreadsheets. The question is here, would it have been more effective
          to use this time to study more rather than to plan?
        </p>

        <div className={style.graphShort} id="SemPlanning" />
        <p>
          As shown, I frequently spent more time planning in the beginning of my
          academic career than the end. The Fall 2012 number is actually only
          the last three weeks, and so I am sure I planned more throughout that
          semester.
        </p>

        <p>
          Perhaps this worked out this way because I was more uncertain about my
          future at UC Berkeley or what my records of spreadsheets would like
          like than later semesters when I honed my craft. Now, I automate and
          use the same tools, which drastically reduces the amount of time to
          make them.
        </p>

        <div className={style.graphShort} id="SemGradeVPlan" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade vs. time spent planning
          </li>
          <li>
            <strong>Why it matters</strong>: Do these two factors relate?
          </li>
          <li>
            <strong>R</strong>: 0.00136
          </li>
          <li>
            <strong>R2</strong>: 0.00000185
          </li>
          <li>
            <strong>Conclusion</strong>: No linear correlation
          </li>
        </ul>
        <p>
          I've been told (and criticized) for the time I spent planning, and
          whether I would have been better off doing something else with that
          time. Well, there clearly isn't a linear correlation, so I think I'm
          in the clear.
        </p>

        <h3 id="other-time-jobs" className={style.heading}>
          Jobs
        </h3>

        <p>
          The potential lack of job after graduation weighed on my mind
          throughout college, and so I attempted to gain more experience by
          applying to internships, and full time opportunities my senior year.
          This was one of my most stressful experiences throughout college, and
          would like to showcase it here as well.
        </p>

        <div className={style.graphShort} id="SemJobs" />
        <p>
          Clearly I spent more time job hunting as time went on, as I felt more
          pressure to succeed.
        </p>

        <div className={style.graphShort} id="SemGradeVJobs" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade received vs. time spent on job
            hunting
          </li>
          <li>
            <strong>Why it matters</strong>: Do these two factors relate?
          </li>
          <li>
            <strong>R</strong>: 0.2387
          </li>
          <li>
            <strong>R2</strong>: 0.057
          </li>
          <li>
            <strong>Conclusion</strong>: Weak positive linear correlation
          </li>
        </ul>

        <p>
          There's a weak positive linear correlation between the grade received
          and this time. I don't have a great logical reason as to why this is
          the case, perhaps it's a coincidence.
        </p>

        <h3 id="other-time-summary" className={style.heading}>
          Putting it all Together
        </h3>
        <div className={style.graphShort} id="SemGradeVOtherTime" />
        <ul>
          <li>
            <strong>Relationship</strong>: Grade vs total time spent on
            non-academic activities
          </li>
          <li>
            <strong>Why it matters</strong>: Are non-academic activities
            important for the grade?
          </li>
          <li>
            <strong>R</strong>: -0.3618
          </li>
          <li>
            <strong>R2</strong>: 0.131
          </li>
          <li>
            <strong>R (Fall 2012 removed)</strong>: 0.1407
          </li>
          <li>
            <strong>R2 (Fall 2012 removed)</strong>: 0.0198
          </li>
          <li>
            <strong>Conclusion</strong>: Weak linear correlation
          </li>
        </ul>

        <p>
          Instead of isolating each piece, now I'm curious about whether all of
          the time I don't spend studying combined affects grades. with Fall
          2012 removed (because I didn't track for the whole period), the
          treadline gooes in the opposite direction, suggesting{" "}
          <strong>
            a weak correlation between grade earned and the collective sum of
            sleep, activities, fun, jobs, and planning.
          </strong>
        </p>

        {/* <!-- DEFLATION --> */}
        <h2 id="deflation" className={style.heading}>
          Grade Deflation: Does it Exist?
        </h2>
        <p>
          At UC Berkeley, grade deflation is a big thing that we stress over.
          The{" "}
          <a href="http://www.dailycal.org/2015/05/15/grade-deflation/">
            Daily Cal
          </a>{" "}
          wrote an article about it, and shows a graph that compares the average
          grades of Harvard, Yale, Stanford, and UC Berkeley. There, UC
          Berkeley's average grade has been consistently under their
          counterparts. Here, I'd like to take a different approach.{" "}
          <strong>
            Does Berkeley award lower grades than our percentages in the class?
          </strong>{" "}
          Are classes at Cal naturally more difficult? Or, do the other schools
          just curve everyone upwards? I can't speak very much to the last
          question, but I can provide my own data on the first one.
        </p>

        <div className={style.graphTall} id="GradeVPercent" />
        <p>
          Here is a chart of all of my grades and the percentages I received
          from each grade. Some of them are estimated, but I did my best to ask
          each of my professors what I received in certain areas in case the
          numbers were not updated online. The blue trendline shows the
          correlation between these two aspects, and the coefficient of
          correlation is 0.7007 and the coefficient of determination is 0.491,
          which shows that there is a strong positive linear correlation between
          grade received and the percentage received (which makes sense).
        </p>

        <p>
          If there were no grade deflation or inflation, the line should be the
          thicker line you see here. This was calculated by assuming the minimum
          points for each grade are as follows:
        </p>
        <ul>
          <li>2.70 (B-) : 80%</li>
          <li>3.00 (B) : 82%</li>
          <li>3.30 (B+) : 86%</li>
          <li>3.70 (A-) : 90%</li>
          <li>4.00 (A) : 92%</li>
        </ul>
        <p>And the maximum grade are as follows:</p>
        <ul>
          <li>2.70 (B-) : 81.9%</li>
          <li>3.00 (B) : 85.9%</li>
          <li>3.30 (B+) : 89.9%</li>
          <li>3.70 (A-) : 91.9%</li>
          <li>4.00 (A) : 100%</li>
        </ul>
        <p>
          I took the average of these points and extended the thickness. Thus,
          the red line encapsulates all possible grades from their percentages
          received if grades were given on such scale. The red points are these
          averages.
        </p>

        <p>
          As you can see, the majority of grades received falls under the red
          line, which shows that in reality, many grades are given out not by
          the hard set percentage, but perhaps from the curve in the class. Yes,
          these percentages are much lower, but classes purposefully give
          students a higher grade due to the difficulty of the class itself.{" "}
          <strong>
            Perhaps there isn't so much of a grade deflation as we make it to
            be, as professors purposefully increase grades to accomodate this.
          </strong>
        </p>

        <p>
          One thing I want to connect to this analysis is class size. Above, I
          mention that small class sizes is one of the factors that Ivys boast
          about, and here we've discovered that there is a moderate negative
          correlation between the two.{" "}
          <strong>
            Perhaps one of the reasons UC Berkeley is known for "grade
            deflation" because the schools we are compared to are those with
            small class sizes?
          </strong>{" "}
          Just a thought.
        </p>

        <h2 id="findings">What Can You Take Away From All This?</h2>
        <p>
          Once again, this is solely about my data, and cannot be concluded
          about everyone. However, a certain grade in the class isn't just
          because of this-or-this, there is a wide variety of factors that play
          into a final grade, like how much time you study, and sleep. It's
          about the combination of points that create a final product.
        </p>

        <h3 className={style.heading}>Findings</h3>
        <p>TLDR; here are the results of my research.</p>

        <p>Answers to Common Questions:</p>
        <ul>
          <li>
            <strong>
              Does the time spent on academics relate to the grade you get in
              the class?
            </strong>
            : Unfortunately, it appears that time spent on classes, studying and
            homework, going to office hours, and the extra time spent in the
            beginning of the semester has no linear correlation with the grades
            received. However, this is because classes are bimodal: some classes
            require lots of studying (because I don't get the material, and thus
            don't do as well) and others don't need studying (because I already
            get the material, and thus do well). This also applies to studying
            for tests.
          </li>
          <li>
            <strong>
              Can you improve in the class if you do poorly in the beginning?
            </strong>
            : The good thing is that it appears the final test is a very strong
            influencer in the grade you get at the end. The bad thing is that
            there is a moderate positive correlation between the first and last
            test, which suggests that doing well on the final after doing poorly
            on the first test is very difficult to do (but still possible!).
          </li>
          <li>
            <strong>
              If a class has more units, does that mean I have to spend more
              time in the class?
            </strong>{" "}
            (e.g. 4 units requires 16 hours a week of time): There's a moderate
            positive linear correlation, which does suggest that the more units
            a class is, the more time you'd need to spend on it. Since it's only
            moderate, it really depends on the class and potentially your
            understanding of the material itself.
          </li>
          <li>
            <strong>Does class size have an impact on grade received?</strong>:
            There's a moderate negative linear correlation between the two,
            which suggests that the more people in the class, the higher
            tendency it is to not do so well.
          </li>
          <li>
            <strong>
              Does spending time unproductively result in lower results?
            </strong>
            : While correlation does not imply causation, it does appear that
            more time on fun does lower grades in some way.
          </li>
          <li>
            <strong>
              Does having a significant other lower productivity and grades?
            </strong>
            : Yes and no. When relationship data was removed, it appears to have
            strengthened the correlation between fun and academics and fun and
            GPA, but weakened in workload. This may be because my significant
            other was able to help me in some of my classes, and the time we
            spent hanging out were also times where we would work together as
            well.
          </li>
          <li>
            <strong>Does "work hard, play hard" actually hold true?</strong>:
            Yes, and no. It appears that I took fewer units when I had more fun,
            but I also spent more time on fun while also spending more time on
            academics. Again, these are all moderate correlations, and only when
            I did not have my relationship. With my relationship, these numbers
            were stronger mostly.
          </li>
          <li>
            <strong>
              Does the amount of sleep you get have a relationship on the grade
              received, productivity, and workload?
            </strong>
            : There's no linear correlation between sleep and workload, or sleep
            and productivity. However, there does appear to be a moderate
            positive correlation between sleep and the grade received!
          </li>
          <li>
            <strong>Are activities a good use of my time?</strong>: Definitely.
            Despite the fact that activities and workload, productivity, and
            grades are all strongly negatively correlated, activities made me
            feel better and have more fun.
          </li>
          <li>
            <strong>Is planning a good use of my time?</strong>: There doesn't
            appear to be a linear correlation between the amount I planned and
            my GPA, so it didn't hinder me in any way.
          </li>
          <li>
            <strong>Is job hunting hindering my grades?</strong>: There's a
            strange weak positive linear correlation between job hunting and the
            grade received. I don't really know what this means, but it is what
            it is.
          </li>
          <li>
            <strong>Is there grade deflation at UC Berkeley?</strong>: Maybe.
            While the percentages students receive in class suggest that
            professors are curving classes in order for students to get
            reasonable grades, the fact that our class sizes are generally
            larger than other universities like Harvard or Stanford suggest that
            the possibility that there may be.
          </li>
        </ul>

        <p>
          These results display only a 2-way relationship between factors and
          grades. Again,{" "}
          <strong>all of these factors impact the final grades.</strong> All I
          can do is isolate the findings and compare them against each other.
        </p>

        <h3 className={style.heading}>Concluding Remarks</h3>
        {/* <!-- copied from medium --> */}
        <p>
          There are a lot of different factors at play when it comes to the
          final grades: how much time you sleep, have fun, study, go to class,
          test scores, etc. However, it is important to note that most likely it
          will not just be one of these factors that make or break your grade.
          They’re all important and work together to present your results at the
          end.
        </p>

        <p>
          Here are some recommendations I’ve found from this analysis, and
          perhaps you’d find them helpful:
        </p>

        <ul>
          <li>
            <strong>Senioritis is bound to happen. </strong>Be wary of this so
            that nothing comes up to surprise you!
          </li>
          <li>
            <strong>Confidence is important for successful academics.</strong>{" "}
            When you’re nervous about a class and prepare in advance, being able
            to stand on equal footing as other classmates and feeling confident
            about your progress and achievement is half the battle. Do as much
            as you can to be confident while in your classes, and if this is to
            study beforehand or study like crazy for the final, do it. (Even if
            it doesn't have a correlation with the outcome.)
          </li>
          <li>
            <strong>
              Regardless of how much the final assignment is weighted, your
              performance on it is surprisingly telling to how you will do in
              the class as a whole.
            </strong>{" "}
            Some classes use that result to curve your grade heavily, even if
            that assignment was only worth 10%. Do not underestimate it. For the
            most part, however, one assignment is not your whole grade, so do
            not worry if one grade wasn’t too good.
          </li>
          <li>
            <strong>Do what you love.</strong> While activities and work appear
            to be the reason why my grades were low, I wouldn’t choose to
            participate less simply for these reasons. I gained so much and
            loved what I was doing that grades were not a huge motivation for
            such a decrease.
          </li>
          <li>
            <strong>
              The time you spend studying and what you actually get at the end
              of the semester actually vary widely.
            </strong>{" "}
            Be sure to study until you understand the material, not bang your
            head against the wall and pretend to be studying (I promise, this
            doesn’t help).
          </li>
          <li>
            <strong>
              While there’s no strong correlation between grades and factors
              such as time spent planning, job hunting, and dating; it’s
              important to keep other factors such as sleep and studying
              consistent for there to produce good results.
            </strong>{" "}
            So definitely keep the first factors at moderation, and keep
            sleeping and studying normally.
          </li>
          <li>
            <strong>
              Recording your assignment/test results and the averages of those
              help keep you on track to the grade you think you’d receive.
            </strong>{" "}
            It will also keep you from worrying about grade deflation.
          </li>
          <li>
            <strong>
              Just because there's a strong correlation between two factors,
              doesn't necessarily mean you will have the same outcome, or that
              one semester or one class will definitely fit that pattern.
              (Correlation does not mean causation!)
            </strong>
          </li>
        </ul>

        <p>
          What do you think about this data and the conclusions I’ve presented
          here? I encourage all comments and look forward to an open discussion.
          I welcome anyone who'd like to discuss further about my results to
          comment and read about more feelings here. If you'd like the data,
          feel free to contact me as well.
        </p>
      </div>
    </div>
  );
}
