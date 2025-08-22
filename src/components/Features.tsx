import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRocket, FaPalette, FaMobileAlt } from "react-icons/fa";
import "../components/css/Features.css";

const features = [
  { icon: <FaRocket size={28} className="text-warning" />, title: "Performance", desc: "Lightning-fast rendering with React and optimized code." },
  { icon: <FaPalette size={28} className="text-info" />, title: "Customizable UI", desc: "Easily adaptable designs with reusable components." },
  { icon: <FaMobileAlt size={28} className="text-success" />, title: "Mobile First", desc: "Responsive layouts that look great on any device." },
];

const Features = () => {
  return (
    <section id="features" className="features-section bg-light py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Key Features</h2>
        </div>

        <Row className="g-4">
          {features.map((feature) => (
            <Col key={feature.title} md={4}>
              <Card className="h-100 text-center border-0 shadow feature-card">
                <Card.Body>
                  <div className="mb-3">{feature.icon}</div>
                  <Card.Title className="fw-semibold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
