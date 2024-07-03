import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import {
  faRocket,
  faHouse,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ drawerOpen, toggleDrawer }) => {

  return (
    <ul className={`nav ${drawerOpen ? "open" : ""}`}>
      <li onClick={toggleDrawer} >
        <a className="li__icono" href="#top" >
          <FontAwesomeIcon
            className="float"
            icon={faHouse}
            bounce
            style={{ color: "#260b01" }}
          />
          <FormattedMessage
            className="texto"
            id="menu.Home"
            defaultMessage="Inicio"
          />
        </a>
      </li>
      {/* about */}
      <li onClick={toggleDrawer} >
        <a className="li__icono" href="#about" >
          <FontAwesomeIcon
            icon={faUser}
            className="float"
            bounce
            style={{ color: "#260b01" }}
          />
          <FormattedMessage
            className="texto"
            id="menu.About"
            defaultMessage="Sobre mí"
          />
        </a>
      </li >
      {/* skills */}
      <li onClick={toggleDrawer} >
        <a className="li__icono" href="#skills" >
          <FontAwesomeIcon
            icon={faBrain}
            className="float"
            bounce
            style={{ color: "#260b01" }}
          />
          <FormattedMessage
            className="texto"
            id="menu.Skills"
            defaultMessage="Habilidades"
          />
        </a>
      </li>
      {/* projects */}
      <li onClick={toggleDrawer} >
        <a className="li__icono" href="#projects" >
          <FontAwesomeIcon
            icon={faRocket}
            className="float"
            bounce
            style={{ color: "#260b01" }}
          />
          <FormattedMessage
            className="texto"
            id="menu.Projects"
            defaultMessage="Proyectos"
          />
        </a>
      </li>
    </ul>
  );
};

export default Nav;
