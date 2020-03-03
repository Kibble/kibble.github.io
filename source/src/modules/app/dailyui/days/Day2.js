import React, {useState} from 'react';
import VirtualScreen from '../../component/VirtualScreen';
import validate from 'card-validator';

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
            <ValidatedTextField id="name" label="Name on card" />
            <ValidatedTextField id="cardNumber" label="Card number" />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ValidatedTextField
                    id="expiry"
                    label="Expiry date (MM/YY)"
                    small
                />
                <ValidatedTextField
                    id="code"
                    label="Security code"
                    small
                />
            </div>
            <ValidatedTextField id="zip" label="ZIP/Postal code" />
            <Footer>
                <Button label="Cancel" />
                <Button label="Submit" primary />
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

const ValidatedTextField = ({id, label, small}) => {
    const [isValid, setIsValid] = useState(true);

    const check = ({target: {value}}) => {
        switch (id) {
            case 'expiry':
                setIsValid(validate.expirationDate(value).isValid);
                break;
            case 'cardNumber':
                setIsValid(validate.number(value).isValid);
                break;
            case 'code':
                // 4 digits for AmEx, 3 digits for everything else
                setIsValid(
                    validate.cvv(value).isValid || validate.cvv(value, 4).isValid);
                break;
            case 'zip':
                setIsValid(validate.postalCode(value).isValid);
                break;  
            default:
                break;
        }
    }

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
                color: isValid ? backgroundColor : 'red',
                fontSize: '24px',
                backgroundColor: secondaryColor,
                width: '100%',
            }}
            onChange={check}
        />
    </div>
}

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

const Button = ({label, primary}) => {
    const style = {
        backgroundColor: primary ? primaryColor : secondaryColor,
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
