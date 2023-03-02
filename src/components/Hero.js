import React, {useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
//import styles from './Menu.module.css'

export default function Hero(props) {
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

        const getTranslation = (lang, text) => {
            
          return translations[lang][text];
        }
           

        const translations = {
          'en': {
            'header': 'About',
            'txt1': 'Hi, my name is',
            'txt2': 'Welcome!',
            'button': 'more'
          },
          'de': {
              'header': 'About',
            'txt1': 'Hi, ich bin',
            'txt2': 'Willkommen!',
            'button': 'mehr'
          }
        }

        if(props.emActive === true){
          return (
            <section id="hero" className="jumbotron">
          <Container>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
              {'Hi, my name is, what?'}{' '}
              <div>{'My name is, who?'}{' '}</div>
              <div>{'My name is, chka-chka'}{' '}</div>
                <span className="text-color-main">{'Slim Tobi'}</span>
                <br />
                
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {'more'}
                  </Link>
                </span>
              </p>
            </Fade>
          </Container>
        </section>
        )
    
        }else{
      return (
        
        <section id="hero" className="jumbotron" >
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
          {getTranslation(props.languageSet, 'txt1')}{' '}
            <span className="text-color-main">{'Tobi'}</span>
            <br />
            {getTranslation(props.languageSet, 'txt2')}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
              {getTranslation(props.languageSet, 'button')}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
    )

      }
    
}
