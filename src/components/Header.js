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
        <Navbar className="header" expand="sm" variant="dark">
            <Navbar.Brand className="brand" href="#"><img src="https://res.cloudinary.com/tobitgl/image/upload/v1624871653/Portfolio/ttobenunten_mpqktt.png" width="30" height="30" alt="Logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Text>
                    <Link to="about" smooth duration={1000}>
                        <div className="headertext">About</div>
                    </Link>
                </Navbar.Text>

                <Navbar.Text>
                    <Link to="projects" smooth duration={1000}>
                        <div className="headertext">Projects</div>
                    </Link>
                   
                </Navbar.Text>

                <Navbar.Text>
                    <Link to="hero" smooth duration={1000}>
                        <div className="headertext">Gallery</div>
                    </Link>
                    
                </Navbar.Text>

                <Navbar.Text>
                    <Link to="contact" smooth duration={1000}>
                        <div className="headertext">Contact</div>
                    </Link>
                
                </Navbar.Text>
                </Navbar.Collapse>
        </Navbar>
        </Fade>
       
       

      </Container>
    </footer>
    )
}
