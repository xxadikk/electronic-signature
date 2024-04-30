import React from "react";
import "./Advantagesblock.css";
import bookIcon from "../assets/bookIcon.svg";
import chainIcon from "../assets/chainIcon.svg";
import securityIcon from "../assets/securityIcon.svg";
import statKg from "../assets/statKg.svg";
import socialFund from "../assets/socialFund.svg";
import kyrgyzTaxService from "../assets/kyrgyzTaxService.svg";

const Advantagesblock = () => {
  return (
    <div className="advantagesblock">
      <div className="container">
        <div className="advantagesblock__body">
          <div className="advantages-title">
            <h4>Преимущества</h4>
          </div>
          <div className="advantagesTop-block">
            <div className="block__body">
              <span>
                PKi - поможет Вам доставить все отчёты <i>в электронном виде</i>
              </span>
              <div className="block__body-section">
                <p>Во все гос. органы</p>
                <div className="sectionIcon">
                  <div>
                    <img src={kyrgyzTaxService} alt="kyrgyzTaxService" />
                  </div>
                  <div>
                    <img src={socialFund} alt="socialFund" />
                  </div>
                  <div>
                    <img src={statKg} alt="statKg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="block__body">
              <span>Полная конфиденциальность данных</span>
              <div>
                <img src={securityIcon} alt="securityIcon" />
              </div>
            </div>
          </div>
          <div className="advantagesCenter-block">
            <button className="btn">Начать</button>
          </div>
          <div className="advantagesBottom-block">
            <div className="block__body">
              <span>Легкая интеграция</span>
              <p>Легко интегрируется с ЭЦП, обеспечивая её бесшовную работу</p>
              <div>
                <img src={chainIcon} alt="chainIcon" />
              </div>
            </div>
            <div className="block__body">
              <span>Возможность проведения аудита</span>
              <p>а также отслеживание изменений</p>
              <div>
                <img src={bookIcon} alt="bookIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantagesblock;
