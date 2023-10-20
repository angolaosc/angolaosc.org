"use client";
import Header from "./components/header";
import Headline from "./components/headline";
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

  return (
    <main
      data-scroll-container
      className="flex flex-col items-center"
    >
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
          className="py-24"
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
