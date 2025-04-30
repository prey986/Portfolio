import React from 'react';
import me from "/me.jpeg"

const About = () => {
    return (
        <>
            <div className='about'>
                <h1>About</h1>
                <img src={me} alt="Picture" className='profile-pic' />
                <p>Hii I'm Prey</p>
                <p>As an third year IT enginnering student with a passion for technology and problrm solving,I have a strong foundation in system management.</p>
                <p>I specialize in front-end and back-end technologies, including HTML, CSS, Javascript, React, Node.js, and databases like Mysql and Mongodb.</p>
                <p>I'm Continuously learning and adapting to new tools, frameworks, and best practices in the rapidly evolving field.</p>
            </div>
        </>
    )
};

export default About;