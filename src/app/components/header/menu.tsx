import { Link } from "react-scroll";
import NextLink from "next/link";
import React, { useState } from "react";
import InfoPromo from "./infoPromo";

type MenuItem = {
  id: number;
  text: string;
  url: string;
};

type MenuProps = {
  items: MenuItem[];
};

function Menu({ items }: MenuProps) {

  // var language = [
  //   ["Participe agora do primeiro evento presencial da Angola Open Source Commnunity em Luanda.", "Join now the first in-person event of the Angola Open Source Community in Luanda.", "Rejoignez dès maintenant le premier événement en personne de la Communauté Open Source d'Angola à Luanda."],
  // ]

  // const [isVisible, setIsVisible] = useState(true);
  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  // const divStyle = {
  //   display: isVisible ? 'block' : 'none',
  //   height: isVisible ? 'auto' : 0,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',

  // };

  return (
    <div>
      {/* <div>
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
      </div> */}
      
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-3">
          {items.map(({ id, text, url }) => (
            <li className="text-[16px]" key={id}>
              {url.indexOf("http") !== -1 ? (
                <NextLink
                  href={url}
                  target="_blank"
                  className="text-gray-500 cursor-pointer hover:text-red-600 duration-300 ease-in hover:no-underline"
                >
                  {text}
                </NextLink>
              ) : (
                <Link
                  className="text-gray-500 cursor-pointer hover:text-red-600 duration-300 ease-in hover:no-underline"
                  smooth={true}
                  duration={1400}
                  to={url}
                  activeClass="active"
                  spy={true}
                >
                  {text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
