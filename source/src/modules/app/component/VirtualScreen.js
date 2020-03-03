import React from 'react';

const VirtualScreen = ({children, customStyle}) => {
    const height = 1920;
    const width = 1080;
    const scale = 0.3;

    const defaultStyle = {
        height: `${height * scale}px`,
        width: `${width * scale}px`,
        border: '1px solid black',
        padding: '4px',
        position: 'relative',
        margin: 'auto',
    };

    return <div style={Object.assign({}, defaultStyle, customStyle)}>
        {children}
    </div>;
}

export default VirtualScreen;