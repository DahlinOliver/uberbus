import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Karta from '../images/route1-big.jpg';
import LeftArrowIcon from '../images/left-arrow-circle.svg';
import Sarah from '../images/sarah.png';
import StarIcon from '../images/star-solid.svg';
import User from '../images/user.svg';
import Leaf from '../images/leaf.svg';
import Timeline from '../images/timeline.svg';
import Sophie from '../images/sophie.png';
import Liam from '../images/liam.png';
import Grace from '../images/grace.png';

const Map = styled.img`
height: 414px;
width: 100%;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
`

const LeftArrow = styled.img`
position: absolute;
left: 0;
top: 48px;
`

const Img2 = styled.img`
width: 84px;
height: 84px;
border-radius: 5px;
margin-right: 16px;
`

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin: 1.5rem 0 1.5rem 0;
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

const Row2 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin-top: 1.5rem;
`

const Row3 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
border-top: 1px solid #E2E2E2;
border-bottom: 1px solid #E2E2E2;
padding: 1rem 0 1rem 0;
`

const Column4 = styled.div`
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

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: flex-start;
`

const Column2 = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: flex-start;
height: 100%;
`

const Column3 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Column5 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-right: 10px;
`

const Column7 = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: space-between;
`

const SubHeader = styled.h2`

`

const Para = styled.p`
font-size: 14px;
color: #717171;
font-weight: 500;
margin-right: 10px;
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

const PreviewMap = styled.img`
width: 100%;
height: 124px;
border-radius: 5px;
object-fit: cover;
`

const Total = styled.p`
font-size: 14px;
color: #717171;
font-weight: 500;
`

const EstTime = styled.p`
font-size: 14px;
color: #717171;
font-weight: 500;
`

const Price = styled.p`
font-size: 20px;
color: #000;
font-weight: 700;
`

const Time = styled.p`
font-size: 20px;
color: #000;
font-weight: 700;
`

const LabelXsmall = styled.p`
font-size: 12px;
color: #717171;
font-weight: 500;
`

const LabelMedium = styled.p`
font-size: 16px;
color: #000;
font-weight: 500;
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
font-weight: 400;
margin-left: 1.5rem;
`

const Column11 = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid #e2e2e2;
justify-content: center;
align-items: center;
padding: 0 1.5rem 0 1.5rem;
`

const Column10 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Img3 = styled.img`
width: 52px;
height: 52px;
border-radius: 5px;
margin-right: 16px;
`

const UserName = styled.h2`
font-size: 20px;
font-weight: 500;
`

const Row8 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
border-bottom: 1px solid #e2e2e2;
padding: 0.5rem 0 0.5rem 0;
`

const Passengers = styled.h2`
margin: 3rem 0 1rem 0;
`

const CancelBtn = styled.button`
background-color: #E11900;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin: 3rem 0 3rem 0;
`

// Cancel Trip

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.7);
overflow: hidden;
`

const Alert2 = styled.div`
position: fixed;
top: 50%;
left: 50%;
width: 80%;
height: 25%;
transform: translate(-50%, -50%);
background-color: #ffffff;
padding: 24px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
color: #000;
margin-bottom: 0.5rem;
`

const Paragraph = styled.p`
margin-bottom: 2rem;
text-align: center;
`

const Btn = styled.button`
background-color: #E11900;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
`

const Btn2 = styled.button`
background-color: transparent;
height: 56px;
width: 100%;
color: #000;
border: none;
font-size: 18px;
font-weight: 500;
`

function TripDetails2() {

const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Map src={Karta} alt="map"></Map>
            <Link to="/paymentconfirmation2">
                <LeftArrow src={LeftArrowIcon} alt="left-arrow"/>
            </Link>

            <div className="container">
                <Alert>
                    <Column11>
                        <Minutes>5</Minutes>
                        <MinText>min</MinText>
                    </Column11>
                    <Column10>
                        <Text>Your ride is 5 minutes away!</Text>
                    </Column10>
                </Alert>

                <Row>
                    <Img2 src={Sarah} alt="sarah"></Img2>
                    <Column2>
                        <SubHeader>Sarah Wilson</SubHeader>
                        <Para>Ford E-Transit</Para>
                        <Row2>
                            <img src={User} alt="user-icon"></img>
                            <Para>6</Para>
                            <img src={Leaf} alt="leaf-icon"></img>
                        </Row2>
                    </Column2>

                    <Column3>
                        <Rating>
                            <StarSolid src={StarIcon} alt="star-icon"/>
                            <Rate>4.7</Rate>
                        </Rating>
                    </Column3>
                </Row>

                <Row3>
                    <Column4>
                        <Total>Total price</Total>
                        <Price>$12.5</Price>
                    </Column4>

                    <Column4>
                        <EstTime>Estimated time</EstTime>
                        <Time>11 min</Time>
                    </Column4>
                </Row3>
                
                <Row>
                    <Column5>
                    <img src={Timeline} alt="timeline"></img>
                    </Column5>

                    <Column7>
                        <div>
                            <LabelXsmall>Pickup</LabelXsmall>
                            <LabelMedium>Odenplan</LabelMedium>
                        </div>

                        <div>
                            <LabelXsmall>Drop-off</LabelXsmall>
                            <LabelMedium>Mall of Scandinavia</LabelMedium>
                        </div>
                    </Column7>

                    <Column>
                    <PreviewMap src={Karta} alt="preview-map"></PreviewMap>
                    </Column>
                </Row>

                <Passengers>Passengers</Passengers>
                <Row8>
                    <Img3 src={Sophie} alt="sophie"></Img3>
                    <Column>
                        <UserName>Sophie Barker</UserName>
                    </Column>
                    <Column3>
                        <Rating>
                            <StarSolid src={StarIcon} alt="star-icon" />
                            <Rate>4.6</Rate>
                        </Rating>
                    </Column3>
                </Row8>
                <Row8>
                    <Img3 src={Liam} alt="liam"></Img3>
                    <Column>
                        <UserName>Liam Brown</UserName>
                    </Column>
                    <Column3>
                        <Rating>
                            <StarSolid src={StarIcon} alt="star-icon" />
                            <Rate>4.5</Rate>
                        </Rating>
                    </Column3>
                </Row8>
                <Row8>
                    <Img3 src={Grace} alt="grace"></Img3>
                    <Column>
                        <UserName>Grace Knight</UserName>
                    </Column>
                    <Column3>
                        <Rating>
                            <StarSolid src={StarIcon} alt="star-icon" />
                            <Rate>4.3</Rate>
                        </Rating>
                    </Column3>
                </Row8>

                <CancelBtn onClick={() => setToggle(toggle => !toggle)}>Cancel Booking</CancelBtn>

                {toggle && 
                    <ModalOverlay>
                    <Alert2>
                        <Title>Cancel ride</Title>
                        <Paragraph>Are your sure you want to cancel your ride? You will be charged a small fee of 2$.</Paragraph>
                        <Link to="/homescreen">
                            <Btn>Cancel ride</Btn>
                        </Link>
                        <Btn2 onClick={() => setToggle(toggle => !toggle)}>Go back</Btn2>
                    </Alert2>
                    </ModalOverlay>
                }
            </div>
        </div>
    )
}

export default TripDetails2