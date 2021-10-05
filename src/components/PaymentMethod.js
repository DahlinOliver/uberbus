import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import leftArrow from '../images/left-arrow.svg';
import CountDownTimer from './CountDownTimer';

const Header = styled.header`
width: 100%;
height: auto;
padding-top: 62px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 36px;
`

const LeftArrow = styled.img`
position: fixed;
left: 12px;
top: 48px;
`

const Title = styled.h1`
font-size: 18px;
text-align: center;
`

const Divider = styled.img`
width: 100%;
border: 1px solid #E2E2E2;
`

function PaymentMethod() {

const hoursMinSecs = {hours:0, minutes: 0, seconds: 5}

    return (
        <div className="container">
            <LeftArrow src={leftArrow} />
            <Header>
                <Title>Payment</Title>
            </Header>
            
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
            <Divider />
        </div>
    )
}

export default PaymentMethod
