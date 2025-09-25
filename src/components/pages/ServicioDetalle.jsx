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
    },
    tuneleria: {
      titulo: "Tunelería inteligente",
      desc: "Instalación subterránea de ductos y cables sin afectar la superficie. Tecnología HDD con control preciso de recorrido y profundidad.",
      beneficios: [
        "Alta precisión",
        "Menor impacto ambiental",
        "Mayor eficiencia en tiempos",
      ],
    },
    estacion: {
      titulo: "Estaciones reguladoras",
      desc: "Proyecto, construcción y mantenimiento de estaciones reguladoras de presión. Incluye calibración, pruebas de hermeticidad, pintura, aislaciones y ejecución de cámaras aéreas y subterráneas.",
      beneficios: [
        "Seguridad garantizada",
        "Monitoreo en tiempo real",
        "Certificación oficial",
      ],
    },
    otros: {
      titulo: "Otros servicios",
      desc: "Agua potable, energía y obras complementarias.",
      beneficios: ["Soluciones integrales", "Equipo multidisciplinario"],
    },
  };

  const servicio = detalles[id];

  if (!servicio)
    return <h2 className="text-center mt-5">Servicio no encontrado</h2>;

  return (
    <div className="container py-5">
      <h1 className="mb-4">{servicio.titulo}</h1>
      {Array.isArray(servicio.desc) ? (
        <ul className="mb-4">
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
      {id === "otros" && (
        <div>
          <h3>Videos</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dIqIFQ4r9-I?si=2-91ODZ5fmK0wR-2"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/F76XDDEvb24?si=KrIQbNL-E30WaQ0M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="ratio ratio-16x9">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oeuEuQRhuSk?si=6tqALeJ57VkQkuD-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-5">
        <a href="/#contacto" className="btn btn-link btn-md">
          <FaArrowLeft className="me-2" />
          Volver atras
        </a>
      </div>
    </div>
  );
}

export default ServicioDetalle;
