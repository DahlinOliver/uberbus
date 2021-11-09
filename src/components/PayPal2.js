import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

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

function PayPal2() {

const history = useHistory();

useEffect(() => {
  setTimeout(() => {
    history.push('/bookbus2');
  }, 1000);
}, []);

    return (
        <div className="container">
            <Background>
                <Img src={PayPalIcon} />
            </Background>
        </div>
    )
}

export default PayPal2