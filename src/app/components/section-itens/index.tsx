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
      id="purposes"
      className={twMerge(
        "flex flex-col xl:items-center items-start md:items-center gap-12 w-full max-w-[1216px] p-6 pt-20",
        className,
      )}
      {...rest}
    >
      <h2 className="dark:text-white xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center">
        {title}
      </h2>

      <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:grid-cols-2">
        {data.map(({ id, body, title, Icon }) => (
          <div
            key={id}
            className="flex flex-col gap-4  max-w-md"
          >
            {Icon}
            <h3 className="dark:text-white text-black font-bold leading-[120%] xl:text-3xl text-2xl max-w-sm">
              {title}
            </h3>
            <p className="dark:text-slate-400 text-[#646464] xl:text-lg text-sm leading-[130%]">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionItens;
