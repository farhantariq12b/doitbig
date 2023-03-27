import { Col, Container, Row } from "react-bootstrap";

const Process = () => {
  return (
    <div style={{ backgroundColor: "#F9FCFF" }}>
      <Container>
        <Row>
          <Col
            xs={{ span: 10, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            md={{ span: 8, offset: 1 }}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ color: "#32325C", marginTop: "50px" }}>
                Our Process
              </h1>
              <p style={{ color: "#32325C", marginBottom: "80px" }}>
                A clear working method for powerful results
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="center-wrapper">
              <div className="line d-flex justify-content-between">
                <div className="position-relative-dot">
                  <div className="line-text">Project Discussion</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">Requirements gathering</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">Timeline & Cost estimation</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">prototype & design</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">Development</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">User Testing</div>
                </div>
                <div className="position-relative-dot">
                  <div className="line-text">Launching</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Process;
