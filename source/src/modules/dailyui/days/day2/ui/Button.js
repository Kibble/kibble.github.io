import React from 'react';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

const Button = ({label, primary}) => {
    const style = {
        backgroundColor: primary ? primaryColor : secondaryColor,
        border: 'none',
        color: backgroundColor,
        padding: '18px 24px 18px 24px',
        textAlign: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };

    return <button style={style}>{label}</button>;
}

export default Button;
