import { Carousel, Container, Row, Col } from "react-bootstrap";

function Clientes({ clientes }) {
  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < clientes.length; i += chunkSize) {
    slides.push(clientes.slice(i, i + chunkSize));
  }

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5">Nuestros Clientes</h2>
        <Carousel indicators={false} controls={true} interval={3000}>
          {slides.map((grupo, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center align-items-center">
                {grupo.map((c) => (
                  <Col
                    key={c.id}
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center"
                  >
                    <img
                      src={c.img}
                      alt={c.alt}
                      style={{
                        maxWidth: "120px",
                        maxHeight: "80px",
                        objectFit: "contain",
                      }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Clientes;
