import React from 'react';
import {Grid, Cell} from 'react-md';
import Design from './Design';
import ChallengeHeader from './ChallengeHeader';
import {Basic, Colored} from './days/Day1';
import HalfHour from './days/day2/Iteration1';
import Hour1 from './days/day2/Iteration2';
import '../../App.scss';
import Paragraph from '../layout/component/Paragraph';
import PageTitle from '../layout/component/PageTitle';

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
            <Daily
                title="001> Sign Up"
                designTitles={['60 Minutes', '90 Minutes']}
                changeset={[['Header', 'Labeled text fields', 'Buttons', 'Layout'], ['Colors']]}
                First={Basic} Second={Colored} 
            />
            <Spacer />
            <Daily
                title="002> Credit Card Checkout"
                designTitles={['30 Minutes', '60 Minutes']}
                changeset={[['Layout', 'Colors'], ['Simple Validation']]}
                First={HalfHour} Second={Hour1}
            />
        </Grid>
    </div>;
}

const Spacer = () => <Cell size={12}><div style={{height: '40px'}} /></Cell>;

const Daily = ({changeset, designTitles, title, First, Second}) => (
    <>
        <Cell size={12}>
            <ChallengeHeader>{title}</ChallengeHeader>
        </Cell>
        <Cell size={4}>
            <Design title={designTitles[0]}>
                <First />
                <Changes changes={changeset[0]} />
            </Design>
        </Cell>
        <Cell size={4}>
            <Design title={designTitles[1]}>
                <Second />
                <Changes changes={changeset[1]} />
            </Design>
        </Cell>
    </>
);

const Changes = ({changes}) => (
    <div style={{padding: '0px 32px'}}>
        <div style={{textAlign: 'left', margin: '40px auto'}}>
            <span style={{fontFamily: 'Merriweather', fontSize: '24px'}}>
                <ul>
                    {changes.map((change) => <li>{change}</li>)}
                </ul>
            </span>
        </div>
    </div>
);

export default DailyUI;
