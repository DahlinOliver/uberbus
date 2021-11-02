import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { useHistory } from "react-router-dom";

import Karta from '../images/route1-big.jpg';
import LeftArrowIcon from '../images/left-arrow-circle.svg';
import Uberbus from '../images/uber-bus.png';
import StarIcon from '../images/star-solid.svg';

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

const Row = styled.div`
border: 1px solid #000;
height: 65px;
width: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
margin-bottom: 16px;
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
`

const ArrivalTime = styled.p`
font-size: 12px;
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
`

function MatchedBuses() {

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div>
            <Map src={Karta}></Map>
            <button onClick={goToPreviousPath}>
                <LeftArrow src={LeftArrowIcon} />
            </button>
            <div className="container">
                <Subtitle>Choose bus</Subtitle>

                <Link to="/businfo">
                <Row>
                    <Img src={Uberbus}></Img>

                    <Column>
                    <Row>
                        <h3>Uberbus</h3>
                        <p>11</p>
                    </Row>
                        <ArrivalTime>09:00 - 11 min away</ArrivalTime>
                        
                    </Column>
                    <Rating>
                        <StarSolid src={StarIcon} />
                        <p>4.2</p>
                    </Rating>
                </Row>
                </Link>

                <Link to="/businfo">
                <Row>
                    <Img src={Uberbus}></Img>

                    <Column>
                    <Row>
                        <h3>Uberbus</h3>
                        <p>11</p>
                    </Row>
                        <ArrivalTime>09:00 - 11 min away</ArrivalTime>
                        
                    </Column>
                    <Rating>
                        <StarSolid src={StarIcon} />
                        <p>4.2</p>
                    </Rating>
                    
                </Row>
                </Link>

            </div>
        </div>
    )
}

export default MatchedBuses
