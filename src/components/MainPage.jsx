import { useEffect } from "react";
import ContactUs from "./ContactUs";
import Introduction from "./Introduction";
import Process from "./Process";
import Services from "./Services";
import Work from "./Work";

const styles = {
  intro: {
    paddingTop: "80px",
    backgroundImage: "url(/introbg.png)",
    paddingBottom: "60px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
  },
  work: {
    backgroundImage: "url(/inbg.png)",
    backgroundPosition: "right bottom",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
  contact: {
    backgroundImage: "url(/inbg.png)",
    backgroundPosition: "right bottom",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    paddingBottom: "40px",
  },
};

const MainPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("navbar-header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <div id={1} style={styles.intro}>
        <Introduction />
      </div>
      <div id={2}>
        <Services />
      </div>
      <div style={styles.work}>
        <Work />
      </div>
      <div>
        <Process />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
};

export default MainPage;
