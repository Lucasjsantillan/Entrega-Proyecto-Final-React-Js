import { CartWidget } from "../cartWidget/CartWidget";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark mb-4">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">
          <GiClothes size={45} color={"#fff"} />
          <span className="ps-2 text-white">Curry</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/remeras">
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/zapatillas">
                Zapatillas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/camperas">
                Camperas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category/pantalones">
                Pantalones
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};
