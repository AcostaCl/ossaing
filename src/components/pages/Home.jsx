import Hero from "../common/Hero.jsx";
import SeccionAcerca from "../common/SeccionAcerca.jsx";
import ServicioCard from "../common/ServicioCard.jsx";
import Clientes from "../common/Clientes.jsx";
import Estadisticas from "../common/Estadisticas.jsx";
import Contacto from "../common/Contacto.jsx";
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
import Lbanesi from "../img/lbanesi.jpg";
import GrupoLucci from "../img/grupolucci.jpg";
import Codeler from "../img/codelerlogo.png";
import ArquitecturayUrb from "../img/arquitecturayurba.jpg";
import "../styles/home.css";
import { FaCheckCircle, FaProjectDiagram, FaUsers } from "react-icons/fa";

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
      desc: "Instalación subterránea de ductos y cables sin afectar la superficie.",
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
  const clientes = [
    { id: 1, img: Edet, alt: "edet logo" },
    { id: 2, img: Gasnor, alt: "gasnor logo" },
    { id: 3, img: Supercemento, alt: "supercemento logo" },
    { id: 4, img: Pecom, alt: "pecom logo" },
    { id: 5, img: Tgn, alt: "tgn logo" },
    { id: 6, img: Citrusvil, alt: "citrusvil logo" },
    { id: 7, img: Lbanesi, alt: "citrusvil logo" },
    { id: 8, img: GrupoLucci, alt: "citrusvil logo" },
    { id: 9, img: Codeler, alt: "citrusvil logo" },
    { id: 10, img: ArquitecturayUrb, alt: "citrusvil logo" },
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
      <Hero />
      <SeccionAcerca
        serviciosExtra={serviciosExtra}
        img={Soldar}
        titulo="Quiénes somos"
        descripcion="Somos una empresa radicada en San Miguel de Tucumán, dedicados hace más de 20 años a la elaboración de proyectos vinculados al servicio del gas natural y gas licuado."
      />{" "}
      <section id="servicios" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Servicios</h2>
          <div className="row">
            {servicios.map((s) => (
              <ServicioCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>
      <Clientes clientes={clientes} />
      <Contacto />
      <Estadisticas datos={estadisticas} />
    </div>
  );
}

export default Home;
