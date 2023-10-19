import { Link } from "react-scroll";
import NextLink from "next/link";
import React, { useState } from "react";


function InfoPromo() {

  var language = [
    ["Participe agora do primeiro evento presencial da Angola Open Source Commnunity em Luanda.", "Join now the first in-person event of the Angola Open Source Community in Luanda.", "Rejoignez dès maintenant le premier événement en personne de la Communauté Open Source d'Angola à Luanda."],
  ]
  
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const divStyle = {
    display: isVisible ? 'block' : 'none',
    height: isVisible ? 'auto' : 0,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  };
  
  return (
  
      <div>
        {isVisible && (
          <div style={divStyle} className="gap-2 items-center justify-center pointer-events-none select-none fixed top-0 mb-4 bg-violet-600 right-0 left-0 p-6 py-2 lg:flex">
            <i>🇦🇴</i>
            <span className="text-white">
              {" "}
              {language[0][0]} 
            </span>
            <button onClick={toggleVisibility} className="close-button pointer-events-auto ml-3">
              X
            </button>
          </div>
        )}
      </div>
  );
}

export default InfoPromo;
