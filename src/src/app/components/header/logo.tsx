import Image from "next/image";
import { Link } from "react-scroll";
import React from "react";

function Logo() {
  return (
    <Link
      smooth={true}
      duration={1400}
      to={"top"}
      className="max-w-[200px] flex gap-2 items-center hover:no-underline cursor-pointer"
    >
      <Image
        src={"/logo-aosc.svg"}
        alt="Logo AOSC"
        width={32}
        height={32}
      />
      <h3 className="text-sm font-semibold leading-4 text-black">
        Angola OpenSource Community
      </h3>
    </Link>
  );
}

export default Logo;
