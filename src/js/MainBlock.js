import React from "react";
import Header from './Header.js';
import Main from "./Main.js";


function MainBlock() {
    return (
    <section className="main-block">
        <Header/>
        <Main />
    </section>
    );
}
export default MainBlock;