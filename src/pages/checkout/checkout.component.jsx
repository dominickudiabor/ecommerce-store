import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  TotalContainer,
  AlertContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlockContainer>
      <span>Product</span>
      </CheckoutHeaderBlockContainer>


      <CheckoutHeaderBlockContainer>
      <span>Description</span>
      </CheckoutHeaderBlockContainer>
     

      <CheckoutHeaderBlockContainer>
      <span>Quantity</span>
      </CheckoutHeaderBlockContainer>
    

      <CheckoutHeaderBlockContainer>
      <span>Price</span>
      </CheckoutHeaderBlockContainer>
      

      <CheckoutHeaderBlockContainer>
      <span>Remove</span>
      </CheckoutHeaderBlockContainer>
   
    </CheckoutHeaderContainer>

    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <TotalContainer>
      <span>TOTAL : €{cartTotal}</span>
    </TotalContainer>

    <AlertContainer>
      *Please use the following test credit card for payments*
    </AlertContainer>

    <AlertContainer>
      {" "}
      4242 4242 4242 4242 -- Exp : 01/20 -- CVV : 123
    </AlertContainer>

    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
