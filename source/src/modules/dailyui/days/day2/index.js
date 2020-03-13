import React from 'react';
import HalfHour from './Iteration1';
import Hour1 from './Iteration2';
import Daily from '../../Daily';

const iterations = [
    {
        changeset: ['Layout', 'Colors'],
        component: HalfHour,
        title: '30 Minutes',
    },
    {
        changeset: ['Simple Validation'],
        component: Hour1,
        title: '60 Minutes',
    }
];

const Day2 = () => <Daily title="002> Credit Card Checkout" iterations={iterations} />;

export default Day2;
