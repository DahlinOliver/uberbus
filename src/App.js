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
import PaymentConfirmation from './components/PaymentConfirmation';
import Arrival from './components/Arrival';
import SamsungPay from './components/SamsungPay';
import GooglePay from './components/GooglePay';
import ApplePay from './components/ApplePay';
import PayPal from './components/PayPal';
import BookBus from './components/BookBus';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Homescreen />
          </Route>

          <Route exact path="/matchedroutes">
            <MatchedRoutes />
          </Route>

          <Route exact path="/allroutes">
            <AllRoutes />
          </Route>

          <Route exact path="/matchedbuses">
            <MatchedBuses />
          </Route>

          <Route exact path="/payment">
            <Payment />
          </Route>

          <Route exact path="/businfo">
            <BusInfo />
          </Route>

          <Route exact path="/tripdetails">
            <TripDetails />
          </Route>

          <Route exact path="/paymentmethod">
            <PaymentMethod />
          </Route>

          <Route exact path="/choosepayment">
            <ChoosePayment />
          </Route>

          <Route exact path="/paymentconfirmation">
            <PaymentConfirmation />
          </Route>

          <Route exact path="/arrival">
            <Arrival />
          </Route>

          <Route exact path="/samsungpay">
            <SamsungPay />
          </Route>

          <Route exact path="/googlepay">
            <GooglePay />
          </Route>

          <Route exact path="/applepay">
            <ApplePay />
          </Route>

          <Route exact path="/paypal">
            <PayPal />
          </Route>

          <Route exact path="/bookbus">
            <BookBus />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
