import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Success from "./Success";

const Services = () => {
  const [details, setDetails] = useState(0);

  const handleHover = (item) => {
    console.log(item);
    setDetails(item);
  };
  const handleLeave = () => {
    setDetails(0);
  };
  return (
    <div style={{ backgroundColor: "#F9FCFF" }}>
      <Success />
      <Container
        style={{
          marginTop: "-7%",
          paddingBottom: "100px",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ color: "#32325C", marginTop: "50px" }}>
                What We Offer
              </h1>
              <p style={{ color: "#32325C", marginBottom: "80px" }}>
                No matter what you're working on, we will make sure that you got
                what you need to grow.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {details === 1 ? (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseLeave={handleLeave}
            >
              <div style={{ border: "2px solid #e6f2ff" }}>
                <ul>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Digital Branding</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>User Experience</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>User Interface Design</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Information Architecture</h5>
                  </li>
                </ul>
              </div>
            </Col>
          ) : (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseOver={() => {
                handleHover(1);
              }}
              onMouseLeave={handleLeave}
            >
              <Image src="s1.svg"></Image>
              <h3 style={{ color: "#32325C", marginTop: "20px" }}>
                UI/UX Designing
              </h3>
            </Col>
          )}
          {details === 2 ? (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseLeave={handleLeave}
            >
              <div style={{ border: "2px solid #e6f2ff" }}>
                <ul>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Web Development</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Quality Assurance</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>E-Commerce Solutions</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Responsive Web design</h5>
                  </li>
                </ul>
              </div>
            </Col>
          ) : (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseOver={() => {
                handleHover(2);
              }}
              onMouseLeave={handleLeave}
            >
              <Image src="s2.svg"></Image>
              <h3 style={{ color: "#32325C", marginTop: "20px" }}>
                Web Development
              </h3>
            </Col>
          )}
          {details === 3 ? (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseLeave={handleLeave}
            >
              <div style={{ border: "2px solid #e6f2ff" }}>
                <ul>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Digitalising Processes</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Moving to Cloud</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Scalable solutions</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Hire contract professionals</h5>
                  </li>
                </ul>
              </div>
            </Col>
          ) : (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseOver={() => {
                handleHover(3);
              }}
              onMouseLeave={handleLeave}
            >
              <Image src="s3.svg" height={140} width={200}></Image>
              <h3 style={{ color: "#32325C", marginTop: "20px" }}>
                Consultancy
              </h3>
            </Col>
          )}
          {details === 4 ? (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseLeave={handleLeave}
            >
              <div style={{ border: "2px solid #e6f2ff" }}>
                <ul>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Cross Platform Apps</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Android Apps</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>iPhone Apps</h5>
                  </li>
                  <li style={{ color: "#8891BA", marginBottom: "20px" }}>
                    <h5>Marketing & maintence</h5>
                  </li>
                </ul>
              </div>
            </Col>
          ) : (
            <Col
              xs={{ span: 10, offset: 2 }}
              sm={{ span: 5, offset: 1 }}
              md={{ span: 3, offset: 0 }}
              onMouseOver={() => {
                handleHover(4);
              }}
              onMouseLeave={handleLeave}
            >
              <Image src="s4.svg"></Image>
              <h3 id="3" style={{ color: "#32325C", marginTop: "20px" }}>
                App Development
              </h3>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
