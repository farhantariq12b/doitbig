import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Introduction = () => {
  return (
    <Container style={{ width: "100%" }}>
      <Row>
        <Col
          xs={{ span: "11", offset: "1" }}
          sm={8}
          md={6}
          lg={5}
          style={{ marginTop: "90px" }}
        >
          <p style={{ color: "#32325C" }}>H E L L O</p>
          <h1 style={{ color: "#32325C", marginTop: "30px" }}>
            We build digital products
          </h1>
          <p style={{ color: "#32325C", marginTop: "30px" }}>
            Great design and development solutions for your business.
          </p>
          <a href="#3" style={{ textDecoration: "none" }}>
            <Button
              style={{
                backgroundColor: "#fc7c56",
                border: "0px",
                height: "45px",
                marginTop: "30px",
              }}
            >
              {" "}
              CHECK OUR PROJECTS{" "}
            </Button>
          </a>
        </Col>
        <Col
          xs={{ span: "11", offset: "1" }}
          sm={8}
          md={{ span: "4", offset: "0" }}
          lg={6}
          style={{ marginTop: "60px" }}
        >
          <Image src="Intro.svg" height={350} width={350}></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
