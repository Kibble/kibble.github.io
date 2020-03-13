import React from 'react';
import HalfHour from './Iteration1';
import Daily from '../../Daily';

const iterations = [
    {
        changeset: ['Layout'],
        component: HalfHour,
        title: '30 Minutes',
    }
];

const Day4 = () => <Daily title="004> Calculator" iterations={iterations} />;

export default Day4;
