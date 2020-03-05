import React from 'react';

import styles from './paragraph.module.css';

const Paragraph = ({children}) => (
    <div className={styles.paragraphDiv}>
        <span className={styles.paragraphSpan}>
            {children}
        </span>
    </div>
);

export default Paragraph;
