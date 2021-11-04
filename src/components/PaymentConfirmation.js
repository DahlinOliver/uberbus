import React from 'react'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FilledCheck from '../images/check-circle-filled.svg';

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

const Title = styled.h1`
font-size: 18px;
text-align: center;
`

const Divider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
`

const PriceP = styled.p`
font-size: 16px;
color: #545454;
`

const PriceStrong = styled.p`
font-size: 16px;
color: #000;
`

const Total = styled.p`
font-size: 16px;
color: #000;
font-weight: 700;
`

const PriceRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5rem 0 0.5rem 0;
`

const PriceRow1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 1.5rem 0 0.5rem 0;
`

const PriceRow2 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5rem 0 2.5rem 0;
`

const SecButton = styled.button`
background-color: #EEEEEE;
height: 48px;
width: 100%;
color: #000;
border: none;
font-size: 16px;
font-weight: 500;
margin-top: 3rem;
`

const Button = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin: 20px 0 0 0;
`

const Order = styled.p`
text-align: center;
margin: 0.5rem 0 0.5rem 0;
font-size: 12px;
color: #757575;
font-weight: 700;
`

const Confirmation = styled.div`
text-align: center;
margin: 4rem 0 0 0;
`

const Text = styled.h2`
margin: 2rem 0 4rem 0;
line-height: 46px;
`

const Modal = styled.div`
background-color: #fff;
width: 100%;
height: 12.5vh;
position: fixed;
bottom: 0;
left: 0;
filter: drop-shadow(0px -4px 16px rgba(0, 0, 0, 0.12));
`

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 24px 0 24px;
`

function PaymentConfirmation() {
    return (
        <div>
        <div className="container">
            <Header>
                <Title>Confirmation</Title>
            </Header>

            <Confirmation>
                <img src={FilledCheck}></img>
                <Text>Hey Oliver, <br></br> Your ride has been booked!</Text>
            </Confirmation>

            <Divider />
            <PriceRow1>
                <PriceP>Sub total</PriceP>
                <PriceStrong>10.0$</PriceStrong>
            </PriceRow1>
            <PriceRow2>
                <PriceP>VAT (25%)</PriceP>
                <PriceStrong>2.5$</PriceStrong>
            </PriceRow2>
            <Divider />
            <PriceRow>
                <Total>Total</Total>
                <Total>12.5$</Total>
            </PriceRow>

            <Link to="/tripdetails">
                <SecButton>Trip Details</SecButton>
            </Link>
            <Order>Order #UPL257</Order>

            <Modal>
                <Div>
                    <Link to="/arrival">
                        <Button>Continue</Button>
                    </Link>
                </Div>
            </Modal>
        </div>
        </div>
    )
}

export default PaymentConfirmation
