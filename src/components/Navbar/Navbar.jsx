import React from "react";
import LogoProject from "../assets/Logo.svg";
import "../Navbar/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  const PUBLIC_PAGES = [
    {
      link: "/",
      page: "Главная",
      id: 1,
    },
    {
      link: "/about-us",
      page: "О нас",
      id: 2,
    },
    {
      link: "/advantages",
      page: "Преимущества",
      id: 3,
    },
    {
      link: "/contacts",
      page: "Контакты",
      id: 4,
    },
    {
      link: "/products",
      page: "О продукте",
      id: 5,
    },
    {
      link: "/verification-center",
      page: "УЦ",
      id: 6,
    },
    {
      link: "/documents",
      page: "Документы",
      id: 7,
    },
  ];
  return (
    <div className='container'>
      <nav className='navbar'>
        <div class='nav-logo'>
          <img src={LogoProject} alt='Logo' />
        </div>
        <ul className='nav-menu'>
          {PUBLIC_PAGES.map((page) => (
            <Link to={page.link} key={page.id}>
              {page.page}
            </Link>
          ))}
        </ul>
        <div className='nav-btn'>
          <button>Начать</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
