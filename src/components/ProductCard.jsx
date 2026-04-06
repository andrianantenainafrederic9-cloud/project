function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price}€</p>
      <span className="category">{product.category}</span>
    </div>
  );
}

export default ProductCard;