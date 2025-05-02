import React from 'react';

const certification = [
    {
        title: 'Python For Everybody',
        url: 'https://coursera.org/verify/specialization/U1ZT3MBAVRIC',
    },
    {
        title: 'NodeJS Unleashed: Mastering Backend Development',
        url: 'https://coursera.org/verify/NQO9FGTXDECK',
    },
    {
        title: 'MongoDB: The Complete Guide to NoSQL Database Development',
        url: 'https://coursera.org/verify/6L7HDXI9SXGZ',
    },
    {
        title: 'ExpressJS Essentials: Building Modern Web APIs',
        url: 'https://coursera.org/verify/GAUF4NPA65AU',
    },
];
const Certification = () => {
    return (
        <>
            <div className='Certification'>
                <h1>Certification</h1>
                <div className='card-grid'>
                    {certification.map((cert, index) =>
                        <div className='cert-card' key={index}>
                            <h3>{cert.title}</h3>
                            <a href={cert.url} target='_blank'>Varify Certificate</a>
                        </div>)}
                </div>
            </div>
        </>
    )
};

export default Certification;