import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProjectDetailModal from "./ProjectDetailModal";

const Work = () => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <div style={{ backgroundColor: "#E2EBFF", width: "100%" }}>
      <Container style={{ paddingBottom: "80px" }}>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            md={{ span: 8, offset: 3 }}
          >
            <h1 style={{ color: "#32325C", marginTop: "100px" }}>
              Selected Work
            </h1>
            <p style={{ color: "#32325C", marginBottom: "80px" }}>
              See some of our selected work that made their businesses grow
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            md={{ span: 4, offset: 0 }}
          >
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                marginBottom: "20px",
              }}
              onClick={handleShowModal}
            >
              <Card.Img variant="top" src="p1.png" />
              <Card.Body>
                <Card.Title style={{ color: "#32325C" }}>Rabobank</Card.Title>
                <Card.Text style={{ color: "#32325C" }}>
                  We helped Rabobank develop their new version of the website &
                  mobile app, which increased user activity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            md={{ span: 4, offset: 0 }}
          >
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                marginBottom: "20px",
              }}
              onClick={handleShowModal}
            >
              <Card.Img variant="top" src="p2.png"/>
              <Card.Body>
                <Card.Title style={{ color: "#32325C" }}>Medclick</Card.Title>
                <Card.Text style={{ color: "#32325C" }}>
                  AI based blockchain secured online platform that connects
                  patients, doctors, and allied health professionals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            md={{ span: 4, offset: 0 }}
          >
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                marginBottom: "20px",
              }}
              onClick={handleShowModal}
            >
              <Card.Img variant="top" src="p3.png" />
              <Card.Body>
                <Card.Title style={{ color: "#32325C" }}>CodingLab</Card.Title>
                <Card.Text style={{ color: "#32325C" }}>
                  Dutch Freelance platform. Using this platform clients can hire
                  IT professionals. we assure that you got what you need to
                  grow.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ProjectDetailModal show={show} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Work;
