"use client";
import Header from "../../components/header";
import Headline from "../../components/headline";
import Tape from "../../components/tape";
import Purpose from "../../components/section-itens";
import Motivations from "../../components/motivations";
import { Element } from "react-scroll";
import OurTeam from "../../components/our-team";
import Program from "../../components/program";
import MobileHeader from "../../components/header/mobile";
import Footer from "../../components/footer";

export default function Home(page: any) {


  return (

    <main
      data-scroll-container
      className="flex flex-col items-center"
    >
      <div className="gap-2 items-center justify-center pointer-events-none select-none z-50 fixed top-0 bg-violet-600 right-0 left-0 p-6 py-2 hidden lg:flex">
        <i>🇦🇴</i>
        <span className="text-white">
          {" "}
          {page.page.first}
        </span>
      </div>

      <Header data-scroll header={page.header} />
      <MobileHeader items={page.header[0].menu} />
      <Element name="top">
        <Headline data-scroll headline={page.headline} />
      </Element>
      <Tape className="bg-red-400 text-black " />
      <Tape
        direction="left"
        className="bg-black text-white"
      />

      <Element name="purposes">
        <Purpose
          data={page.purpose.data}
          title={page.page.second}
          className="py-52"
        />
      </Element>
      <Element name="motivations">
        <Motivations motivations={page.motivations} />
      </Element>
      <Element name="program">
        <Program program={page.program} />
      </Element>
      <Element name="our-team">
        <OurTeam ourTeam={page.ourTeam} />
      </Element>
      <Element name="footer">
        <Footer footer={page.footer} />
      </Element>

    </main>
  );
}
