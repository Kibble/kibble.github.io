import React from 'react';
import {Grid, Cell} from 'react-md';

const DailyUI = () => {
    return <div
        className="app-content"
        style={{width: '1200px', margin: 'auto'}}
    >
        <Grid style={{width: '100%'}}>
            <Cell size={12}>
                <div style={{display: 'flex'}}>
                    <span style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        fontFamily: 'Oxanium',
                    }}>001.</span>
                </div>
            </Cell>
            <Cell size={4}>
                <Design title="Basics">
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
                </Design>
            </Cell>
            <Cell size={4}>
                <Design title="Colored">
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
                </Design>
            </Cell>
        </Grid>
    </div>;
}

const Design = ({children, title}) => (
    <>
        <div style={{marginBottom: '24px'}}>
            <span style={{fontWeight: 'bold', fontSize: '48px', fontFamily: 'Oxanium'}}>{title}</span>
        </div>
        {children}
    </>
)

const VirtualScreen = ({children, customStyle}) => {
    const height = 1920;
    const width = 1080;
    const scale = 0.3;

    const defaultStyle = {
        height: `${height * scale}px`,
        width: `${width * scale}px`,
        border: '1px solid black',
        padding: '4px',
        position: 'relative',
        margin: 'auto',
    };

    return <div style={Object.assign({}, defaultStyle, customStyle)}>
        {children}
    </div>;
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

export default DailyUI;
