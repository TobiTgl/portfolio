import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function Gallery() {
    return (
        <div className="footer navbar-static-bottom">
            <Container className="gallery">
                <Fade bottom duration={1000} delay={300} distance="0px">
                    <h2 className="section-title">Gallery</h2>
                </Fade>
            </Container>
        </div>
    )
}
