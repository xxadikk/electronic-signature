import React from "react";
import "../Securityblock/Securityblock.css";
import IconProject from "../assets/Logo.svg";
import IconPatern from "../assets/kyrgyzPattern.svg";

const Securityblock = () => {
  return (
    <div className="securityblock">
      <div className="container-securityblock">
        <div className="securityblock-body">
          <div className="icon-project">
            <img src={IconProject} alt="logo" />
          </div>
          <div className="title-security">
            “Ваша безопасность, наша подпись”
          </div>
          <div className="description-security">
            Мы специализируемся на создании инновационных решений для
            <i> безопасной электронной подписи</i>
          </div>
          <div className="patern-security">
            <img src={IconPatern} alt="patern" />
          </div>
          <div className="description-security">
            Внедряя передовые технологии и стратегии, чтобы ваш бизнес мог
            функционировать безопасно и эффективно
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securityblock;
