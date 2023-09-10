import React from "react";
import { twMerge } from "tailwind-merge";

function Tape({ className, ...rest }: any) {
  return (
    <div
      className={twMerge(
        "p-4 w-full pointer-events-none select-none",
        className,
      )}
      {...rest}
    >
      <span className="text-2xl font-bold">
        <ul className="flex gap-8">
          <li>Github</li>
          <li>.</li>
          <li>Código Aberto</li>
          <li>.</li>
          <li>Software Livre</li>
          <li>.</li>
          <li>Github</li>
          <li>.</li>
          <li>Github</li>
          <li>.</li>
          <li>Github</li>
          <li>.</li>
          <li>Github</li>
        </ul>
      </span>
    </div>
  );
}

export default Tape;
