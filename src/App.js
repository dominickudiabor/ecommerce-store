import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in and sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Footer from "./components/footer/footer.component";


import { selectCurrentUser } from "./redux/user/user.selectors";
import {checkUserSession} from './redux/user/user.actions'


class App extends Component {
unsubscibeFromAuth= null

  componentDidMount() {  
const {checkUserSession} = this.props;
checkUserSession();
  }

  componentWillUnmount() {
  this.unsubscibeFromAuth();
  }

  render() {
    const{ currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/shop"} component={ShopPage} />
          <Route exact path={"/checkout"} component={CheckoutPage} />
          <Route
            exact
            path={"/signin"}
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
 
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
