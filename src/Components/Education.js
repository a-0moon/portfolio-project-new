import React, { useState } from 'react';
import './Education.css';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaJsSquare } from 'react-icons/fa';
const Education = () => {
    const [education, setEducation] = useState([
        { language: 'HTML', start: 'October 2022', end: '  November 2022', Place: 'CTI Center' },
        { language: 'CSS', start: 'November 2022', end: 'December 2022', Place: 'CTI Center' },
        { language: 'Bootstrap', start: ' Feburary 2023', end: 'March 2023', Place: 'CTI Center' },
        { language: 'JavaScript', start: 'March 2023', end: 'May 2023', Place: 'CTI Center' },
        { language: 'React', start: 'May 2023', end: 'December 2023', Place: 'CTI Center' },
        { language: 'PYTHON', start: 'May 2023', end: 'July 2023', Place: 'Uopeople Academy' },
    ]);

    return (
        <div id='education' className='Education-page'>
            <h1>Education</h1>
            <div className="education-container" >
                {education.map((item, index) => (
                    <div className="education-card" key={index}>
                        <div className="education-icon">
                            {item.language === 'HTML' && <i><FaHtml5 /></i>}
                            {item.language === 'CSS' && <i><FaCss3Alt /></i>}
                            {item.language === 'Bootstrap' && <i> <FaBootstrap /></i>}
                            {item.language === 'JavaScript' && <i><FaJsSquare /></i>}
                            {item.language === 'React' && <i > <FaReact /></i>}
                            {item.language === 'PYTHON' && <i><FaPython /></i>}
                        </div>
                        <div className="education-details">
                            <h3><strong>{item.language}</strong></h3>
                            <p><strong>{`${item.start} - ${item.end}`}</strong></p>
                            <h4><strong>{`(${item.Place})`}</strong></h4>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Education;
