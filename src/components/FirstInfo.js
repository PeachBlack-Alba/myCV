import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typical from "react-typical";

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
                  <h1> Hey, my name is Alba</h1>{" "}
                  <p>
                    I'm{" "}
                    <Typical
                      loop={Infinity}
                      wrapper="b"
                      steps={[
                        "your new software developer 👩‍💻",
                        1000,
                        "a drummer 🥁",
                        1000,
                        "a tattoo artist 🔥",
                        1000
                      ]}
                    ></Typical>
                  </p>
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
