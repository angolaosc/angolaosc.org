import React from "react";
import { twMerge } from "tailwind-merge";
import { BENEFITS } from "./data";
import { Check } from "phosphor-react";

function Benefits({ className, ...rest }: any) {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-12 p-6 w-full max-w-[1216px] py-52 pt-0 bg-mysection",
        className,
      )}
      {...rest}
    >
      <h2 className="xl:text-5xl text-3xl font-extrabold leading-[130%]">
        Benefícios do Programa
      </h2>

      <div className="flex justify-between gap-5 flex-col md:flex-row">
        {BENEFITS.map(({ title, id }) => (
          <div key={id} className="flex gap-2 flex-col">
            <div className="bg-[#449DEF] flex items-center justify-center rounded-[50%] w-[24px] h-[24px]">
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
