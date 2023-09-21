import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface iButtonLink {
  href: string;
  text: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const ButtonLink: React.FC<iButtonLink> = ({
  href,
  text,
  className,
  target,
}) => {
  return (
    <Link
      className={twMerge(
        "bg-red-500 text-white text-base hover:bg-red-400 hover:no-underline transition-all ease-in flex px-4 font-semibold py-3 rounded-md",
        className,
      )}
      href={href}
      target={target}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
