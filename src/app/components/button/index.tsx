import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface iButton {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<iButton> = ({
  text,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        "bg-red-500 text-white text-base hover:bg-red-400 hover:no-underline transition-all ease-in flex px-4 font-semibold py-3 rounded-md",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
