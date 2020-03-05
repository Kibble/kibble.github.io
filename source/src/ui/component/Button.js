import React from 'react';

import styles from './button.module.css';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

const Button = ({label, primary, style}) => (
    <button
        className={styles.button}
        style={Object.assign(
            {},
            {backgroundColor: primary ? primaryColor : secondaryColor},
            style
        )}
    >
        {label}
    </button>
);

export default Button;
