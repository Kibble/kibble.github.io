import React from 'react';

const Experience = () => {
    return <div style={{width: '1200px', margin: 'auto'}}>
        <PageTitle>Experience</PageTitle>
        <SectionHeader>Programming Languages</SectionHeader>
        <Typography>
            <ul>
                <li>React - 3 years</li>
                <li>C# - 4 years</li>
            </ul>
        </Typography>
        <SectionHeader>Database Technologies</SectionHeader>
        <Typography>
            <ul>
                <li>Liquibase</li>
                <li>MySQL</li>
                <li>SQL Server</li>
                <li>SQL Server Reporting Services</li>
            </ul>
        </Typography>
        <SectionHeader>Other Skills</SectionHeader>
        <Typography>
            <ul>
                <li>Scrum Master</li>
                <li>Git</li>
                <li>UI/UX</li>
            </ul>
        </Typography>
    </div>;
}

const PageTitle = ({children}) => (
    <div style={{padding: '16px'}}>
        <span style={{fontFamily: 'Oxanium', fontSize: '56px'}}>
            {children}
        </span>
    </div>
);

const Typography = ({children}) => (
    <div style={{textAlign: 'left', margin: '40px auto', width: '1200px'}}>
        <span style={{
            fontFamily: 'Merriweather', fontSize: '24px'}}>
            {children}
        </span>
    </div>
);

const SectionHeader = ({children}) => (
    <div style={{textAlign: 'left', margin: '40px auto', width: '1200px'}}>
        <span style={{
            fontFamily: 'Merriweather', fontSize: '28px'}}>
            {children}
        </span>
    </div>
);

export default Experience;