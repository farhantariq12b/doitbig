import { Col, Container, Image, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#E6F2FF", marginTop: "20px" }}>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 2 }}
            md={{ span: 4, offset: 0 }}
          >
            <p style={{ marginTop: "60px" }}>
              © 2022. All rights reserved by
              <a
                href="https://doitbig.nl/en/#home"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Your compary
              </a>
              .
            </p>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 2 }}
            md={{ span: 4, offset: 0 }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                style={{ marginTop: "60px", marginLeft: "20px" }}
                src="f.png"
                height={25}
                width={25}
              ></Image>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <Image
                style={{ marginTop: "60px", marginLeft: "20px" }}
                src="t.jpeg"
                height={25}
                width={25}
              ></Image>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <Image
                style={{ marginTop: "60px", marginLeft: "20px" }}
                src="y.png"
                height={25}
                width={25}
              ></Image>
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <Image
                style={{ marginTop: "60px", marginLeft: "20px" }}
                src="g.png"
                height={25}
                width={25}
              ></Image>
            </a>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 2 }}
            md={{ span: 4, offset: 0 }}
          >
            <p style={{ marginTop: "60px" }}>
              <a href="/" style={{ textDecoration: "none" }}>
                Privacy Policy
              </a>{" "}
              -
              <a href="/" style={{ textDecoration: "none" }}>
                Terms &amp; Conditions
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
