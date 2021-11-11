import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import styled from 'styled-components';
import Apple from '../images/applepay.png';

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

function ApplePay2() {

const history = useHistory();

useEffect(() => {
  setTimeout(() => {
    history.push('/bookbus2');
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

export default ApplePay2