import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartHidden
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownMenu,
  CartItems,
  EmptyMessage
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownMenu >
    <CartItems >
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessage >
          {" "}
          Your cart is empty
        </EmptyMessage>
      )}
    </CartItems>

    <CustomButton
      style={{ marginTop: "auto" }}
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownMenu>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  hidden: selectCartHidden
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
