import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "@/utils/data/menu";

function Header({ ...rest }) {
  return (
    <header
      className="w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 bg-white z-50"
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <ButtonLink href={"/"} text={"Junte-se a nós"} />
      </div>
      <hr />
    </header>
  );
}

export default Header;
