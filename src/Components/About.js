
import React, { useState } from "react";
import "./About.css";
import bg from '.././assets/diana.jpg'

export default function About() {

    const [milestones] = useState([
        {
            id: 1,
            title: "Started Learning Full Stack Development",
            date: "October 2022",

        },
        {
            id: 2,
            title: "Built First Frontend Application",
            date: "November 2023",

        },
    ]);

    const [achievements] = useState([
        {
            id: 1,
            title: "frontend developing Certification",
            date: "December 2023",

        },
        {
            id: 2,
            title: "python Certification",
            date: "   March 2022",

        },
    ]);

    return (
        <div id="about" className="about-container" >


            <h1><span className="about"> About me</span>  </h1>
            <img src={bg} alt="profile picture" className="img"></img>
            <p className="para">
                I am a web developer, and I am learning programming<br /> at CTI (Code To Inspire) center at Herat city.
                and <br />I have a great passion in developing different websites and<br /> working on different projects.

            </p>


            <div className="timeline-container">
                <h2> MY Milestones</h2>
                {milestones.map((milestone) => (
                    <div className="card" key={milestone.id}>
                        <h3>{milestone.title}</h3>
                        <p className="time">{milestone.date}</p>

                    </div>
                ))}
            </div>
            <div className="achievements-container ">
                <h2> My Certificates</h2>
                {achievements.map((achievement) => (
                    <div className="card" key={achievement.id}>
                        <h3>{achievement.title}</h3>
                        <p className="time">{achievement.date}</p>

                    </div>))}
            </div>
        </div>)
}
