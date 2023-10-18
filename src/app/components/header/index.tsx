import React, { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "./data";
import LanguageSelector from "./LanguageSelector";

function Header({ ...rest }) {

  return (
    <header
      className="w-full flex-col items-center justify-center px-14 hidden lg:flex fixed top-0 bg-white z-50 shadow-lg"
      {...rest}
    >
      <div className="w-full py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />

        <div className="flex flex-col-1 items-center justify-center">
          <LanguageSelector />
          <div className="ml-6">
            <ButtonLink
              href={"https://opencollective.com/aosc"}
              target="_blank"
              text={"Faça uma doação"}
            />
          </div>
        </div>


      </div>
      <hr />
    </header>
  );
}

export default Header;
