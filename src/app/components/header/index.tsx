import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "./data";
import ThemeSwitcher from "../theme";
import { i18n } from "@/translate/i18n";
import { CaretDown } from "phosphor-react";
import { languages } from "./data";

const I18N_KEY = "i18nextLng";

function Header({ ...rest }) {
  const [language, setLanguage] = useState<any>("pt-BR");
  const [showLanguage, setShowLanguage] =
    useState<boolean>(false);

  const handleChangeLanguage = (value: any) => {
    localStorage.setItem(I18N_KEY, value);
    window.location.reload();
  };

  const getLanguage = () => {
    console.log("Olhe as linguagens", languages);
    return languages.map((lang) => {
      return (
        <li key={lang.id}>
          <button
            onClick={() => handleChangeLanguage(lang.code)}
          >
            {lang.language}
          </button>
        </li>
      );
    });
  };

  const renderLanguage = () => {
    switch (language) {
      case "pt-BR":
        return "Português";
      case "en-US":
        return "English";
      case "fr-FR":
        return "Frances";
      case "es-ES":
        return "Espanhol";
    }
  };

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage
    ) {
      setLanguage(localStorage.getItem(I18N_KEY));
    }
  }, []);

  return (
    <header
      className="dark:bg-bgd  w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 bg-white z-50"
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <div
          className="box-select-language dark:text-white dark:bg-bgd"
          onClick={() => setShowLanguage(true)}
        >
          <p>
            {renderLanguage()} <CaretDown size={20} />
          </p>
          <ul
            className={
              showLanguage
                ? "show-language list-language dark:text-white dark:bg-bgd"
                : "list-language hide-language dark:text-white dark:bg-bgd"
            }
            onMouseLeave={() => setShowLanguage(false)}
          >
            {getLanguage()}
          </ul>
        </div>
        <ThemeSwitcher />
        <ButtonLink
          className="dark:bg-btn dark:text-btc"
          href={"https://opencollective.com/aosc"}
          target="_blank"
          text={i18n.t("nav.button")}
        />
      </div>
      <hr />
    </header>
  );
}

export default Header;
