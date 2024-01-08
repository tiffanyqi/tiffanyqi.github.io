import { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Tiffany Qi",
  description: "Tiffany Qi's personal website",
};

export default function Page() {
  return (
    <div className="body-container">
      <div className="section-container header">
        <div className="header-title">TIFFANY QI</div>
        <div className="body-description">
          Hi! I'm a fullstack engineer with a track record of getting things
          done. Currently focusing on providing delightful user experiences at{" "}
          <a href="https://www.mixpanel.com">Mixpanel</a>. Incessant data
          collector and organizational wizard. Was top on{" "}
          <a href="https://news.ycombinator.com/front?day=2017-01-28">
            Hacker News
          </a>{" "}
          once.
        </div>
      </div>

      <div className="section-container">
        <h2>About</h2>
        <p>
          I'll say it straight, my path to engineering was not a conventional
          one. I began halfway through college at{" "}
          <a href="https://www.berkeley.edu/">UC Berkeley</a> in 2014 simply
          curious about computer science. The intro class was really hard, but
          somehow I persevered, and became close with my computer science peers
          who understood the struggle. From there we created{" "}
          <a href="https://csmentors.berkeley.edu/">Computer Science Mentors</a>
          , a team of 100+ amazing volunteers furthering supporting the Computer
          Science department through tutoring and mentorship when the class
          enrollment billowed to over 2,000. The people here meant a lot to me
          and that was only the start of what was to come.
        </p>
        <p>
          It wasn't until 2017 when I joined{" "}
          <a href="https://www.mixpanel.com">Mixpanel</a> as a support engineer
          that I realized all of my life I just wanted to build and create
          things with my own two hands. Ever since I set foot at Mixpanel, all I
          was doing was developing side projects in my spare time filling some
          sort of gap in our team, and so I was fortunate to have been able to
          path to engineering in 2018.
        </p>
        <p>
          If you give something to build, I'll go and do it to the end. I enjoy
          filling the possible gaps in teams, and often take the role of
          impromptu lead simply through my extensive knowledge in what everyone
          is currently working on in the project and communicating obstacles and
          progress clearly. And while not flattering, I'm good at the glue work
          necessary to take the project to completion.
        </p>
        <p>
          Unfortunately, I'm not your standard developer who has been tinkering
          away on their PC creating games ever since they were 12. However, I
          bet my unconventional background, drive for completion, and role
          flexibility might surprise you just a bit.
        </p>
      </div>

      <div className="section-container">
        <h2>Experience</h2>
        <div className="portfolio-box">
          <div className="portfolio-box-title">
            Software Engineer, <a href="https://www.mixpanel.com">Mixpanel</a>
          </div>
          <div className="portfolio-box-date">Jan 2018 - Present</div>
          <div className="portfolio-box-description">
            Customer focused full stack software engineer using
            Typescript/Javascript (Panel) and Python (Django). I specialize in
            collaborating with design to build our vision and communicating
            exactly where we are in a project and taking a project to its
            completion. Some of my projects include:
            <ul>
              <li>
                <strong>Boards.</strong> Complete reshift of focus from a report
                centric to a dashboard centric Mixpanel. Built a large majority
                of the front-end experience.
              </li>
              <li>
                <strong>Users.</strong> Tech lead for the users page (formerly
                known as Explore) redesign. Architected and built around half of
                the new front-end experience.
              </li>
              <li>
                <strong>Content discovery.</strong> Improvements to search and
                how users discover content. Built the front-end experience.
              </li>
              <li>
                <strong>Festive mode.</strong> Pretty holiday theme. Took a
                random idea from nothing to completion in a single month:
                falling snow in the navigation and using a custom winter
                spinner. Very well received by customers, one of the highest
                engaged posts on social media.
              </li>
              <li>
                <strong>Impact report.</strong> Report that shows you user
                activity and conversion in relation to specific event. One of
                the main engineers on the project, focused on the front-end.
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-box-title">
            Support Engineer, <a href="https://www.mixpanel.com">Mixpanel</a>
          </div>
          <div className="portfolio-box-date">Oct 2016 - Apr 2018</div>
          <div className="portfolio-box-description">
            Delight customers with magic by solving challenging technical
            problems and empower users to learn from and develop actionable
            insights from their own data. Some of the projects I've done:
            <ul>
              <li>
                <strong>Onboarding app.</strong> Support's training guide during
                the onboarding process that shows their calendar, their
                milestones, and extra notes about a training using Javascript
                and Django
              </li>
              <li>
                <strong>Technical trainings.</strong> Develop technical
                trainings teaching new support engineers about our API
                endpoints, creating scripts, and implementing Mixpanel
                server-side.
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-box-title">
            Software Engineering Intern, Student Information Systems,{" "}
            <a href="https://www.berkeley.edu/">UC Berkeley</a>
          </div>
          <div className="portfolio-box-date">Jun 2016 - Oct 2016</div>
          <div className="portfolio-box-description">
            Full stack software engineer intern using Javascript and Ruby on
            Rails. I spearheaded the final exam schedule card feature, which was
            finally released in 2018. Also ideated an internal tool for
            management to track and communicate Cal Central changes to all users
            and stakeholders.{" "}
          </div>
        </div>
      </div>

      <div className="section-container">
        <h2>Notable Projects</h2>
        <div className="portfolio-box">
          <div className="portfolio-box-title">
            <a href="http://tablefortwo.herokuapp.com">Table for Two</a> (
            <a href="https://github.com/tiffanyqi/table-for-two">Github</a>)
          </div>
          <div className="portfolio-box-date">Apr 2017 - Dec 2017</div>
          <div className="portfolio-box-description">
            Matches coworkers from different departments and locations for lunch
            or coffee. Handles differing timezones and matching gracefully
            (Django, Python, HTML, JQuery/JS, Heroku, Google Calendar API,
            Google Plus API, CSS)
          </div>
        </div>
        <div className="portfolio-box">
          <div className="portfolio-box-title">
            <a href="https://hackernoon.com/a-college-students-individual-analysis-of-productivity-of-four-years-e51e5ec3af6?gi=6cd57b8a2383">
              A college student’s individual analysis of productivity of four
              years
            </a>
          </div>
          <div className="portfolio-box-date">June 2016</div>
          <div className="portfolio-box-description">
            Analyzed my productivity and drew correlations between four years of
            time, grade, and class data at UC Berkeley. Received over 57K views
            to date, and ranked Top 15 on{" "}
            <a href="https://news.ycombinator.com/front?day=2017-01-28">
              Hacker News
            </a>{" "}
            for ~5 hours (Python, Google Calendar API)
          </div>
        </div>
      </div>

      <div className="section-container contact">
        <h2>Contact and Other media</h2>
        <div>
          <div className="contact-button-container">
            <a
              className="contact-button"
              target="_blank"
              href="mailto:tiffany19qi@gmail.com"
            >
              <button>Email</button>
            </a>
            <a
              className="contact-button"
              target="_blank"
              href="http://www.github.com/tiffanyqi"
            >
              <button>Github</button>
            </a>
            <a
              className="contact-button"
              target="_blank"
              href="http://medium.com/@tiffanyqi"
            >
              <button>Medium</button>
            </a>
            <a
              className="contact-button"
              target="_blank"
              href="http://www.linkedin.com/in/tiffanyqi"
            >
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
