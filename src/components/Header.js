import React, { useContext, useState, useEffect  } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';


export default function Header() {
    const [isDesktop, setIsDesktop] = useState(false);
        const [isMobile, setIsMobile] = useState(false);
      
        useEffect(() => {
          if (window.innerWidth > 769) {
            setIsDesktop(true);
            setIsMobile(false);
          } else {
            setIsMobile(true);
            setIsDesktop(false);
          }
        }, [])
    return (
       <footer className="footer navbar-static-bottom">
      <Container>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
        <Navbar className="header">
            <Navbar.Brand href="#home"><img src="https://res.cloudinary.com/tobitgl/image/upload/v1624617298/Portfolio/favicon_f2mfg6.pn" alt="Logo" /> </Navbar.Brand>
                <Navbar.Text>
                    <div className="headertext">About</div>
                </Navbar.Text>
                <Navbar.Text>
                    <div className="headertext">Projects</div>
                </Navbar.Text>
                <Navbar.Text>
                    <div className="headertext">Gallery</div>
                </Navbar.Text>
                <Navbar.Text>
                    <div className="headertext">Contact</div>
                </Navbar.Text>
        </Navbar>
        </Fade>
       
       

      </Container>
    </footer>
    )
}
