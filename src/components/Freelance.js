import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';

export default function Freelance(props) {

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
          'title': 'Other Projects',
          'publications': 'Publications',
          'SWP': 'Südwestpresse',
          'SWPtxt': 'Social media post on SWP instagram channel.',
          'SWPLink': '(Startrails above Ulm city captured from the Oberberghof viewpoint)',
          'LraKrseTxt': 'Publications in three northern German Newspapers.',
          'Article': ' (Auslandssemester in Finnland begann mit Quarantäne written by Tatjana Gettkowski) ',
          'here': 'Photo metadata',
          'TTTitle': 'TT Coffee-Table Book',
          'TTText': 'High quality photobook showcasing beautiful photography on premium Fuji Crystal paper.',
          'TTLink': 'more',
        },
        'de': {
            'title': 'Andere Projekte',
            'publications': 'Publikationen',
            'SWP': 'Südwest Presse',
            'SWPtxt': 'Beitrag auf dem Social-Media-Kanal der Südwest Presse.',
            'SWPLink': '(Startrails über Ulm aufgenommen vom Oberberghof Aussichtspunkt)',
            'LraKrseTxt': 'Bilder zu Beiträgen in drei Norddeutschen Zeitungen.',
            'Article': ' (Auslandssemester in Finnland begann mit Quarantäne von Tatjana Gettkowski)',
            'here': 'Foto Metadaten',
            'TTTitle': 'TT Bildband',
            'TTText': 'Hochqualitatives Bildband auf Fuji Crystal Photopapier.',
            'TTLink': 'mehr Informationen',
      }
    }
    /*<Fade bottom duration={1000} delay={300} distance="0px">
                    <h1 className="publications-title">{getTranslation(props.languageSet, 'publications')}</h1>
                </Fade>*/
    return (
        <section id="freelance">
            <Container className="freelance">
                <div className="freelance-wrapper"> 
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">{getTranslation(props.languageSet, 'title')}</h2>
                </Fade>
            

                <Row >
                    <Col lg={8} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="freelance-wrapper__image">
                                    
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
                                    <div data-tilt >
                                        <a className="swp" rel="noreferrer" href="https://www.instagram.com/p/CRGVSFgqlaV" target="_blank">
                                        <img src={"https://res.cloudinary.com/tobitgl2/image/upload/v1695111421/tobiastoegel.com/Projekte/syusf51cdl3sme9l2hst.png"}  alt="img" width="10%" height="10%"></img>
                                        </a>
                                    </div>
                                </Tilt>
                                    
                            </div>
                        </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade
                                left={isDesktop}
                                bottom={isMobile}
                                duration={1000}
                                delay={500}
                                distance="30px"
                            >
                                <div className="freelance-wrapper__text">
                                <h1 className="freelance-wrapper__text-title">{getTranslation(props.languageSet, 'SWP')}</h1>
                                <div>
                                    <p>
                                        {getTranslation(props.languageSet, 'SWPtxt')}
                                    </p>
                                    <a rel="noreferrer" href="https://www.instagram.com/p/CRGVSFgqlaV" target="_blank"> 
                                    {getTranslation(props.languageSet, 'SWPLink')}
                                    </a>
                                    <p className="mb-4">{ ''}</p>
                                </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                    
                    <Row >
                    <Col lg={8} sm={12}>
                        <Fade
                            right={isDesktop}
                            bottom={isMobile}
                            duration={1000}
                            delay={1000}
                            distance="30px"
                        >
                            <div className="freelance-wrapper__image">
                                    
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
                                    <img className="swp" src={"https://res.cloudinary.com/tobitgl2/image/upload/v1695111417/tobiastoegel.com/Projekte/xc6ravnjscbokhy70yve.png"}  alt="img" ></img>

                                    </div>
                                </Tilt>
                                    
                            </div>
                        </Fade>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Fade
                                left={isDesktop}
                                bottom={isMobile}
                                duration={1000}
                                delay={500}
                                distance="30px"
                            >
                                <div className="freelance-wrapper__text">
                                <h1 className="freelance-wrapper__text-title">{getTranslation(props.languageSet, 'TTTitle')}</h1>
                                <div>
                                    <p>
                                        {getTranslation(props.languageSet, 'TTText')}
                                    </p>
                                    <a href="https://tt.tobiastoegel.com/" rel="noreferrer" target="_blank">
                                    {getTranslation(props.languageSet, 'TTLink')}
                                    </a>
                                    <p className="mb-4">{ ''}</p>
                                </div>
                                </div>
                            </Fade>
                        </Col>
                    </Row>

                    </div>
            </Container>
        </section>
    )
}
