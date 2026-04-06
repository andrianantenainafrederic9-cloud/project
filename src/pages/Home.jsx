import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Home() {
  // Affiche seulement 3 produits en vedette
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenue dans notre Boutique</h1>
          <p>Découvrez nos produits exclusifs et profitez de nos meilleures offres</p>
          <Link to="/shop" className="cta-button">
            Explorer la boutique →
          </Link>
        </div>
        <div className="hero-image">
          🛍️✨
        </div>
      </section>

      {/* Produits en vedette */}
      <section className="featured">
        <div className="container">
          <h2>Produits en Vedette</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <Link 
                key={product.id} 
                to={`/produit/${product.id}`} 
                className="product-link"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
          <Link to="/shop" className="see-all">
            Voir tous les produits
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;