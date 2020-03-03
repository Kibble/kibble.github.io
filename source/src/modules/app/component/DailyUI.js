import React from 'react';
import {Grid, Cell} from 'react-md';
import Design from './Design';
import ChallengeHeader from './ChallengeHeader';
import {Basic, Colored} from '../dailyui/days/Day1';
import {Empty, HalfHour, Hour1, Hour2, Hour3} from '../dailyui/days/Day2';
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
            <Cell size={12}>
                <ChallengeHeader>001> Sign Up</ChallengeHeader>
            </Cell>
            <Cell size={4}>
                <Design title="1 Hour">
                    <Basic />
                </Design>
            </Cell>
            <Cell size={4}>
                <Design title="90 Minutes">
                    <Colored />
                </Design>
            </Cell>
            <Cell size={12}>
                <div style={{height: '100px'}} />
            </Cell>
            <Daily title="002> Credit Card Checkout" Half={HalfHour} First={Hour1} Second={Empty} Third={Hour3} />
        </Grid>
    </div>;
}

const Daily = ({title, Half, First, Second, Third}) => {
    return <>
        <Cell size={12}>
            <ChallengeHeader>{title}</ChallengeHeader>
        </Cell>
        <Cell size={4}>
            <Design title="30 Minutes">
                <Half />
            </Design>
        </Cell>
        <Cell size={4}>
            <Design title="1 Hour">
                <First />
            </Design>
        </Cell>
        <Cell size={4}>
            <Design title="2 Hours">
                <Second />
            </Design>
        </Cell>
    </>;
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

export default DailyUI;
