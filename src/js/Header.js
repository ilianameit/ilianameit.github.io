import React, { useState } from "react";
import ModalWindow from "./ModalWindow";


const Logo = () => {
    return (
        <img className='header__logo' src={"./img/logo.png"} alt="logo"/>
    );
};
const NavItem = ({url, text}) => {
    return(
        <li key={url}><a href={url}>{text}</a></li>
        )
};
const Menu = () => {
    return(
        <><nav className="menu">
            <ul>
                <NavItem url='#' text='Главная' />
                <NavItem url='#' text='Что даст обучение' />
            </ul>
        </nav>
        <button className='header_button' type="button" >Личный кабинет</button></>
    )
};

const MobileMenu = () => {
    return (
        <ModalWindow id='modal_menu' classes='active'>
            <Logo />
            <Menu />
        </ModalWindow>
    )
};


function Header() {

    const [isClicked, setClick] = useState(false);
    return (
            <header className="container header">
                <Logo />
                <Menu />
                {isClicked ? <MobileMenu/> : ''}
                <div className={`menu-button ${isClicked ? 'active' : ''}`} id='menu-button' onClick={() => setClick((!isClicked))}>
                    <span></span>
                    <span></span>
                </div>
            </header>
      );
}
export default Header;