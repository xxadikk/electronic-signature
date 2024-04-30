import React from "react";
import "../RatesBlock/RatesBlock.css";
import workIcon from "../assets/workIcon.svg";
import jacartaIcon from "../assets/jacartaIcon.svg";
import edsIcon from "../assets/edsIcon.svg";

const RatesBlock = () => {
  return (
    <div className="RatesBlock">
      <div className="container">
        <div className="RatesBlock__body">
          <div className="container-title">
            <h4>Тарифы</h4>
          </div>
          <div className="RatesBlock-section">
            <div className="RatesBlock-section__block">
              <div>
                <img src={edsIcon} alt="edsIcon" />
              </div>
              <span>ЭЦП</span>
              <h5>1200 сом</h5>
              <p>Электронно-цифровая подпись</p>
              <button className="btn">Заказать</button>
            </div>
            <div className="RatesBlock-section__block">
              <div>
                <img src={jacartaIcon} alt="jacartaIcon" />
              </div>
              <span>Jacarta</span>
              <h5>3000 сом</h5>
              <p>Хранение ключей шифрования Ключ электронной подписи</p>
              <button className="btn">Заказать</button>
            </div>
            <div className="RatesBlock-section__block">
              <div>
                <img src={workIcon} alt="workIcon" />
              </div>
              <span>РУТОКЕН+ЭЦП</span>
              <h5>4000 сом</h5>
              <p>
                Но мы предлагаем сделать все вместе чтобы помочь Вам{" "}
                <i>защитить ваши данные на 100 %</i>
              </p>
              <button className="btn">Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatesBlock;
