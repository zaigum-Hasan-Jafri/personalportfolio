import React, { useEffect } from "react"
import "./Intro.scss";
import Typewriter from "typewriter-effect";
import banner from '../../assets/banner/self1-removebg.png';
import logo from '../../assets/banner/header-img.svg';
import Button from "../ResumeButtton/Button";
const Intro = () => {  
  return (
    <div className="intro" id='intro'>
      <div className="left center-column">
        <img src={logo} alt="" className="intro-img" /> <br />
        <div className="center left-container">
          <h2 className="name">Zaigum Hasan Jafri<div className="name-rect"></div></h2>
        </div>
        <span className="typewriter-name"> I'm a
        </span>
        <Typewriter className="typewriter-main"
          options={{
            autoStart: true,
            loop: true,
            delay: 150,
            wrapperClassName: "typewriter-main",
            cursorClassName: "typewriter-cursor",
            pauseFor: 2000,
            strings: [
              " Devloper",
              " Student",
              "Logo-Creater",
              "UI|UX Designer"
            ],
            cursor: " ➤"
          }}
        />
        <a href={require("../../assets/Zaigum-Hasan-Jafri.pdf")} download="Zaigum-Hasan-Jafri_Resume" className="intro-icon"><Button /></a>
      </div>
      <div className="right center">
        <div className="img-container center" title="HI THERE, NICE MEETING YOU !">
          <img src={banner} alt="" />
        </div>
      </div>
    </div >
  )
}

export default Intro