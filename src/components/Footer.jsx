import React from 'react';
import gmaillogo from "/gmail.svg";
import linkedinlogo from "/linkedin.svg";
import gitlogo from "/github.svg";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <p>Thanks for Visitng Website<br />Contact Me Here</p><br/>
                <ul className="contact-links">
                    <li><a href="https://github.com/prey986" target='_blank'><img src={gitlogo} alt="" style={{ backgroundColor: "white", height: "25px", width: "25px" }} /></a></li>
                    <li><a href="https://www.linkedin.com/in/prey-patel-27a31b255" target='_blank'><img src={linkedinlogo} alt="" style={{ height: "25px", width: "25px" }} /></a></li>
                    <li><a href="mailto:prey110901@gmail.com" target='_blank'><img src={gmaillogo} alt="" style={{ height: "25px", width: "25px" }} /></a></li>
                </ul>
            </div>
        </>
    )
};

export default Footer;