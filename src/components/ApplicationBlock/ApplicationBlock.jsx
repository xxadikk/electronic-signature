import React from "react";
import "../ApplicationBlock/ApplicationBlock.css";
import applicationImg from "../assets/applicationImg.svg";

const ApplicationBlock = () => {
  return (
    <div className='applicationBlock'>
      <div className='container'>
        <div className='applicationBlock__body'>
          <div className='application-form'>
            <h4>Оставьте заявку и мы расскажем подробно!</h4>
            <div className='application-form__input'>
              <input type='text' placeholder='Имя' />
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Номер телефона' />
            </div>
            <button className='btn'>Отправить</button>
          </div>
          <div className='application-img'>
            <img src={applicationImg} alt='application-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationBlock;
