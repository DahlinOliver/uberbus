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
import BusInfo2 from './components/BusInfo2';
import BookBus2 from './components/BookBus2';
import PaymentMethod2 from './components/PaymentMethod2';
import SamsungPay2 from './components/SamsungPay2';
import GooglePay2 from './components/GooglePay2';
import ApplePay2 from './components/ApplePay2';
import PayPal2 from './components/PayPal2';
import ChoosePayment2 from './components/ChoosePayment2';
import Payment2 from './components/Payment2';
import PaymentConfirmation2 from './components/PaymentConfirmation2';
import TripDetails2 from './components/TripDetails2';
import Arrival2 from './components/Arrival2';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Homescreen />
          </Route>

          <Route exact path="/intro">
            <Intro />
          </Route>

          <Route exact path="/help">
            <Slider />
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

          <Route exact path="/businfo2">
            <BusInfo2 />
          </Route>

          <Route exact path="/bookbus2">
            <BookBus2 />
          </Route>

          <Route exact path="/paymentmethod2">
            <PaymentMethod2 />
          </Route>

          <Route exact path="/samsungpay2">
            <SamsungPay2 />
          </Route>

          <Route exact path="/googlepay2">
            <GooglePay2 />
          </Route>

          <Route exact path="/applepay2">
            <ApplePay2 />
          </Route>

          <Route exact path="/paypal2">
            <PayPal2 />
          </Route>

          <Route exact path="/choosepayment2">
            <ChoosePayment2 />
          </Route>

          <Route exact path="/payment2">
            <Payment2 />
          </Route>

          <Route exact path="/paymentconfirmation2">
            <PaymentConfirmation2 />
          </Route>

          <Route exact path="/tripdetails2">
            <TripDetails2 />
          </Route>

          <Route exact path="/arrival2">
            <Arrival2 />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App
