import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import leftArrow from '../images/left-arrow.svg';
import User from '../images/user24.svg';
import CreditCard from '../images/credit-card.svg';
import Date from '../images/date.svg';
import Lock from '../images/lock.svg';
import Cards from '../images/cards.png';
import Samsung from '../images/samsungpay.png';
import Google from '../images/googlepay.png';
import Apple from '../images/applepay.png';
import PayPal from '../images/paypal-logo.png';

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

const Img = styled.img`
width: 3.5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

function PaymentMethod() {
    return (
        <div>
        <div className="container">
            <Link to="/businfo">
                <LeftArrow src={leftArrow} alt="left-arrow" />
            </Link>
            <Header>
                <Title>Payment</Title>
            </Header>

            <SubHeader>Method of payment</SubHeader>
            <Divider />

            <RowSB>
                <img src={Cards} alt="cards"></img>
                <img src={Lock} alt="lock-icon"></img>
            </RowSB>

            <form>
                <InputContainer>
                    <img src={User} alt="user-icon"></img>
                    <Input1 type="text" placeholder="Cardholder" name="name" />
                </InputContainer>

                <InputContainer>
                    <img src={CreditCard} alt="creditcard-icon"></img>
                    <Input2 type="text" placeholder="Cardnumber" name="name" />
                </InputContainer>

                <Row>
                    <InputContainer>
                        <img src={Date} alt="date-icon"></img>
                        <Input3 type="text" placeholder="MM / YY" name="name" />
                    </InputContainer>

                    <InputContainer>
                        <img src={Lock} alt="lock-icon"></img>
                        <Input4 type="text" placeholder="CVC" name="name" />
                    </InputContainer>
                </Row>

                <Link to="/choosepayment">
                    <InputBtn type="submit" value="Add Card" />
                </Link>
            </form>

            <Para>Or</Para>
                
            <Row>
                <Column><Link to="/samsungpay"><Center><Img src={Samsung} alt="samsung-logo"></Img></Center></Link></Column>
                <Column><Link to="/googlepay"><Center><Img src={Google} alt="google-logo"></Img></Center></Link></Column>
                <Column><Link to="/applepay"><Center><Img src={Apple} alt="apple-logo"></Img></Center></Link></Column>
                <Column><Link to="/paypal"><Center><Img src={PayPal} alt="paypal-logo"></Img></Center></Link></Column>
            </Row>
            
            </div>
        </div>
    )
}

export default PaymentMethod
