import React from 'react';
import VirtualScreen from '../../VirtualScreen';

export const Basic = () => {
    return (
        <VirtualScreen>
            <div style={{marginBottom: '24px', width: '100%'}}>
                <span style={{fontWeight: 'bold', fontSize: '32px'}}>
                    Sign Up
                </span>
            </div>
            <LabeledTextField id="firstName" label="First Name" />
            <LabeledTextField id="lastName" label="Last Name" />
            <LabeledTextField id="email" label="Email" validator={() => true} />
            <LabeledTextField id="phone" label="Phone" validator={() => true} />
            <Footer>
                <Button label="Cancel" />
                <Button label="Submit" />
            </Footer>
        </VirtualScreen>
    );
}

export const Colored = () => {
    return (
        <VirtualScreen customStyle={{backgroundColor: '#1E2F43', color: 'white'}}>
            <div style={{marginBottom: '24px', width: '100%'}}>
                <span style={{fontWeight: 'bold', fontSize: '32px'}}>
                    Sign Up
                </span>
            </div>
            <LabeledTextField colored id="firstName" label="First Name" />
            <LabeledTextField colored id="lastName" label="Last Name" />
            <LabeledTextField colored id="email" label="Email" validator={() => true} />
            <LabeledTextField colored id="phone" label="Phone" validator={() => true} />
            <Footer>
                <Button colored label="Cancel" />
                <Button colored label="Submit" />
            </Footer>
        </VirtualScreen>
    );
}

const LabeledTextField = ({colored, id, label}) => {
    return <div
        style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', paddingTop: '4px',
            paddingBottom: '4px',
        }}
    >
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            style={{
                fontSize: '24px',
                backgroundColor: colored ? '#FFE196' : 'white',
            }} />
    </div>
}

const Button = ({colored, label}) => {
    const color = label === 'Cancel' ? '#867877' : '#FFE196'

    const style = {
        backgroundColor: colored ? color : '#CCCCCC',
        border: 'none',
        color: label === 'Cancel' && colored ? 'white' : 'black',
        padding: '18px 24px 18px 24px',
        textAlign: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        fontWeight: 'bold',
    };
    return <button style={style}>{label}</button>;
}

const Footer = ({children}) => (
    <div
        style={{
            marginLeft: '-4px',
            padding: '4px',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
        {children}
    </div>
)

