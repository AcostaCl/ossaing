import { Link } from "react-router";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaProjectDiagram, FaUsers } from "react-icons/fa";
import Soldar from "../img/soldar.png";
import Gasoc from "../img/gasoc.jpg";
import Tuneleria from "../img/tuneleria.jpg";
import Camara from "../img/CAMARA-2.png";
import Otroserv from "../img/otroserv.jpg";

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
      desc: "Proyecto, construcción y mantenimiento de estaciones reguladoras de presión. ",
      img: Camara,
    },
    {
      id: "otros",
      titulo: "Otros servicios",
      desc: "Servicios-Flota-Herramientas",
      img: Otroserv,
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
                GAS NATURAL <br /> AGUA POTABLE <br />
                CLOACAS <br />
                ENERGIA ELÉCTRICA <br /> CORDON CUNETA
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
                  <img
                    src={s.img}
                    className="card-img-top card-img-servicio"
                    alt={s.titulo}
                  />
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
          <div className="col-md-4">
            <img
              src="/images/proyecto1.jpg"
              className="img-fluid rounded"
              alt="Proyecto"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/proyecto2.jpg"
              className="img-fluid rounded"
              alt="Proyecto"
            />
          </div>
          <div className="col-md-4">
            <img
              src="/images/proyecto3.jpg"
              className="img-fluid rounded"
              alt="Proyecto"
            />
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Nuestros clientes</h2>
          <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
            <img src="/images/cliente1.png" alt="Cliente 1" height="50" />
            <img src="/images/cliente2.png" alt="Cliente 2" height="50" />
            <img src="/images/cliente3.png" alt="Cliente 3" height="50" />
          </div>
        </div>
      </section>

      <section className="container my-5" id="contacto">
        <h2 className="mb-4">Contacto</h2>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <p>
              <strong>Dirección:</strong> Av. Mate de Luna 1620, 5°B – San
              Miguel de Tucumán
            </p>
            <p>
              <strong>Teléfono:</strong> +54 381 100 6000
            </p>
            <p>
              <strong>Email:</strong> contacto@ossaingconst.com.ar
            </p>
            <p>
              <strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00
            </p>
          </div>
          <div className="col-lg-6">
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
            <div className="col-4 mb-3">
              <FaCheckCircle size={40} className="text-success mb-2" />
              <h3 className="fw-bold">100%</h3>
              <p className="mb-0">Éxito</p>
            </div>
            <div className="col-4 mb-3">
              <FaProjectDiagram size={40} className="text-primary mb-2" />
              <h3 className="fw-bold">150+</h3>
              <p className="mb-0">Proyectos</p>
            </div>
            <div className="col-4 mb-3">
              <FaUsers size={40} className="text-warning mb-2" />
              <h3 className="fw-bold">20+</h3>
              <p className="mb-0">Años experiencia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
