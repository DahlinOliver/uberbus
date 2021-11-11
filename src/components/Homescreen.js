import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import HomeMap from '../images/Karta.jpg';
import Hamburger from '../images/hamburger.svg';
import ExitIcon from '../images/exit.svg';
import LifeBuoy from '../images/life-buoy.svg';
import Settings from '../images/settings.svg';
import Info from '../images/info.svg';

const LargeP = "18px";

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
overflow: hidden;
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
padding-left: 1rem;
`

const InputTo = styled.div`
margin-bottom: 70px;
overflow: hidden;
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

// Hamburger
const Bg = styled.div`
background-color: #fff;
height: 100vh;
width: 100%;
position: fixed;
left: 0;
top: 0;
`

const Exit = styled.img`
position: fixed;
left: 24px;
top: 48px;
`

const Alert = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
margin: 1rem 0 1rem 0;
background-color: #000;
height: 56px;
margin-bottom: 8rem;
`

const Column12 = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid #e2e2e2;
justify-content: center;
align-items: center;
`

const Img = styled.img`
height: 36px;
width: 36px;
padding: 0 1.3rem 0 1.3rem;
`

const Column10 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex: 1;
`

const Text = styled.p`
font-size: 16px;
color: #fff;
font-weight: 300;
`

const Button = styled.button`
background-color: #E11900;
width: 80%;
height: 48px;
color: #fff;
font-size: 16px;
border: none;
`

const List = styled.div`
margin-top: 8rem;
display: flex;
flex-direction: column;
align-items: center;
`

const ExitBtn = styled.button`
border: none;
`

function Homescreen() {

const [toggle, setToggle] = useState(false);    

    return (
        <div>
            <Map src={HomeMap} alt="map"></Map>
            <button onClick={() => setToggle(toggle => !toggle)}>
                <Meny src={Hamburger} alt="hamburger-menu" />
            </button>

            <div className="container">
                <InputFrom>
                    <Label htmlFor="from">From:</Label>
                    <Input type="text" placeholder="Karlbergsvägen 12" id="from" name="from" disabled/>
                </InputFrom>

                <InputTo>
                    <Label htmlFor="to">To:</Label>
                    <Input type="text" placeholder="Mall of Scandinavia" id="to" name="to" disabled/>
                </InputTo>

                <Link to="/matchedroutes">
                    <MatchedRoutes to="matchedroutes">Matched Routes</MatchedRoutes>
                </Link>
                
                <Link to="/allroutes">
                    <AllRoutes>All Routes</AllRoutes>
                </Link>

            </div>

            {toggle && 
            <Bg>
                <div className="container">
                <ExitBtn onClick={() => setToggle(toggle => !toggle)}>
                    <Exit src={ExitIcon} alt="exit-menu" />
                </ExitBtn>

                <List>
                <Alert>
                    <Column12>
                        <Img src={LifeBuoy} alt="lifebuoy-icon"></Img>
                    </Column12>
                    <Column10>
                        <Text>Contact Support</Text>
                    </Column10>
                </Alert>

                <Alert>
                    <Column12>
                        <Img src={Settings} alt="settings-icon"></Img>
                    </Column12>
                    <Column10>
                        <Text>Settings</Text>
                    </Column10>
                </Alert>

                <Alert>
                    <Column12>
                        <Img src={Info} alt="info-icon"></Img>
                    </Column12>
                    <Column10>
                        <Text>Information Center</Text>
                    </Column10>
                </Alert>

                <Button>Log out</Button>
                </List>
                </div>
            </Bg>
            }
        </div>
    )
}

export default Homescreen
