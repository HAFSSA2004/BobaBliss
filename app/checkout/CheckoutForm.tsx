"use client";

import React, { useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:3000/payment-success?amount=${amount}`,
      },
    });

    if (error) setErrorMessage(error.message);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-gradient-to-tr from-gray-50 to-white shadow-md rounded-2xl border border-gray-200"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Secure Payment
      </h2>

      <div className="p-3 rounded-md border border-gray-300 bg-white mb-4">
        <PaymentElement id="payment-element" />
      </div>

      {errorMessage && (
        <div className="text-red-600 text-sm mb-2 text-center">{errorMessage}</div>
      )}

      <button
        disabled={!stripe || loading}
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold rounded-xl transition-all disabled:opacity-50"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutForm;
