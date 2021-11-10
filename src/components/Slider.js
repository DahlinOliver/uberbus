import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import styled from 'styled-components';
import intro from '../images/intro.png';
import Frame1 from '../images/frame1.jpg';
import Frame2 from '../images/frame2.jpg';
import Frame3 from '../images/frame3.jpg';
import Intro from './Intro';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../styles.css";
import SwiperCore, {
    Navigation,
  Pagination,
} from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

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

const Img = styled.img`
width: 100%;
max-height: 25%;
margin-bottom: 32px;
`

const Title = styled.h1`
color: #000;
font-size: ${XLarge};
`

const Paragraph = styled.p`
color: #000;
font-size: ${MediumP};
`

const Next = styled.button`
background-color: #000;
height: 56px;
width: 100%;
color: #fff;
border: none;
font-size: ${LargeP};
`

const Skip = styled.button`
background-color: transparent;
height: 56px;
width: 100%;
color: #000;
border: none;
font-size: ${LargeP};
`

function Slider() {

const [isDisplayed, setIsDisplayed] = useState(true);

useEffect(() => {
  setInterval(() => {
    setIsDisplayed(false);
  }, 2000);
}, []);

    return (
    <>
      {isDisplayed

      ? <Intro />

      :

      <div className="container">
        <Swiper
          /* navigation */
          allowSlideNext={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={200}
          loop={false}
          pagination={{
            clickable: true
          }}
          className="mySwiper"
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
              <Img src={Frame1} />
              <Title>Enter your destination</Title>
              <Paragraph>Choose pickup and drop-off destination and search for routes.</Paragraph>
          </SwiperSlide>

          <SwiperSlide>
              <Img src={Frame2} />
              <Title>Choose bus</Title>
              <Paragraph>Tap the bus of your choice and you will be able to see more descriptive information about the ride.</Paragraph>
          </SwiperSlide>

          <SwiperSlide>
              <Img src={Frame3} />
              <Title>Book UberBus</Title>
              <Paragraph>You can now pay for your UberBus ride with several payment methods to make it easy for you.</Paragraph>
          </SwiperSlide>
        </Swiper>
        <Link to="/homescreen">
          <Next>Skip</Next>
        </Link>
      </div>
      }
      </>
    )
}

export default Slider
