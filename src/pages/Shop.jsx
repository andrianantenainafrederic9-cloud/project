import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({ category: 'all', maxPrice: 100 });

  useEffect(() => {
    let result = products;
    
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }
    
    result = result.filter(p => p.price <= filters.maxPrice);
    
    setFilteredProducts(result);
  }, [filters]);

  return (
    <div className="shop">
      <h1>Boutique</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <Link key={product.id} to={`/produit/${product.id}`} className="product-link">
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;