import React from 'react';
import styled from 'styled-components';
import PayPalIcon from '../images/paypal.png';

const Background = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
`

const Img = styled.img`
width: 45%;
margin-top: -25%;
`

function PayPal() {
    return (
        <div className="container">
            <Background>
                <Img src={PayPalIcon} />
            </Background>
        </div>
    )
}

export default PayPal