import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container} from 'react-bootstrap';



export default function Timelapse(props) {
    const getTranslation = (lang, text) => {
            
        return translations[lang][text];
      }
    
      const translations = {
        'en': {
          'title': 'Timelapse',
          'txt1': 'Here you can find my collection of timelapse and other video projects I have created over the last few years.',
          
        },
        'de': {
            'title': 'Zeitraffer',
            'txt1': 'Hier ist eine Auswahl an Zeitraffer und anderen Video Projekten, die ich in den letzten Jahren erstellt habe.',
      }
    }
    return (
        <section id="timelapse">
            <div className="timelapse">
                <Container  >
                    
                    <Fade bottom duration={1000} delay={300} distance="0px">
                        <h2 className="section-title">{getTranslation(props.languageSet, 'title')}</h2>
                    </Fade>
                    <Fade bottom duration={1000} delay={400} distance="0px">
                        <p>{getTranslation(props.languageSet, 'txt1')}</p>
                    </Fade>
                    <div className="vid">
                        <Fade bottom duration={1000} delay={500} distance="0px">
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLUlSliiQCr8W59bL1hiqmIik9so5eFIR6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={false}></iframe>
                        </Fade>
                    </div>
                </Container>
            </div>
        </section>
    )
}
