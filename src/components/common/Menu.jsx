import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router";
import logo from "../../assets/logo-ossa.png";
import "../styles/menu.css";
function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname.startsWith("/servicio/")) {
      navigate("/"); // ir a inicio primero
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo Ossa ing"
            className="img-fluid me-2"
            width={50}
          />
          OSSA Ingeniería y Construcción S.R.L
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("servicios")}>
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("proyectos")}>
              Proyectos
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("contacto")}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
