import React from "react";
import { twMerge } from "tailwind-merge";
import { BENEFITS } from "./data";
import { Check } from "phosphor-react";

function Benefits({ className, ...rest }: any) {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-12 w-full max-w-[1216px] py-52 pt-0 bg-mysection",
        className,
      )}
      {...rest}
    >
      <h2 className="text-5xl font-extrabold leading-[130%]">
        Benefícios do Programa
      </h2>

      <div className="flex justify-between gap-5">
        {BENEFITS.map(({ title, id }) => (
          <div key={id} className="flex gap-2">
            <div className="bg-[#449DEF] flex items-center justify-center rounded-full w-6 h-6">
              <Check size={16} weight="bold" color="#fff" />
            </div>
            <p className="text-black text-base leading-[120%] font-semibold max-w-xs">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
