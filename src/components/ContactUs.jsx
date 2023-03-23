import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ContactModal from "./ContactModal";

const ContactUs = () => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <Container>
        <Row>
          <Col
            xs={{ span: 6, offset: 2 }}
            sm={{ span: 6, offset: 2 }}
            md={{ span: 6, offset: 4 }}
          >
            <h1 style={{ color: "#32325C", marginTop: "30px" }}>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe
              title="1"
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d53911755.153680496!2d-154.9620086316962!3d34.439138693230774!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%20California%20USA!3m2!1d34.0522342!2d-118.24368489999999!5e0!3m2!1sen!2s!4v1679481353100!5m2!1sen!2s"
              width="92%"
              height="500"
              style={{ border: "0", borderRadius: "5px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 5, offset: 1 }}
            md={{ span: 3, offset: 0 }}
          >
            <h5 style={{ color: "#32325C", marginTop: "50px" }}>Address</h5>
            <p style={{ color: "#32325C" }}>Euclideslaan 60, Utrecht</p>
            <p style={{ color: "#32325C", marginBottom: "25px" }}>
              {" "}
              3584BN Utrecht, Nederland
            </p>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 3, offset: 0 }}
          >
            <h5 style={{ color: "#32325C", marginTop: "50px" }}>Email</h5>
            <p style={{ color: "#32325C" }}>info@doitbig.nl</p>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 5, offset: 1 }}
            md={{ span: 3, offset: 0 }}
          >
            <h5 style={{ color: "#32325C", marginTop: "50px" }}>Phone</h5>
            <p style={{ color: "#32325C" }}>+1 (222) 400-5555</p>
          </Col>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 4, offset: 0 }}
            md={{ span: 3, offset: 0 }}
          >
            <Button
              onClick={handleShowModal}
              style={{
                backgroundColor: "#fc7c56",
                border: "0px",
                height: "45px",
                width: "150px",
                marginTop: "40px",
              }}
            >
              {" "}
              CONTACT US{" "}
            </Button>
          </Col>
        </Row>
      </Container>
      <ContactModal show={show} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default ContactUs;
