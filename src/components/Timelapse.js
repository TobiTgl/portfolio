import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel'

export default function Timelapse() {
    return (
        <div className="timelapse">
            <Container >
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">Timelapses</h2>
                </Fade>
                <Fade bottom duration={1000} delay={300} distance="0px">
               
                    <video style ={{width:"400px",height:"400px"}}>
                     <source src="https://youtu.be/r0DYJzN00B4" type="video/mp4"></source>
                    </video>
                   
                </Fade>
            </Container>
        </div>
    )
}
