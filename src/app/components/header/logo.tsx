import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="max-w-[200px] flex gap-2 items-center">
      <Image
        src={"/logo-aosc.svg"}
        alt="Logo AOSC"
        width={32}
        height={32}
      />
      <h3 className="text-sm font-semibold leading-4 text-black">
        Angola OpenSource Community
      </h3>
    </div>
  );
}

export default Logo;
