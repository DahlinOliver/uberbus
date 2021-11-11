import React from 'react'
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FilledCheck from '../images/check-circle-filled.svg';
import Sarah from '../images/sarah.png';
import User from '../images/user.svg';
import Leaf from '../images/leaf.svg';
import StarIcon from '../images/star-solid.svg';
import LifeBuoy from '../images/life-buoy.svg';

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

const Confirmation = styled.div`
text-align: center;
margin: 4rem 0 0 0;
`

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
/* border: 1px solid black; */
margin: 6rem 0 1.5rem 0;
`

const Img2 = styled.img`
width: 84px;
height: 84px;
border-radius: 5px;
margin-right: 16px;
`

const Column2 = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: flex-start;
height: 100%;
`

const SubHeader = styled.h2`

`

const Para = styled.p`
font-size: 14px;
color: #717171;
font-weight: 500;
margin-right: 10px;
`

const Row2 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin-top: 1.5rem;
/* border: 1px solid black; */
/* padding: 1.5rem 0 1.5rem 0; */
`

const Column3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Rating = styled.div`
font-size: 12px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #EEEEEE;
border-radius: 36px;
width: 66px;
height: 36px;
`

const StarSolid = styled.img`
width: 14px;
height: 13px;
margin-right: 5px;
`

const Rate = styled.div`
font-size: 14px;
font-weight: 500;
`

const BtnRow= styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin: 1rem 0 1rem 0;
`

const RateBtn = styled.button`
background-color: #EEEEEE;
border-radius: 36px;
border: none;
height: 36px;
padding: 0 1rem 0 1rem;
font-size: 14px;
font-weight: 500;
margin-right: 2rem;
`

const TipBtn = styled.button`
background-color: #EEEEEE;
border-radius: 36px;
border: none;
height: 36px;
padding: 0 1rem 0 1rem;
font-size: 14px;
font-weight: 500;
`

const Divider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
`

const TopDivider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
margin-bottom: 1rem;
`

const Alert = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin: 1rem 0 1rem 0;
background-color: #000;
height: 56px;
`

const Column11 = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid #e2e2e2;
justify-content: center;
align-items: center;
padding: 0 1.5rem 0 1.5rem;
`

const Column12 = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid #e2e2e2;
justify-content: center;
align-items: center;
`

const Minutes = styled.p`
font-size: 26px;
color: #fff;
font-weight: 700;
`

const MinText = styled.p`
font-size: 16px;
color: #fff;
font-weight: 400;
`

const Text = styled.p`
font-size: 16px;
color: #fff;
font-weight: 300;
`

const Column10 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
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

const Img = styled.img`
height: 36px;
width: 36px;
padding: 0 1.3rem 0 1.3rem;
`

function Arrival2() {
    return (
    <div>
        <div className="container">
            <Header>
                <Title>You've Arrived!</Title>
            </Header>

            <Confirmation>
                <img src={FilledCheck} alt="filledcheck-icon"></img>
            </Confirmation>

            <Row>
                <TopDivider />
                <Img2 src={Sarah} alt="sarah"></Img2>
                <Column2>
                    <SubHeader>Nathan Dumlao</SubHeader>
                    <Para>Mercedes-Benz EQV</Para>
                    <Row2>
                        <img src={User} alt="user-icon"></img>
                        <Para>11</Para>
                        <img src={Leaf} alt="leaf-icon"></img>
                    </Row2>
                </Column2>

                <Column3>
                    <Rating>
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <Rate>4.2</Rate>
                    </Rating>
                </Column3>

                <BtnRow>
                    <RateBtn>Rate Your Driver</RateBtn>
                    <TipBtn>Tip Your Driver</TipBtn>
                </BtnRow>
                <Divider />
            </Row>

            <Alert>
                <Column11>
                    <Minutes>10</Minutes>
                    <MinText>min</MinText>
                </Column11>
                <Column10>
                    <Text>See Trip Details</Text>
                </Column10>
            </Alert>

            <Alert>
                <Column12>
                    <Img src={LifeBuoy} alt="lifebuoy-icon"></Img>
                </Column12>
                <Column10>
                    <Text>Contact Support</Text>
                </Column10>
            </Alert>

            <Modal>
                <Div>
                    <Link to="/homescreen">
                        <Button>Continue</Button>
                    </Link>
                </Div>
            </Modal>
        </div>
    </div>
    )
}

export default Arrival2