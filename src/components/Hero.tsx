import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRocket, FaPalette, FaMobileAlt } from "react-icons/fa";
import "../components/css/Hero.css";
import heroImage from "./images/edu.webp"; // importar a imagem

const Hero = () => {
  return (
    <section id="hero" className="hero-section text-light d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Texto */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3 corzinha">
              Welcome to My React App
            </h1>
            <p className="lead mb-4">
              Build amazing web apps with React and Bootstrap, fully responsive and modern.
            </p>

            {/* Botão principal */}
            <Button variant="light" href="#services" className="fw-bold px-4 py-2 mb-4">
              Explore Services
            </Button>

            {/* Destaques com ícones */}
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center gap-2 highlight">
                <FaRocket className="text-warning" />
                <span>Fast & Optimized</span>
              </div>
              <div className="d-flex align-items-center gap-2 highlight">
                <FaPalette className="text-warning" />
                <span>Customizable UI</span>
              </div>
              <div className="d-flex align-items-center gap-2 highlight">
                <FaMobileAlt className="text-warning" />
                <span>Responsive Design</span>
              </div>
            </div>
          </Col>

          {/* Imagem */}
          <Col md={6} className="text-center">
            <img
              src={heroImage} // aqui usamos a importação
              alt="Hero Illustration"
              className="img-fluid rounded shadow-lg hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
