import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css"; // Adjust the path if necessary

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      // CardElement has not been initialized yet.
      return;
    }

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setErrorMessage(error.message || "An error occurred");
      setIsLoading(false);
    } else if (token) {
      setErrorMessage(null);
      // Send token to your server (replace with your own logic)
      const response = await fetch("/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.id }),
      });

      if (response.ok) {
        alert("Payment successful!");
      } else {
        setErrorMessage("Payment failed.");
      }
      setIsLoading(false);
    }
  };

  // Define custom styles for CardElement
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardStyle} />
      {errorMessage && <div role="alert">{errorMessage}</div>}
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;
