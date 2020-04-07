import React from "react";
import { FooterContainer } from "./footer.styles";

const date = new Date().getFullYear();
const Footer = () => (
  <FooterContainer>{`@${date} Dominic Travis Kudiabor`}</FooterContainer>
);

export default Footer;
