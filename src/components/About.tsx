import { Container, Row, Col, Image } from "react-bootstrap";
import "../components/css/About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="/assets/about-image.png"
              alt="About Us"
              fluid
              rounded
              className="shadow about-img"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold display-6 mb-3">About Us</h2>
            <p className="lead text-muted">
              We are passionate developers creating modern, fast, and scalable React applications.
            </p>
            <p className="text-muted">
              Our mission is to help businesses and individuals build stunning user experiences
              with cutting-edge web technologies.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
