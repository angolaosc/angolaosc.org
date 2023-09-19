import React, { useState } from "react";
import Logo from "./logo";
import Link from "next/link";

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
    <div className="bg-white text-white w-full fixed z-50 lg:hidden top-0">
      <div className="p-6 flex justify-between items-center shadow-md">
        <Logo />
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
        <header className="bg-red-600 absolute left-0 right-0 h-screen p-6">
          <ul className="flex items-start gap-3 flex-col">
            {items.map(({ id, text, url }) => (
              <li
                className="text-white text-lg font-bold"
                key={id}
              >
                {url.indexOf("http") !== -1 ? (
                  <Link href={url} target="_blank">
                    {text}
                  </Link>
                ) : (
                  <Link href={url}>{text}</Link>
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
