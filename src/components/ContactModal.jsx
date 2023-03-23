import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

const ContactModal = (props) => {
  const { show, handleCloseModal } = props;

  return (
    <>
      <Modal
        show={show}
        fullWidth={true}
        style={{ width: "90vw" }}
        onHide={handleCloseModal}
        animation={false}
      >
        <Modal.Header
          style={{ backgroundColor: "#6384FF", border: "0px" }}
          closeButton
        ></Modal.Header>
        <div style={{ backgroundColor: "#6384FF" }}>
          <Container>
            <Row>
              <Col
                xs={{ span: 6, offset: 2 }}
                sm={{ span: 6, offset: 2 }}
                md={{ span: 6, offset: 3 }}
              >
                <h4 style={{ color: "white", marginTop: "50px" }}>
                  Get a Free Quote
                </h4>
              </Col>
            </Row>
            <Form style={{ margin: "30px" }}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="phone" placeholder="Phone" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="website" placeholder="Website" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      as="textarea"
                      type="message"
                      placeholder="Message"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      backgroundColor: "#FD9678",
                      border: "0px",
                      height: "45px",
                      width: "410px",
                      marginTop: "10px",
                    }}
                  >
                    GET A QUOTE
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ marginTop: "30px" }}></div>
                  <span
                    style={{
                      color: "#9cb9e2",
                      fontWeight: "600",
                      fontSize: "16px",
                      marginTop: "30px",
                      marginLeft: "30px",
                    }}
                  >
                    Follow us:
                  </span>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      style={{ marginLeft: "20px" }}
                      src="f.png"
                      height={25}
                      width={25}
                    ></Image>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      style={{ marginLeft: "20px" }}
                      src="t.jpeg"
                      height={25}
                      width={25}
                    ></Image>
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      style={{ marginLeft: "20px" }}
                      src="y.png"
                      height={25}
                      width={25}
                    ></Image>
                  </a>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      style={{ marginLeft: "20px" }}
                      src="g.png"
                      height={25}
                      width={25}
                    ></Image>
                  </a>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;
