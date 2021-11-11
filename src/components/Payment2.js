import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import leftArrow from '../images/left-arrow.svg';
import CountDownTimer from './CountDownTimer';
import StarIcon from '../images/star-solid.svg';
import CancelTrip from './CancelTrip';

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

const Divider = styled.hr`
width: 100%;
border: 1px solid #E2E2E2;
`

const SubHeader = styled.h2`
padding: 1.5rem 0 1.5rem 0;
text-align: center;
font-size: 26px;
`

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
/* border-top: 1px solid #E2E2E2; */
border-bottom: 1px solid #E2E2E2;
padding: 1.5rem 0 1.5rem 0;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: center;
align-items: center;
&:nth-child(1) {
        border-right: 1px solid #E2E2E2;
    }
`

const ColumnRating = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
flex-direction: column;
align-items: center;
margin: 1.5rem 0 1.5rem 0;
`

const Rating = styled.div`
margin-top: 1rem;
`

const StarSolid = styled.img`
width: 32px;
height: 31px;
`

const PriceRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5rem 0 0.5rem 0;
`

const Button = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 500;
margin-top: 3rem;
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



// Cancel Trip

const Modal = styled.div`
background-color: #fff;
width: 100%;
height: 32vh;
position: fixed;
bottom: 0;
left: 0;
border-radius: 16px 16px 0 0;
filter: drop-shadow(0px -4px 16px rgba(0, 0, 0, 0.12));
`

const HeaderTrip = styled.h2`
font-size: 18px;
font-weight: 500;
`

const RowTrip = styled.div`
text-align: center;
padding: 1.5rem 0 1.5rem 0;
border-bottom: 2px solid #e2e2e2;
`

const ButtonTrip = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
/* margin: 0 24px 0 24px; */
`

const Button2 = styled.button`
background-color: transparent;
height: 56px;
width: 100%;
color: #000;
border: none;
font-size: 18px;
font-weight: 500;
margin: 0 24px 0 24px;
`

const Test = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 24px 0 24px;
padding-top: 3.5rem;
`

const Bg = styled.div`
background-color: rgba(0, 0, 0, 0.8);
height: 100vh;
width: 100%;
position: fixed;
top: 0;
left: 0;
`

const GoBack = styled.button`
border: none;
`

function Payment2() {

const hoursMinSecs = {hours:0, minutes: 10, seconds: 0}

const [toggle, setToggle] = useState(false);

    return (
        <div>
        <div className="container">
            <GoBack onClick={() => setToggle(toggle => !toggle)}>
                <LeftArrow src={leftArrow} alt="left-arrow" />
            </GoBack>
            <Header>
                <Title>Payment</Title>
            </Header>
            
            <CountDownTimer hoursMinSecs={hoursMinSecs} />
            {/* <p>You have 10 min left to book</p> */}
            <Divider />
                <SubHeader>Booking details</SubHeader>
            <Divider />
            <Row>
                <Column>
                    <p>Trip Time = 11 min</p>
                </Column>

                <Column>
                    <p>Arrives at 09:10</p>
                </Column>
            </Row>

            <Row>
                <ColumnRating>
                    <p>Average rating of passengers</p>
                    <Rating>
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                    </Rating>
                </ColumnRating>
            </Row>
            
            <Row>
                <ColumnRating>
                    <p>Average rating of driver</p>
                    <Rating>
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <StarSolid src={StarIcon} alt="star-icon" />
                    </Rating>
                </ColumnRating>
            </Row>

            <PriceRow>
                <PriceP>Sub total</PriceP>
                <PriceStrong>10.0$</PriceStrong>
            </PriceRow>
            <PriceRow>
                <PriceP>VAT (25%)</PriceP>
                <PriceStrong>2.5$</PriceStrong>
            </PriceRow>
            <Divider />
            <PriceRow>
                <Total>Total</Total>
                <Total>12.5$</Total>
            </PriceRow>
            <Link to="/paymentconfirmation2">
                <Button>Book now</Button>
            </Link>
        </div>
            {toggle && 
            <Bg>
            <Modal>
            <RowTrip>
                <HeaderTrip>Cancel Trip</HeaderTrip>
            </RowTrip>

            <Test>
                <Link to="/bookbus2">
                    <ButtonTrip>Confirm</ButtonTrip>
                </Link>
                <Button2 onClick={() => setToggle(toggle => !toggle)}>Go Back</Button2>
            </Test>

            </Modal>
            </Bg>
            }
        </div>
    )
}

export default Payment2