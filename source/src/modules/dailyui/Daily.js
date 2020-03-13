import React from 'react';
import {Cell} from 'react-md';
import ChallengeHeader from './ChallengeHeader';
import Changes from './Changes';
import Design from './Design';

const Daily = ({iterations, title}) => (
    <>
        <Cell size={12}>
            <ChallengeHeader>{title}</ChallengeHeader>
        </Cell>
        {
            iterations.map((iteration) => (
                <Cell size={4}>
                    <Iteration
                        changeset={iteration.changeset}
                        Component={iteration.component}
                        title={iteration.title}
                    />
                </Cell>
            ))
        }
    </>
);

const Iteration = ({changeset, Component, title}) => (
    <Design title={title}>
        <Component />
        <Changes changes={changeset} />
    </Design>
);

export default Daily;
