import React from 'react';

const Footer = ({children}) => (
    <div
        style={{
            marginLeft: '-4px',
            padding: '4px',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        {children}
    </div>
);

export default Footer;