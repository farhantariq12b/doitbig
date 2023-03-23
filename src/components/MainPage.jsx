import { useEffect } from "react";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import HeaderMenu from "./HeaderMenu";
import Introduction from "./Introduction";
import Process from "./Process";
import Services from "./Services";
import Work from "./Work";

const MainPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("navbar-header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div id={1}>
        <Introduction />
      </div>
      <div id={2}>
        <Services />
      </div>
      <div id={3}>
        <Work />
      </div>
      <div id={4}>
        <Process />
      </div>
      <div id={5}>
        <ContactUs />
      </div>
    </div>
  );
};

export default MainPage;
