import React from "react";
import { CSSTransition } from "react-transition-group";

const NavBar = ({ tittleNav }) => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <nav className="nav1">
      <a href="/" className="title">
        {tittleNav}
      </a>
      <p className="myName">By: Jaaziel Polanco</p>
    </nav>
    </CSSTransition>
  );
};

export default NavBar;
