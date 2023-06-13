import seeds from "../../data/productsData.json";

const ProductFilter = () => {
  return (
    <div className="filter">
      <div className="filter_title">Фільтр</div>
      <div className="filter_filter">
        <div className="subtitle">Виробник</div>
        <ul className="manufacturer-list list">
          {seeds.seeds.map(({ manufacturer }, i) => {
            return (
              <li className="flex" key={i}>
                <input
                  type="checkbox"
                  className="checkbox-list"
                  name={manufacturer}
                />
                {manufacturer}
              </li>
            );
          })}
        </ul>
        <div className="subtitle">Культура</div>
        <ul className="category-list list">
          {seeds.seeds.map(({ category }, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  className="checkbox-list"
                  name={category}
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
