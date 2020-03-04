import React from 'react';
import VirtualScreen from '../../../component/VirtualScreen';
import TextField, {fieldType} from '../../../../../ui/component/TextField';
import Button from './ui/Button';
import Footer from './ui/Footer';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

const Hour1 = () => {
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
            
            <TextField id="name" label="Name on card" />
            <TextField id="cardNumber" label="Card number" type={fieldType.CREDIT_CARD.NUMBER} />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <TextField id="expiry" label="Expiry date (MM/YY)" small type={fieldType.CREDIT_CARD.EXPIRATION_DATE} />
                <TextField id="code" label="Security code" small type={fieldType.CREDIT_CARD.SECURITY_CODE} />
            </div>
            <TextField id="zip" label="ZIP/Postal code" type={fieldType.CREDIT_CARD.POSTAL_CODE} />
            <Footer>
                <Button label="Cancel" />
                <Button label="Submit" primary />
            </Footer>
        </VirtualScreen>
    );
}

export default Hour1;