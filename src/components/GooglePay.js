import React from 'react';
import styled from 'styled-components';
import Google from '../images/google.png';

const Background = styled.div`
background-color: #fff;
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

function GooglePay() {
    return (
        <div className="container">
            <Background>
                <Img src={Google} />
            </Background>
        </div>
    )
}

export default GooglePay
