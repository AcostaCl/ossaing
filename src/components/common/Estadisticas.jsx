function Estadisticas({ datos }) {
  return (
    <section className="container my-5">
      <div className="align-items-center bg-light rounded p-4 shadow-sm">
        <div className="d-flex justify-content-center text-center flex-wrap">
          {datos.map((e) => (
            <div key={e.id} className="col-4 mb-3">
              {e.icon}
              <h3 className="fw-bold">{e.valor}</h3>
              <p className="mb-0">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Estadisticas;
