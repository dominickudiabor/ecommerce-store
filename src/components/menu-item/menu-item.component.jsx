import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  MenuBackgroundImage,
  MenuItemContent,
  MenuItemSubtitle,
  MenuItemTitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <MenuItemContainer size={size}>

    <MenuBackgroundImage className = 'image' imageUrl={imageUrl}></MenuBackgroundImage>

    <MenuItemContent onClick={() => history.push(`${match.url}${linkUrl}`)}>

      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>

      <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>

    </MenuItemContent>

  </MenuItemContainer>
);

export default withRouter(MenuItem);
