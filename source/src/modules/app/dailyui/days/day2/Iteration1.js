import React from 'react';
import VirtualScreen from '../../../component/VirtualScreen';
import Button from './ui/Button';
import Footer from './ui/Footer';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

const HalfHour = () => {
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
            <LabeledTextField id="name" label="Name on card" />
            <LabeledTextField id="cardNumber" label="Card number" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <LabeledTextField id="expiry" label="Expiry date (MM/YY)" small />
                <LabeledTextField id="code" label="Security code" small />
            </div>
            <LabeledTextField id="zip" label="ZIP/Postal code" />
            <Footer>
                <Button label="Cancel" />
                <Button label="Submit" primary />
            </Footer>
        </VirtualScreen>
    );
};

const LabeledTextField = ({id, label, small}) => {
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
                color: backgroundColor,
                fontSize: '24px',
                backgroundColor: secondaryColor,
                width: '100%',
            }}
        />
    </div>
}

export default HalfHour;
