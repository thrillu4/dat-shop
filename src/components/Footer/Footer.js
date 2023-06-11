import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper flex ">
        <div className="item">
          <img src="./images/main-logo.png" alt="logo" />
          <p className="text">
            Пропонуємо покупцям
            <br /> широкий вибір насіння
            <br /> овочів
          </p>
        </div>
        <div className="item">
          <h4>Інформація</h4>
          <ul>
            <li>
              <Link to={ROUTES.ABOUTUS}>Про компанію</Link>
            </li>
            <li>
              <Link to={ROUTES.DELIVERY}>Оплата і доставка</Link>
            </li>
            <li>
              <Link to={ROUTES.PARTNERS}>Партнери</Link>
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Товари</h4>
          <ul>
            <li>Каталог продукції</li>
            <li>Засоби захисту рослин</li>
            <li>Насіння</li>
            <li>Добрива</li>
            <li>Агроному в поміч</li>
          </ul>
        </div>
        <div className="item">
          <h4>Контакти</h4>
          <div className="tel_wrapper contacts flex">
            <div className="circle">
              <img src="./images/icons/call.png" alt="call" />
            </div>
            <div>
              <div>+38 (067) 115 00 58</div>
              <a className="number" href="tel:+380671150058">
                Замовити зворотній зв’язок
              </a>
            </div>
          </div>
          <div className="email_wrapper contacts flex">
            <div className="circle">
              <img src="./images/icons/email.png" alt="email" />
            </div>
            <a className="mail" href="mailto:DAT@gmail.com">
              DAT@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="year">© 2023 DAT</div>
      <div class="arrow">
        <img src="./images/icons/arrow.png" alt="arrow" />
      </div>
    </footer>
  );
};

export default Footer;
