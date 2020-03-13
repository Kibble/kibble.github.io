import React from 'react';

const Changes = ({changes}) => (
    <div style={{padding: '0px 32px'}}>
        <div style={{textAlign: 'left', margin: '40px auto'}}>
            <span style={{fontFamily: 'Merriweather', fontSize: '24px'}}>
                <ul>
                    {changes.map((change) => <li>{change}</li>)}
                </ul>
            </span>
        </div>
    </div>
);

export default Changes;
