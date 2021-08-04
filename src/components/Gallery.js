import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';



export default function Gallery(props) {
    
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        axios.get('https://res.cloudinary.com/tobitgl/image/list/portfolio.json')
            .then(res => {
                
                const arr = res.data.resources;
                shuffle(arr)
                const sliceArr = arr.slice(0, 20)
                setGallery(sliceArr);
                
            });
      }, []);

      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        
       
      }
      
      const getTranslation = (lang, text) => {
            
        return translations[lang][text];
      }
    
      const translations = {
        'en': {
          'title': 'Gallery',
          
        },
        'de': {
            'title': 'Galerie',
          
      }
    }

    return (
        <section id="gallery">
            <Container className="gallery">
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">{getTranslation(props.languageSet, 'title')}</h2>
                </Fade>
                <Fade bottom duration={1000} delay={500} distance="0px">
                <Carousel >
                {
                    gallery.map(data => {
                        return(
                            
                            <Carousel.Item id={data.public_id}>
                                <div className="about-wrapper__image">
                            <img
                            
                            src={`https://res.cloudinary.com/tobitgl/image/upload/w_0.65,c_scale/${data.public_id}.jpg`}
                            className="carousel"
                            alt="img"
                            />
                            </div>
                        </Carousel.Item>  
                        )
                    })
                }    
                </Carousel>
                </Fade>
            </Container>
        </section>
    )
}
