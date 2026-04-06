import { useCart } from '../context/CartContext';
import { useEffect } from 'react';
import CartItem from '../components/CartItem';

function Checkout() {
  const { cartItems, total } = useCart();

  // Vérification panier non vide (redondance sécurité)
  useEffect(() => {
    if (cartItems.length === 0) {
      window.location.href = '/cart';
    }
  }, [cartItems]);

  const handleCheckout = async () => {
    // Simulation paiement
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Paiement "réussi"
      alert(`
        🎉 PAIEMENT RÉUSSI ! 🎉
        
        Montant: ${total.toFixed(2)}€
        Articles: ${cartItems.length}
        
        Merci pour votre achat !
      `);
      
      // Vide le panier
      localStorage.removeItem('cart');
      window.location.href = '/';
      
    } catch (error) {
      alert('❌ Erreur de paiement. Essayez à nouveau.');
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        {/* En-tête */}
        <div className="checkout-header">
          <h1>Finaliser votre commande</h1>
          <p>Vérifiez votre panier avant de payer</p>
        </div>

        {/* Récapitulatif panier */}
        <div className="checkout-summary">
          <h3>Récapitulatif ({cartItems.length} article(s))</h3>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}€ x {item.quantity}</p>
                  </div>
                </div>
                <span className="item-total">
                  {(item.price * item.quantity).toFixed(2)}€
                </span>
              </div>
            ))}
          </div>
          
          <div className="total-section">
            <div className="total-row">
              <span>Total :</span>
              <strong>{total.toFixed(2)} €</strong>
            </div>
          </div>
        </div>

        {/* Formulaire paiement (simulation) */}
        <div className="payment-form">
          <h3>Informations de paiement</h3>
          <div className="form-group">
            <label>Numéro de carte</label>
            <input type="text" placeholder="**** **** **** ****" disabled />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry</label>
              <input type="text" placeholder="MM/AA" disabled />
            </div>
            <div className="form-group">
              <label>CVC</label>
              <input type="text" placeholder="***" disabled />
            </div>
          </div>
        </div>

        {/* Bouton final */}
        <button 
          onClick={handleCheckout} 
          className="pay-button"
          disabled={total === 0}
        >
          💳 Payer {total.toFixed(2)} € Sécurisé
        </button>
      </div>
    </div>
  );
}

export default Checkout;