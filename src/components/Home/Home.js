import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

import "./home.scss";
import "swiper/css";

const Home = () => {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <section className="home flex flex-center">
        <div className="wrapper">
          <div className="content">
            <h1>Аграрний</h1>
            <h2>інтернет-магазин</h2>
            <p>
              Основна сфера діяльності – дистрибуція насіння, засобів <br />{" "}
              захисту рослин, мінеральних макро - та мікродобрив
            </p>
            <Link onClick={goToTop} className="button" to="team">
              Про компанію
            </Link>
          </div>
        </div>
        <div className="main_image">
          <img src="./images/dat-main.png" alt="man" />
        </div>
      </section>
      <section className="about flex flex-center">
        <div className="main_image">
          <img src="./images/about.png" alt="about" />
        </div>
        <div className="about_wrapper">
          <h2>Про нас</h2>
          <p>
            <span className="green">«Компанія ТОВ “ДАМАР АГРОТРЕЙД”</span> —
            молода команда, яка з’явилась на аграрному ринку у 2020 році. Ми не
            боїмось труднощів і викликів. Тому навіть складний ковідний період,
            світова пандемія не стали на заваді успішному старту.
          </p>
          <p>
            Отже, <span className="green">ми — сміливі, ми — драйвові,</span> ми
            — ті, що розвивають рослинництво та допомагають ставати успішними
            тисячам вітчизняних аграріїв.
          </p>
          <p>
            <span className="green">Бачення:</span> компанія ТОВ “ДАМАР
            АГРОТРЕЙД” тримає курс на підвищення престижності, довіри до засобів
            захисту рослин made in UA. Прагнемо, аби в кожному регіоні України
            наш споживач мав доступ до якісної продукції та консалтингу від
            фахівців команди.
          </p>
          <p>
            <span className="green">Місія:</span> усе продуктове портфоліо,
            консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені на
            підвищення рентабельності рослинництва в мінливих кліматичних умовах
            України. Також ставимо собі завдання підвищувати обізнаність
            клієнтів щодо сучасних методів ведення рослинництва...
          </p>
          <Link onClick={goToTop} className="button" to="aboutus">
            Докладніше
          </Link>
        </div>
      </section>
      <section className="news">
        <h2>Новинки</h2>
        <Swiper
          className="custom_swiper"
          loop={false}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item4.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div>
                  <div className="price">20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item3.png" alt="product" />
              <h5>Скор 250 ЕС к.э.</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>589 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>200 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item3.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
      </section>

      <section className="promotion news">
        <h2>Акції</h2>
        <Swiper
          className="custom_swiper"
          loop={false}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-promo",
            prevEl: ".swiper-button-prev-promo",
          }}
        >
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item4.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div>
                  <div className="price">20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item3.png" alt="product" />
              <h5>Скор 250 ЕС к.э.</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>589 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>200 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="./images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="./images/item3.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="./images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev swiper-button-prev-promo">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-promo">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
        <Link className="promotion_button" onClick={goToTop} to="catalog">
          Дивитися усі товари
        </Link>
      </section>

      <section className="partners partners-home news">
        <h2>Партнери</h2>
        <Swiper
          className="custom_swiper"
          loop={false}
          spaceBetween={30}
          slidesPerView={6}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-partners",
            prevEl: ".swiper-button-prev-partners",
          }}
        >
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners1.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners2.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners3.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners4.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners5.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners6.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners7.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners3.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners4.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners5.png" alt="partners" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img src="./images/partners6.png" alt="partners" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev swiper-button-prev-partners">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
        <div className="swiper-button-next swiper-button-next-partners">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7979 7.5961C18.716 7.58282 18.6332 7.57669 18.5504 7.57777H4.44077L4.74843 7.43467C5.04917 7.29233 5.32275 7.09861 5.55694 6.86227L9.51363 2.90558C10.0347 2.40814 10.1223 1.6079 9.72112 1.00952C9.25422 0.371882 8.35882 0.233434 7.72113 0.700339C7.66962 0.738082 7.62065 0.779222 7.57464 0.823494L0.419694 7.97844C-0.139465 8.53698 -0.139957 9.44302 0.418576 10.0022C0.418933 10.0025 0.419336 10.0029 0.419694 10.0033L7.57464 17.1582C8.13424 17.7163 9.04028 17.715 9.59837 17.1554C9.64228 17.1114 9.68329 17.0645 9.72112 17.0151C10.1223 16.4168 10.0347 15.6165 9.51363 15.1191L5.5641 11.1552C5.35414 10.9451 5.11276 10.7688 4.8486 10.6329L4.41931 10.4397H18.4716C19.2026 10.4669 19.844 9.95625 19.9813 9.23771C20.1078 8.4576 19.578 7.72265 18.7979 7.5961Z"
              fill="#84BE51"
            />
          </svg>
        </div>
      </section>

      <section className="seeds">
        <div className="seeds_wrapper">
          <h2>Семена</h2>
          <p>
            Вирощування овочів, квітів на своїй ділянці або просто на балконі -
            це улюблене заняття багатьох дачників та городників. Звичайно, свіжі
            овочі з власного городу натуральні, смачні та корисні. Але щоб
            отримати хороший урожай томату або капусти, насолоджуватися
            цвітінням петунії або троянди, важливо не тільки правильно доглядати
            за рослинами. Все починається із вибору посівного матеріалу. І тут
            постає питання: яке насіння вибрати? Адже вони мають бути якісними,
            давати гарну схожість.
          </p>
          <p>
            Предлагаем покупателям широкий выбор семян овощей. У нас вы можете
            найти семена баклажан, разных видов капусты, бобовых и бахчевых
            культур, томата, перца, огурцов, лука, салата, чеснока, картофеля от
            отечественных и зарубежных производителей.
          </p>
          <p>
            Также вы можете найти в нашем каталоге семена цветов: однолетних
            (петуния, львиный зев, календула и т.д.), двулетних (виола, примула,
            мальва), многолетних (иберис, анемона, гибискус, дельфиниум,
            фрезия), луковичных (тюльпаны, лилия, ирис, нарциссы), комнатных
            (гербера, бегония, кактус, мимоза, пасифлора). Конечно, это далеко
            не весь список — каждая хозяйка найдет здесь свой любимый цветок.
          </p>
          <p>
            В широком ассортименте представлены саженцы плодовых деревьев, роз,
            ягодных кустов. У нас вы можете купить семена газонной травы, а
            также сопутствующие товары: удобрения, средства защиты,
            биопрепараты, садовый инвентарь, субстраты, грунты, агроволокно,
            горшки, кассеты для рассады.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
