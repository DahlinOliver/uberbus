import React from 'react';
import styled from 'styled-components';
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

const Column2 = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
align-items: center;
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

function ChoosePayment() {
    return (
        <div>
        <div className="container">
            <LeftArrow src={leftArrow} />
            <Header>
                <Title>Payment</Title>
            </Header>

            <SubHeader>Choose payment</SubHeader>
            <Divider />

            <Block1>
                <Column1>
                    <p>Mastercard</p>
                    <p>XXXX-XXXX-XXXX-9314</p>
                </Column1>
                <Row1><img src={CheckCircle}></img></Row1>
            </Block1>

            <Block2>
                <Column1>
                    <p>Visa</p>
                    <p>XXXX-XXXX-XXXX-9314</p>
                </Column1>
            </Block2>

            <Para>Or</Para>
                
            <Row>
                <Column><div><img src={Samsung}></img></div></Column>
                <Column><div><img src={Google}></img></div></Column>
                <Column><div><img src={Apple}></img></div></Column>
                <Column><div><img src={PayPal}></img></div></Column>
            </Row>

            <Button>Add New Card</Button>
            
            </div>
        </div>
    )
}

export default ChoosePayment