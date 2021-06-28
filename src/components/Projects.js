import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';



export default function Projects() {
    

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
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Fade bottom duration={1000} delay={300} distance="0px">
                        <h2 className="section-title">Projects</h2>
                    </Fade>
                    
                    <Row >
                        <Col lg={4} sm={12}>
                        <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={500}
                            distance="30px"
                        >
                            <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">{'Project Title'}</h3>
                            <div>
                                <p>
                                {
                                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--hero"
                                href={'#!'}
                            >
                                See Live
                            </a>

                            { (
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn text-color-main"
                                
                                >
                                Source Code
                                </a>
                            )}
                            </div>
                        </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="project-wrapper__image">
                            <a
                                href={'#!'}
                                target="_blank"
                                aria-label="Project Link"
                                rel="noopener noreferrer"
                            >
                                <Tilt
                                options={{
                                    reverse: false,
                                    max: 8,
                                    perspective: 1000,
                                    scale: 1,
                                    speed: 300,
                                    transition: true,
                                    axis: null,
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                                >
                                <div data-tilt className="thumbnail rounded">
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624882171/Portfolio/magmaresults_ojlbs6.png"} width="650" height="325"></img>
                                </div>
                                </Tilt>
                            </a>
                            </div>
                        </Fade>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={4} sm={12}>
                        <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={500}
                            distance="30px"
                        >
                            <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">{'Project Title'}</h3>
                            <div>
                                <p>
                                {
                                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--hero"
                                href={'#!'}
                            >
                                See Live
                            </a>

                            { (
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn text-color-main"
                                
                                >
                                Source Code
                                </a>
                            )}
                            </div>
                        </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="project-wrapper__image">
                            <a
                                href={'#!'}
                                target="_blank"
                                aria-label="Project Link"
                                rel="noopener noreferrer"
                            >
                                <Tilt
                                options={{
                                    reverse: false,
                                    max: 8,
                                    perspective: 1000,
                                    scale: 1,
                                    speed: 300,
                                    transition: true,
                                    axis: null,
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                                >
                                <div data-tilt className="thumbnail rounded">
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624882171/Portfolio/greenfuelmitpins_ohvait.png"} width="650" height="325"></img>
                                </div>
                                </Tilt>
                            </a>
                            </div>
                        </Fade>
                        </Col>
                    </Row>
                    <Row >
                        <Col lg={4} sm={12}>
                        <Fade
                            left={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={500}
                            distance="30px"
                        >
                            <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">{'Project Title'}</h3>
                            <div>
                                <p>
                                {
                                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--hero"
                                href={'#!'}
                            >
                                See Live
                            </a>

                            { (
                                <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn text-color-main"
                                
                                >
                                Source Code
                                </a>
                            )}
                            </div>
                        </Fade>
                        </Col>
                        <Col lg={8} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="project-wrapper__image">
                            <a
                                href={'#!'}
                                target="_blank"
                                aria-label="Project Link"
                                rel="noopener noreferrer"
                            >
                                <Tilt
                                options={{
                                    reverse: false,
                                    max: 8,
                                    perspective: 1000,
                                    scale: 1,
                                    speed: 300,
                                    transition: true,
                                    axis: null,
                                    reset: true,
                                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                                }}
                                >
                                <div data-tilt className="thumbnail rounded">
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624884703/Portfolio/randfood_jtsasd.gif"} width="150" height="325"></img>
                                </div>
                                </Tilt>
                            </a>
                            </div>
                        </Fade>
                        </Col>
                    </Row>
                    
               
                </div>
            </Container>
        </section>
    )
}
