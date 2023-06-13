import "./registration.scss";

const Registration = () => {
  return (
    <section className="registration registration-page">
      <div className="path flex flex-center">
        <div className="main">Головна</div>
        <div className="dot"></div>
        <div className="current">Реєстрація</div>
      </div>
      <h2>Реєстрація</h2>
      <p>
        Увійдіть, щоб використовувати всі можливості особистого кабінету:
        відстеження замовлень, налаштування передплати, зв'язки з соціальними
        мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті
        дані клієнтів. Контактна інформація буде використана тільки для
        оформлення замовлень та зручнішої роботи з сайтом
      </p>
      <form className="form-registration">
        <input required type="text" name="name" placeholder="Ім’я" />
        <input required type="text" name="second-name" placeholder="Фамілія" />
        <input required type="tel" name="tel" id="tel" placeholder="Телефон" />
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          className="full-input"
          required
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <input
          className="full-input"
          required
          type="password"
          name="password-conf"
          placeholder="Підтвердити пароль"
        />
        <label className="flex full-input" htmlFor="checkbox-conf">
          <input type="checkbox" name="checkbox" id="checkbox-conf" required />я
          згоден на обробку і захист
          <span className="green">персональних даних</span>
        </label>
        <button className="form-btn" type="submit">
          Зареєструватися
        </button>
      </form>
    </section>
  );
};

export default Registration;
