import React from 'react';
import VirtualScreen from '../../VirtualScreen';
import Button from '../../../../ui/component/Button';

// Color palette: https://www.colourlovers.com/palette/359978/w_o_r_d_l_e_s_s_.
// const primaryColor = '#CBe86B';
const secondaryColor = '#F2E9E1';
const backgroundColor = '#1C140D';

const HalfHour = () => {
    return (
        <VirtualScreen customStyle={{color: secondaryColor, backgroundColor: backgroundColor}}>
            <div style={{marginBottom: '24px', width: '100%'}}>
                <span style={{fontWeight: 'bold', fontSize: '32px'}}>
                    Calculator
                </span>
            </div>
            <Row>
                <NumButton label="" style={{width: '70%'}} />
                <NumButton label="C" />
            </Row>
            <Row>
                <NumButton label="7" />
                <NumButton label="8" />
                <NumButton label="9" />
                <NumButton label="/" />
            </Row>
            <Row>
                <NumButton label="4" />
                <NumButton label="5" />
                <NumButton label="6" />
                <NumButton label="X" />
            </Row>
            <Row>
                <NumButton label="1" />
                <NumButton label="2" />
                <NumButton label="3" />
                <NumButton label="-" />
            </Row>
            <Row>
                <NumButton label="0" />
                <NumButton label="." />
                <NumButton label="=" />
                <NumButton label="+" />
            </Row>
        </VirtualScreen>
    );
};

const Row = ({children}) => (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        {children}
    </div>
)

const NumButton = ({label, width, style}) => {
    const defaultStyle = Object.assign(
        {},
        {
            flexGrow: width || 1,
            margin: '4px',
            width: '20%',
        },
        style
    );

    return <Button label={label} style={defaultStyle} />;
}

export default HalfHour;
