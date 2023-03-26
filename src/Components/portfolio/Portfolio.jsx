import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import './Portfolio.scss'
import Footer from '../Footer/Footer'
const Portfolio = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div className="portfolio" id="portfolio">
      <h1 style={{ letterSpacing: '0.1rem', color: "#FFB3C1", fontWeight: "bold", }}>Certificates</h1>
      <div className='certificates'>
        <div className="leftWing" data-aos="slide-right">
          <img src={require("../../assets/banner/Certification.png")} alt="" width="100%" height="100%" />
        </div>
        <div className="rightWing" data-aos="slide-left">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Portfolio