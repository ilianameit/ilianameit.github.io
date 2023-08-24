import React from "react";

const smile = {
    star: 'Откроешь свой первый криптокошелек и научишься с ним работать',
    wink: 'Поймёшь, как выбирать правильные дропы',
    dollar: 'Построишь план по быстрому приумножению заработанных средств',
    cool: 'Узнаешь кто такие холдеры и флипперы'
}

const CardItem = ({src, text}) => {
    return (
        <li key={src}>
            <div className ={`smile-img_block smile-${src}`}><img className='smile-img' src={`./img/smile-${src}.png`} alt={`smile-${src}`}/></div>
            <p>{text}</p>
        </li>
    )
};

function CardsBlock() {
    return (
        <section>
            <section className="container container__cards">
            <h2 className="cards__header">Что даст тебе обучение?</h2>
            <ul className="cards__list">
                {Object.entries(smile).map(([key, value]) => 
                    <CardItem src={key} text={value}/>
                )}
            </ul>
            </section>
        </section>
      );
}
export default CardsBlock;