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
          'title': 'Freelance Projects',
          'publications': 'Publications',
          'SWP': 'Südwestpresse',
          'SWPtxt': 'Social media post on SWP instagram channel. (Startrails above Ulm city captured from the Oberberghof viewpoint)',
          'LraKrseTxt': 'Publications in three northern German Newspapers.',
          'Article': ' (Auslandssemester in Finnland begann mit Quarantäne written by Tatjana Gettkowski) ',
          'here': 'Photo metadata',
          'TTTitle': 'TT Coffee-Table Book',
          'TTText': 'High quality photobook showcasing beautiful photography on premium Fuji Crystal paper.',
          'TTLink': 'more',
        },
        'de': {
            'title': 'Freelance Projekte',
            'publications': 'Publikationen',
            'SWP': 'Südwest Presse',
            'SWPtxt': 'Beitrag auf dem Social-Media-Kanal der Südwest Presse. (Startrails über Ulm aufgenommen vom Oberberghof Aussichtspunkt)',
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
                                        <img src={"https://res.cloudinary.com/tobitgl/image/upload/v1655385042/Portfolio/gallery/Screenshot_2022-06-16_151004_gjthtb.png"}  alt="img" width="10%" height="10%"></img>
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
                                    <img className="swp" src={"https://res.cloudinary.com/tobitgl/image/upload/v1655386738/Portfolio/gallery/auroroatimelapse28092020-131_jlu154.jpg"}  alt="img" ></img>

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
                                <h1 className="freelance-wrapper__text-title">
                                    <a className="atag" rel="noreferrer" href="https://www.ga-online.de/artikel/942578/Auslandssemester-in-Finnland-begann-mit-Quarantaene" target="_blank">General Anzeiger, </a>
                                    <a className="atag" rel="noreferrer" href="https://www.oz-online.de/artikel/941924/Auslandssemester-in-Finnland-begann-mit-Quarantaene" target="_blank"> Ostfriesen Zeitung &</a>
                                    <a className="atag" rel="noreferrer" href="https://www.borkumer-zeitung.de/artikel/941924/Auslandssemester-in-Finnland-begann-mit-Quarantaene" target="_blank"> Borkumer Zeitung</a>
                                </h1>
                                <div>
                                    <p>
                                        {getTranslation(props.languageSet, 'LraKrseTxt')}
                                    </p>
                                    <a href="https://www.ga-online.de/artikel/942578/Auslandssemester-in-Finnland-begann-mit-Quarantaene" rel="noreferrer" target="_blank">
                                    {getTranslation(props.languageSet, 'Article')}
                                    </a>
                                    <p></p>
                                    <a href="https://res.cloudinary.com/tobitgl/image/upload/v1655387392/Portfolio/gallery/Screenshot_2022-06-16_154933_fzxzho.png" rel="noreferrer" target="_blank">{getTranslation(props.languageSet, 'here')}</a>

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
                                    <img className="swp" src={"https://res.cloudinary.com/tobitgl/image/upload/v1655390616/Portfolio/gallery/mokup_uhrg4t.png"}  alt="img" ></img>

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
                                    <a href="https://tobiastoegel.com/" rel="noreferrer" target="_blank">
                                    {getTranslation(props.languageSet, 'TTLink')}
                                    </a>
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
                    </Row>

                    </div>
            </Container>
        </section>
    )
}
