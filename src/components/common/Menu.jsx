import { Link, useNavigate, useLocation } from "react-router";

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          OSSA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navMenu" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("servicios")}
              >
                Servicios
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("proyectos")}
              >
                Proyectos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleScroll("contacto")}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
