import React from "react";
import { connect } from "react-redux";
import {
  clearItemsFromCart,
  addItemToCart,
  removeItemFromCart
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>

      <TextContainer>{name}</TextContainer>

      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094; </div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>

      <TextContainer>{price}</TextContainer>

      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDisaptchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemsFromCart(item)),
  addItem: item => dispatch(addItemToCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDisaptchToProps)(CheckoutItem);
