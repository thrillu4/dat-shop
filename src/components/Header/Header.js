import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./header.scss";

const Header = () => {
  return (
    <>
      <nav className="nav flex flex-center">
        <ul className="links flex ">
          <li>
            <Link to={ROUTES.ABOUTUS}>Про нас</Link>
          </li>
          <li>
            <Link to={ROUTES.CATALOG}>Каталог продукції</Link>
          </li>
          <li>
            <Link to={ROUTES.DELIVERY}>Оплата і доставка</Link>
          </li>
          <li>
            <Link to={ROUTES.PARTNERS}>Партнери</Link>
          </li>
          <li>
            <Link to={ROUTES.NEWS}>Новини</Link>
          </li>
          <li>
            <Link to={ROUTES.CONTACTS}>Контакти</Link>
          </li>
          <li className="line"></li>
        </ul>
        <div className="auth flex ">
          <img src="/images/icons/login.png" alt="login" />
          <div>
            <Link to={ROUTES.REGISTRATION}>Вхід | Реестрація</Link>
          </div>
        </div>
      </nav>
      <div className="promo flex">
        <Link className="logo" to={ROUTES.HOME}>
          <img src="/images/main-logo.png" alt="logo" />
        </Link>
        <div className="wrapper flex">
          <form className="search">
            <input
              type="text"
              name="search"
              placeholder="Пошук"
              autoComplete="off"
            />
            <button className="loupe">
              <img src="/images/icons/loupe.png" alt="loupe" />
            </button>
          </form>
          <div className="number flex">
            <div className="circle">
              <img src="/images/icons/call.png" alt="call" />
            </div>
            <div className="call">
              <div>+38 (067) 115 00 58</div>
              <a href="tel:+380671150058">Замовити зворотній зв’язок</a>
            </div>
          </div>
          <div className="cart flex">
            <div className="circle">
              <Link to="">
                <img src="/images/icons/heart.png" alt="heart" />
                <span className="count">1</span>
              </Link>
            </div>
            <div className="circle">
              <Link to="">
                <img src="/images/icons/comparison.png" alt="comparison" />
                <span className="count">1</span>
              </Link>
            </div>
            <div className="circle">
              <Link to="">
                <img src="/images/icons/cart.png" alt="cart" />
                <span className="count">1</span>
              </Link>
            </div>

            <div className="price">0,0 грн</div>
          </div>
        </div>
      </div>
      <div className="categories flex flex-center">
        <div className="cat_wrapper flex">
          <img src="/images/icons/seeds.png" alt="seeds" />
          <div className="title">Насіння</div>
        </div>
        <div className="cat_wrapper flex">
          <img src="/images/icons/sapling.png" alt="sapling" />
          <div className="title">Засоби захисту рослин</div>
        </div>
        <div className="cat_wrapper flex">
          <img src="/images/icons/group.png" alt="group" />
          <div className="title">Добрива</div>
        </div>
        <div className="cat_wrapper flex">
          <img src="/images/icons/frame.png" alt="frame" />
          <div className="title">кормова група</div>
        </div>
        <div className="cat_wrapper flex">
          <img src="/images/icons/farmer.png" alt="farmer" />
          <div className="title">Агроному в поміч</div>
        </div>
      </div>
    </>
  );
};

export default Header;
