import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typing from "react-typing-animation";

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
                  <Typing>
                    <Typing.Delay ms={2000} />
                    <div className="firstSentence">My name is Alba </div>
                    <div className="secondSentence">
                      An I am your new Software developer{" "}
                    </div>
                  </Typing>
                </Col>
                <Col xs={10} sm={12} md={5} className="about">
                  <p>Add text here</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
