import "./Topbar.scss"
import { Offcanvas, Nav } from 'react-bootstrap';
import { useState } from "react";
import logo from '../../assets/banner/New notification.png';
const Topbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className="topbar">
      <div className="wrapper between">
        <div className="left">
          <div className="logo center">
            <img src={logo} alt="" className="logo-img" /><a href="/" className="link">{'PoRtFoLiO.io'}</a>
          </div>
          <div className="navbar center">
            <Nav className="nav">
              <Nav.Item style={{ marginLeft: '19px', gap: "1rem" }}>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:miniarmorking@gmail.com" className="link">Mail: Zaigum Hasan</a>
              </Nav.Item>
              <Nav.Item style={{ marginLeft: '19px', gap: "1rem" }}>
                <i className="bi bi-telephone-fill"></i>
                <a href="tel:+918299130951" className="link">Contact: Zaigum</a>
              </Nav.Item>
            </Nav>
          </div>
          <div className="section">
            <a href="#intro" className="link">Home</a>
            <a href="#contact" className="link">Contact</a>
            <a href="#details" className="link">Details</a>
            <a href="#portfolio" className="link">Certificates</a>
            <a href="#experience" className="link">Experience</a>
          </div>
        </div>
        <div className="right center">
          <button type="button" onClick={handleShow} className='right-button'>
            <i className="bi bi-toggle2-off"></i>
          </button>
          <Offcanvas show={show} backdrop="static" placement='end' style={{ width: "4fit-content", borderBottom: "1px #5c0d0f solid" }} className="offcanvas">
            <Offcanvas.Header style={{ backgroundColor: "#f796a8", borderBottom: "1px #5c0d0f solid", display: "flex" }}>
              <Offcanvas.Title style={{ fontFamily: "Josefin Sans" }}><i className="bi bi-display-fill"></i></Offcanvas.Title>
              <span className="closebutton" onClick={handleClose}><i className="bi bi-toggle2-on"></i></span>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body">
              <Nav activeKey="/home" className="offcanvas-nav">
                <Nav.Item >
                  <Nav.Link href="#intro" className="link" title="Home">
                    <img src="https://img.icons8.com/ios/1x/home.png" alt="" width="30px" height="30px" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact" className="link" title="Skills">
                    <img src="https://img.icons8.com/pastel-glyph/256/laptop-coding.png" alt="" width="30px" height="30px" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#details" className="link" title="Profile">
                    <img src="https://img.icons8.com/ios/256/parse-resumes.png" alt="" width="30px" height="30px" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#portfolio" className="link" title="Certificates">
                    <img src="https://img.icons8.com/ios/1x/certificate.png" alt="" width="30px" height="30px" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#experience" className="link" title="Education & Experience">
                    <img src="https://img.icons8.com/ios/1x/book-reading.png" alt="" width="30px" height="30px" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <a href="mailto:miniarmorking@gmail.com" className="link" title="Contant-Mail">
                    <img src="https://img.icons8.com/ios/1x/gmail.png" alt="" width="30px" height="30px" />
                  </a>
                </Nav.Item>
                <Nav.Item>
                  <a href="tel:+918299130951" className="link" title="Contact-Number">
                    <img src="https://img.icons8.com/dotty/1x/call-male.png" alt="" width="30px" height="30px" />
                  </a>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  )
}

export default Topbar