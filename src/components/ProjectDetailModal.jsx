import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";

const ProjectDetailModal = (props) => {
  const { show, handleCloseModal } = props;
  return (
    <>
      <Modal
        show={show}
        fullWidth={true}
        onHide={handleCloseModal}
        animation={false}
      >
        <Modal.Header style={{ border: "0px" }} closeButton></Modal.Header>
        <Container>
          <Row>
            <Col md={{ span: "4", offset: "4" }}>
              <span style={{ color: "#32325C", marginTop: "20px" }}>
                Featured Design
              </span>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: "8", offset: "2" }}>
              <h2 style={{ color: "#32325C", marginTop: "20px" }}>
                Jet Airplane Design
              </h2>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ span: "8", offset: "3" }}
              sm={{ span: "8", offset: "2" }}
            >
              <Button
                style={{
                  backgroundColor: "#FD9678",
                  border: "0px",
                  height: "45px",
                  width: "190px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                LIVE PREVIEW
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src="m.jpg" width={470} height={300}></Image>
            </Col>
          </Row>
          <p style={{ color: "#32325C", marginTop: "40px" }}>
            Phasellus eget nibh id lacus elementum tempus ac nec purus. Aenean
            et laoreet mauris, scelerisque varius neque. Pellentesque nec
            tristique massa. Pellentesque tincidunt justo vel metus commodo
            dapibus.
          </p>
          <h3 style={{ color: "#32325C", marginTop: "20px" }}>We delivered:</h3>
          <ul style={{ color: "#32325C" }}>
            <li>
              Phasellus eget nibh id lacus elementum tempus ac nec purus.{" "}
            </li>
            <li>Pellentesque tincidunt justo vel metus commodo dapibus.</li>
            <li>Cras aliquam nec felis eu bibendum.</li>
            <li>Praesent fermentum laoreet erat sit amet dictum.</li>
          </ul>
        </Container>
      </Modal>
    </>
  );
};

export default ProjectDetailModal;
