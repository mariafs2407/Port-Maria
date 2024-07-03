import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Lng = ({ idiomaActual, toggleIdioma }) => {
  return (
    <div className="idioma">
      <button className="idioma_icn" onClick={toggleIdioma}>
        <FontAwesomeIcon
          icon={idiomaActual === "es-SP" ? faToggleOff : faToggleOn}
          size="2xl"
          style={{ color: "#260b01" }}
        />
      </button>
    </div>
  );
};

export default Lng;
