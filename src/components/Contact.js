import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';


export default function Contact() {
    return (
    <section id="contact">
        <Container>
            
            <Fade bottom duration={1000} delay={800} distance="30px">
                <div className="contact-wrapper">
                    <p className="contact-wrapper__text">
                            {'Would you like to get in touch with me?'}
                            
                    </p>
                    <a
                    href="mailto:tobias.toegel@gmx.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    >
                        Contact
                    </a>
                </div>
            </Fade>
        </Container>
    </section>
    )
}
