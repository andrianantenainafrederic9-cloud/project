import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { total, cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">🛍️ Boutique</NavLink>
      </div>
      <div className="nav-links">
        <NavLink 
          to="/shop" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Boutique
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Panier ({cartItems.length})
        </NavLink>
      </div>
      <div className="nav-total">
        Total: {total.toFixed(2)}€
      </div>
    </nav>
  );
}

export default Navbar;