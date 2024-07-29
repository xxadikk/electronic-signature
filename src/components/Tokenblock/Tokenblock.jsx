import React from "react";
import "../Tokenblock/Tokenblock.css";
import { useNavigate } from "react-router-dom";

const Tokenblock = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="section">
        <div className="tokenblock">
          <div className="content">
            <h2>Универсальный токен</h2>
            <p>
              Подписывайте документы <i>онлайн</i>,<br /> <i>экономьте</i> время
              и деньги
            </p>
            <div className="benefits">
              <div className="benefits-first">
                <div>Электронная подпись</div>
                <div>Электронная отчетность</div>
              </div>
              <div className="benefits-first benefits-second">
                <div>Безопасность данных</div>
                <div>Оптимизация процессов</div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefits-phone__body">
          <div className="benefits-phone">
            <div className="benefits-first">
              <div className="one">
                <span>Электронная подпись</span>
              </div>
              <div className="two">
                <span>Электронная отчетность</span>
              </div>
            </div>
            <div className="benefits-first">
              <div className="one">
                <span>Безопасность данных</span>
              </div>
              <div className="two">
                <span>Оптимизация процессов</span>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-block">
          <button className="btn">Начать</button>
          <button
            className="btn"
            onClick={() => navigate("/verification-center")}
          >
            Узнать больше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tokenblock;
