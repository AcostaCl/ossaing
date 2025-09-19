import { Link } from "react-router";
import "../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Soldar from "../img/soldar.png";
import Gasoc from "../img/gasoc.jpg";
import Tuneleria from "../img/tuneleria.jpg";
import Camara from "../img/CAMARA-2.png";
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
      img: "/images/otros.jpg",
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

      {/* Servicios */}
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

    
      <section id="contacto" className="py-5 container">
        <h2>Contacto</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              required
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Mensaje"
            ></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
