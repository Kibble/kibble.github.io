import React from 'react';
import {Grid, Cell} from 'react-md';
import Design from './Design';
import ChallengeHeader from './ChallengeHeader';
import {Basic, Colored} from '../dailyui/days/Day1';
import HalfHour from '../dailyui/days/day2/Iteration1';
import Hour1 from '../dailyui/days/day2/Iteration2';
import '../../../App.scss';

const DailyUI = () => {
    return <div style={{width: '1200px', margin: 'auto'}}>
        <PageTitle>DailyUI Challenges</PageTitle>
        <Typography>
            <a href="https://www.dailyui.co/" style={{fontWeight: 'bold', textDecoration: 'underline'}}>DailyUI</a> has a 100-day design challenge, with a different prompt each day.
            Since I am a programmer dabbling in design rather than a designer dabbling in code, I'm tackling this a little differently.
            Instead of a mockup per day, I'll iterate on a semi-functional, interactive prototype of each daily prompt.
        </Typography>
        <Typography>
            Hopefully as time goes by, I'll be putting out higher-quality or more featureful prototypes within the time constraints.
            Perhaps by the end of it all, I'll end up with a half-decent UI component library.
        </Typography>
        <Grid style={{width: '100%'}}>
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
        <Typography>
            <ul>
                {changes.map((change) => <li>{change}</li>)}
            </ul>
        </Typography>
    </div>
);

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

export default DailyUI;
