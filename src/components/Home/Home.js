import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import KennyLogo from "../../Assets/avatar-pics/kenny-smile-circle.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                A Memorial Site {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🪦
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Kendall Meralus</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={KennyLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
