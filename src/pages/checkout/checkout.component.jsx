import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";


import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block"></div>
      <span>Product</span>
      <div className="header-block"></div>
      <span>Description</span>
      <div className="header-block"></div>
      <span>Quantity</span>
      <div className="header-block"></div>
      <span>Price</span>
      <div className="header-block"></div>
      <span>Remove</span>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL : €{cartTotal}</span>
    </div>
    <span className = 'alert'>*Please use the following test credit card for payments*
  </span>
  <span className = 'alert'>  4242 4242 4242 4242  -- Exp : 01/20 -- CVV  : 123</span>
    <StripeCheckoutButton price = {cartTotal}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
