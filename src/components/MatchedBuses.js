import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from "react-router-dom";

import Karta from '../images/route1-big.jpg';
import LeftArrowIcon from '../images/left-arrow-circle.svg';
import Uberbus from '../images/uber-bus.png';
import StarIcon from '../images/star-solid.svg';
import User from '../images/user.svg';

const Map = styled.img`
height: 414px;
width: 100%;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
margin-bottom: 32px;
`

const LeftArrow = styled.img`
position: fixed;
left: 0;
top: 48px;
`

const Subtitle = styled.h3`
text-align: center;
`

const RowCenter = styled.div`
height: 65px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-bottom: 16px;
border-bottom: 1px solid #e2e2e2;
`

const Img = styled.img`
width: 42px;
height: 32px;
`

const Column = styled.div`
height: 65px;
width: 65%;
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

const Row4 = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
/* border: 1px solid black; */
/* margin: 1.5rem 0 1.5rem 0; */
`

const Column8 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`

const SubHeader = styled.h3`

`

const Para = styled.p`
font-size: 14px;
color: #717171;
font-weight: 500;
margin-right: 10px;
`

const Column9 = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 8px;
`

function MatchedBuses() {

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div>
            <Map src={Karta} alt="map"></Map>
            <Link to="/matchedroutes">
                <LeftArrow src={LeftArrowIcon} alt="left-arrow" />
            </Link>
            <div className="container">
                <Subtitle>Choose bus</Subtitle>

                <Link to="/businfo">
                <RowCenter>
                    <Img src={Uberbus} alt="uberbus-icon"></Img>

                    <Column>
                        <Row4>
                        <Column8>
                            <SubHeader>Uberbus</SubHeader>
                            <Para>09:00 - 11 min away</Para>
                        </Column8>

                        <Column9>
                        <Row4>
                            <img src={User} alt="user-icon"></img>
                            <Para>11</Para>
                        </Row4>
                        </Column9>
                        </Row4>
                    </Column>
                    <Rating>
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <Rate>4.2</Rate>
                    </Rating>
                </RowCenter>
                </Link>

                <Link to="/businfo2">
                <RowCenter>
                    <Img src={Uberbus} alt="uberbus-icon"></Img>

                    <Column>
                        <Row4>
                        <Column8>
                            <SubHeader>Uberbus</SubHeader>
                            <Para>09:10 - 11 min away</Para>
                        </Column8>

                        <Column9>
                        <Row4>
                            <img src={User} alt="user-icon"></img>
                            <Para>6</Para>
                        </Row4>
                        </Column9>
                        </Row4>
                    </Column>
                    <Rating>
                        <StarSolid src={StarIcon} alt="star-icon" />
                        <Rate>4.7</Rate>
                    </Rating>
                </RowCenter>
                </Link>

            </div>
        </div>
    )
}

export default MatchedBuses
