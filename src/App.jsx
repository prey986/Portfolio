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
            <main>
                <section id='about'>
                    <About />
                </section>
                <section id='Projects'>
                    <Projects />
                </section>
                <section id='skills'>
                    <Skills />
                </section>
                <section id='Certification'>
                    <Certification />
                </section>
            </main>
            <Footer />
        </>
    )
};

export default App;