import React from "react";
import "../assets/css/header.css";
import Logo from "../assets/img/logo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faAddressCard} from "@fortawesome/free-solid-svg-icons"


function Header() {
  return (
    <div>
      <div className="container-header">
        <header>
          <div className="imagen-pato">
            <img src={Logo} alt="" className="logo-pato"/>
          </div>
          <div className="navbar-derecho">
            <div className="barras-navMenu">
            <p className="hijo-barra-menu">Julieta <FontAwesomeIcon icon={faAddressCard} /> </p>
                <p className="hijo-barra-menu">Salir <FontAwesomeIcon icon={faArrowRightFromBracket} /></p>
              </div>
            </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
