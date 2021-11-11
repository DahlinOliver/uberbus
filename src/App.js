import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Slider from './components/Slider';
import Homescreen from './components/Homescreen';
import MatchedRoutes from './components/MatchedRoutes';
import AllRoutes from './components/AllRoutes';
import MatchedBuses from './components/MatchedBuses';
import Payment from './components/Payment';
import Payment2 from './components/Payment2';
import BusInfo from './components/BusInfo';
import BusInfo2 from './components/BusInfo2';
import BookBus from './components/BookBus';
import BookBus2 from './components/BookBus2';
import TripDetails from './components/TripDetails';
import TripDetails2 from './components/TripDetails2';
import PaymentMethod from './components/PaymentMethod';
import PaymentMethod2 from './components/PaymentMethod2';
import ChoosePayment from './components/ChoosePayment';
import ChoosePayment2 from './components/ChoosePayment2';
import PaymentConfirmation from './components/PaymentConfirmation';
import PaymentConfirmation2 from './components/PaymentConfirmation2';
import Arrival from './components/Arrival';
import Arrival2 from './components/Arrival2';
import SamsungPay from './components/SamsungPay';
import SamsungPay2 from './components/SamsungPay2';
import GooglePay from './components/GooglePay';
import GooglePay2 from './components/GooglePay2';
import ApplePay from './components/ApplePay';
import ApplePay2 from './components/ApplePay2';
import PayPal from './components/PayPal';
import PayPal2 from './components/PayPal2';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Slider}></Route>
          <Route exact path="/homescreen" component={Homescreen}></Route>
          <Route exact path="/matchedroutes" component={MatchedRoutes}></Route>
          <Route exact path="/allroutes" component={AllRoutes}></Route>
          <Route exact path="/matchedbuses" component={MatchedBuses}></Route>
          <Route exact path="/payment" component={Payment}></Route>
          <Route exact path="/payment2" component={Payment2}></Route>
          <Route exact path="/businfo" component={BusInfo}></Route>
          <Route exact path="/businfo2" component={BusInfo2}></Route>
          <Route exact path="/bookbus" component={BookBus}></Route>
          <Route exact path="/bookbus2" component={BookBus2}></Route>
          <Route exact path="/tripdetails" component={TripDetails}></Route>
          <Route exact path="/tripdetails2" component={TripDetails2}></Route>
          <Route exact path="/paymentmethod" component={PaymentMethod}></Route>
          <Route exact path="/paymentmethod2" component={PaymentMethod2}></Route>
          <Route exact path="/choosepayment" component={ChoosePayment}></Route>
          <Route exact path="/choosepayment2" component={ChoosePayment2}></Route>
          <Route exact path="/paymentconfirmation" component={PaymentConfirmation}></Route>
          <Route exact path="/paymentconfirmation2" component={PaymentConfirmation2}></Route>
          <Route exact path="/arrival" component={Arrival}></Route>
          <Route exact path="/arrival2" component={Arrival2}></Route>
          <Route exact path="/samsungpay" component={SamsungPay}></Route>
          <Route exact path="/samsungpay2" component={SamsungPay2}></Route>
          <Route exact path="/googlepay" component={GooglePay}></Route>
          <Route exact path="/googlepay2" component={GooglePay2}></Route>
          <Route exact path="/applepay" component={ApplePay}></Route>
          <Route exact path="/applepay2" component={ApplePay2}></Route>
          <Route exact path="/paypal" component={PayPal}></Route>       
          <Route exact path="/paypal2" component={PayPal2}></Route>      
          
          <Redirect to="/homescreen" />

        </Switch>
      </div>
    </Router>
  )
}

export default App
