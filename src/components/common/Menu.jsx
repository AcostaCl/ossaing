import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router";
import logo from "../../assets/logo-ossa.png";
import "../styles/menu.css";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (section) => {
    if (location.pathname.startsWith("/servicio/")) {
      navigate("/"); 
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
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo Ossa ing"
            className="img-fluid me-2 "
            width={50}
          />
          OSSA Ingeniería y Construcción S.R.L
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Inicio
            </Nav.Link>
            <Nav.Link
              onClick={() => handleScroll("servicios")}
              className="nav-link-custom"
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              onClick={() => handleScroll("acerca-de")}
              className="nav-link-custom"
            >
              Sobre nosotros
            </Nav.Link>
            <Nav.Link
              onClick={() => handleScroll("contacto")}
              className="nav-link-custom"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
