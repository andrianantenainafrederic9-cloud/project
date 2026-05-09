import { useState } from "react";

export default function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("mvola");

  return (
    <div className="mb-8 bg-white border rounded-2xl shadow-sm p-6">
      {/* HEADER */}
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-800">
          Informations de paiement
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Paiement sécurisé et chiffré 🔒
        </p>
      </div>

      {/* CONTAINER PAYMENT METHODS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label className={`p-4 border rounded-xl cursor-pointer transition ${paymentMethod === "mvola" ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="mvola"
            checked={paymentMethod === "mvola"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          MVola
        </label>

        <label className={`p-4 border rounded-xl cursor-pointer transition ${paymentMethod === "orange_money" ? "border-orange-500 bg-orange-50" : "border-gray-200"}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="orange_money"
            checked={paymentMethod === "orange_money"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          Orange Money
        </label>

        <label className={`p-4 border rounded-xl cursor-pointer transition ${paymentMethod === "telma_money" ? "border-green-500 bg-green-50" : "border-gray-200"}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="telma_money"
            checked={paymentMethod === "telma_money"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          Telma Money
        </label>

        <label className={`p-4 border rounded-xl cursor-pointer transition ${paymentMethod === "bank_card" ? "border-gray-800 bg-gray-50" : "border-gray-200"}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="bank_card"
            checked={paymentMethod === "bank_card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          Carte bancaire
        </label>

        <label className={`p-4 border rounded-xl cursor-pointer transition md:col-span-2 ${paymentMethod === "bank_account" ? "border-purple-500 bg-purple-50" : "border-gray-200"}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="bank_account"
            checked={paymentMethod === "bank_account"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          Compte bancaire
        </label>
      </div>

      {/* FORM FIELDS */}
      {paymentMethod === "bank_card" && (
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Numéro de carte</label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="text-sm text-gray-600">Expiration</label>
              <input
                type="text"
                placeholder="MM/AA"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div className="w-1/2">
              <label className="text-sm text-gray-600">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>
          </div>
        </div>
      )}

      {(paymentMethod === "mvola" ||
        paymentMethod === "orange_money" ||
        paymentMethod === "telma_money") && (
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Numéro de téléphone</label>
            <input
              type="tel"
              placeholder="+261 34 00 000 00"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Nom du titulaire</label>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>
        </div>
      )}

      {paymentMethod === "bank_account" && (
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Nom de la banque</label>
            <input
              type="text"
              placeholder="Nom de la banque"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Numéro de compte</label>
            <input
              type="text"
              placeholder="Numéro de compte bancaire"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Nom du titulaire</label>
            <input
              type="text"
              placeholder="Nom complet"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>
        </div>
      )}

      {/* SECURITY INFO */}
      <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Transactions sécurisées SSL
      </div>
    </div>
  );
}