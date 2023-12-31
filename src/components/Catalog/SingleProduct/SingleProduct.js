import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import seeds from "../../../data/productsData.json";
import "./singleProduct.scss";

const SingleProduct = () => {
  const [showReviews, setShowReviews] = useState(false);
  const { productId } = useParams();
  const product = seeds.seeds.find((product) => product.id === productId);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const toggleDescr = () => {
    if (!showReviews) return;
    setShowReviews(!showReviews);
  };

  const toggleReviews = () => {
    if (showReviews) return;
    setShowReviews(!showReviews);
  };

  return (
    <>
      <section className="singleProduct singleProduct-page">
        <div className="path flex flex-center">
          <div className="main">Головна</div>
          <div className="dot"></div>
          <div className="main">Каталог</div>
          <div className="dot"></div>
          <div className="current">Засоби захисту рослин</div>
        </div>
        <div className="singleProduct-page_wrap flex ">
          <img className="product_image" src={product.image} alt="product" />
          <div className="options">
            <h3>
              {product.name},<br />
              {product.manufacturer}
            </h3>
            <div className="flex options_price">
              <div className="green">
                {product.availability ? "В наявності" : "Закінчилось"}
              </div>
              <div>{product.price} грн./л</div>
            </div>

            <div className="options_visa">
              <div>
                <div className="title">Виробник</div>
                <div className="flex manuf">
                  <img src="/images/fmc.png" alt="fmc" />
                  <div>{product.manufacturer}</div>
                </div>
              </div>
              <div>
                <div className="title">Доставка</div>
                <div>Завтра відповідно до тарифів перевізника</div>
              </div>
              <div>
                <div className="title">Оплата</div>
                <div className="flex cards">
                  <img src="/images/visa.png" alt="visa" />
                  <img src="/images/mastercard.png" alt="mastercard" />
                  <img src="/images/cash.png" alt="cash" />
                </div>
              </div>
              <button>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.1993 26.5455L22.0059 22.6764C21.9891 22.6515 21.9777 22.6234 21.9723 22.5938C21.9669 22.5643 21.9677 22.534 21.9745 22.5048C21.9814 22.4755 21.9942 22.4481 22.0122 22.424C22.0302 22.4 22.0529 22.3799 22.079 22.3651C22.1051 22.3502 22.134 22.3409 22.1638 22.3377C22.1936 22.3345 22.2238 22.3375 22.2525 22.3466C22.2811 22.3556 22.3076 22.3704 22.3302 22.3901C22.3528 22.4098 22.3712 22.434 22.384 22.4611L24.5775 26.3302L24.1993 26.5455Z"
                    fill="#8C3213"
                  />
                  <path
                    d="M19.1677 17.4546C19.1293 17.4541 19.0917 17.4437 19.0585 17.4243C19.0253 17.405 18.9978 17.3773 18.9786 17.344L16.7852 13.4778L17.1633 13.2596L19.3568 17.1287C19.3841 17.1782 19.3909 17.2364 19.3757 17.2909C19.3604 17.3453 19.3244 17.3916 19.2753 17.4196C19.2428 17.4397 19.2059 17.4517 19.1677 17.4546Z"
                    fill="#8C3213"
                  />
                  <path
                    d="M22.0542 27.1971C21.7321 27.2026 21.4105 27.1674 21.0971 27.0924C17.9699 26.2284 13.8622 18.9818 14.7262 15.8575C15.1195 14.7504 15.8736 13.8078 16.8673 13.1811C17.0593 13.0676 17.2542 12.9658 17.4491 12.8727C17.628 12.7913 17.8309 12.7799 18.0178 12.8407C18.2047 12.9016 18.362 13.0303 18.4586 13.2015L20.1022 16.1105C20.1568 16.2058 20.1907 16.3116 20.2017 16.4208C20.2128 16.5301 20.2007 16.6404 20.1662 16.7447C20.1312 16.8492 20.0748 16.9453 20.0007 17.027C19.9266 17.1086 19.8363 17.1739 19.7357 17.2189C19.5757 17.2887 19.4186 17.3615 19.2673 17.44C18.607 17.7716 18.2288 18.0713 18.1415 18.3331C17.9408 18.9556 18.1793 20.0087 18.7495 21.0153C19.3197 22.0218 20.0877 22.7607 20.7306 22.8975C20.9197 22.9411 21.3124 22.8975 22.0746 22.3942C22.2201 22.304 22.3655 22.2051 22.5081 22.1033C22.5976 22.0398 22.6995 21.9957 22.8072 21.974C22.9148 21.9523 23.0258 21.9534 23.133 21.9773C23.2401 22.0011 23.3411 22.0472 23.4294 22.1125C23.5177 22.1778 23.5913 22.2609 23.6455 22.3564L25.2921 25.2655C25.3904 25.4365 25.4208 25.6383 25.3771 25.8308C25.3335 26.0232 25.219 26.1921 25.0564 26.304C24.879 26.4204 24.6899 26.5367 24.4921 26.6444C23.736 27.0227 22.8995 27.2123 22.0542 27.1971ZM17.7721 13.2335C17.7238 13.2344 17.6762 13.2452 17.6324 13.2655C17.4521 13.3498 17.2688 13.4487 17.0884 13.5564C16.193 14.1258 15.51 14.9744 15.1451 15.9709C14.7786 17.3004 15.4215 19.712 16.783 22.112C18.1444 24.512 19.8841 26.304 21.2135 26.6735C22.2548 26.8733 23.3329 26.7261 24.2826 26.2545C24.4688 26.1527 24.6462 26.0451 24.8121 25.9345C24.8833 25.8844 24.9333 25.8095 24.9521 25.7245C24.9709 25.6394 24.9573 25.5504 24.9139 25.4749L23.2673 22.5658C23.2432 22.5235 23.2106 22.4867 23.1716 22.4577C23.1325 22.4286 23.0878 22.408 23.0404 22.3971C22.9906 22.3856 22.9389 22.3849 22.8887 22.3949C22.8385 22.4049 22.7911 22.4255 22.7495 22.4553C22.6011 22.56 22.4586 22.6618 22.3015 22.7462C21.5626 23.2233 21.0302 23.4007 20.6259 23.3105C19.855 23.136 19.0084 22.3535 18.3626 21.216C17.8593 20.3433 17.4288 19.0749 17.7197 18.1847C17.8448 17.7978 18.2724 17.4313 19.0608 17.0211C19.2179 16.9396 19.3837 16.864 19.5495 16.7913C19.5948 16.7712 19.6356 16.7419 19.6691 16.7054C19.7026 16.6689 19.7283 16.6258 19.7444 16.5789C19.7605 16.5311 19.7662 16.4805 19.7612 16.4303C19.7562 16.3802 19.7406 16.3316 19.7153 16.288L18.0688 13.3789C18.0347 13.3328 17.9898 13.2957 17.9381 13.2708C17.8864 13.246 17.8294 13.2341 17.7721 13.2364V13.2335Z"
                    fill="#8C3213"
                  />
                </svg>
                Замовити дзвінок
              </button>
            </div>
            <div className="options_buy flex">
              <div className="price">
                <div className="price_green">{product.price} грн</div>
                <div className="liter">Ціна за 5 л </div>
              </div>
              <div className="price_buttons flex flex-center">
                <button>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9077 4.34289C15.8161 4.21162 15.6687 4.13049 15.5086 4.12365L5.58366 3.69584C5.29889 3.68338 5.06093 3.90323 5.04875 4.18667C5.03665 4.47 5.25614 4.7094 5.53955 4.72157L14.7926 5.12045L12.9732 10.7969H4.87696L3.41425 2.83256C3.38209 2.658 3.26225 2.51238 3.09697 2.44754L0.701302 1.50638C0.437269 1.40301 0.139327 1.53269 0.0356332 1.79641C-0.0678819 2.06026 0.0617715 2.35838 0.325661 2.46207L2.45579 3.29889L3.94432 11.403C3.98918 11.6467 4.20151 11.8236 4.44933 11.8236H4.69624L4.13241 13.3898C4.08522 13.521 4.10466 13.6667 4.18497 13.7806C4.26518 13.8946 4.39562 13.9624 4.53487 13.9624H4.93034C4.68529 14.2352 4.53487 14.5943 4.53487 14.9892C4.53487 15.8384 5.22589 16.5293 6.07495 16.5293C6.92402 16.5293 7.61504 15.8384 7.61504 14.9892C7.61504 14.5943 7.46462 14.2352 7.2196 13.9624H10.5774C10.3322 14.2352 10.1818 14.5943 10.1818 14.9892C10.1818 15.8384 10.8727 16.5293 11.7219 16.5293C12.5712 16.5293 13.262 15.8384 13.262 14.9892C13.262 14.5943 13.1116 14.2352 12.8666 13.9624H13.3476C13.5839 13.9624 13.7754 13.7709 13.7754 13.5347C13.7754 13.2984 13.5839 13.1069 13.3476 13.1069H5.14357L5.60554 11.8235H13.3475C13.5708 11.8235 13.7683 11.6792 13.8363 11.4668L15.9753 4.79308C16.0245 4.64076 15.9993 4.47423 15.9077 4.34289ZM6.07499 15.6738C5.69749 15.6738 5.39049 15.3669 5.39049 14.9894C5.39049 14.6119 5.69749 14.3049 6.07499 14.3049C6.45249 14.3049 6.75945 14.6119 6.75945 14.9894C6.75945 15.3669 6.45249 15.6738 6.07499 15.6738ZM11.7219 15.6738C11.3444 15.6738 11.0374 15.3669 11.0374 14.9894C11.0374 14.6119 11.3444 14.3049 11.7219 14.3049C12.0994 14.3049 12.4064 14.6119 12.4064 14.9894C12.4064 15.3669 12.0994 15.6738 11.7219 15.6738Z"
                      fill="white"
                    />
                  </svg>
                  Купити
                </button>
                <div className="circle">
                  <Link to="">
                    <img src="/images/icons/heart.png" alt="heart" />
                  </Link>
                </div>
                <div className="circle">
                  <Link to="">
                    <img src="/images/icons/comparison.png" alt="comparison" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="descr">
          <div className="descr_wrap flex">
            <div
              onClick={toggleDescr}
              className={`descr_wrap-title ${!showReviews ? "active" : ""}`}
            >
              Опис
            </div>
            <div
              onClick={toggleReviews}
              className={`descr_wrap-title ${showReviews ? "active" : ""}`}
            >
              Відгуки
            </div>
          </div>
          <div className="descr_subtitle">
            {!showReviews ? (
              <>
                <div className="header">Генерал на полі</div>
                <p>
                  Генерал на полі. Досходовий гербіцид для боротьби з
                  однорічними дводольними та деякими злаковими бур’янами в
                  посівах ріпаку та інших культур.
                </p>
                <ul className="general">
                  <li>
                    <span className="green">Діюча речовина:</span> Кломазон, 480
                    г/л
                  </li>
                  <li>
                    <span className="green">Препаративна форма:</span>{" "}
                    Концентрат емульсії
                  </li>
                  <li>
                    <span className="green">Норма використання:</span> 0,2-0,6
                    л/га
                  </li>
                  <li>
                    <span className="green">Клас токсичності:</span> 2.
                  </li>
                  <li>
                    <span className="green">Термін зберігання:</span> 2 роки.
                  </li>
                </ul>
                <div className="header">Характеристики:</div>
                <p>
                  Системний препарат потрапляє до рослини через гіпокотиль
                  (підсім´ядольне колінце) та кореневу систему і рухається по
                  ксилемі до листків;
                </p>
                <ul className="harxrec">
                  <li>
                    Проникаючи в рослину, припиняє процес утворення хлорофілу і
                    каротину, тим самим зупиняє процес фотосинтезу;
                  </li>
                  <li>
                    Знищує бур’яни та створює умови озимому ріпаку для доброго
                    росту і розвитку в осінній період, усуваючи конкуренцію
                    рослин за світло, вологу та поживні речовини на самих ранніх
                    етапах органогенезу;
                  </li>
                  <li>Добре зв´язується у грунті та слабо промивається;</li>
                  <li>Для комплексного захисту ріпаку зазвичай;</li>
                  <li>
                    Використовується у бакових сумішах із д.р. метазахлор та
                    пропізохлор;
                  </li>
                  <li>
                    В країнах Східної Європи (Чехія, Словаччина, Польща)
                    використання Комманд® на посівах ріпаку є обов’язковим
                    елементом в технології його вирощування;
                  </li>
                  <li>
                    Широко використовується більше, ніж в 100 країнах світу на
                    посівах ріпаку, сої, тютюну, перцю, моркви, картоплі,
                    баштанних, бавовни та інших культур.
                  </li>
                </ul>
                <div className="header">Рекомендації:</div>
                <ul className="harxrec">
                  <li>
                    Для досягнення максимального ефекту потрібен якісний
                    обробіток ґрунту: відсутність грудок, вирівняна поверхня
                    поля, відсутність рослинних решток;
                  </li>
                  <li>
                    Обприскування ґрунту проводиться впродовж двох днів, а
                    найкраще відразу ж після посіву;
                  </li>
                  <li>
                    За недостачі ґрунтової вологи після обприскування
                    рекомендується провести коткування ґрунту кільчасто-
                    шпоровими котками;
                  </li>
                  <li>
                    Норма витрати залежить від вмісту гумусу в ґрунті, на
                    малогумусних ґрунтах її можна дещо знизити;
                  </li>
                  <li>
                    Може виникнути побіління першої пари листочків ріпаку, проте
                    в подальшому воно зникає, а рослини мають більш розвинену
                    кореневу систему, краще витримують низькі температури;
                  </li>
                  <li>
                    За потреби пересіву через 30-60 днів після обробки ріпак та
                    сою можна сіяти після поверхневого обробітку ґрунту на
                    глибину 8-10 см, для всіх інших культур рекомендується
                    провести глибоку оранку;
                  </li>
                  <li>
                    Обов´язковою вимогою під час внесення препарату є
                    забезпечення суцільного покриття поверхні поля.
                  </li>
                </ul>
              </>
            ) : (
              <div className="reviews-page">Поки відгуків немає</div>
            )}
          </div>
        </div>
      </section>
      <section className="promotion promotion-single news">
        <h2>Вам також сподобається</h2>
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
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item4.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div>
                  <div className="price">20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item3.png" alt="product" />
              <h5>Скор 250 ЕС к.э.</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>589 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>200 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item1.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item2.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                className="logo"
                src="/images/icons/comparison.png"
                alt="comparison"
              />
              <img className="image" src="/images/item3.png" alt="product" />
              <h5>Петунія Софістика F1</h5>
              <p>В наявності</p>
              <div className="item_wrap flex">
                <div className="item_wrap-con">
                  <div>20 грн</div>
                  <div>1 шт</div>
                </div>
                <div className="item_cart">
                  <img src="/images/icons/cart.png" alt="cart" />
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
        <Link className="promotion_button" onClick={goToTop} to="/catalog">
          Дивитися усі товари
        </Link>
      </section>
    </>
  );
};

export default SingleProduct;
