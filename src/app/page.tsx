"use client";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Header from "./components/header";
import Headline from "./components/headline";
import { useRef } from "react";
import Tape from "./components/tape";
import Purpose from "./components/section-itens";
import HowItWorks from "./components/section-itens";
import Motivations from "./components/motivations";
import Benefits from "./components/benefits";
import { PURPOSES } from "@/utils/data/purposes";
import { HOW_IT_WORKS } from "@/utils/data/how-it-works";
import OurTeam from "./components/our-team";
import Program from "./components/program";

// const locomotive = {
//   options: {
//     smooth: true,
//   },
// };

export default function Home() {
  // const containerRef = useRef(null);
  return (
    // <LocomotiveScrollProvider
    //   options={locomotive.options}
    //   containerRef={containerRef}
    // >
    <main
      data-scroll-container
      // ref={containerRef}
      className="flex flex-col items-center"
    >
      <Header data-scroll />
      <Headline data-scroll />
      <Tape className="bg-red-400 text-black " />
      {/* <br /> */}
      <Tape
        direction="left"
        className="bg-black text-white"
      />
      <Purpose
        data={PURPOSES}
        title="Nossos principais objetivos"
        className="py-52"
      />
      <Motivations />
      {/* <Program /> */}
      {/* <Benefits /> */}
      {/* <HowItWorks
        title="Como isto funciona?"
        data={HOW_IT_WORKS}
      /> */}
      {/* <OurTeam /> */}
    </main>
    // </LocomotiveScrollProvider>
  );
}
