import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import './Education.scss'
const Education = () => {
    const education = [
        {
            cgpa: '8.98 cgpa',
            occupation: `Bachelor's of Technology`,
            university: 'K.C.N.I.T, Banda, Uttar-Pradesh',
            branch: 'Electrical & Electronics',
        },
        {
            cgpa: '6.0 cgpa',
            occupation: 'Higher Secondary',
            university: 'V.N.M.P.S, Banda, Uttar-Pradesh',
            branch: 'PCM',
        },
        {
            cgpa: '10.0 cgpa',
            occupation: 'High School',
            university: 'V.N.M.P.S, Banda, Uttar-Pradesh',
            branch: 'PCM',
        },
    ]
    const experience = [
        {
            role: `Focus area: Full Stack Internship (MERN)`,
            role_points: ["Duration: March 2022 to July 2022", "Company: Edureka"],
            training: `Training and Skills Acquired`,
            training_points: ["Virtual MERN Full Stack Training and Product Development", "Gained understanding and used ReactJS, HTML5, CSS3 and SASS for the frontend", "Gained understanding and used NodeJS and ExpressJS for the backend", "Used MongoDB as the database technology", "Acquired different tool and technology experience like postman.", "Acquired hands-on experience by doing projects in implementing the learned technologies"],
        },
        {
            role: `Focus area: Internet of Things (IoT)`,
            role_points: ["Duration: September 2021 to December 2021", "Company: Electrocus Solutions"],
            training: `Training and Skills Acquired`,
            training_points: ["Acquired understanding of the C,C++ and Arduino Integrated Development Environment (IDE)", "Learned to use and implement different Arduino modules in real-life scenarios and created multiple small circuits using the knowledge acquired", "Started learning the basics of networking and worked with a few tools to gain practical experience",]
        }
    ]
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <div className='container' id="experience">
            <section className='education' data-aos="fade-right">
                <h2><i className="bi bi-book-half"></i> Education</h2>
                <div className='column'>
                    {education && education.map((item, index) => {
                        let { university, occupation, cgpa, branch } = item;
                        return < div className='col' key={index}>
                            <h6><i className="bi bi-mortarboard"></i> {occupation}</h6>
                            <ul>
                                <li><i className="bi bi-dice-1-fill"></i> {cgpa} </li>
                                <li><i className="bi bi-dice-2-fill"></i> {branch}</li>
                                <li><i className="bi bi-dice-3-fill"></i> {university}</li>
                            </ul>
                        </div>
                    })}
                </div>
            </section >
            <section className='experience' data-aos="fade-left">
                <h2><i className="bi bi-briefcase-fill"></i> Experience</h2>
                <div className='column'>
                    {experience && experience.map((item, index) => {
                        return <div className='col' key={index}>
                            <ul>
                                <h6><i className="bi bi-bookmark"></i> Role: {item.role}</h6>
                                {item.role_points.map((point, index) => {
                                    return <li style={{ fontSize: "0.80rem" }}><i className={`bi bi-dice-${index + 1}-fill`}></i> {point}</li>
                                })}
                                <br />
                                <h6><i className="bi bi-align-end"></i> {item.training}</h6>
                                {item.training_points.map((point, index) => {
                                    return <li style={{ fontSize: "0.80rem" }}><i className={`bi bi-dice-${index + 1}-fill`}></i> {point}</li>
                                })}
                            </ul>
                        </div>
                    })}
                </div>
            </section>
        </div >
    )
}

export default Education
