import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbClockHour10Filled } from "react-icons/tb";

function Contacto() {
  return (
    <section className="container my-5" id="contacto">
      <hr />
      <h2 className="mb-2">Contacto</h2>
      <div className="row">
        <div className="col-lg-6 mb-4 mt-5">
          <p>
            <FaMapMarkerAlt className="text-primary me-1" />
            Av. Mate de Luna 1620, 5°B – San Miguel de Tucumán
          </p>
          <p>
            <FaPhoneAlt className="text-primary me-1" />
            <a
              href="tel:+543815089330"
              className="text-decoration-none text-dark"
            >
              +54 381 508-9330
            </a>
          </p>
          <p>
            <IoMdMail className="text-primary me-1" />
            <a
              href="mailto:oscar.santillo@gmail.com"
              className="text-decoration-none text-dark"
            >
              oscar.santillo@gmail.com
            </a>
          </p>
          <p>
            <TbClockHour10Filled className="text-primary me-1" />
            Lunes a Viernes, 8:00 - 18:00
          </p>
        </div>
        <div className="col-lg-5">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1579999999997!2d-65.21759078500001!3d-26.83412398315526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1c2c2b2c2d%3A0x1234567890abcdef!2sAv.%20Mate%20de%20Luna%201620%2C%20San%20Miguel%20de%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1694534098765!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa ubicación"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
