import { useParams } from "react-router";
import "../styles/servicioDetalle.css";
import { FaArrowLeft } from "react-icons/fa";

function ServicioDetalle() {
  const { id } = useParams();

  const detalles = {
    gasoductos: {
      titulo: "Gasoductos",
      desc: [
        "Ingeniería de proyecto y ejecución de obras de ramales e instalaciones de sistemas de media y alta presión.",
        "Const. de interconexión S/Gasoducto (Hot Tap).",
        "Cambio de Válvula y Cañería sobre Gasoducto (trabajos en frío o en caliente)",
        "Limpieza de Picadas.",
        "Mantenimiento de Picadas (tranqueras, instalación, reemplazo)",
        "Instalación y Mantenimiento de sistemas de señalización de Gtos. y Ramales.",
        "Instalación de Carteles de Señalización.",
        "Mantenimiento de Carteles de Señalización (retiro, pintura, reemplazo de lámina, etc.)",
        "Pruebas de hermeticidad y resistencia.",
      ],
      beneficios: [
        "Experiencia de más de 20 años",
        "Cumplimiento de estándares",
        "Uso de tecnología innovadora",
        "Seguridad garantizada en cada proyecto",
      ],
      proyectos: [
        "/images/proyecto1.jpg",
        "/images/proyecto2.jpg",
        "/images/proyecto3.jpg",
      ],
    },
    tuneleria: {
      titulo: "Tunelería inteligente",
      desc: "Instalación subterránea de ductos y cables sin afectar la superficie. Tecnología HDD con control preciso de recorrido y profundidad.",
      beneficios: [
        "Alta precisión",
        "Menor impacto ambiental",
        "Mayor eficiencia en tiempos",
      ],
      proyectos: ["/images/tunel1.jpg", "/images/tunel2.jpg"],
    },
    estacion: {
      titulo: "Estaciones reguladoras",
      desc: "Proyecto, construcción y mantenimiento de estaciones reguladoras de presión. Incluye calibración, pruebas de hermeticidad, pintura, aislaciones y ejecución de cámaras aéreas y subterráneas.",
      beneficios: [
        "Seguridad garantizada",
        "Monitoreo en tiempo real",
        "Certificación oficial",
      ],
      proyectos: ["/images/estacion1.jpg", "/images/estacion2.jpg"],
    },
    otros: {
      titulo: "Otros servicios",
      desc: "Agua potable, energía y obras complementarias.",
      beneficios: ["Soluciones integrales", "Equipo multidisciplinario"],
      proyectos: ["/images/otros1.jpg"],
    },
  };

  const servicio = detalles[id];

  if (!servicio)
    return <h2 className="text-center mt-5">Servicio no encontrado</h2>;

  return (
    <div className="container py-5">
      <h1 className="mb-4">{servicio.titulo}</h1>
      {Array.isArray(servicio.desc) ? (
        <ul className="mb-4 ">
          {servicio.desc.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      ) : (
        <p className="lead">{servicio.desc}</p>
      )}
      <h3 className="mt-5 mb-4">¿Por qué elegirnos?</h3>
      <ul className="list-group mb-5">
        {servicio.beneficios.map((b, i) => (
          <li key={i} className="list-group-item">
            ✔ {b}
          </li>
        ))}
      </ul>
      <h3>Proyectos relacionados</h3>
      <div className="row">
        {servicio.proyectos.map((img, i) => (
          <div key={i} className="col-md-4 mb-3">
            <img
              src={img}
              alt={`Proyecto ${i + 1}`}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>

      <div className=" mt-5">
        <a href="/#contacto" className="btn btn-link btn-md">
          <FaArrowLeft className="me-2" />
          Volver atras
        </a>
      </div>
    </div>
  );
}

export default ServicioDetalle;
