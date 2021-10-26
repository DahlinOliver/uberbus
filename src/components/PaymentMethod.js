import React from 'react';
import styled from 'styled-components';
import leftArrow from '../images/left-arrow.svg';

const Header = styled.header`
width: 100%;
height: auto;
padding-top: 62px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 36px;
`

const LeftArrow = styled.img`
position: fixed;
left: 12px;
top: 48px;
`

const Title = styled.h1`
font-size: 18px;
text-align: center;
`

const SubHeader = styled.h2`
font-size: 24px;
font-weight: 500;
text-align: center;
margin-bottom: 1rem;
`

const Input = styled.input`
width: 100%;
height: 45px;
border: 1px solid #e2e2e2;
`

const InputBtn = styled.input`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: 18px;
font-weight: 400;
margin-top: 1.5rem;
`

const Row = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;
flex: 1;
justify-content: center;
align-items: center;
border: 1px solid black;
`

const Divider = styled.div`
width: 100%;
border: 1px solid #E2E2E2;
margin-bottom: 4rem;
`

function PaymentMethod() {
    return (
        <div>
            <div className="container">
            <LeftArrow src={leftArrow} />
            <Header>
                <Title>Payment</Title>
            </Header>

            <SubHeader>Method of payment</SubHeader>
            <Divider />

            <form>
                <Input type="text" placeholder="Cardholder" name="name" />
                <Input type="text" placeholder="Cardnumber" name="name" />
                <Row>
                    <Input type="text" placeholder="MM / YY" name="name" />
                    <Input type="text" placeholder="CVC" name="name" />
                </Row>
                <InputBtn type="submit" value="Add Card" />
                <p>Or</p>
                
                <Row>
                    <Column><div>a</div></Column>
                    <Column><div>a</div></Column>
                    <Column><div>a</div></Column>
                    <Column><div>a</div></Column>
                </Row>
            </form>
            </div>
        </div>
    )
}

export default PaymentMethod
