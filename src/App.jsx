import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Certification />
            <Footer />
        </>
    )
};

export default App;