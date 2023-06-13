import seeds from "../../data/productsData.json";

const ProductList = () => {
  return (
    <div className="product-list">
      {seeds.seeds.map(({ image, name, availability, price, id }) => {
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
                <div className="price">{price}</div>
                <div>{availability ? "1 шт" : ""}</div>
              </div>
              <div className="product-item_cart">
                <img src="./images/icons/cart.png" alt="cart" />
              </div>
            </div>
          </div>
        );
      })}
      <button className="product-button">Показати ще</button>
    </div>
  );
};

export default ProductList;
