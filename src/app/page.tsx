"use client";
import Header from "./components/header";
import Headline from "./components/headline";
import Tape from "./components/tape";
import Purpose from "./components/section-itens";
import HowItWorks from "./components/section-itens";
import Motivations from "./components/motivations";
import Benefits from "./components/benefits";
import { PURPOSES } from "@/utils/data/purposes";
import { HOW_IT_WORKS } from "@/utils/data/how-it-works";
import OurTeam from "./components/our-team";
import Program from "./components/program";
import MobileHeader from "./components/header/mobile";
import { MENU } from "@/utils/data/menu";

export default function Home() {
  return (
    <main
      data-scroll-container
      className="flex flex-col items-center"
    >
      <div className="gap-2 items-center justify-center pointer-events-none select-none z-50 fixed top-0 bg-violet-600 right-0 left-0 p-6 py-2 hidden lg:flex">
        <i>🇦🇴</i>
        <span className="text-white">
          {" "}
          Participe agora do primeiro evento presencial da
          Angola Open Source Commnunity em Luanda.
        </span>
      </div>
      <Header data-scroll />
      <MobileHeader items={MENU} />

      <Headline data-scroll />
      <Tape className="bg-red-400 text-black " />
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
      <Program />
      <Benefits />
      <HowItWorks
        title="Como isto funciona?"
        data={HOW_IT_WORKS}
      />
      <OurTeam />
    </main>
  );
}
