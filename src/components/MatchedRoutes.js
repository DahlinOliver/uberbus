import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styled from 'styled-components';
import leftArrow from '../images/left-arrow.svg';
import Route1 from '../images/route1.jpg';

const Header = styled.header`
width: 100%;
height: auto;
padding-top: 48px;
`

const LeftArrow = styled.img`
width: 48px;
height: 48px;
margin-left: -12px;
`

const Title = styled.h1`
font-size: 36px;
`

const Map = styled.img`
height: 180px;
width: 100%;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
margin-bottom: 16px;
`

const Divider= styled.div`
width: 100%;
border: 1px solid #E2E2E2;
`

const Subtitle = styled.h3`
text-align: center;
margin: 16px 0 16px 0;
`

const Button = styled.button`
background-color: #000;
height: 36px;
width: 100%;
color: #fff;
border: none;
font-size: 14px;
`

function MatchedRoutes() {
    return (
        <div className="container">
            <Header>
                <Link to="/homescreen">
                    <LeftArrow src={leftArrow} alt="left-arrow"/>
                </Link>
                <Title>Matched Routes</Title>
            </Header>
            <Divider />

            <Subtitle>Odenplan - Mall of Scandinavia</Subtitle>
            <Map src={Route1} alt="route1"></Map>

            <Link to="/matchedbuses">
                <Button>View buses</Button>
            </Link>
        </div>
    )
}

export default MatchedRoutes
