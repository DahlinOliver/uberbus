import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import HomeMap from '../images/Karta.jpg';
import Hamburger from '../images/hamburger.svg';

const primaryWhite = "#ffffff";
const primaryBlack = "#000000";

const gray600 = "#545454";
const gray500 = "#757575";
const gray400 = "#AFAFAF";
const gray200 = "#E2E2E2";
const gray100 = "#EEEEEE";
const gray50 = "#F6F6F6";

const XXLarge = "40px";
const XLarge = "36px";
const Large = "32px";
const Medium = "28px";
const Small = "24px";
const XSmall = "20px";

const LargeP = "18px";
const MediumP = "16px";
const SmallP = "14px";
const XSmallP = "12px";

const Map = styled.img`
height: 414px;
width: 100%;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
margin-bottom: 32px;
`

const Meny = styled.img`
position: fixed;
left: 24px;
top: 48px;
`

const InputFrom = styled.div`
margin-bottom: 32px;
`

const Label = styled.label`
font-weight: 500;
font-size: 18px;
`

const Input = styled.input`
width: 100%;
height: 48px;
background-color: #EEEEEE;
border: none;
`

const InputTo = styled.div`
margin-bottom: 70px;
`

const MatchedRoutes = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: ${LargeP};
margin-bottom: 16px;
`

const AllRoutes = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: ${LargeP};
`

function Homescreen() {

    return (
        <div>
            <Map src={HomeMap} alt="map"></Map>
            <Meny src={Hamburger} alt="hamburger-menu" />

            <div className="container">
                <InputFrom>
                    <Label for="from">From:</Label>
                    <Input type="text" placeholder="Karlbergsvägen 12" id="from" name="from" disabled/>
                </InputFrom>

                <InputTo>
                    <Label for="to">To:</Label>
                    <Input type="text" placeholder="Mall of Scandinavia" id="to" name="to" disabled/>
                </InputTo>

                <Link to="/matchedroutes">
                    <MatchedRoutes to="matchedroutes">Matched Routes</MatchedRoutes>
                </Link>
                
                <Link to="/allroutes">
                    <AllRoutes>All Routes</AllRoutes>
                </Link>

            </div>
        </div>
    )
}

export default Homescreen
