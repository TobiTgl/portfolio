
import React,{useState, useEffect} from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Timelapse from './components/Timelapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';


function App() {

  const [emActive, setEmActive] = useState(false)
  const [languageSet, setLanguageSet] = useState('en')
  
  const langClick=()=> {
    if(languageSet=='en') {
      setLanguageSet('de')
    }else{
      setLanguageSet('en')
    }
    
  }

    function emClick(){
    
        setEmActive(true);
        setTimeout(()=>setEmActive(false), 7000);
    }

  return (
    <>
    <Header languageSet={languageSet} langClick={langClick}/>
    <Hero emActive={emActive} languageSet={languageSet} />
    <About languageSet={languageSet}/>
    <Projects languageSet={languageSet}/>
    <Gallery languageSet={languageSet}/>
    <Timelapse languageSet={languageSet}/>
    <Contact languageSet={languageSet}/>
    
    <Footer emClick={emClick} />
    
    
    </>
  );
}

export default App;
