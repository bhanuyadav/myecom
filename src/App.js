import React from "react";
import Login from './Login';
import Register from './Register';
import AdminUI from './AdminUI';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Switch>
        
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />

         {/**/}
         <Route path="/login">
          <Login/>
        </Route>
        
        <Route path="/Register">
          <Register/>
         </Route>
        
         <Route path="/Adminpanel" component={AdminUI}>
         </Route>

         {/**/}

          {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
