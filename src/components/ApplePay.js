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
import Apple from '../images/apple.png';

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

function ApplePay() {

const history = useHistory();

useEffect(() => {
  setTimeout(() => {
    history.push('/bookbus');
  }, 1000);
}, []);

    return (
        <div className="container">
            <Background>
                <Img src={Apple} alt="apple-logo" />
            </Background>
        </div>
    )
}

export default ApplePay
