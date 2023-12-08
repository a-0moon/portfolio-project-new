import React, { useState } from 'react';
import './Skill.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaBootstrap, } from 'react-icons/fa';
const Skill = () => {
    const [htmlSkill] = useState(95);
    const [cssSkill] = useState(85);
    const [bootstrapSkill] = useState(70);
    const [jsSkill] = useState(60);
    const [PythonSkill] = useState(20);
    const [reactSkill] = useState(40);


    return (

        <div id="skills" className="skill-page">
            <div className='skill-par'>

                <p className='ps'>In developing</p>
                <p className='ps'>And Designing</p>
                <p>
                    by working on different projects and doing different challanges,<br /> I attempt to develope and design beautiful and creative websites.
                </p>
            </div>

            <div >
                <div className="skill">
                    <h1>Skills</h1>
                    <div className="skill-icon"><i><FaHtml5 /></i> HTML</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${htmlSkill}%` }}>90%</div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-icon"><i><FaCss3Alt /></i> CSS</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${cssSkill}%` }}>85%</div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-icon"><i><FaBootstrap /></i> Bootstrap</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${bootstrapSkill}%` }}>70%</div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-icon"><i><FaJsSquare /></i> JavaScript</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${jsSkill}%` }}>60%</div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-icon"><i><FaPython /></i>Python</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${PythonSkill}%` }}>20%</div>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-icon"><i><FaReact /></i>React</div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${reactSkill}%` }}>40%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;