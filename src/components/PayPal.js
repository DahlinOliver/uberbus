import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import styled from 'styled-components';
import PayPalIcon from '../images/paypal-logo.png';

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

const history = useHistory();

useEffect(() => {
  setTimeout(() => {
    history.push('/bookbus');
  }, 1000);
}, []);

    return (
        <div className="container">
            <Background>
                <Img src={PayPalIcon} alt="paypal-logo" />
            </Background>
        </div>
    )
}

export default PayPal