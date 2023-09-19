import React, {useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';



export default function Projects(props) {
    

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

  const getTranslation = (lang, text) => {
            
    return translations[lang][text];
  }

  const translations = {
    'en': {
      'title': 'Projects',
      'txt1': 'The magma esports web application is a service that displays match information and results of the latest CS:GO & League of Legends esports matches. The application was developed as part of the web application course during my studies at the OAMK in Oulu in collaboration with my project group consisting of 4 members. The project was divided into frontend & backend developed including API & database integration.',
      'txt2': 'I was working as a full-stack developer during my internship and time as a working student at Capgemini Germany. Projects included web applications for renowned automotive and healthcare manufacturers.',
      'txt3': 'Have you ever struggled to decide what to cook for your next meal? I often faced that problem in the past which is why I decided to develop the food randomizer. Simply save meals you can cook in the app and tap on the random button which randomly chooses a meal for you with a slot machine-like animation.'
      
    },
    'de': {
        'title': 'Projekte',
      'txt1': 'Die magma esports Web-App listet Informationen und Ergebnisse von aktuellen CS:GO & League of Legends auf. Das magma esports Projekt war ein Teil des Web-application Kurses während meines Auslandsstudiums an der OAMK in Oulu. Die App wurde von mir in Zusammenarbeit mit meiner Projektgruppe, bestehend aus 4 Personen entwickelt. Das Projekt war unterteilt in frontend und backend Entwicklung mit Datenbank Integration.',
      'txt2': 'Während meines Praktikums und meiner Anstellung als Werkstudent bei der Capgemini Deutschland GmbH arbeitete ich als FullStack Entwickler in Kundenprojekten. Zu den Kunden gehörten nahmhafte Hersteller aus der Automobilbranche und dem Gesundheitswesen.',
      'txt3': 'Hattest du jemals das Problem, dich nicht entscheiden zu können, was du als Nächstes kochen möchtest? Um dieses Problem zu lösen, entwickelte ich den food randomizer. Speichere einfach die Gerichte ein, die du kochen kannst und starte den randomizer. Die slotmachineartige Animation wählt zufällig das nächste Gericht für dich aus.'

    }
  }
  
    return (
        <section id="projects">
            <Container>
                <div className="project-wrapper">
                    <Fade bottom duration={1000} delay={300} distance="0px">
                        <h2 className="section-title">{getTranslation(props.languageSet, 'title')}</h2>
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
                            <h3 className="project-wrapper__text-title">{'Capgemini'}</h3>
                            <div>
                                <p>
                                {getTranslation(props.languageSet, 'txt2')}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
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
                                    <img src={"https://res.cloudinary.com/tobitgl2/image/upload/w_0.2,c_scale/v1695111417/tobiastoegel.com/Projekte/Capgemini_Logo_Color_RGB_ir21dp.png"} alt="img" width="100%" height="100%"></img>
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
                            <h3 className="project-wrapper__text-title">{'Magma Esports'}</h3>
                            <div>
                                <p>
                                    {getTranslation(props.languageSet, 'txt1')}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
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
                                    <img src={"https://res.cloudinary.com/tobitgl2/image/upload/w_0.25,c_scale/v1695111417/tobiastoegel.com/Projekte/proj_2_von_2_e4adhx.jpg"}  alt="img" width="100%" height="100%"></img>
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
                                {getTranslation(props.languageSet, 'txt3')}
                                </p>
                                <p className="mb-4">{ ''}</p>
                            </div>
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
                                    <video autoPlay="autoplay" loop={true} muted src="https://res.cloudinary.com/tobitgl2/video/upload/w_0.13,c_scale/v1695111632/tobiastoegel.com/Videos/randfood_b6nhdm.mp4.mp4">
                                    </video>
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
