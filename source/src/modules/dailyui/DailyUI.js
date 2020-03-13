import React from 'react';
import {Grid, Cell} from 'react-md';
import '../../App.scss';
import Paragraph from '../layout/component/Paragraph';
import PageTitle from '../layout/component/PageTitle';
import Day1 from './days/day1';
import Day2 from './days/day2';
import Day4 from './days/day4';

import styles from './styles/dailyUi.module.css';

const DailyUI = () => {
    return <div className={styles.page}>
        <PageTitle>DailyUI Challenges</PageTitle>
        <Paragraph>
            <a href="https://www.dailyui.co/" style={{fontWeight: 'bold', textDecoration: 'underline'}}>DailyUI</a> has a 100-day design challenge, with a different prompt each day.
            Since I am a programmer dabbling in design rather than a designer dabbling in code, I'm tackling this a little differently.
            Instead of a mockup per day, I'll iterate on a semi-functional, interactive prototype of each daily prompt.
        </Paragraph>
        <Paragraph>
            Hopefully as time goes by, I'll be putting out higher-quality or more featureful prototypes within the time constraints.
            Perhaps by the end of it all, I'll end up with a half-decent UI component library.
        </Paragraph>
        <Grid className={styles.grid}>
            <Day1 />
            <Spacer />
            <Day2 />
            <Spacer />
            <Day4 />
        </Grid>
    </div>;
}

const Spacer = () => <Cell size={12}><div style={{height: '40px'}} /></Cell>;

export default DailyUI;
