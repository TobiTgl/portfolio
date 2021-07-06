import React from 'react';
import { Container } from 'react-bootstrap';
import Scroll,{ Link } from 'react-scroll';
import useSound from 'use-sound';


export default function Footer(props) {
    let scroll    = Scroll.animateScroll;
    const [play] = useSound(
        'https://res.cloudinary.com/tobitgl/video/upload/v1625567949/Portfolio/slimtobihigh_1_ixijsv.wav',
        { volume: 1 }
      );

      function scrollToToop(){
        scroll.scrollToTop();
      }
    return (
        <footer className="footer navbar-static-bottom">
            <Container>
                <span className="back-to-top">
                <Link to="header" smooth duration={1000}>
                    <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                </Link>
                </span>
                <div className="social-links">
                       
                    <a
                        
                        href={'https://www.instagram.com/tobitgl/'}
                        rel="noopener noreferrer"
                        target="_blank"
                       
                        >
                        <i className={`fa fa-${'instagram'} fa-inverse`} />
                    </a>
                    <a
                        
                        href={'https://www.linkedin.com/in/tobias-tögel-744b66187/'}
                        rel="noopener noreferrer"
                        target="_blank"
                       
                        >
                        <i className={`fa fa-${'linkedin'} fa-inverse`} />
                    </a>
                    <a
                        
                        href={'https://www.facebook.com/TobiT813/'}
                        rel="noopener noreferrer"
                        target="_blank"
                       
                        >
                        <i className={`fa fa-${'facebook'} fa-inverse`} />
                    </a>
                    <a
                        
                        href={'https://github.com/tobitgl'}
                        rel="noopener noreferrer"
                        target="_blank"
                       
                        >
                        <i className={`fa fa-${'github'} fa-inverse`} />
                    </a>
                
                </div>
                
                <p className="footer__text">
                © {new Date().getFullYear()} - {' '}
                
                    Tobias Tögel
               
                </p>
                <Link duration={1000} >
                <div className="social-linksEm" > 
                
                <a
                        
                        href="#"
                        rel="noopener noreferrer"
                        onClick={() => {props.emClick(); play(); scrollToToop()}}
                       
                        >
                        Ǝ
                    </a>
                </div>
                </Link>
               
            </Container>
        </footer>
    )
}
