import Link from "next/link";
import React from "react";

type MenuItem = {
  id: number;
  text: string;
  url: string;
};

type MenuProps = {
  items: MenuItem[];
};

function Menu({ items }: MenuProps) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-3">
        {items.map(({ id, text, url }) => (
          <li
            className="text-[#646464] text-[16px]"
            key={id}
          >
            <Link href={url}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
