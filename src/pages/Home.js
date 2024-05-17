import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Alexandru Gonzales </h2>
        <div className="prompt">
          <p>3rd Year Cybersecurity Student at CSUF</p>
        </div>
      </div>
      <div className="skills">
        <h1> Introduction...</h1>
        <ol className="list">
          <li className="item">
            <h2> Goals </h2>
            <span>
            The primary focus of my career path is to be able to use the skills I have gained and continue to gain throughout my
            education in Computer Science. I am seeking an Internship, specifically within the field of Cybersecurity, in the hopes of
            learning and assisting others in the development and maintenance of secure & safe technology. While I am still in the
            process of completing my studies, the knowledge I have gained up to this point has served to assist me in numerous Real
            World applications. In addition to my studies, I have volunteered and participated in several different programs focusing
            on the environment and developing leadership & technological skills which have aided me in both my studies and
            personal projects.
            </span>
          </li>
          <li className="item">
            <h2>Education</h2>
            <span>
              I have achieved a Highschool Diploma from Escondido Charter Highschool and am currently in the midst of achieving my BS in Computer Science with a concentration in Cybersecurity </span>
          </li>
          <li className="item">
            <h2>Contact</h2>
            <div className="contact-info">Email: alexandrugonzales@csu.fullerton.edu</div>
            <div className="contact-info">LinkedIn: <a href="https://www.linkedin.com/in/alexandru-gonzales-b8ba59301" target="_blank" rel="noopener noreferrer">Alexandru Gonzales</a></div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
