const ProductFilter = ({ seeds, selectedCategory, onCategoryChange }) => {
  const categories = Array.from(
    new Set(seeds.seeds.map((product) => product.category))
  );
  const manufacturer = Array.from(
    new Set(seeds.seeds.map((product) => product.manufacturer))
  );

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      onCategoryChange(category);
    } else {
      onCategoryChange("");
    }
  };

  return (
    <div className="filter">
      <div className="filter_title">Фільтр</div>
      <div className="filter_filter">
        <div className="subtitle">Виробник</div>
        <ul className="manufacturer-list list">
          {manufacturer.map((manufacturer, i) => {
            return (
              <li className="flex" key={i}>
                <input
                  type="checkbox"
                  className="checkbox-list"
                  name={manufacturer}
                  value={manufacturer}
                  onChange={handleCategoryChange}
                  checked={selectedCategory === manufacturer}
                />
                {manufacturer}
              </li>
            );
          })}
        </ul>
        <div className="subtitle">Культура</div>
        <ul className="category-list list">
          {categories.map((category, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  className="checkbox-list"
                  name={category}
                  value={category}
                  checked={selectedCategory === category}
                  onChange={handleCategoryChange}
                />
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
