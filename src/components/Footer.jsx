import React from 'react';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p>Thanks for Visitng Website<br />Contact Me Here</p>
                <ul className="contact-links">
                    <li><a href="https://github.com/prey986" target='_blank'><FaGithub size={25}/></a></li>
                    <li><a href="https://www.linkedin.com/in/prey-patel-27a31b255" target='_blank'><FaLinkedin size={25}/></a></li>
                    <li><a href="mailto:prey110901@gmail.com" target='_blank'><CgMail size={25}/></a></li>
                </ul>
            </div>
        </>
    )
};

export default Footer;