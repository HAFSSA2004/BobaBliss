"use client";

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useCart } from "@/hooks/use-cart";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  // Calculate total amount in dollars
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (totalAmount === 0) return;

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(totalAmount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [totalAmount]);

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm amount={totalAmount} />
    </Elements>
  );
}
