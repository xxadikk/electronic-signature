import React from "react";
import "../ProductsInfo/ProductsInfo.css";

const ProductsInfo = () => {
  return (
    <div className="productsInfo">
      <div className="container">
        <div className="productsInfo__body">
          <div className="productsInfo-blocks">
            <div className="productsInfo-block">
              <h4>Квалифицированная электронная подпись (КЭП)</h4>
              <span>
                Квалифицированная электронная подпись (КЭП) уникальна тем, что
                согласно Закону КР «Об электронной подписи», равноценна
                собственноручной подписи, а для юридических лиц она является
                заменой и подписи, и печати.
              </span>
            </div>
            <div className="productsInfo-block">
              <h4>Виды КЭП</h4>
              <span>
                КЭП руководителя – выдается руководителям компаний и
                индивидуальным предпринимателям для подписи отчетов от имени
                руководителя.
              </span>
              <span>
                КЭП главного бухгалтера – выдается штатным и приходящим
                бухгалтерам компаний для подписи отчетов от имени бухгалтера.
              </span>
              <span>
                КЭП 2-я, главного бухгалтера в лице руководителя – выдается
                руководителям, исполняющим функции бухгалтера в своей компании
                для подписи отчетов от имени бухгалтера.
              </span>
              <span>
                КЭП комплексная – выдается обслуживающим бухгалтерам, которые
                ведут бухгалтерский учет в 2-х и более компаниях. При этом, ЭП
                руководителя выдается на руководителя обслуживающей компании, а
                обслуживающему бухгалтеру выдается 1 комплексное ЭП на все
                компании, в которых он ведет бухгалтерский учет.
              </span>
              <span>
                КЭП комплексная, безлимитная – выдается обслуживающим
                бухгалтерам, которые ведут бухгалтерский учет в 2-х и более
                компаниях. Отличие данного вида ЭП от обычного комплексного в
                том, что количество компания, «привязанных» к ней может быть
                неограниченным.
              </span>
            </div>
            <div className="productsInfo-block">
              <h4>Как получить КЭП?</h4>
              <span>
                На сегодняшний день, КЭП выдается при регистрации в офисе нашей
                компании или после онлайн регистрации (дистанционно).
                Обязательным условием до получения КЭП, является ознакомление с
                Регламентом Удостоверяющего центра, который размещен в разделе
                Документы.
              </span>
            </div>
            <div className="productsInfo-block">
              <h4>Где хранить КЭП?</h4>
              <span>
                В целях обеспечения безопасности данных клиентов компании, КЭП
                может храниться только на защищенных средствах: физический
                защищенный носитель «Jacarta KG-ЭП».
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
