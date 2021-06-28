import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';

import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Tilt from 'react-tilt';

function App() {

  const [statetest, setStatetest] = useState('lel');
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Gallery />
    <Footer />
    
    
    </>
  );
}

export default App;
