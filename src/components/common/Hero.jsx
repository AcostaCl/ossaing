import banner from "../../../public/herobanner.mp4";

function Hero() {
  const scrollToAcerca = () => {
    const acercaSection = document.getElementById("acerca");
    if (acercaSection) {
      acercaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero position-relative">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={banner} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="overlay"></div>
      <div className="hero-content d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-6 text-light fw-bold">
            Más de 20 años brindando soluciones en gas, túneles e ingeniería
          </h1>
          <button
            onClick={scrollToAcerca}
            className="btn btn-primary btn-lg mt-4"
          >
            Conócenos
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
