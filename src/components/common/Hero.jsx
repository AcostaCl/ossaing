import banner from "../../../public/herobanner.mp4";

function Hero() {
  return (
    <header className="hero">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={banner} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="overlay"></div>
      <div className="hero-content d-flex align-items-center">
        <div className="container">
          <h1 className="display-5 text-light fw-bold text-start">
            Más de 20 años brindando soluciones en <br /> gas, túneles e
            ingeniería
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Hero;
