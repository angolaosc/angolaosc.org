import { title } from "process";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iPurposes {
  id: number;
  Icon?: ReactNode;
  title: string;
  body: string;
}

interface iSectionItens {
  className?: string;
  title: string;
  data: iPurposes[];
}

function SectionItens({
  className,
  data,
  title,
  ...rest
}: iSectionItens) {
  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-12 w-full max-w-[1216px] ",
        className,
      )}
      {...rest}
    >
      <h2 className="text-5xl font-extrabold leading-[130%]">
        {title}
      </h2>

      <div className="flex justify-between">
        {data.map(({ id, body, title, Icon }) => (
          <div key={id} className="flex flex-col gap-4">
            {Icon}
            <h3 className="text-black font-bold leading-[120%] text-3xl max-w-sm">
              {title}
            </h3>
            <p className="text-[#646464] text-lg leading-[130%]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionItens;
