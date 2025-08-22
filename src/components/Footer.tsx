import "../components/css/Footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="mb-2">
              &copy; {new Date().getFullYear()} MyReactApp. Todos os direitos reservados.
            </p>
            <div>
              <a href="#" className="text-primary mx-2 text-decoration-none">
                Facebook
              </a>
              <a href="#" className="text-primary mx-2 text-decoration-none">
                Twitter
              </a>
              <a href="#" className="text-primary mx-2 text-decoration-none">
                Instagram
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
