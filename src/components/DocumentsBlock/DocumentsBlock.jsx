import React from "react";
import "../DocumentsBlock/DocumentsBlock.css";
import pdfIcon from "../assets/pdfIcon.svg";
import docIcon from "../assets/doc.svg";

const DocumentsBlock = () => {
  return (
    <div className="documentsBlock">
      <div className="container">
        <div className="documentsBlock__body">
          <div className="documentsBlock-container">
            <h3 className="documentsBlock-title">Общие документы</h3>
            <div className="documentsBlock-documents">
              <div className="documentsBlock-document">
                <div>
                  <img src={docIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/18oFGp7pYuJhiFFrftY-qUiw6HSKQBgaT/edit?usp=sharing&ouid=108719743744295704286&rtpof=true&sd=true"
                >
                  Договор на оказание услуг
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/15EE7JwRQi5cEEult9MuG4g1mWqnBpqxZ/view?usp=sharing"
                >
                  Документы на получение КЭП для организаций и ИП
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/19aS5K-s2IagWhiBLsz3QBIJtwKNRdXll/view?usp=sharing"
                >
                  Регламент Удостоверяющего ЦентраОсОО «Смарт Счет»
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={docIcon} alt="docIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://cbd.minjust.gov.kg/111635/edition/985628/ru"
                >
                  Закон КР «Об электронной подписи» от 19 июля 2017 года № 128
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={docIcon} alt="docIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://cbd.minjust.gov.kg/451081/edition/1118095/ru"
                >
                  Постановление Правительства КР «О некоторых вопросах,
                  связанных с использованием электронной подписи» от 31 декабря
                  2019 года № 742
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={docIcon} alt="docIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/152pNaTe2lOw5uHzcvUdIabxby9g4SRzQ/view?usp=sharing"
                >
                  Положение о Главном (корневом) удостоверяющем центре
                  Министерства цифрового развития Кыргызской Республики
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={docIcon} alt="docIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1D5eiBiTWxVayHWbntWM4z95brFRxufR3/view?usp=sharing"
                >
                  Регламент Главного (корневого) удостоверяющего центра
                  Министерства цифрового развития Кыргызской Республики
                </a>
              </div>
              {/*<div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Бланк доверенности в формате М2а
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className="documentsBlock-container">
            <h3 className="documentsBlock-title">
              Для организаций и ИП, работающих на основании свидетельства
            </h3>
            <div className="documentsBlock-documents">
              {/* <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Заявка для организаций и ИП по свидетельству
                </a>
              </div> */}

          {/* <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Документы на продление КЭП для организаций и ИП,
                </a>
              </div> 
            </div>
          </div> */}
          {/* <div className="documentsBlock-container">
            <h3 className="documentsBlock-title">Для специалистов</h3>
            <div className="documentsBlock-documents">
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Заявка на получение КЭП для специалиста
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Документы на получение КЭП для специалиста
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a target="_blank" href="#">
                  Документы на продление КЭП для специалистов
                </a>
              </div>
            </div>
          </div> */}
          <div className="documentsBlock-container">
            <h3 className="documentsBlock-title">Для закупающих организаций</h3>
            <div className="documentsBlock-documents">
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1D9007cwll8Wc7FzAt-pdaJ6RKz0U1qSn/view?usp=sharing"
                >
                  Коммерческое предложение на 2024 год
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1IWaNBGCJb-IkZnbMnFJN9O1SQeG35EcR/view?usp=sharing"
                >
                  Техническая спецификация на КЭП и физический защищенный
                  носитель «Jacarta KG-ЭП»
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1PMaIAnbPOoByaCOwBzTj7Fn_bg_XUyAo/view?usp=sharing"
                >
                  Инструкция для установки программного обеспечения для работы с
                  электронной подписью
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1CI9CJ2RznHy87zJMbruRcCAP6hQM95xU/view?usp=sharing"
                >
                  Инструкция по разблокировке РУТОКЕНА ЭЦП
                </a>
              </div>

              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1CI9CJ2RznHy87zJMbruRcCAP6hQM95xU/view?usp=sharing"
                >
                  Инструкция по разблокировке РУТОКЕНА ЭЦП
                </a>
              </div>
              <div className="documentsBlock-document">
                <div>
                  <img src={pdfIcon} alt="pdfIcon" />
                </div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1FL2lVykr-YSKDegZdmnPn7LEOeMjNcBG/view?usp=sharing"
                >
                  Инструкция по очистке кэш в браузере
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsBlock;
