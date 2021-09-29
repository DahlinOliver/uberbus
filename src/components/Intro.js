import React from 'react'
import logo from '../images/uberbus-logo.svg';
import styled from 'styled-components';

const Background = styled.div`
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
`

const Img = styled.img`
width: 45%;
margin-top: -25%;
`

function Intro() {
    return (
        <div>
            <Background>
                <Img src={logo} />
            </Background>
        </div>
    )
}

export default Intro
