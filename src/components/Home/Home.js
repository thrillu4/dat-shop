import "./home.scss";

const Home = () => {
  return (
    <section>
      <div className="home flex ">
        <div className="wrapper">
          <div className="content">
            <h1>Аграрний</h1>
            <h2>інтернет-магазин</h2>
            <p>
              Основна сфера діяльності – дистрибуція насіння, засобів <br />{" "}
              захисту рослин, мінеральних макро - та мікродобрив
            </p>
            <button>Про компанію</button>
          </div>
        </div>
        <div className="main_image">
          <img src="./images/dat-main.png" alt="man" />
        </div>
      </div>
    </section>
  );
};

export default Home;
