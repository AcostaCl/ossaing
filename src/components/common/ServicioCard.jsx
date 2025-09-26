import { Link } from "react-router";

function ServicioCard({ id, titulo, desc, img }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 shadow d-flex flex-column">
        <div className="card-img-wrapper">
          <Link to={`/servicio/${id}`}>
            <img src={img} className="card-img-top" alt={titulo} />
            <div className="overlay"></div>
          </Link>
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text flex-grow-1">{desc}</p>
          <Link
            to={`/servicio/${id}`}
            className="btn btn-outline-primary mt-auto btn-home"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServicioCard;
