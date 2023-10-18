"use client";
import Header from "./components/header";
import Headline from "./components/headline";
import Tape from "./components/tape";
import Purpose from "./components/section-itens";
import Motivations from "./components/motivations";
import { Element } from "react-scroll";
import { PURPOSES } from "@/utils/data/purposes";
import OurTeam from "./components/our-team";
import Program from "./components/program";
import MobileHeader from "./components/header/mobile";
import { MENU } from "./components/header/data";
import Footer from "./components/footer";
import React, { useState } from 'react';

export default function Home() {

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
    <main
      data-scroll-container
      className="flex flex-col items-center"
    >

      <div>
        {isVisible && (
          <div style={divStyle} className="gap-2 items-center justify-center pointer-events-none select-none fixed bg-violet-600 right-0 left-0 p-6 py-2 lg:flex">
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

       {/* <div>
        {isVisible && (
          <div  style={divStyle} className="gap-2 items-center justify-center pointer-events-none select-none z-50 fixed top-0 bg-violet-600 right-0 left-0 p-6 py-2 lg:flex">
            <i>🇦🇴</i>
            <span className="text-white">
              {" "}
              {language[0][0]}
            </span>
            <button onClick={toggleVisibility} className="close-button pointer-events-auto  ">
            X
          </button>
          </div>
        )}
      </div> */}

      <Header data-scroll />
      <MobileHeader items={MENU} />
      <Element name="top">
        <Headline data-scroll />
      </Element>
      {/* <Tape className="bg-red-400 text-black " /> */}
      {/* <Tape
        direction="left"
        className="bg-black text-white"
      /> */}

      <Element name="purposes">
        <Purpose
          data={PURPOSES}
          title="Nossos principais objetivos"
          className="py-12"
        />
      </Element>
      <Element name="motivations">
        <Motivations />
      </Element>
      <Element name="program">
        <Program />
      </Element>
      <Element name="our-team">
        <OurTeam />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </main>
  );
}
