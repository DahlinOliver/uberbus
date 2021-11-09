import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import leftArrow from '../images/left-arrow.svg';
import User from '../images/user24.svg';
import CreditCard from '../images/credit-card.svg';
import Date from '../images/date.svg';
import Lock from '../images/lock.svg';
import Cards from '../images/cards.png';
import Samsung from '../images/samsung.png';
import Google from '../images/google.png';
import Apple from '../images/apple.png';
import PayPal from '../images/paypal.png';

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

const SubHeader = styled.h2`
font-size: 24px;
font-weight: 500;
text-align: center;
margin-bottom: 1rem;
`

const InputBtn = styled.input`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin-top: 1.5rem;
`

const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const RowSB = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: 15px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: center;
align-items: center;
`

const Divider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
margin-bottom: 4rem;
`

const Input1 = styled.input`
width: 100%;
height: 70px;
border: 1px solid #e2e2e2;
width: 100%;
padding-left: 60px;
border-radius: 5px 5px 0 0;
`

const Input2 = styled.input`
width: 100%;
height: 70px;
border: 1px solid #e2e2e2;
width: 100%;
padding-left: 60px;
`

const Input3 = styled.input`
width: 100%;
height: 70px;
border: 1px solid #e2e2e2;
width: 100%;
padding-left: 60px;
border-radius: 0 0 0 5px;
`

const Input4 = styled.input`
width: 100%;
height: 70px;
border: 1px solid #e2e2e2;
width: 100%;
padding-left: 60px;
border-radius: 0 0 5px 0;
`

const InputContainer = styled.div`
width: 100%;
display: flex;
align-items: center;

img {
    position: absolute;
    text-align: left;
    margin-left: 20px;
}
`

const Para = styled.p`
text-align: center;
margin: 2rem 0 2rem 0;
`

function PaymentMethod() {
    return (
        <div>
        <div className="container">
            <Link to="/businfo">
                <LeftArrow src={leftArrow} />
            </Link>
            <Header>
                <Title>Payment</Title>
            </Header>

            <SubHeader>Method of payment</SubHeader>
            <Divider />

            <RowSB>
                <img src={Cards}></img>
                <img src={Lock}></img>
            </RowSB>

            <form>
                <InputContainer>
                    <img src={User}></img>
                    <Input1 type="text" placeholder="Cardholder" name="name" />
                </InputContainer>

                <InputContainer>
                    <img src={CreditCard}></img>
                    <Input2 type="text" placeholder="Cardnumber" name="name" />
                </InputContainer>

                <Row>
                    <InputContainer>
                        <img src={Date}></img>
                        <Input3 type="text" placeholder="MM / YY" name="name" />
                    </InputContainer>

                    <InputContainer>
                        <img src={Lock}></img>
                        <Input4 type="text" placeholder="CVC" name="name" />
                    </InputContainer>
                </Row>

                <Link to="/choosepayment">
                    <InputBtn type="submit" value="Add Card" />
                </Link>
            </form>

            <Para>Or</Para>
                
            <Row>
                <Column><Link to="/samsungpay"><div><img src={Samsung}></img></div></Link></Column>
                <Column><Link to="/googlepay"><div><img src={Google}></img></div></Link></Column>
                <Column><Link to="/applepay"><div><img src={Apple}></img></div></Link></Column>
                <Column><Link to="/paypal"><div><img src={PayPal}></img></div></Link></Column>
            </Row>
            
            </div>
        </div>
    )
}

export default PaymentMethod
