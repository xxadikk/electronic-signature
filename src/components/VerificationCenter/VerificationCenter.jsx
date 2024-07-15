import React from "react";
import "../VerificationCenter/VerificationCenter.css";

const VerificationCenter = () => {
  return (
    <div className="verificationCenter">
      <div className="container">
        <div className="verificationCenter__body">
          <div className="verificationCenter-blocks">
            <div className="verificationCenter-block">
              <h4>Удостоверяющий центр</h4>
              <span>
                Удостоверяющий центр (УЦ) – аккредитованное структурное
                подразделение «PKiI», которое предоставляет услуги в сфере
                инфраструктуры открытых ключей, обеспечивая участников
                информационного взаимодействия средствами и спецификациями для
                использования сертификатов ключей в целях обеспечения:
              </span>
              <span>
                ЭП может быть приобретена для использования в электронных
                системах, как государственных, так и частных структур. Для
                получения ЭП, необходимо предоставить Документы, в соответствии
                с утвержденным перечнем.
              </span>
            </div>
            <div className="verificationCenter-block">
              <h4>Прейскурант на услуги Удостоверяющего центра</h4>
              <div className="verificationCenter-block-cards">
                <div className="verificationCenter-block-card">
                  <p>
                    Генерация ключей ЭП руководителя (1-я ЭП) при хранении на
                    Облачном
                  </p>
                  <h3>4200 сом/1 ед</h3>
                  <span>на 1 год</span>
                </div>
                <div className="verificationCenter-block-card">
                  <p>
                    Генерация ключей ЭП с записью на физический защищенный
                    носитель "RuToken"
                  </p>
                  <h3>4200 сом/1 ед</h3>
                  <span>на 1 год</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCenter;
