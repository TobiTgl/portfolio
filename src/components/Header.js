import React, {useState, useEffect  } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';


export default function Header(props) {
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
              'About': 'About',
              'Projects': 'Projects',
              'Freelance': 'Freelance',
              'Gallery': 'Gallery',
              'fpv': 'FPV',
              'Timelapse': 'Timelapse',
              'Contact': 'Contact',
              'Flag': 'https://res.cloudinary.com/tobitgl/image/upload/v1628092108/Portfolio/germany_qdxk0a.png'
            },
            'de': {
                'About': 'Über mich',
                'Projects': 'Projekte',
                'Freelance': 'Freelance',
                'Gallery': 'Gallerie',
                'fpv': 'FPV',
                'Timelapse': 'Zeitraffer',
                'Contact': 'Kontakt',
                'Flag': 'https://res.cloudinary.com/tobitgl/image/upload/v1628092148/Portfolio/united-kingdom_jual6z.png'
            }
          }
        
            return (
                <footer className="footer navbar-static-bottom">
               <Container>
               <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
                 <Navbar className="header" expand="sm" variant="dark">
                     <Navbar.Brand className="brand" href="#"><img src="https://res.cloudinary.com/tobitgl/image/upload/v1624871653/Portfolio/ttobenunten_mpqktt.png" width="30" height="30" alt="Logo" /> </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                         <Navbar.Text>
                             <Link to="about" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'About')}</div>
                             </Link>
                         </Navbar.Text>
         
                         <Navbar.Text>
                             <Link to="projects" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'Projects')}</div>
                             </Link>
                            
                         </Navbar.Text>

                         <Navbar.Text>
                             <Link to="freelance" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'Freelance')}</div>
                             </Link>
                            
                         </Navbar.Text>
         
                         <Navbar.Text>
                             <Link to="gallery" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'Gallery')}</div>
                             </Link>
                             
                         </Navbar.Text>
                         <Navbar.Text>
                             <Link to="fpv" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'fpv')}</div>
                             </Link>
                             
                         </Navbar.Text>
                         <Navbar.Text>
                             <Link to="timelapse" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'Timelapse')}</div>
                             </Link>
                             
                         </Navbar.Text>
         
                         <Navbar.Text>
                             <Link to="contact" smooth duration={1000}>
                                 <div className="headertext">{getTranslation(props.languageSet, 'Contact')}</div>
                             </Link>
                         
                         </Navbar.Text>

                          <Navbar.Text>
                             
                                 <div className="headertext" onClick={props.langClick}>
                                     <img src={getTranslation(props.languageSet, 'Flag')} width="20" height="20" alt="Logo" />
                                </div>
                             
                         
                         </Navbar.Text>
                         </Navbar.Collapse>
                 </Navbar>
                 </Fade>
                
                
         
               </Container>
             </footer>
             )
        
    
}
