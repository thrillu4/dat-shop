import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductList = ({
  seeds,
  selectedCategory,
  displayedProducts,
  setDisplayedProducts,
  filterOption,
}) => {
  const navigate = useNavigate();
  const products = seeds.seeds;
  const [isEnd, setIsEnd] = useState(false);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          (product.category === selectedCategory ||
            product.manufacturer === selectedCategory) &&
          (!filterOption ||
            (filterOption === "low" && product.price <= 200) ||
            (filterOption === "high" && product.price > 200))
      )
    : products.filter(
        (product) =>
          !filterOption ||
          (filterOption === "low" && product.price <= 200) ||
          (filterOption === "high" && product.price > 200)
      );

  const handleShowMore = () => {
    setDisplayedProducts(displayedProducts + 5);
    if (
      displayedProducts + 5 >= products.length ||
      displayedProducts + 5 >= filteredProducts.length
    )
      setIsEnd(true);
  };

  return (
    <div className="product-list">
      {filteredProducts
        .slice(0, displayedProducts)
        .map(({ image, name, availability, price, id }) => {
          return (
            <div className="product-item" key={id}>
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src={image} alt="product" />
              <h5>{name}</h5>
              <p>{availability ? "В наявності" : "Закінчилось"}</p>
              <div className="product-item_wrap flex">
                <div>
                  <div className="price">{price} грн</div>
                  <div>{availability ? "1 шт" : ""}</div>
                </div>
                <Link
                  to={`/product/${id}`}
                  onClick={() => handleProductClick(id)}
                  key={id}
                  className="product-item_cart"
                >
                  <img src="./images/icons/cart.png" alt="cart" />
                </Link>
              </div>
            </div>
          );
        })}
      {!isEnd && (
        <button className="product-button" onClick={handleShowMore}>
          Показати ще
        </button>
      )}
    </div>
  );
};

export default ProductList;
