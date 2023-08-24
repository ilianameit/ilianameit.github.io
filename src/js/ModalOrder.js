import React from "react";
import ModalWindow from "./ModalWindow";
//children
function ModalOrder() {
    return(
        <ModalWindow id='modal_order'>
            <h3 className="modal__header">Начни прямо сейчас!</h3>
            <p className="modal__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
            <form className='form' action="">
                <input type="email" name="email"  placeholder="Ваш e-mail" required/>
                <button className='button' type="submit">Оплатить</button>
            </form>
        </ModalWindow>
    )
}

export default ModalOrder;