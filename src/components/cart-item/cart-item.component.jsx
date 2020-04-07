import React from "react";

import {
  CartItemContainer,
  ImageUrlContainer,
  ItemDetailsContainer,
  Name
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ImageUrlContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <span>
        {quantity} x €{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
