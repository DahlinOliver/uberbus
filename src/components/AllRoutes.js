import React from 'react';
import styled from 'styled-components';
import leftArrow from '../images/left-arrow.svg';
import Route1 from '../images/route1.jpg';
import Route2 from '../images/route2.jpg';
import Warning from '../images/warning-icon.svg';

import { Link } from "react-router-dom";

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
font-size: 16px;
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
margin-bottom: 1rem;
`

const WarningAlert = styled.div`
background-color: #FFC043;
height: 36px;
width: 100%;
color: #000;
border: none;
font-size: 14px;
display: flex;
flex-direction: row;
align-items: center;
`

const WarningIcon = styled.img`
padding: 0 16px 0 16px;
`

const AlertText = styled.p`
font-size: 14px;
`


function AllRoutes() {
    return (
        <div className="container">
            <Header>
                <Link to="/homescreen">
                    <LeftArrow src={leftArrow} alt="left-arrow" />
                </Link>
                <Title>All Routes</Title>
            </Header>
            <Divider />

            <Subtitle>Odenplan - Mall of Scandinavia</Subtitle>
            <Map src={Route1} alt="route1"></Map>
            <Link to="/matchedbuses">
                <Button>View buses</Button>
            </Link>
            
            <Divider />

            <Subtitle>Stockholms Central - Stockholms Universitet</Subtitle>
            <Map src={Route2} alt="route2"></Map>
            
            
            <WarningAlert>
                <WarningIcon src={Warning} alt="warning-icon" />
                <AlertText>No current buses</AlertText>
            </WarningAlert>

            
        </div>
    )
}

export default AllRoutes
