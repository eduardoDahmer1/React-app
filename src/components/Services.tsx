import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/css/Services.css";

const services = [
  { title: "Fast Performance", desc: "Optimized React components for lightning speed." },
  { title: "Responsive Design", desc: "Looks great on any device, mobile-first approach." },
  { title: "Modern UI", desc: "Clean and modern interfaces with Bootstrap." },
];

const Services = () => {
  return (
    <section id="services" className="services-section bg-dark text-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Our Services</h2>
        </div>

        <Row className="g-4">
          {services.map((service) => (
            <Col key={service.title} md={4}>
              <Card className="h-100 text-center shadow service-card">
                <Card.Body>
                  <Card.Title className="text-primary fw-semibold">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {service.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
