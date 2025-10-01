import { Container, Row, Col, Image } from "react-bootstrap";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo-ossa.png";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col
            md={4}
            className="mb-4 d-flex flex-column align-items-center align-items-md-start"
          >
            <Image
              src={logo}
              alt="OSSA Logo"
              width={80}
              className="mb-2 logo-ossa"
            />
            <h5 className="fw-bold">OSSA Ingeniería y Construcción S.R.L.</h5>
          </Col>

          <Col md={4} className="mb-4 text-center">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <p className="mb-1">
              Av. Mate de Luna 1620, 5°B – San Miguel de Tucumán
            </p>
            <p className="mb-1">Tel: +54 381 508-9330</p>
            <p className="mb-1">Email: oscar.santillo@gmail.com</p>
          </Col>

          <Col
            md={4}
            className="mb-4 d-flex flex-column align-items-center align-items-md-end"
          >
            <h5 className="fw-bold mb-3">Redes sociales</h5>
            <div className="d-flex gap-2">
              <a
                href="https://www.facebook.com/ossaingconst/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.youtube.com/@OscarSantillan-mr7mt"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} OSSA Ingeniería y Construcción
          S.R.L. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
