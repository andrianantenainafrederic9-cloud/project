import { useCart } from "../../context/CartContext";

export default function CheckoutButton({ cartItems, total }) {
  const { clearCart } = useCart?.() || {};

  const handleCheckout = async () => {
    try {
      await new Promise((r) => setTimeout(r, 2000));

      alert(`
🎉 PAIEMENT RÉUSSI 🎉
Montant: ${total.toFixed(2)}€
Articles: ${cartItems.length}
      `);

      localStorage.removeItem("cart");

      if (clearCart) clearCart();

      window.location.href = "/";

    } catch (err) {
      alert("Erreur paiement");
    }
  };

  return (
    <div className="mt-6">

      <button
        onClick={handleCheckout}
        disabled={total === 0}
        className="
          w-full flex items-center justify-center gap-2
          bg-gradient-to-r from-black to-gray-800
          text-white font-semibold py-4 rounded-2xl
          shadow-lg hover:shadow-xl hover:scale-[1.02]
          transition disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        💳 Payer {total.toFixed(2)} €

      </button>

      {/* SECURITY NOTE */}
      <p className="text-center text-xs text-gray-500 mt-3">
        Paiement sécurisé SSL • Annulation possible sous conditions
      </p>

    </div>
  );
}