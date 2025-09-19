import { Link } from "react-router";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaProjectDiagram, FaUsers } from "react-icons/fa";
import Soldar from "../img/soldar.png";
import Gasoc from "../img/gasoc.jpg";
import Tuneleria from "../img/tuneleria.jpg";
import Camara from "../img/CAMARA-2.png";
import Otroserv from "../img/otroserv.jpg";
import Citrusvil from "../img/citrusvil.png";
import Edet from "../img/edet.png";
import Gasnor from "../img/gasnor.png";
import Tgn from "../img/tgn.png";
import Supercemento from "../img/supercemento.png";
import Pecom from "../img/pecom.png";

function Home() {
  const servicios = [
    {
      id: "gasoductos",
      titulo: "Gasoductos",
      desc: "Construcción y mantenimiento de gasoductos",
      img: Gasoc,
    },
    {
      id: "tuneleria",
      titulo: "Tunelería inteligente",
      desc: "Instalación subterránea de ductos y cables sin afectar la superficie. Tecnología HDD con control preciso de recorrido y profundidad.",
      img: Tuneleria,
    },
    {
      id: "estacion",
      titulo: "Estaciones reguladoras",
      desc: "Proyecto, construcción y mantenimiento de estaciones reguladoras de presión.",
      img: Camara,
    },
    {
      id: "otros",
      titulo: "Otros servicios",
      desc: "Servicios-Flota-Herramientas",
      img: Otroserv,
    },
  ];

  const serviciosExtra = [
    "GAS NATURAL",
    "AGUA POTABLE",
    "CLOACAS",
    "ENERGIA ELÉCTRICA",
    "CORDON CUNETA",
  ];

  const proyectos = [
    { id: 1, img: "/images/proyecto1.jpg", alt: "Proyecto 1" },
    { id: 2, img: "/images/proyecto2.jpg", alt: "Proyecto 2" },
    { id: 3, img: "/images/proyecto3.jpg", alt: "Proyecto 3" },
  ];

  const clientes = [
    { id: 1, img: Edet, alt: "edet logo" },
    { id: 2, img: Gasnor, alt: "gasnor logo" },
    { id: 3, img: Supercemento, alt: "supercemento logo" },
    { id: 2, img: Pecom, alt: "pecom logo" },
    { id: 2, img: Tgn, alt: "tgn logo" },
    { id: 2, img: Citrusvil, alt: "citrusvil logo" },
  ];

  const estadisticas = [
    {
      id: 1,
      icon: <FaCheckCircle size={40} className="text-success mb-2" />,
      valor: "100%",
      texto: "Éxito",
    },
    {
      id: 2,
      icon: <FaProjectDiagram size={40} className="text-primary mb-2" />,
      valor: "150+",
      texto: "Proyectos",
    },
    {
      id: 3,
      icon: <FaUsers size={40} className="text-warning mb-2" />,
      valor: "20+",
      texto: "Años experiencia",
    },
  ];

  return (
    <div>
      <header className="hero d-flex align-items-center text-dark banner-estilos">
        <div className="container">
          <h1 className="display-6 text-light fw-bold text-justify">
            Más de 20 años brindando soluciones en <br /> gas, tuneles e
            ingeniería
          </h1>
        </div>
      </header>

      <section className="py-5 container">
        <Container className="my-5">
          <Row className="align-items-center">
            <hr />
            <Col xs={12} md={6}>
              <h2 className="mb-4 text-primary">Quiénes somos</h2>
              <p>
                Somos una empresa radicada en San Miguel de Tucumán, dedicados
                hace más de 20 años a la elaboración de proyectos vinculados al
                servicio del gas natural y gas licuado. Dentro de nuestros
                servicios también ofrecemos:
              </p>
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
                src={Soldar}
                alt="Ejemplo"
                className=" rounded shadow imagen-home"
              />
            </Col>
          </Row>
          <hr />
        </Container>
      </section>

      <section id="servicios" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Servicios</h2>
          <div className="row">
            {servicios.map((s) => (
              <div key={s.id} className="col-md-3 mb-4">
                <div className="card h-100 shadow d-flex flex-column">
                  <img src={s.img} className="card-img-top" alt={s.titulo} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{s.titulo}</h5>
                    <p className="card-text flex-grow-1">{s.desc}</p>
                    <Link
                      to={`/servicio/${s.id}`}
                      className="btn btn-outline-primary mt-auto btn-home"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-5 container">
        <h2>Proyectos</h2>
        <div className="row">
          {proyectos.map((p) => (
            <div key={p.id} className="col-md-4">
              <img src={p.img} className="img-fluid rounded" alt={p.alt} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Nuestros clientes</h2>
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
            {clientes.map((c) => (
              <img key={c.id} src={c.img} alt={c.alt} height="50" />
            ))}
          </div>
        </div>
      </section>

      <section className="container my-5" id="contacto">
        <hr />
        <h2 className="mb-2 ">Contacto</h2>
        <div className="row">
          <div className="col-lg-6 mb-4 mt-5 ">
            <p>
              <strong>Dirección:</strong> Av. Mate de Luna 1620, 5°B – San
              Miguel de Tucumán
            </p>
            <p>
              <strong>Teléfono:</strong> +54 381 508-9330
            </p>
            <p>
              <strong>Email:</strong> oscar.santillo@gmail.com
            </p>
            <p>
              <strong>Horario:</strong> Lunes a Viernes, 8:00 - 18:00
            </p>
          </div>
          <div className="col-lg-5">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1579999999997!2d-65.21759078500001!3d-26.83412398315526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1c2c2b2c2d%3A0x1234567890abcdef!2sAv.%20Mate%20de%20Luna%201620%2C%20San%20Miguel%20de%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1694534098765!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="align-items-center bg-light rounded p-4 shadow-sm">
          <div className="d-flex justify-content-center text-center flex-wrap">
            {estadisticas.map((e) => (
              <div key={e.id} className="col-4 mb-3">
                {e.icon}
                <h3 className="fw-bold">{e.valor}</h3>
                <p className="mb-0">{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
