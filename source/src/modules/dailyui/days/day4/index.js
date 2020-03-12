import React from 'react';
import {Cell} from 'react-md';
import ChallengeHeader from '../../ChallengeHeader';
import Design from '../../Design';
import HalfHour from './Iteration1';

const Day4 = () => (
    <Daily
        title="004> Calculator"
        designTitles={['30 Minutes']}
        changeset={[['Layout']]}
        First={HalfHour}
    />
);

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

export default Day4;
