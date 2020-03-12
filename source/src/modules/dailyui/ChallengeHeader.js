import React from 'react';

import styles from './styles/challengeHeader.module.css';

const ChallengeHeader = ({children}) => (
    <div className={styles.challengeHeaderDiv}>
        <span className={styles.challengeHeaderSpan}>
            {children}
        </span>
    </div>
);

export default ChallengeHeader;