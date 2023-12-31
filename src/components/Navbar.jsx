import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar({ showNavbar }) {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  if (!showNavbar) {
    return null;
  }

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                Tentang
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Type Mobil
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonial
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Beranda
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                Tentang Kami
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Type Mobil
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Testimonial
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Kontak
              </Link>
            </li>
          </ul>
          {/* <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div> */}

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
