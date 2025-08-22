import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../components/css/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada: " + message);
    setMessage("");
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0 rounded-4 contact-card">
              <Card.Body className="p-4">
                <h2 className="fw-bold text-center mb-4">Fale Conosco</h2>
                <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Seu Nome"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Seu Email"
                      required
                      className="py-3"
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Sua Mensagem"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="px-5 fw-semibold contact-btn"
                    >
                      Enviar Mensagem
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
