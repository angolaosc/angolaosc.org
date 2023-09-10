import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "@/utils/data/menu";

function Header({ ...rest }) {
  return (
    <header
      className="w-full flex flex-col items-center justify-center"
      {...rest}
    >
      <div
        data-scroll
        data-scroll-delay="0.2"
        data-scroll-speed="6"
        data-scroll-call="dynamicColor"
        data-scroll-repeat
        data-scroll-sticky
        className="flex py-[16px] gap-2 pointer-events-none select-none"
      >
        <i>🇦🇴</i>
        <span className="text-[#449DEF]">
          {" "}
          Participe agora do primeiro evento presencial da Angola Open Source
          Commnunity em Luanda.
        </span>
      </div>
      <div className="w-full max-w-[1216px] h-28 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <ButtonLink href={"/"} text={"Junte-se a nós"} />
      </div>
      <hr />
    </header>
  );
}

export default Header;
