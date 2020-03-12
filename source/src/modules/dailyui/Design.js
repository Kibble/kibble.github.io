import React from 'react';

import styles from './styles/design.module.css';

const Design = ({children, title}) => (
    <>
        <div className={styles.designDiv}>
            <span className={styles.designSpan}>{title}</span>
        </div>
        {children}
    </>
);

export default Design;