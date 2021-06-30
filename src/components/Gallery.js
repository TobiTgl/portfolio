import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel'

export default function Gallery() {
    return (
        <div className="footer navbar-static-bottom">
            <Container className="gallery">
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">Gallery</h2>
                </Fade>
                <Fade bottom duration={1000} delay={500} distance="0px">
                <Carousel>
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625061268/Portfolio/gallery/1_u0g0nf.jpg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625061285/Portfolio/gallery/6a_wechoa.jpg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625061303/Portfolio/gallery/7a_knncbe.jpg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625061975/Portfolio/gallery/7b_lborpa.jpg"
                        />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625062002/Portfolio/gallery/Spatz_Star-11_zrilps.jpg"
                        />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        width="70%" height="70%"
                        src="https://res.cloudinary.com/tobitgl/image/upload/v1625062004/Portfolio/gallery/oulu28beach-38_kjnb0m.jpg"
                        />
                    </Carousel.Item>
                    
                    
                </Carousel>
                </Fade>
                
            </Container>
        </div>
    )
}
