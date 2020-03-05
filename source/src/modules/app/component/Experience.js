import React from 'react';
import Paragraph from '../../layout/component/Paragraph';
import PageTitle from '../../layout/component/PageTitle';

import styles from './experience.module.css';

const Experience = () => {
    return <div className={styles.experience}>
        <PageTitle>Experience</PageTitle>
        <SectionHeader>Programming Languages</SectionHeader>
        <Paragraph>
            <ul>
                <li>React - 3 years</li>
                <li>C# - 4 years</li>
            </ul>
        </Paragraph>
        <SectionHeader>Database Technologies</SectionHeader>
        <Paragraph>
            <ul>
                <li>Liquibase</li>
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>SQL Server Reporting Services</li>
            </ul>
        </Paragraph>
        <SectionHeader>Other Skills</SectionHeader>
        <Paragraph>
            <ul>
                <li>Scrum Master</li>
                <li>Git</li>
                <li>UI/UX</li>
            </ul>
        </Paragraph>
    </div>;
}


const SectionHeader = ({children}) => (
    <div className={styles.sectionHeaderDiv}>
        <span className={styles.sectionHeaderSpan}>
            {children}
        </span>
    </div>
);

export default Experience;