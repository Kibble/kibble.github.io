import React, {useState} from 'react';
import validator from 'card-validator';

// const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

export const fieldType = Object.freeze({
    CREDIT_CARD: {
        EXPIRATION_DATE: "expiry",
        NUMBER: "number",
        POSTAL_CODE: "postal",
        SECURITY_CODE: "securityCode",
    }
});

const validate = (value, type) => {
    switch (type) {
        case fieldType.CREDIT_CARD.EXPIRATION_DATE:
            return validator.expirationDate(value).isValid;
        case fieldType.CREDIT_CARD.NUMBER:
            return validator.number(value).isValid;
        case fieldType.CREDIT_CARD.SECURITY_CODE:
            return validator.cvv(value).isValid || validator.cvv(value, 4).isValid;
        case fieldType.CREDIT_CARD.POSTAL_CODE:
            return validator.postalCode(value).isValid;
        default:
            return false;
    }
};

const LabeledTextField = ({id, label, small, type}) => {
    const [isValid, setIsValid] = useState(true);

    const check = ({target: {value}}) => {
        if (type) {
            setIsValid(validate(value, type));
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
};

export default LabeledTextField;