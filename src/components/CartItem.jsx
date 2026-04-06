import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}€ / unité</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="item-total">{(item.price * item.quantity).toFixed(2)}€</p>
      <button onClick={() => removeFromCart(item.id)} className="remove">✕</button>
    </div>
  );
}

export default CartItem;