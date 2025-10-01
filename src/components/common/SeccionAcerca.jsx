import { FaBurn, FaTint, FaFaucet, FaBolt, FaRoad } from "react-icons/fa";
import "../styles/home.css";

function SeccionAcerca({ titulo, descripcion, img, serviciosExtra }) {
  const iconMap = {
    "GAS NATURAL": <FaBurn className="text-primary fs-3 me-2" />,
    "AGUA POTABLE": <FaTint className="text-info fs-3 me-2" />,
    CLOACAS: <FaFaucet className="text-secondary fs-3 me-2" />,
    "ENERGIA ELÉCTRICA": <FaBolt className="text-warning fs-3 me-2" />,
    "CORDON CUNETA": <FaRoad className="text-success fs-3 me-2" />,
  };

  return (
    <section id="acerca" className="seccion-acerca py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="mb-3 text-primary fw-bold">{titulo}</h2>
            <p className="mb-4">{descripcion}</p>
            <div className="row">
              {serviciosExtra.map((serv, i) => (
                <div key={i} className="col-6 mb-3 d-flex align-items-center">
                  {iconMap[serv]}
                  <span className="fw-medium">{serv}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img} alt={titulo} className="img-fluid acerca-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionAcerca;
