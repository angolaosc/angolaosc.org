"use client";
import React, { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import LanguageSelector from "../LanguageSelector";

function Header({ ...rest }) {


  return (
    <header
      className="w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 bg-white z-50"
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={rest.header[0].menu} />

        <LanguageSelector lang={rest.header[1]} />

        <ButtonLink
          href={"https://opencollective.com/aosc"}
          target="_blank"
          text={rest.header[0].first}
        />
      </div>
      <hr />
    </header>
  );
}

export default Header;
