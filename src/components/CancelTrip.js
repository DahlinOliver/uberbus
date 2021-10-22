import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
background-color: #fff;
width: 100%;
height: 32vh;
position: fixed;
bottom: 0;
left: 0;
border-radius: 16px 16px 0 0;
filter: drop-shadow(0px -4px 16px rgba(0, 0, 0, 0.12));
`

const Title = styled.h2`
font-size: 18px;
font-weight: 500;
`

const Row = styled.div`
text-align: center;
padding: 1.5rem 0 1.5rem 0;
border-bottom: 2px solid #e2e2e2;
`

const Button = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin: 0 24px 0 24px;
`

const Button2 = styled.button`
background-color: transparent;
height: 56px;
width: 100%;
color: #000;
border: none;
font-size: 18px;
font-weight: 500;
margin: 0 24px 0 24px;
`

const Test = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 24px 0 24px;
padding-top: 3.5rem;
`

function CancelTrip() {
    return (
        <div>
            <Modal>
            <Row>
                <Title>Cancel Trip</Title>
            </Row>

            <Test>
                <Button>Confirm</Button>
                <Button2>Go Back</Button2>
            </Test>

            </Modal>
        </div>
    )
}

export default CancelTrip
