import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>
                    <h1>Patel Preykumar</h1>
                </div>
                <button className="burger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#Projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#Certification" onClick={() => setIsOpen(false)}>Certification</a></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;