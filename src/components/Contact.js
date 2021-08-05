import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';


export default function Contact(props) {
    const getTranslation = (lang, text) => {
            
        return translations[lang][text];
      }
    
      const translations = {
        'en': {
          'txt1': 'Would you like to get in touch with me?',
          'button': 'Contact',
          
        },
        'de': {
            'txt1': '',
            'button': 'Kontakt',
          
      }
    }
    return (
    <section id="contact">
        <Container>
            
            <Fade bottom duration={1000} delay={800} distance="30px">
                <div className="contact-wrapper">
                    <p className="contact-wrapper__text">
                    {getTranslation(props.languageSet, 'txt1')}
                            
                    </p>
                    <a
                    href="mailto:email@tobiastoegel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    >
                        {getTranslation(props.languageSet, 'button')}
                    </a>
                </div>
            </Fade>
        </Container>
    </section>
    )
}
