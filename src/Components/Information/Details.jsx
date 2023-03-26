import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import './Details.scss'

const Details = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <div className='details' id='details'>
            <h1 style={{ letterSpacing: '0.1rem', color: "#FFb3df", fontWeight: "bold" }}>About MySelf</h1>
            <div className='wrapper'>
                <div className=" right count-box" data-aos="slide-right">
                    <h4 className="hobbies">My Hobbies</h4>
                    <div className="grid btn-shadow">
                        <div className="item-1 text-center">
                            <h1 className="">
                                <img src="https://img.icons8.com/office/1x/paint-palette.png" alt="" width="30px" height="30px" />
                            </h1>
                            <span className="text-gray text-sm ">Drawing</span>
                        </div>
                        <div className="item-1 text-center">
                            <h1 className="">
                                <img src="https://img.icons8.com/offices/1x/airplane-take-off.png" alt="" width="30px" height="30px" />
                            </h1>
                            <span className="text-gray text-sm ">Travelling</span>
                        </div>
                        <div className="item-1 text-center">
                            <h1 className="">
                                <img src="https://img.icons8.com/color/1x/cycling-mountain-bike.png" alt="" width="30px" height="30px" />
                            </h1>
                            <span className="text-gray text-sm ">Cycling</span>
                        </div>
                        <div className="item-1 text-center">
                            <h1 className="">
                                <img src="https://img.icons8.com/nolan/1x/console.png" alt="" width="30px" height="30px" />
                            </h1>
                            <span className="text-gray text-sm ">Coding</span>
                        </div>
                    </div>
                </div>
                <div className='left' data-aos="slide-left">
                    <h5 style={{ letterSpacing: '0.1rem', color: "#FFB3df", fontWeight: "bold", paddingTop: "2rem", borderBottom: "2px #ff9f9f solid", }}>Thank You For Your Visit</h5>
                    Hello, my name is Zaigum and I am thrilled to introduce myself as a fresh software developer with a keen interest in the MERN stack (MongoDB, Express, React, and Node.js).  I have recently graduated with a degree in Electrical and Electronics, I am enthusiastic about leveraging my knowledge and skills to develop cutting-edge web applications.I have completed various projects that demonstrate my abilities in these technologies.Now I am eager to apply my knowledge and skills in real-world projects and I am excited to continue learning and growing in this field. I possess a strong work ethic and a can-do attitude that drives me to continuously learn and improve. As a creative person, quick learner and a team player, I am confident that I can make a valuable contribution to any development team.
                </div>
            </div>
        </div>
    )
}

export default Details
