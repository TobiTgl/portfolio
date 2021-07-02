import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container} from 'react-bootstrap';


export default function Timelapse() {
    return (
        <section id="timelapse">
            <div className="timelapse">
                <Container  >
                    <Fade bottom duration={1000} delay={300} distance="0px">
                        <h2 className="section-title">Timelapse</h2>
                    </Fade>
                    <Fade bottom duration={1000} delay={400} distance="0px">
                        <p>Here you can find my collection of timelapse and other video projects I have created over the last few years.</p>
                    </Fade>
                    <div className="vid">
                        <Fade bottom duration={1000} delay={500} distance="0px">
                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLUlSliiQCr8W59bL1hiqmIik9so5eFIR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Fade>
                    </div>
                </Container>
            </div>
        </section>
    )
}
