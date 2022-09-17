import React from 'react';

function AboutUs({aboutus}) {

    return (
        <ul>
            <li>title: {aboutus.title}</li>
            <li>subtitle: {aboutus.subtitle}</li>
        </ul>
    );
}

export default AboutUs;