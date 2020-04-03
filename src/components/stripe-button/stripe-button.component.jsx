import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_cOIDryHazj0qBYqjpsFHvOhE00zKgAPvLL';

  const onToken = token => {
    console.log(token);
    alert("Payment Sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kudix Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLable="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
