import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface iButtonLink {
  href: string;
  text: string;
  className?: string;
}

function ButtonLink({
  href,
  text,
  className,
}: iButtonLink) {
  return (
    <Link
      className={twMerge(
        "bg-red-500 text-white text-base hover:bg-red-400 transition-all ease-in flex px-4 font-semibold py-3 rounded-md",
        className,
      )}
      href={href}
    >
      {text}
    </Link>
  );
}

export default ButtonLink;
