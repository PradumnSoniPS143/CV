import { useState } from "react";
import "./App.css";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>


      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <div>


            <h1 className="name">
              Pradumn Verma{" "}
              <a
                href="https://www.linkedin.com/in/pradumn-verma-49533b156"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              {" | "}
              <a
                href="https://github.com/PradumnSoniPS143"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                GitHub
              </a>
              {" | "}
              <a
                href="/Pradumn_Verma_Resume.pdf"
                download
                className="download-btn"
              >
                Download Resume
              </a>
            </h1>


            <p className="title">Software Developer</p>
          </div>

          <div className="contact">
            <p>📍 Gurgaon, Haryana, India</p>
            <p>📧 pradumn.soni.143@gmail.com</p>
            <p>📞 +91 7985772080</p>
          </div>
          <button
              className="dark-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
      </header>

      {/* SUMMARY */}
      <section className="section">
        <div className="container grid">
          <div className="summary">
            <h2>Professional Summary</h2>
            <p>
              Software Developer with strong experience in building secure,
              responsive, and scalable web applications using PHP, JavaScript,
              MySQL, Java, and modern frontend practices. Proven ability to
              deliver production-ready systems used by real clients with focus
              on performance and security.
            </p>
          </div>

          <div className="card">
            <h3>Core Skills</h3>
            <ul className="skills">
              <li>HTML & CSS</li>
              <li>React</li>
              <li>Git & Github</li>
              <li>JavaScript</li>
              <li>Core Java</li>
              <li>MySQL / PostgreSQL</li>
              <li>JDBC</li>
              <li>OOPS</li>
              <li>Hibernate</li>          
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section light">
        <div className="container">
          <h2>Professional Experience</h2>

          <div className="card">
            <h3>Web Developer</h3>
            <p className="muted">
              Flackery Studio OPC Pvt. Ltd. | Feb 2024 – Jul 2024 | Noida
            </p>
            <ul>
              <li>
                Developed production-grade web applications using HTML, CSS,
                JavaScript, PHP, and MySQL.
              </li>
              <li>
                Designed secure database schemas and access control.
              </li>
              <li>
                Implemented full responsive layouts.
              </li>
              <li>
                Deployed applications on Hostinger.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Web Developer</h3>
            <p className="muted">
              Guruji Training & Consultancy Services | Aug 2023 – Jan 2024 | Faridabad
            </p>
            <ul>
              <li>
                Built responsive web applications using HTML, CSS, JavaScript,
                PHP, and MySQL.
              </li>
              <li>
                Optimized database schemas.
              </li>
              <li>
                Handled production deployment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <h2>Key Projects</h2>

          <div className="project-grid">

            <div className="card">
              <h3>
                Company Website –{" "}
                <a
                  href="https://flackerystudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flackery Studio
                </a>
              </h3>
              <ul>
                <li>
                  Developed and managed the official company website using HTML, CSS,
                  PHP, MySQL, and JavaScript.
                </li>
                <li>
                  Showcased company services, portfolio, and testimonials to improve
                  client engagement.
                </li>
                <li>
                  Implemented responsive design for seamless experience across devices.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Portfolio Websites – Expo Saga</h3>
              <ul>
                <li>
                  Developed multiple regional websites for Expo Saga ensuring brand
                  consistency across regions.
                </li>
                <li>
                  Built using HTML, CSS, PHP, MySQL, and JavaScript with dynamic content.
                </li>
                <li>
                  Websites deployed for{" "}
                  <a href="https://exposaga.com/" target="_blank" rel="noopener noreferrer">India</a>,{" "}
                  <a href="https://www.exposaga.us/" target="_blank" rel="noopener noreferrer">USA</a>,{" "}
                  <a href="https://www.exposaga.de/" target="_blank" rel="noopener noreferrer">Germany</a>.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>
                Informative Website –{" "}
                <a
                  href="https://gtconsulex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GT Consulex (GTCS)
                </a>
              </h3>
              <ul>
                <li>
                  Built an informative business website using HTML, CSS, PHP, MySQL,
                  and JavaScript.
                </li>
                <li>
                  Simplified certification and license application processes for users.
                </li>
                <li>
                  Improved user experience using secure forms, FAQs, and clear workflows.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3>Travel Recommendation System</h3>
              <ul>
                <li>
                  Developed a travel recommendation system using Python (Flask),
                  MongoDB, HTML, CSS, and JavaScript.
                </li>
                <li>
                  Provided personalized travel suggestions based on user preferences.
                </li>
                <li>
                  Included user authentication and an admin dashboard for management.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="section light">
        <div className="container">
          <h2>Education</h2>
          <p><strong>MCA</strong> – Sikkim University (2021 – 2023)</p>
          <p><strong>BCA</strong> – School of Management Sciences, Varanasi (2017 – 2020)</p>
          <p><strong>Intermediate</strong> – Modern Academy Sr. Secondary School (2015 – 2017)</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Pradumn Verma · Software Developer Portfolio
      </footer>

    </div>
  );
}
