import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import "./footer.scss";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1100) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
              <Link onClick={goToTop} to={ROUTES.ABOUTUS}>
                Про компанію
              </Link>
            </li>
            <li>
              <Link onClick={goToTop} to={ROUTES.DELIVERY}>
                Оплата і доставка
              </Link>
            </li>
            <li>
              <Link onClick={goToTop} to={ROUTES.PARTNERS}>
                Партнери
              </Link>
            </li>
          </ul>
        </div>
        <div className="item">
          <h4>Товари</h4>
          <ul>
            <li>
              <Link onClick={goToTop} to={ROUTES.CATALOG}>
                Каталог продукції
              </Link>
            </li>
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
      {isVisible ? (
        <div className="arrow" onClick={goToTop}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#fff"
            />
          </svg>
        </div>
      ) : (
        <></>
      )}
    </footer>
  );
};

export default Footer;
