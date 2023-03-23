import MainPage from "./components/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles/vendor/bootstrap.min.css";
// import "./styles/vendor/magnific-popup.css";
// import "./styles/vendor/owl.carousel.min.css";
// import "./styles/vendor/owl.theme.default.min.css";
import "./styles/cynic-responsive.css";
import "./styles/cynic.css";
import "./styles/fontawesome-all.min.css";
import "./styles/miniline.css";
import "./styles/process.css";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <HeaderMenu />
      <MainPage/>
      <Footer />
    </div>
  );
}

export default App;
