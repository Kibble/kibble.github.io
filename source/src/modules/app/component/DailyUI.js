import React from 'react';
import {Grid, Cell} from 'react-md';
import Design from './Design';
import ChallengeHeader from './ChallengeHeader';
import {Basic, Colored} from '../dailyui/days/Day1';
import {Empty, HalfHour, Hour1, Hour2, Hour3} from '../dailyui/days/Day2';

const DailyUI = () => {
    return <div
        className="app-content"
        style={{width: '1200px', margin: 'auto'}}
    >
        <Grid style={{width: '100%'}}>
            <Cell size={12}>
                <ChallengeHeader>001> Sign Up</ChallengeHeader>
            </Cell>
            <Cell size={4}>
                <Design title="Basics">
                    <Basic />
                </Design>
            </Cell>
            <Cell size={4}>
                <Design title="Colored">
                    <Colored />
                </Design>
            </Cell>
            <Cell size={12}>
                <div style={{height: '100px'}} />
            </Cell>
            <Daily title="002> Credit Card Checkout" Half={HalfHour} First={Empty} Second={Empty} Third={Hour3} />
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

export default DailyUI;
