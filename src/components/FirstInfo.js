import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FirstInfo() {
  return (
    <Container>
      <div className="aboutMe">
        <div id="about" className="innerContainer infoFlex con2">
          <Row
            className="justify-content-center pSpacer"
            style={{ marginLeft: "0", marginRight: "0" }}
          >
            <Col xs={12} sm={10}>
              <Row className="justify-content-center">
                <Col xs={12} sm={12} md={7}>
                  <div className="portrait">
                    <div className="head">
                      <h1>Hello, it's Alba</h1>
                    </div>
                  </div>
                </Col>
                <Col xs={10} sm={12} md={5} className="about">
                  <p>
                    Add text here
                    <br /> <br />
                    Add text here
                    <br />
                    add text here
                    <br /> <br />
                    Add text here
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
