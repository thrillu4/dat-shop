import "./catalog.scss";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import data from "../../data/productsData.json";

const Catalog = () => {
  return (
    <>
      <section className="catalog catalog-page">
        <div className="path flex flex-center">
          <div className="main">Головна</div>
          <div className="dot"></div>
          <div className="current">Каталог</div>
        </div>
        <h2>Каталог продукції </h2>
        <div className="sort flex">
          <div className="sort_count">Показано {data.seeds.length} товарів</div>
          <div className="sort_choose flex">
            <div>Сортувати за</div>
            <div className="svg_container">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.41846 6.00003C9.41846 6.2151 9.33634 6.43013 9.17246 6.5941L4.01268 11.7538C3.68445 12.0821 3.15229 12.0821 2.82419 11.7538C2.4961 11.4257 2.4961 10.8937 2.82419 10.5654L7.38985 6.00003L2.82435 1.43461C2.49626 1.10639 2.49626 0.574383 2.82435 0.246316C3.15245 -0.0820694 3.68461 -0.0820694 4.01284 0.246316L9.17262 5.40596C9.33653 5.57001 9.41846 5.78505 9.41846 6.00003Z"
                  fill="#84C551"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="catalog_wrap flex">
          <ProductFilter />
          <ProductList />
        </div>
      </section>
      <div className="catalog_description">
        <div className="catalog_description-wrap">
          <h4>Засоби захисту рослин</h4>
          <p>
            Засоби захисту рослин поділяють на чотири основні види: механічні,
            хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх
            одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
            Існують тисячі різних видів препаратів хімічного захисту. Але не
            варто їх плутати, а тим більше об′єднувати з хімічними добривами.
            Методи їх впливу на рослини абсолютно протилежні.
            <br /> <br />
            Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці
            препарати мають суоро визначений об′єкт впливу (збудник хвороби,
            комахи-шкідники, вид або родина бур′янів).
            <br /> <br /> Отрутохімікати не терплять халатності. Це той тип
            препарату, який недостатньо просто розвести у воді і обприскати ним
            рослини. Якщо отрутохімікати неправильно застосувати, то вони можуть
            завдати шкоди вам, корисним комахам, урожаю.
          </p>
        </div>
      </div>
    </>
  );
};

export default Catalog;
