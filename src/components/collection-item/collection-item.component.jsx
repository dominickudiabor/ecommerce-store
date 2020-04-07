import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemImage,
  AddToCartButton,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl}></CollectionItemImage>

      <CollectionFooterContainer>
        <NameContainer >{name}</NameContainer>

        <PriceContainer>€{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddToCartButton onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
