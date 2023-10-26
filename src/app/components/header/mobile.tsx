import React, { useState } from "react";
import Logo from "./logo";
import { Link } from "react-scroll";
import NextLink from "next/link";
import ThemeSwitcher from "../theme";

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

  return (
    <div className="dark:bg-bgd bg-white text-white w-full fixed z-50 lg:hidden top-0">
      <div className="p-6 flex justify-between items-center shadow-md">
        <Logo />
        <ThemeSwitcher/>
        <button onClick={() => setIsOpen(!isOpen)}>
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
