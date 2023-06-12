import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";

import "./news.scss";
import "swiper/css/grid";
import "swiper/css/pagination";

const News = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section className="news news_page">
      <div className="path flex flex-center">
        <div className="main">Головна</div>
        <div className="dot"></div>
        <div className="current">Новини</div>
      </div>
      <h2>Новини</h2>
      <Swiper
        loop={false}
        pagination={pagination}
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={30}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news1.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news2.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news1.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news3.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news4.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news5.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news1.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news2.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news3.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news4.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news5.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news3.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="date">20.01.2022</div>
          <img src="./images/news2.png" alt="news" />
          <div className="title">Доставка «Укрпошта Експрес»</div>
          <p>
            Для того, щоб можна було розглянути питання про ремонт або
            компенсацію, або обмін, або повернення товару необхідно, щоб були
            виконані наступні умови:
          </p>
          <div className="flex swiper-url">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ukrposhta.ua/ua/ekspres"
            >
              Докладніше
            </a>
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default News;
