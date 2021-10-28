import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Intro from './components/Intro';
import Slider from './components/Slider';
import Homescreen from './components/Homescreen';
import MatchedRoutes from './components/MatchedRoutes';
import AllRoutes from './components/AllRoutes';
import MatchedBuses from './components/MatchedBuses';
import Payment from './components/Payment';
import BusInfo from './components/BusInfo';
import TripDetails from './components/TripDetails';
import PaymentMethod from './components/PaymentMethod';
import ChoosePayment from './components/ChoosePayment';

function App() {
  return (
      <div className="App">
        <ChoosePayment />
      </div>
  )
}

export default App
