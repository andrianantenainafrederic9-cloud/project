function FilterBar({ filters, setFilters }) {
  return (
    <div className="filter-bar">
      <select 
        value={filters.category} 
        onChange={(e) => setFilters({...filters, category: e.target.value})}
      >
        <option value="all">Toutes catégories</option>
        <option value="electronics">Électronique</option>
        <option value="clothing">Vêtements</option>
        <option value="books">Livres</option>
      </select>
      
      <input
        type="range"
        min="0"
        max="100"
        value={filters.maxPrice}
        onChange={(e) => setFilters({...filters, maxPrice: parseInt(e.target.value)})}
      />
      <span>Prix max: {filters.maxPrice}€</span>
    </div>
  );
}

export default FilterBar;