import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import axios from 'axios';
import { Parallax, Background } from 'react-parallax';
export default function About(props) {

  

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [ageSet, setageSet] = useState('');
    
    const [gallery, setGallery] = useState([]);
    
    useEffect(() => {
        axios.get('https://res.cloudinary.com/tobitgl/image/list/pb.json')
            .then(res => {
                
                const arr = res.data.resources;
                
                setGallery(arr);
                
            });
      }, []);

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

  const age = () => {
            
    const date = (new Date().toISOString()).substring(0,10)
    

    if(parseInt(date.substring(5,7)) === 3 && parseInt(date.substring(8,10)) >= 30){
      const dateAge = (new Date().getFullYear())-1997
      setageSet(dateAge)
    }else if(parseInt(date.substring(5,7)) < 3){
      const dateAge = (new Date().getFullYear())-1998
      setageSet(dateAge)
    }else if(parseInt(date.substring(5,7)) === 3 && parseInt(date.substring(8,10)) < 30){
      const dateAge = (new Date().getFullYear())-1998
      setageSet(dateAge)
    }else if(parseInt(date.substring(5,7)) >3){
      const dateAge = (new Date().getFullYear())-1997
      setageSet(dateAge)
    }

  }
  useEffect(() => {
    age()
  }, []);
 

  const translations = {
    'en': {
      'title': 'About',
      'txt1': 'Hello, my name is Tobias and I am a technology and management student from the south of Germany.',
      'txt2': 'On this website, I am showcasing some of the projects I was working on during my studies as well as some free time projects.',
      'txt3': 'Besides that, I have a great passion for photography. You can find a selection of my photos in the gallery & timelapse section.',
      'button': 'Contact'
    },
    'de': {
        'title': 'Über mich',
      'txt1': 'Hallo, ich bin Tobias, '+ageSet+' Jahre alt und studiere Informationsmanagement in Ulm um Ulm und um Ulm herum.',
      'txt2': 'Auf dieser Website präsentiere ich einige meiner Projekte, an welchen ich während meiner Studienzeit oder auch während meiner Freizeit arbeite bzw. gearbeitet habe.',
      'txt3': 'In meiner Freizeit beschäftige ich mich gerne mit der Fotografie. Im Galerie und Zeitraffer Bereich finden sich Fotos und Zeitraffer, die ich erstellt habe.',
      'button': 'Kontakt'
    }
  }

 
    return (
      <section id="about">
    <Container>   
      <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title">{getTranslation(props.languageSet, 'title')}</h2>
      </Fade>
      <Row className="about-wrapper">
        <Col md={6} sm={12}>
          <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
              
              {
                  gallery.map(data => {
                      return(
                        <Parallax blur={0} bgImage="" bgImageAlt="the cat" strength={70}>
                        <p style={{ opacity: '0'}}>Content goes here. Parallax height grows .</p>
                        <Background className="custom-bg">
                            <img src={`https://res.cloudinary.com/tobitgl/image/upload/w_0.12,c_scale/${data.public_id}.jpg`} alt="fill murray" />
                        </Background>
                        <div style={{ height: '310px'}} />
                    </Parallax>
                          
                          

                      )
                  })
              }  
              
                  
              </div>
          </Fade>
        </Col>
        <Col md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {getTranslation(props.languageSet, 'txt1')}
              </p>
              <p className="about-wrapper__info-text">
                {getTranslation(props.languageSet, 'txt2')}
              </p>
              <p className="about-wrapper__info-text">
                {getTranslation(props.languageSet, 'txt3')}
              </p>
              {(
                <span className="d-flex mt-3">
                     <Link to="contact" smooth duration={1000}>
                  <div
                    
                    className="cta-btn cta-btn--resume"
              
                  >
                    {getTranslation(props.languageSet, 'button')}
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
