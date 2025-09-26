function Clientes({ clientes }) {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-5">Nuestros clientes</h2>
        <div className="d-flex justify-content-center gap-5 flex-wrap mt-4">
          {clientes.map((c) => (
            <img key={c.id} src={c.img} alt={c.alt} height="70" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clientes;
