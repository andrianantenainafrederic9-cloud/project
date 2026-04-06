import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    navigate('/shop');
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product.id);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={product.image} alt={product.name} />
        <div>
          <h1>{product.name}</h1>
          <p className="price">{product.price}€</p>
          <p>{product.description}</p>
          <button onClick={handleAddToCart} className="add-to-cart">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;