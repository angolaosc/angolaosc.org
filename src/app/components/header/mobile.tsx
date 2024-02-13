import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { Link } from "react-scroll";
import NextLink from "next/link";
import ThemeSwitcher from "../theme";
import { CaretDown } from "phosphor-react";
import { languages } from "./data";

const I18N_KEY = "i18nextLng";

type MenuItem = {
  id: number;
  text: string;
  url: string;
};

type MenuProps = {
  items: MenuItem[];
};

function MobileHeader({ items }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [language, setLanguage] = useState<any>("pt-BR");
  const [showLanguage, setShowLanguage] =
    useState<boolean>(false);

  const handleChangeLanguage = (value: any) => {
    localStorage.setItem(I18N_KEY, value);
    window.location.reload();
  };

  const getLanguage = () => {
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
        return "PT";
      case "en-US":
        return "En";
      case "fr-FR":
        return "Fr";
      case "es-ES":
        return "Es";
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
    <div className="dark:bg-bgd bg-white text-white w-full fixed z-50 lg:hidden top-0">
      <div className="p-6 flex justify-between items-center shadow-md">
        <Logo />
        <div
          className="box-select-language dark:text-white dark:bg-bgd"
          onClick={() => setShowLanguage(true)}
        >
          <p className="text-gray-800 dark:text-white">
            {renderLanguage()} <CaretDown size={20} />
          </p>
          <ul
            className={
              showLanguage
                ? "show-language list-language text-gray-800 dark:text-white dark:bg-bgd"
                : "list-language hide-language text-gray-800 dark:text-white dark:bg-bgd"
            }
            onMouseLeave={() => setShowLanguage(false)}
          >
            {getLanguage()}
          </ul>
        </div>
        <ThemeSwitcher />
        <button
          title="Click"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="#f20e0e"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <header className="dark:bg-bgd bg-red-600 absolute left-0 right-0 h-screen p-6">
          <ul className="flex items-start gap-3 flex-col">
            {items.map(({ id, text, url }) => (
              <li
                className="text-white text-lg font-bold"
                key={id}
              >
                {url.indexOf("http") !== -1 ? (
                  <NextLink
                    onClick={() => setIsOpen(false)}
                    href={url}
                    target="_blank"
                    className="cursor-pointer hover:text-black duration-300 ease-in text-white"
                  >
                    {text}
                  </NextLink>
                ) : (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer hover:text-black duration-300 ease-in text-white"
                    smooth={true}
                    duration={1400}
                    to={url}
                  >
                    {text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </header>
      )}
    </div>
  );
}

export default MobileHeader;
