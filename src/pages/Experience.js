import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Object Oriented Programming
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          CPSC 120, CPSC 121, CPSC 131, CPSC 223P, CPSC 349
          </h4>
          <p> Experience in object oriented programming, specifically in the languages of C++, Python, and Javascript. Latest project was created in Python and can be viewed under "CPSC 223 Final Project" in the Projects section</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Development
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            CPSC 349, CPSC 332
          </h4>

          <p> Experience in the creation of full-stack platforms, with functional front and backend reliant on a SQL Database. Can be downloaded and viewed under "CPSC 332 Final Project" in the Projects section</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Network Security Analysis
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CPSC 253, CPSC 455
          </h4>
          <p>Experience in auditting the security of Wireless Network through the usage of wireshark, aircrack, hashcat, and various other pre-developed security auditing scripts.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
