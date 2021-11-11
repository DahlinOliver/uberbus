import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import leftArrow from '../images/left-arrow.svg';
import Samsung from '../images/samsungpay.png';
import Google from '../images/googlepay.png';
import Apple from '../images/applepay.png';
import PayPal from '../images/paypal-logo.png';
import CheckCircle from '../images/check-circle.svg';

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

const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const Row1 = styled.div`
display: flex;
flex-direction: row;
margin-right: 20px;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: center;
align-items: center;
`

const Column1 = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
justify-content: space-between;
height: 50px;
`

const Divider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
margin-bottom: 4rem;
`

const Para = styled.p`
text-align: center;
margin: 2rem 0 2rem 0;
`

const Button = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin-top: 3rem;
`

const Block1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
background-color: #545454;
height: 80px;
align-items: center;
margin-bottom: 20px;
border-radius: 5px;
color: #fff;
`

const Block2 = styled.div`
display: flex;
flex-direction: row;
width: 100%;
background-color: #AFAFAF;
height: 80px;
align-items: center;
border-radius: 5px;
color: #fff;
`

const Img = styled.img`
width: 3.5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

function ChoosePayment() {
    return (
        <div>
        <div className="container">
            <Link to="/paymentmethod">
                <LeftArrow src={leftArrow} alt="left-arrow" />
            </Link>
            <Header>
                <Title>Payment</Title>
            </Header>

            <SubHeader>Choose payment</SubHeader>
            <Divider />

            <Link to="/bookbus">
            <Block1>
                <Column1>
                    <p>Mastercard</p>
                    <p>XXXX-XXXX-XXXX-9314</p>
                </Column1>
                <Row1><img src={CheckCircle} alt="checkcircle-icon"></img></Row1>
            </Block1>
            </Link>

            <Link to="/bookbus">
            <Block2>
                <Column1>
                    <p>Visa</p>
                    <p>XXXX-XXXX-XXXX-9314</p>
                </Column1>
            </Block2>
            </Link>

            <Para>Or</Para>
                
            <Row>
                <Column><Link to="/samsungpay"><Center><Img src={Samsung} alt="samsung-logo"></Img></Center></Link></Column>
                <Column><Link to="/googlepay"><Center><Img src={Google} alt="google-logo"></Img></Center></Link></Column>
                <Column><Link to="/applepay"><Center><Img src={Apple} alt="apple-logo"></Img></Center></Link></Column>
                <Column><Link to="/paypal"><Center><Img src={PayPal} alt="paypal-logo"></Img></Center></Link></Column>
            </Row>

            <Link to="/paymentmethod">
                <Button>Add New Card</Button>
            </Link>
            </div>
        </div>
    )
}

export default ChoosePayment