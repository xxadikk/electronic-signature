import React from "react";
import LogoProject from "../assets/Logo.svg";
import "../Navbar/Navbar.css";
import {Link} from "react-router-dom";
import {PUBLIC_PAGES} from "../helpers/const";

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <div class='nav-logo'>
          <img src={LogoProject} alt='Logo' />
        </div>
        <ul className='nav-menu'>
          {PUBLIC_PAGES.map((page) => (
            <li>
              <Link to={page.link} key={page.id}>
                {page.page}
              </Link>
            </li>
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
