import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';



export default function Gallery() {
    
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        axios.get('https://res.cloudinary.com/tobitgl/image/list/portfolio.json')
            .then(res => {
                
                const arr = res.data.resources;
                shuffle(arr)
                setGallery(arr);
                
            });
      }, []);

      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
       
      }

    return (
        <section id="gallery">
            <Container className="gallery">
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">Gallery</h2>
                </Fade>
                <Fade bottom duration={1000} delay={500} distance="0px">
                <Carousel >
                {
                    gallery.map(data => {
                        return(
                            
                            <Carousel.Item id={data.public_id}>
                            <img
                            width="70%" height="70%"
                            src={`https://res.cloudinary.com/tobitgl/image/upload/${data.public_id}.jpg`}
                            className="carousel"
                            alt="img"
                            />
                            
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
