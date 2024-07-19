import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

// Replace with your own publishable key
const stripePromise = loadStripe('your-publishable-key-here');

const App: React.FC = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;