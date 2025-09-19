import { FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} OSSA Ingeniería y Construcción
          S.R.L.
        </p>
        <p className="mb-1">
          Av. Mate de Luna 1620, 5°B – San Miguel de Tucumán | Tel: +54 381
          508-9330 | Email: oscar.santillo@gmail.com
        </p>
        <div className="mt-2">
          <a
            href="https://www.facebook.com/ossaingconst/?locale=es_LA"
            target="_blank"
            className="text-white me-3"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.youtube.com/@OscarSantillan-mr7mt"
            target="_blank"
            className="text-white me-3"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
