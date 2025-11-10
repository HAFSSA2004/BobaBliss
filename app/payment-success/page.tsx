"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

// Separate the content into its own component
function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams?.get("amount");
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    localStorage.removeItem("cartItems");
  }, []);

  return (
    <main className="max-w-3xl mx-auto text-center mt-20 p-10 bg-gradient-to-tr from-purple-500 to-blue-500 text-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg mb-6">
        Thank you for your purchase of{" "}
        <span className="font-semibold">${amount}</span>.
      </p>
      <p className="text-sm opacity-80 mb-6">
        Your cart has been cleared. You can continue shopping anytime!
      </p>

      <a
        href="/"
        className="inline-block mt-6 bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
      >
        Back to Store
      </a>
    </main>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<div className="text-center mt-20 text-lg">Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
