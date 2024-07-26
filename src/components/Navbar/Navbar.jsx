import React, { useEffect, useState, useRef } from "react";
import LogoProject from "../assets/Logo.svg";
import "../Navbar/Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const checkboxRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isScrolled = window.pageYOffset > 100;
      setIsNavbarScrolled(isScrolled);
    });

    return () => window.removeEventListener("scroll");
  }, []);

  const handleMenuItemClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <div className="nav">
      <div className={`navbarblock ${isNavbarScrolled ? "scroll" : ""}`}>
        <div className="container">
          <nav className="navbar">
            <div className="nav-logo">
              <img src={LogoProject} alt="Logo" />
            </div>
            <ul className="nav-menu">
              <li>
                <NavLink
                  to="/"
                  className={pathname === "/" ? "active" : ""}
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={pathname === "/about-us" ? "active" : ""}
                >
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/advantages"
                  className={pathname === "/advantages" ? "active" : ""}
                >
                  Преимущества
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/contacts"
                  className={pathname === "/contacts" ? "active" : ""}
                  onClick={handleMenuItemClick}
                >
                  Контакты
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/products"
                  className={pathname === "/products" ? "active" : ""}
                >
                  О продукте
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/verification-center"
                  className={
                    pathname === "/verification-center" ? "active" : ""
                  }
                >
                  УЦ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/documents"
                  className={pathname === "/documents" ? "active" : ""}
                  >
                  Документы
                </NavLink>
              </li>
            </ul>
            <div className="nav-btn">
              <button className="btn">Начать</button>
            </div>
          </nav>
        </div>
      </div>
      <nav>
        <div className="navbar-phone">
          <div className="container-phone nav-container">
            <input className="checkbox" type="checkbox" ref={checkboxRef} />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="nav-btn">
              <button className="btn">Начать</button>
            </div>
            <div className="menu-items">
              <li onClick={handleMenuItemClick}>
                <NavLink to="/" className={pathname === "/" ? "active" : ""}>
                  Главная
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/about-us"
                  className={pathname === "/about-us" ? "active" : ""}
                >
                  О нас
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/advantages"
                  className={pathname === "/advantages" ? "active" : ""}
                >
                  Преимущества
                </NavLink>
              </li>
              {/* <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/contacts"
                  className={pathname === "/contacts" ? "active" : ""}
                >
                  Контакты
                </NavLink>
              </li> */}
              <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/products"
                  className={pathname === "/products" ? "active" : ""}
                >
                  О продукте
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/verification-center"
                  className={
                    pathname === "/verification-center" ? "active" : ""
                  }
                >
                  УЦ
                </NavLink>
              </li>
              <li onClick={handleMenuItemClick}>
                <NavLink
                  to="/documents"
                  className={pathname === "/documents" ? "active" : ""}
                >
                  Документы
                </NavLink>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
