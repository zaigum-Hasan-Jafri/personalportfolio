import "./Contact.scss"
import Aos from "aos";
import "aos/dist/aos.css"
import { featuredPort, otherPort, FrontendPort, BackendPort } from "../../portfolioData"
import { useEffect, useState } from "react";
const Contact = () => {
  const [select, setselect] = useState("A");
  const [data, setdata] = useState([]);
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[]);
  useEffect(() => {
    switch (select) {
      case "A":
        setdata(featuredPort);
        break;
      case "B":
        setdata(FrontendPort);
        break;
      case "C":
        setdata(BackendPort);
        break;
      case "D":
        setdata(otherPort);
        break;

      default:
        setdata(featuredPort);
        break;
    }
  }, [select]);

  return (
    <div className="contact " id='contact'>
      <h1 style={{ letterSpacing: '0.1rem', color: "#FFB3C1", fontWeight: "bold" }}>Tech. & Others Skills</h1>
      <div className="wrapper">
        <div className="contact-left" data-aos="slide-right">
          <ul>
            <li className={select === "A" ? "active" : ""} onClick={() => setselect("A")}>Featured</li>
            <li className={select === "B" ? "active" : ""} onClick={() => setselect("B")}>Frontend</li>
            <li className={select === "C" ? "active" : ""} onClick={() => setselect("C")}>Backend</li>
            <li className={select === "D" ? "active" : ""} onClick={() => setselect("D")}>Others</li>
          </ul>
          <div className="container-flex center">
            {
              data.map(item => (
                <div className="box" key={item.id}>
                  <div className="image-box">
                    <img src={item.img} alt="404 Error " />
                  </div>
                  <div className="content">
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.rating}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>

        <div className="contact-right grid-images" data-aos="slide-left">
          <div className="image-1"><h6 style={{ textAlign: 'left', color: 'wheat' }}>FrontEnd</h6></div>
          <div className="image-2"><h6 style={{ textAlign: 'right', color: 'wheat' }}>BackEnd</h6></div>
          <div className="image-3"><h6 style={{ textAlign: 'center' }}>UI Design</h6></div>
        </div>
      </div>
    </div>

  )
}

export default Contact