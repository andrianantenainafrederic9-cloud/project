import { useEffect } from "react";
import { useCart } from "../context/CartContext";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import PaymentForm from "../components/checkout/PaymentForm";
import CheckoutButton from "../components/checkout/CheckoutButton";

export default function Checkout() {
  const { cartItems, total } = useCart();

  // Sécurité panier
  useEffect(() => {
    if (cartItems.length === 0) {
      window.location.href = "/cart";
    }
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* GRID 3 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl shadow-sm border p-6 h-fit">

            <CheckoutHeader />

          </div>

          {/* CENTER CARD */}
          <div className="bg-white rounded-3xl shadow-sm border p-6">

            <CheckoutSummary
              cartItems={cartItems}
              total={total}
            />

          </div>

          {/* RIGHT CARD */}
          <div className="space-y-6">

            {/* PAYMENT */}
            <div className="bg-white rounded-3xl shadow-sm border p-6">

              <PaymentForm />

            </div>

            {/* BUTTON */}
            <div className="bg-white rounded-3xl shadow-sm border p-6">

              <CheckoutButton
                cartItems={cartItems}
                total={total}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}