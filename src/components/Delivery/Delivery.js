import "./delivery.scss";
const Delivery = () => {
  return (
    <section className="delivery delivery-page">
      <div className="path flex flex-center">
        <div className="main">Головна</div>
        <div className="dot"></div>
        <div className="current">Оплата і доставка</div>
      </div>
      <h2>Оплата і доставка</h2>
      <h4 className="title">Оплата</h4>
      <div className="green-text">
        Мінімальне замовлення насіння або будь-яких інших товарів в нашому
        магазині становить 200 гривень.
      </div>
      <ul>
        <li>
          <strong>На розрахунковий рахунок в КБ ПриватБанк</strong> У будь-якому
          відділенні банку Ви можете здійснити платіж на розрахунковий рахунок
          або через термінал КБ ПриватБанк, або програму Приват24. Вартість
          послуг банку (комісія) оплачується окремо, згідно тарифів обраного
          Вами банку.
        </li>
        <li>
          <strong>
            Після платою через «Укрпошта Експрес» (оплата при отриманні посилки)
          </strong>
          Замовлення оплачується при його отриманні у відділенні. Комісія при
          перерахуванні оплати за замовлення вартістю до 500 грн складає 10 грн,
          понад 500 грн - 2%. Комісія НЕ буде додана в рахунок і оплачується при
          отриманні посилки.
        </li>
        <li>
          <strong>
            Післяплатою через компанію «Нова пошта» (оплата при отриманні
            відправлення)
          </strong>{" "}
          Замовлення оплачується при його отриманні у відділенні. Комісія за
          перерахування грошових коштів - 2,5%, але не менш ніж 10 грн від суми
          замовлення. Коміссія сплачується при отриманні посилки.
        </li>
        <li>
          <strong>Готівкою при самовивозі</strong>
          Замовлення оплачується готівкою при отриманні на нашому офісі,
          розташованому за адресою м Краматорськ, вул.Богдана Хмельницького, 7,
          магазин "Огородник" (УкрНасіння).
        </li>
      </ul>
      <div className="green-text second">
        При виборі оплати післяплатою, враховуйте:
      </div>
      <ul>
        <li>
          товари з позначкою «НА ЗАМОВЛЕННЯ» і «ПЕРЕДОПЛАТА» цим способом не
          відправляються;
        </li>
        <li>
          поки оплата за перше замовлення не буде отримана, наступне замовлення
          клієнтові не висилається. Компанія залишає за собою право на зміну
          ціни у разі коливання курсу валют. Замовлення насіння та ін. товару
          через інтернет обробляється до 3-х днів, в сезон, в зв'язку зі
          збільшенням кількості замовлень, термін обробки може бути збільшений.
          Можлива відсутність деяких товарів на складі, в рахунок-фактуру вони
          не включаються, без узгодження з покупцем іншими не замінюються. Після
          обробки та формування замовлення насіння через інтернет, на зазначений
          клієнтом e-mail і в його кабінет направляється рахунок-фактура. Якщо
          протягом 3-х днів після оформлення замовлення насіння на адресу Вашої
          електронної пошти не прийшов рахунок, будь ласка, повідомте про це
          оператора. Будь ласка, додайте наш e-mail shop@ukrsemena.com в свою
          адресну книгу, таким чином, рахунок-фактура не потрапить в спам. У
          рахунку-фактурі будуть вказані реквізити для здійснення оплати згідно
          обраного способу. Список товару при стані замовлення «Виставлено
          рахунок» в кабінеті клієнта повністю збігається з рахунком-фактурою.
          Виписаний товар резервується на 3 робочих дні, протягом яких клієнтові
          необхідно здійснити оплату (якщо обрана передоплата).
          <br />
          <br />
          <div>Всі необхідні реквізити платежу вказані в рахунку-фактурі.</div>
          <br />
          <div>
            Передоплата здійснюється тільки після отримання рахунку-фактури.
            Рахунок необхідно оплатити протягом 3-х банківських днів. При
            здійсненні платежу комісія не входить у вартість замовлення і
            доставки, оплачується покупцем окремо. Якщо Вам у відділенні банку
            відмовляють у проведенні платежу, зв'яжіться з Контакт-центром і
            повідомте про порушення, вказавши прізвище та посаду відповідального
            співробітника банку.
          </div>
        </li>
      </ul>
      <div className="contact-center">
        <strong>
          Після оплати замовлення надішліть листа на{" "}
          <a
            href="mailto:shop@ukrsemena.com"
            rel="noreferrer"
            target="_blank"
            className="green-url"
          >
            shop@ukrsemena.com
          </a>
          або зв'яжіться з{" "}
          <a href="/" target="_blank" className="green-url">
            Контакт-центром
          </a>{" "}
          і повідомте:
        </strong>
      </div>
      <ul>
        <li>П.І.Б.;</li>
        <li>номер замовлення;</li>
        <li>оплачену суму;</li>
        <li>оплачену суму;</li>
      </ul>
      <div>
        Це прискорить відправку замовлення. Якщо Ви збираєтеся сплатити
        прострочений рахунок, обов'язково зв'яжіться з менеджером для уточнення
        наявності товару.
      </div>
      <h4 className="title">Доставка</h4>
      <div className="poshta_wrap flex">
        <div className="ukr_wrap-text">
          <div className="green-text express">Доставка «Укрпошта Експрес»</div>
          <div>
            Доставку насіння поштою по Україні можна замовити як післяплатою,
            так і за передоплатою. Замовлення надходить на поштове відділення,
            вказане клієнтом. Максимальна вага посилки до 10 кг. Тривалість
            доставки насіння поштою по Україні - не більше 5 днів.
            <br />
            <br />
            <strong>
              Вартість доставки розраховується згідно тарифів «Укрпошта
              Експрес», НЕ ВХОДИТЬ в рахунок замовлення і оплачується при
              отриманні посилки.
            </strong>
            <br />
            <br />
            <strong>Увага!</strong> Термін безкоштовного зберігання посилок в
            відділеннях ПАТ «Укрпошта» становить 5 робочих днів з моменту
            прибуття. Починаючи з 6 дня зберігання посилка повертається до
            відправника. Прохання своєчасно звертатися до відділень ПАТ
            «Укрпошта» для отримання замовлень.
            <br />
            <br /> У зв'язку з термінами доставки коливання по вазі посадкового
            матеріалу можуть становити ± 8%.
          </div>
        </div>
        <img src="./images/ukr.png" alt="ukrposhta" />
      </div>
      <div className="poshta_wrap flex flex-center">
        <img src="./images/novaposhta.png" alt="novaposhta" />
        <div className="nova_wrap-text">
          <div className="green-text express">
            Доставка комерційними транспортними компаніями
          </div>
          <div>
            Отримання замовлення відбувається в філіях компаній. Оплату за
            доставку здійснює клієнт. Можлива доставка за адресою клієнта за
            додаткову плату. Тривалість доставки комерційними транспортними
            службами не більше 3 днів.
            <br />
            <br />
            <strong>
              Вартість доставки розраховується згідно тарифів транспортних
              компаній, НЕ ВХОДИТЬ в рахунок замовлення і оплачується при
              отриманні посилки.
            </strong>
          </div>
        </div>
      </div>
      <div className="pickup">
        <h4 className="title">Самовивіз</h4>
        <div className="green-text">
          Отримати і сплатити посилку клієнт може в нашому офісі за адресою
        </div>
        <div className="pickup_container flex">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9995 0C3.93986 0 0.636719 3.30314 0.636719 7.3632C0.636719 8.42222 0.853476 9.43334 1.28065 10.3687C3.12155 14.3971 6.65107 18.6501 7.68921 19.8575C7.76699 19.9478 7.88038 19.9998 7.99971 19.9998C8.11904 19.9998 8.23243 19.9478 8.31021 19.8575C9.34794 18.6503 12.8775 14.3975 14.719 10.3687C15.1464 9.43334 15.3629 8.42222 15.3629 7.3632C15.3625 3.30314 12.0594 0 7.9995 0ZM7.9995 11.1877C5.89068 11.1877 4.17483 9.47182 4.17483 7.36299C4.17483 5.25396 5.89068 3.53812 7.9995 3.53812C10.1083 3.53812 11.8242 5.25396 11.8242 7.36299C11.8244 9.47182 10.1085 11.1877 7.9995 11.1877Z"
              fill="#8C3213"
            />
          </svg>
          <div>
            м. Краматорск, вул. Б. Хмельницького, 7, інтернет-магазин УкрНасіння
            (магазин Огородник).
          </div>
        </div>
        <div className="pickup_container flex">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2695 3.13107L18.4839 3.02914L18.3858 1.86069L15.0644 2.13944L15.3432 5.46086L16.5116 5.3628L16.3895 3.90789C17.9505 5.53954 18.8274 7.70322 18.8274 9.99994C18.8274 12.3578 17.9092 14.5746 16.242 16.2419C14.5747 17.9092 12.3579 18.8274 10 18.8274C7.64213 18.8274 5.42533 17.9092 3.75804 16.242C2.09074 14.5747 1.17256 12.3579 1.17256 10C1.17256 7.64213 2.09078 5.42533 3.75804 3.75804C5.4253 2.09074 7.64209 1.17256 10 1.17256V0C7.32894 0 4.81772 1.04017 2.92896 2.92896C1.04017 4.81768 0 7.3289 0 10C0 12.6711 1.04017 15.1823 2.92896 17.0711C4.81772 18.9598 7.32894 20 10 20C12.6711 20 15.1823 18.9599 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10C20 7.41348 19.0184 4.9757 17.2695 3.13107Z"
              fill="#8C3213"
            />
            <path
              d="M9.41445 5.19745V3.82349C6.46036 4.10169 4.10243 6.45959 3.82422 9.41372H5.19818V10.5863H3.82422C4.10243 13.5404 6.46032 15.8983 9.41445 16.1765V14.8026H10.587V16.1765C13.5411 15.8983 15.899 13.5404 16.1772 10.5863H14.8033V9.41372H16.1772C15.899 6.45963 13.5411 4.10169 10.587 3.82349V5.19745H9.41445ZM10.587 10.2729L8.38081 12.1292L7.62588 11.232L9.41445 9.72711V6.43043H10.587V10.2729Z"
              fill="#8C3213"
            />
          </svg>
          <div className="text">
            Графік видачі посилок: понеділок - п'ятниця з 9.00 до 18.00, перерва
            12.30-13.30.
          </div>
        </div>
        <div className="text">
          <b>
            Замовлення на непідконтрольні Україні території не відправляються.
            Приносимо свої вибачення!
          </b>
        </div>
        <div className="text">
          Після відправки замовлення клієнту повідомляють на e-mail і по
          телефону номер товарно-транспортної накладної (декларації) і
          орієнтовну дату прибуття. Для отримання посилки необхідно мати з собою
          паспорт (якщо клієнт отримує посилку особисто) або довіреність (якщо
          Ви представляєте інтереси одержувача). При замовленні насіння поштою в
          інтернет-магазині з України, на поштове відділення клієнта приходить
          посилка з замовленням. Працівники пошти/транспортної компанії повинні
          направити йому оповіщення і/або SMS-повідомлення про отримання
          посилки, тому потрібно стежити за своєю поштовою скринькою. Дуже часто
          повідомлення губляться, тому виходячи з орієнтовної дати прибуття
          посилки, поцікавтеся на пошті про посилку самостійно. Її необхідно
          отримати протягом 5 днів з дня прибуття, після чого посилка
          повертається назад в інтернет-магазин.
        </div>
        <div className="text">
          <b>
            Якщо клієнт вчасно не забирає зі свого поштового відділення посилку,
            інтернет-магазин УкрНасіння не несе відповідальність за його
            бездіяльність або бездіяльність працівників поштового відділення і
            повторно посилку не висилає. Такі клієнти заносяться в чорний список
            і з цього моменту можуть отримувати товар тільки після повної
            передоплати.
          </b>
          <br />
          <br />
          <b>
            Це відноситься і до доставки насіння післяплатою компанією «Нова
            пошта».
          </b>
        </div>
        <div>
          При отриманні замовлення з насінням та ін. товарами ретельно огляньте
          посилку на предмет цілісності упаковки. У разі порушення цілісності
          упаковки та/або відсутності частини замовлення і/або псування товару,
          в присутності працівника транспортної компанії або ПАТ «Укрпошта»
          проведіть огляд вмісту посилки, звірте його з вкладеною видатковою
          накладною на товар, завіреною підписом співробітника інтернет-магазину
          УкрНасіння. При необхідності складіть «Акт про огляд», в якому
          необхідно відобразити стан упаковки і товару, характер пошкоджень.
          Після складання Акту клієнт повинен негайно зв'язатися з
          Контакт-центром інтернет-магазину УкрНасіння і надати копію акта про
          огляд товару. Якщо працівники служби доставки відмовляють Вам у
          проведенні огляду і складанні Акту, клієнт має право не підписувати
          товарно-транспортні документи і не забирати замовлення. Наявність
          підпису вантажоодержувача в супровідній накладній означає, що товар
          отриманий і претензій до продавця і компанії, що здійснила доставку
          насіння та ін. товарів немає.
        </div>
      </div>
    </section>
  );
};

export default Delivery;
