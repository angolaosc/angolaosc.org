import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import ButtonLink from "../buttonLink";
import { MENU } from "./data";
import { GoMoon } from "react-icons/go";
import { useTheme } from "next-themes";
import { Sun } from "phosphor-react";

function Header({ ...rest }) {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={theme === "dark" ? "nav-dark-mode w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10  z-50" : "w-full flex-col items-center justify-center px-6 hidden lg:flex fixed top-10 bg-white z-50"}
      {...rest}
    >
      <div className="w-full max-w-[1216px] py-4 flex items-center justify-between">
        <Logo />
        <Menu items={MENU} />
        <ButtonLink
          className={theme === "dark" ? "btn-bg-dark-mode" : ""}
          href={"https://opencollective.com/aosc"}
          target="_blank"
          text={"Faça uma doação"}
        />

        <button
          style={{ width: 100, height: 25 }}
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          {theme == "dark" ?  <Sun size={24} color={theme === "dark" ? "#ffffff" : "#000000"}/> : <GoMoon size={24} color={theme === "dark" ?? "#ffffff"}/> }
        </button>
      </div>
      <hr />
    </header>
  );
}

export default Header;
