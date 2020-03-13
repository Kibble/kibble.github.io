import React from 'react';
import {Basic, Colored} from './Day1';
import Daily from '../../Daily';

const iterations = [
    {
        changeset: ['Header', 'Labeled text fields', 'Buttons', 'Layout'],
        component: Basic,
        title: '60 Minutes',
    },
    {
        changeset: ['Colors'],
        component: Colored,
        title: '90 Minutes',
    }
];

const Day1 = () => <Daily title="001> Sign Up" iterations={iterations} />;

export default Day1;
