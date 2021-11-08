import React from 'react';
import styled from 'styled-components';
import Apple from '../images/apple.png';

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

function ApplePay2() {
    return (
        <div className="container">
            <Background>
                <Img src={Apple} />
            </Background>
        </div>
    )
}

export default ApplePay2