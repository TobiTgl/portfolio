import React,{useState} from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Timelapse from './components/Timelapse';
import Freelance from './components/Freelance';
import FPV from './components/FPV';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

function App() {
  require('dotenv').config()
  let firebase = require('./components/Firebase.js');
  const [emActive, setEmActive] = useState(false)
  const [languageSet, setLanguageSet] = useState(localStorage.getItem('language')||'en')
  
  const langClick=()=> {
    if(languageSet==='en') {
      localStorage.setItem('language', 'de');
      setLanguageSet('de')
    }else{
      localStorage.setItem('language', 'en');
      setLanguageSet('en')
    }
  }

    function emClick(){
        //firebase.writeUserData();
        setEmActive(true);
        setTimeout(()=>setEmActive(false), 7000);
    }

    //firebase.readCounter();


  return (
    <>
    <Header languageSet={languageSet} langClick={langClick}/>
    <Hero emActive={emActive} languageSet={languageSet} />
    <About languageSet={languageSet}/>
    <Projects languageSet={languageSet}/>
    <Freelance languageSet={languageSet}/>
    <Gallery languageSet={languageSet}/>
    <FPV/>
    <Timelapse languageSet={languageSet}/>
    <Contact languageSet={languageSet}/>
    <Footer emClick={emClick} />
    </>
  );
}

export default App;
