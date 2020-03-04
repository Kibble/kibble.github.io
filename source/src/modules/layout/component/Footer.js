import React from 'react';
import github from '../../../img/GitHub-Mark-32px.png';
import linkedin from '../../../img/LI-In-Bug.png';

const Footer = () => <>
    <div style={{height: '120px', width: '100%'}} />
    <div style={{
        position: 'absolute',
        bottom: '0',
        height: '80px',
        width: '100%',
        backgroundColor: '#90A4AE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Icon image={github} alt="github" url="https://github.com/kibble" />
        <Icon image={linkedin} alt="linkedin" url="https://www.linkedin.com/in/fu-thong-6a777824/" />
    </div>
</>;

const Icon = ({alt, image, url}) => {
    return <div style={{padding: '8px'}}>
        <a href={url}><img src={image} height={'32px'} alt={alt} /></a>
    </div>;
}

export default Footer;