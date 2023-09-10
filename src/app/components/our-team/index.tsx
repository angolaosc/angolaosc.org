import { TEAM } from "@/utils/data/team";
import Image from "next/image";
import React from "react";

function OurTeam() {
  return (
    <section className="py-24 pt-64">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1216px]">
        <h2 className="text-5xl font-extrabold leading-[130%]">
          Conheça o nosso team incrível
        </h2>
        <div className="flex gap-8 flex-wrap max-w-[904px] justify-start items-start">
          {TEAM.map(
            ({
              id,
              name,
              description,
              ocupation,
              avatar,
            }) => (
              <div key={id} className="max-w-[280px]">
                <Image
                  src={avatar}
                  alt={name}
                  width={384}
                  height={318}
                  className="h-64 object-fill aspect-video rounded-xl"
                />
                <div className="py-8 pl-7">
                  <p className="text-[#262626] text-base font-medium leading-[130%]">
                    {description}
                  </p>
                  <div className="flex gap-1 flex-col ">
                    <h3 className="font-bold text-2xl leading-[130%]">
                      {name}
                    </h3>
                    <span className="text-base text-red-500 leading-[130%] font-bold uppercase">
                      {ocupation}
                    </span>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
