import "./team.scss";

const Team = () => {
  return (
    <section className="team team-page">
      <div className="path flex flex-center">
        <div className="main">Головна</div>
        <div className="dot"></div>
        <div className="current">Команда</div>
      </div>
      <h2>Наша команда</h2>
      <div className="team_descr">
        <p>
          <b>Наша команда</b> – це талановитий колектив професіоналів,
          об'єднаний спільними цілями та цінностями. Кожен із співробітників є
          важливою ланкою в загальній роботі компанії, робить свій внесок у її
          розвиток та успіх. Ми відповідаємо за результати нашої діяльності
          перед клієнтами та за виконання своїх зобов'язань перед діловими
          партнерами. Стараємось максимально заощадити Ваш час та гроші і
          гарантуємо, що з нашою командою професійних менеджерів Ви вирішите усі
          питання за мінімальний проміжок часу.
          <br />
          <br />
          <b>Наш досвід роботи</b>, орієнтація на результат, відповідальність,
          відданість справі допомагають нам краще розуміти ринкові потреби і
          підтримувати високі стандарти якості обслуговування клієнтів та
          партнерів...
        </p>
      </div>
      <h2 className="work">З вами працюють</h2>
      <div className="work_wrap flex flex-center">
        <div className="work_wrap-item">
          <img src="./images/news5.png" alt="we-are" />
          <div className="work_wrap-item_name">Евгения Флор</div>
        </div>
        <div className="work_wrap-item">
          <img src="./images/news4.png" alt="we-are" />
          <div className="work_wrap-item_name">Генадій Петренко</div>
        </div>
        <div className="work_wrap-item">
          <img src="./images/news3.png" alt="we-are" />
          <div className="work_wrap-item_name">Лариса Синько</div>
        </div>
      </div>
    </section>
  );
};

export default Team;
