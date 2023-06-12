import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AppRoutes from "../Routes/AppRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
