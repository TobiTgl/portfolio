import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function About() {

  

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
  }, []);
    return (
        <section id="about">
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
            <h2 className="section-title">About</h2>
        </Fade>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/w_0.08,c_scale/v1625401388/Portfolio/bwerbungbw_uwfwan_1_l26pij.jpg"} alt="img" width="50%" height="100%"></img>
                </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    'Hello, my name is Tobias and I am a technology and management student from the south of Germany.'}
                </p>
                <p className="about-wrapper__info-text">
                  {
                    'On this website, I am showcasing some of the projects I was working on during my studies as well as some free time projects.'}
                </p>
                <p className="about-wrapper__info-text">
                  { 'Besides that, I have a great passion for photography. You can find a selection of my photos in the gallery & timelapse section.'}
                </p>
                {(
                  <span className="d-flex mt-3">
                       <Link to="contact" smooth duration={1000}>
                    <div
                      
                      className="cta-btn cta-btn--resume"
                
                    >
                      Contact
                    </div>
                    </Link>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
    )
}
