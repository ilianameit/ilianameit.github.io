import React from "react";

function showBlock(block){
    document.querySelector(block).classList.add('active');
}

function Main() {
    return (
        <main className="container main">
            <h1 className="hidden">NFT</h1>
            <h2 className="main__header">Не упусти возможность войти в <strong className="key-word">прибыльную нишу</strong></h2>
            <img className='main__man' src="./img/man.png" alt=""/> 
            <p>Получи все нужные навыки для заработка <br/>на&nbsp;NFT всего за&nbsp;28&nbsp;дней!</p>
            <button className='main__button' type="button" onClick={() => { showBlock('#modal_order'); } }>Начать зарабатывать на NFT</button>
        </main>
      );
}
export default Main;