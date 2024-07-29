import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import LogoProject from "../assets/Logo.svg";
import Logofacebook from "../assets/facebook.svg";
import LogoInsta from "../assets/instagram.svg";
import LogoWhatsapp from "../assets/whatsapp.svg";
import LogoContact from "../assets/contact.svg";
import LogoMail from "../assets/mail.svg";
import LogoMap from "../assets/map.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body">
          <div className="footer-body__block">
            <div className="left-block">
              <div className="block_logo">
                <img src={LogoProject} alt="logo" />
              </div>
              <div className="block_menu">
                <h3>О компании</h3>
                <ul>
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="/about-us">О нас</Link>
                  </li>
                  <li>
                    <Link to="/advantages">Преимущества</Link>
                  </li>
                  <li>
                    <Link to="/contacts">Контакты</Link>
                  </li>
                  <li>
                    <Link to="/products">О продукте</Link>
                  </li>
                  <li>
                    <Link to="/documents">Документы</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-block">
              <div className="block_social">
                <h3>Соц.Сети</h3>
                <ul>
                  <li>
                    <div>
                      {" "}
                      <img src={Logofacebook} alt="facebook" />
                    </div>
                    <a href="#">Фейсбук</a>
                  </li>
                  <li>
                    <div>
                      {" "}
                      <img src={LogoInsta} alt="Instagram" />
                    </div>
                    <a href="#">Инстаграм</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoWhatsapp} alt="WhatsApp" />
                    </div>
                    <a href="">WhatsApp</a>
                  </li>
                </ul>
              </div>
              <div className="block_contacts">
                <h3>Контакты</h3>
                <ul>
                  <li>
                    <div>
                      {" "}
                      <img src={LogoContact} alt="Contact" />
                    </div>
                    <a href="#">+996 (550) 34 56 77</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoContact} alt="Contact" />
                    </div>
                    <a href="#">+996 (223) 34 56 77</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoContact} alt="Contact" />
                    </div>
                    <a href="#">+996 (777) 22-03-20</a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoMail} alt="Mail" />
                    </div>
                    <a href="mailto:pki.office.kg@gmail.com">
                      pki.office.kg@gmail.com
                    </a>
                  </li>
                  <li>
                    <div>
                      <img src={LogoMap} alt="Map" />
                    </div>
                    <a href="#">г.Бишкек, ул. Байтик-Баатыра 19</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="top-block">
            <span>© 2024 ОсОО “Смарт счет”</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
