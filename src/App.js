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
import PaymentMethod from './components/PaymentMethod';
import BusInfo from './components/BusInfo';

function App() {
  return (
      <div className="App">
        <BusInfo />
      </div>
  )
}

export default App
