import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import Karta from '../images/route1-big.jpg';
import LeftArrowIcon from '../images/left-arrow-circle.svg';
import UberBus from '../images/uber-bus.png';
import Sarah from '../images/sarah.png';
import StarIcon from '../images/star-solid.svg';
import User from '../images/user.svg';
import Leaf from '../images/leaf.svg';
import Timeline from '../images/timeline.svg';
import Pickup from '../images/pickup.svg';
import DropOff from '../images/drop-off.svg';

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

const Img = styled.img`
width: 63px;
height: 48px;
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
/* border: 1px solid black; */
margin: 1.5rem 0 1.5rem 0;
`

const Row5 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
justify-content: center;
margin: 1rem 0 1rem 0;
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

const Column8 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const Column9 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 8px;
`

const Row4 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
/* border: 1px solid black; */
/* margin: 1.5rem 0 1.5rem 0; */
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

const Button = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin: 3rem 0 3rem 0;
`

const Route = styled.img`

`

const Test = styled.div`
/* margin-bottom: 3.7rem; */
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

function BusInfo2() {
    return (
        <div>
            <Map src={Karta}></Map>
            <Link to="/matchedbuses">
                <LeftArrow src={LeftArrowIcon} />
            </Link>
            <div className="container">
                <Row5>
                    <Img src={UberBus}></Img>
                </Row5>
                <Row4>
                    <Column8>
                        <SubHeader>Uberbus</SubHeader>
                        <Para>09:10 - 11 min away</Para>
                    </Column8>

                    <Column9>
                    <Row4>
                        <img src={User}></img>
                        <Para>6</Para>
                    </Row4>
                    </Column9>
                </Row4>

                <Row>
                    <Img2 src={Sarah}></Img2>
                    <Column2>
                        <SubHeader>Sarah Wilson</SubHeader>
                        <Para>Ford E-Transit</Para>
                        <Row2>
                            <img src={User}></img>
                            <Para>6</Para>
                            <img src={Leaf}></img>
                        </Row2>
                    </Column2>

                    <Column3>
                        <Rating>
                            <StarSolid src={StarIcon} />
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
                    <img src={Timeline}></img>
                    </Column5>

                    <Column7>
                        <Test>
                            <LabelXsmall>Pickup</LabelXsmall>
                            <LabelMedium>Odenplan</LabelMedium>
                        </Test>

                        <div>
                            <LabelXsmall>Drop-off</LabelXsmall>
                            <LabelMedium>Mall of Scandinavia</LabelMedium>
                        </div>
                    </Column7>

                    <Column>
                    <PreviewMap src={Karta}></PreviewMap>
                    </Column>
                </Row>

                <Link to="/paymentmethod2">
                    <Button>Add payment method</Button>
                </Link>
            </div>
        </div>
    )
}

export default BusInfo2
