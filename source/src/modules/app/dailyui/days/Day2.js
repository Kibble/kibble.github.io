import React from 'react';
import VirtualScreen from '../../component/VirtualScreen';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

export const HalfHour = () => {
    return (
        <VirtualScreen customStyle={{color: secondaryColor, backgroundColor: backgroundColor}}>
            <div style={{marginBottom: '24px', width: '100%'}}>
                <span style={{fontWeight: 'bold', fontSize: '32px'}}>
                    Checkout
                </span>
            </div>
            <div style={{paddingBottom: '8px'}}>
                <span style={{fontSize: '24px'}}>
                    Amount Due:
                    $500.00
                </span>
            </div>
            <LabeledTextField colored id="name" label="Name on card" />
            <LabeledTextField colored id="cardNumber" label="Card number" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <LabeledTextField colored id="expiry" label="Expiry date (MM/YY)" small />
                <LabeledTextField colored id="code" label="Security code" small />
            </div>
            <LabeledTextField colored id="zip" label="ZIP/Postal code" />
            <Footer>
                <Button colored label="Cancel" />
                <Button colored label="Submit" />
            </Footer>
        </VirtualScreen>
    );
}

export const Hour1 = () => {
    return (
        <VirtualScreen customStyle={{color: secondaryColor, backgroundColor: backgroundColor}}>
            <div style={{marginBottom: '24px', width: '100%'}}>
                <span style={{fontWeight: 'bold', fontSize: '32px'}}>
                    Checkout
                </span>
            </div>
            <div style={{paddingBottom: '8px'}}>
                <span style={{fontSize: '24px'}}>
                    Amount Due:
                    $500.00
                </span>
            </div>
            <LabeledTextField colored id="name" label="Name on card" />
            <LabeledTextField colored id="cardNumber" label="Card number" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <LabeledTextField colored id="expiry" label="Expiry date (MM/YY)" small />
                { /* 4 digits for AmEx, 3 digits for everything else */}
                <LabeledTextField colored id="code" label="Security code" small />
            </div>
            <LabeledTextField colored id="zip" label="ZIP/Postal code" />
            <Footer>
                <Button colored label="Cancel" />
                <Button colored label="Submit" />
            </Footer>
        </VirtualScreen>
    );
}

export const Hour2 = () => {
    return (
        <VirtualScreen>

        </VirtualScreen>
    );
}

export const Hour3 = () => {
    return (
        <VirtualScreen>

        </VirtualScreen>
    );
}

export const Empty = () => <VirtualScreen />;

const LabeledTextField = ({colored, id, label, small}) => {
    return <div
        style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', paddingTop: '4px',
            paddingBottom: '4px',
            width: small ? '45%' : '100%',
        }}
    >
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            style={{
                fontSize: '24px',
                backgroundColor: colored ? secondaryColor : 'white',
                width: '100%',
            }} />
    </div>
}

const Button = ({colored, label}) => {
    const color = label === 'Cancel' ? secondaryColor : primaryColor;

    const style = {
        backgroundColor: colored ? color : '#CCCCCC',
        border: 'none',
        color: backgroundColor,
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
