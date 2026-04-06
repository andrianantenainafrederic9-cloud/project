import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Votre panier est vide</h2>
        <Link to="/shop">Continuer les achats</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Panier</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: {total.toFixed(2)}€</h3>
        <Link to="/checkout" className="checkout-btn">Passer à la caisse</Link>
      </div>
    </div>
  );
}

export default Cart;