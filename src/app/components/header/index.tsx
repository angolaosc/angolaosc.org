import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import ButtonDarkTheme from "../buttonDarkTheme";
import { MENU } from "./data";
import LanguageSelector from "../languageSelector";
import { useTranslation } from "react-i18next";

function Header({ ...rest }) {
  const { t } = useTranslation()
  return (
    <header
      className="w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 z-50"
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <ButtonDarkTheme />
        <LanguageSelector />
        <ButtonLink
          href={"https://opencollective.com/aosc"}
          target="_blank"
          text={t("Faça uma doação")}
        />
      </div>
      <hr />
    </header>
  );
}

export default Header;
