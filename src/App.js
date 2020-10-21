import React,{useEffect}from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";


const promise = loadStripe('pk_test_51HdzGuK9CUVbYgbIHtt7RiPAdjyGxQ10u7kGXwRzqdnVLIFaKgzairvClVl3RVTxewyGIOyK9SxrD2g8f7X2cCeW0096KkBcm8');

function App() {
  const[{user}, dispatch] = useStateValue();

 

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });

      }
      else{
        dispatch({
          type:"SET_USER",
          user:null,
        });

      }
    });
    return ()=>{
      unsubscribe();
    }

  },[])
  return (
    <Router>
      <div className="app">
      <Switch>
      <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
