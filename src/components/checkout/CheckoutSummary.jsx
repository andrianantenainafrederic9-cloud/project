export default function CheckoutSummary({ cartItems, total }) {
  return (
    <div className="checkout-summary">
      <div className="checkout-header">
        <h3>Récapitulatif ({cartItems.length} article(s))</h3>
        <span>{cartItems.length} article(s)</span>
      </div>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-cart-item">
            <div className="item-info">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div>
                <h4>{item.name}</h4>
                <p>{item.price}€ × {item.quantity}</p>
              </div>
            </div>

            <span className="item-total">
              {(item.price * item.quantity).toFixed(2)} €
            </span>
          </div>
        ))}
      </div>

      <div className="checkout-total">
        <span>Total</span>
        <span>{total.toFixed(2)} €</span>
      </div>
    </div>
  );
}