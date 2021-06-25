import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
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
    
    
    </>
  );
}

export default App;
