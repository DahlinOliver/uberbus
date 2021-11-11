import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Strong = styled.strong`
font-weight: 700;
`

const TimerText = styled.p`
text-align: center;
`

const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: rgba(0,0,0,0.7);
`

const Alert = styled.div`
position: fixed;
top: 50%;
left: 50%;
width: 80%;
height: 25%;
transform: translate(-50%, -50%);
background-color: #ffffff;
padding: 24px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Title = styled.h1`
color: #000;
margin-bottom: 0.5rem;
`

const Paragraph = styled.p`
margin-bottom: 2rem;
text-align: center;
`

const Button = styled.button`
background-color: #000;
color: #fff;
border: none;
width: 100%;
height: 48px;
font-size: 16px;
`

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) {
            clearInterval();
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            {hrs === 0 && mins === 0 && secs === 0

            ?

            <ModalOverlay>
                <Alert>
                    <Title>Your time is up!</Title>
                    <Paragraph>Your booking took to long time and it will now be canceled.</Paragraph>
                    <Link to="/matchedbuses">
                        <Button>Done</Button>
                    </Link>
                </Alert>
            </ModalOverlay>

            :

            <TimerText>You have <Strong>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</Strong> minutes left to book</TimerText>

            }
        </div>
    );
}

export default CountDownTimer;
