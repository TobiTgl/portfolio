import React, {useEffect, useState } from 'react';
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
                            <h3 className="project-wrapper__text-title">{'Magma Esports'}</h3>
                            <div>
                                <p>
                                {
                                    'The magma esports web application is a service that displays match information and results of the latest CS:GO & League of Legends esports matches. The application was developed as part of the web application course during my studies at the OAMK in Oulu in collaboration with my project group consisting of 4 members. The project was divided into frontend & backend developed including API & database integration.'}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            {/*<a
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
                            )}*/}
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
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624882171/Portfolio/magmaresults_ojlbs6.png"}  alt="img" width="100%" height="100%"></img>
                                </div>
                                </Tilt>
                            
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
                            <h3 className="project-wrapper__text-title">{'GreenFuel'}</h3>
                            <div>
                                <p>
                                {
                                    'GreenFuel is the online platform of a fictional EV charging provider. It is another application that I developed during my studies in Oulu. It was an individual graded project that included frontend & backend development. This project introduced me to web development & javascript programming.'
                                    }
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            {/*<a
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
                            )}*/}
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
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624882171/Portfolio/greenfuelmitpins_ohvait.png"} alt="img" width="100%" height="100%"></img>
                                </div>
                                </Tilt>
                            
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
                            <h3 className="project-wrapper__text-title">{'Food Randomizer'}</h3>
                            <div>
                                <p>
                                {
                                    'Have you ever struggled to decide what to cook for your next meal? I often faced that problem in the past which is why I decided to develop the food randomizer. Simply save meals you can cook in the app and tap on the random button which randomly chooses a meal for you with a slot machine-like animation.'
                                    }
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
                            {/*<a
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
                            )}*/}
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
                                    <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1624884703/Portfolio/randfood_jtsasd.gif"} alt="img" width="20%" height="20%"></img>
                                </div>
                                </Tilt>
                           
                            </div>
                        </Fade>
                        </Col>
                    </Row>
                    
               
                </div>
            </Container>
        </section>
    )
}
