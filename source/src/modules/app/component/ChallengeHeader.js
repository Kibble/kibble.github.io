import React from 'react';

const ChallengeHeader = ({children}) => (
    <div style={{display: 'flex'}}>
        <span style={{
            fontSize: '48px',
            fontWeight: 'bold',
            fontFamily: 'Oxanium',
        }}>
            {children}
        </span>
    </div>
);

export default ChallengeHeader;