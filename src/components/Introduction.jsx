import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Introduction = () => {
  return (
    <div className="intro-col">
      <Container style={{ width: "100%" }}>
        <Row>
          <Col
            xs={{ span: "11", offset: "1" }}
            md={{ span: "5", offset: "0" }}
            sm={8}
            lg={5}
          >
            <h1 style={{ color: "#32325C" }}>HELLO,</h1>
            <h1 style={{ color: "#32325C", marginTop: "5px" }}>
              We build digital products
            </h1>
            <p style={{ color: "#32325C", marginTop: "30px" }}>
              Great design and development solutions for your business.
            </p>
            <a href="#5" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  backgroundColor: "#fc7c56",
                  border: "0px",
                  height: "50px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  width: "135px",
                  marginTop: "30px",
                }}
              >
                {" "}
                GET STARTED{" "}
              </Button>
            </a>
          </Col>
          <Col
            xs={{ span: "11", offset: "1" }}
            md={{ span: "5", offset: "1" }}
            sm={8}
            lg={6}
            style={{ marginTop: "30px" }}
          >
            <Image src="Intro.svg" height={380} width={420}></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
