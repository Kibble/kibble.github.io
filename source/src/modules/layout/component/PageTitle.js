import React from 'react';

import styles from './pageTitle.module.css';

const PageTitle = ({children}) => (
    <div className={styles.pageTitleDiv}>
        <span className={styles.pageTitleSpan}>
            {children}
        </span>
    </div>
);

export default PageTitle;