export default function CheckoutHeader() {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-black to-gray-800 text-white shadow-lg">

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center justify-center text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-bold tracking-tight">
          Finaliser votre commande
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-3 text-sm max-w-md">
          Vérifiez votre panier avant de payer en toute sécurité
        </p>

        {/* BADGE */}
        <div className="mt-5 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur">

          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-sm">
            Paiement sécurisé
          </span>

        </div>

      </div>

    </div>
  );
}