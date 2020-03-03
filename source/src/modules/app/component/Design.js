import React from 'react';

const Design = ({children, title}) => (
    <>
        <div style={{marginBottom: '24px'}}>
            <span style={{fontWeight: 'bold', fontSize: '48px', fontFamily: 'Oxanium'}}>{title}</span>
        </div>
        {children}
    </>
);

export default Design;