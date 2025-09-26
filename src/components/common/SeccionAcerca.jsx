import { Container, Row, Col } from "react-bootstrap";

function SeccionAcerca({ serviciosExtra, img, titulo, descripcion }) {
  return (
    <section id="acerca-de" className="py-5 container">
      <hr className="text-primary" />
      <Container className="my-5">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h2 className="mb-4 text-primary">{titulo}</h2>
            <p>{descripcion}</p>
            <p>
              {serviciosExtra.map((serv, i) => (
                <span key={i}>
                  {serv} <br />
                </span>
              ))}
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img
              src={img}
              alt="Ejemplo"
              className="rounded shadow imagen-home"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SeccionAcerca;
