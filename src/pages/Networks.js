import { Link } from "react-router-dom";
import "../css/networks.css";

const Networks = () => {
  return (
    <div className="redes">
      <h1 className="px-3">Redes sociales</h1>
      <div className="container">
        <div className="row my-5">
          <div className="col-3 ">
            <a href="https://es-la.facebook.com/" target="_blank" className="btn btn-primary w-75 rounded-pill shadow-lg border-dark border-3">
              <i className="fab fa-facebook-f text-white fs-4 mx-3 rounded-pill" />Facebook
            </a>
          </div>
          <div className="col-3 ">
            <a href="https://www.instagram.com/?hl=es" target="_blank" className="btn btn-danger w-75 rounded-pill shadow-lg border-dark border-3">
              <i className="fab fa-instagram text-white fs-4 mx-3" />Instagram
            </a>
          </div>
          <div className="col-3 ">
            <a href="https://twitter.com/?lang=es" target="_blank" className="btn btn-info w-75 rounded-pill shadow-lg border-dark border-3">
              <i className="fab fa-twitter text-white fs-4 mx-3 text-primary" />Twitter
            </a>
          </div>
          <div className="col-3 ">
            <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank" className="btn btn-success w-75 rounded-pill shadow-lg border-dark border-3">
              <i className="fas fa-envelope text-white fs-4 mx-3" />Gmail
            </a>
          </div>

        </div>


        <div className="row">
          <div className="col-4 "></div>
          <div className="col-4 "></div>
          <div className="col-4 "></div>
        </div>
      </div>

    </div>
  );
}

export default Networks;