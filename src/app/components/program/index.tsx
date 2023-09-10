import Image from "next/image";
import { Check } from "phosphor-react";
import { title } from "process";
import React from "react";

function Program() {
  return (
    <section className="py-44">
      <div className="flex items-center gap-12 w-full max-w-[1216px]">
        <div className="flex flex-col gap-28">
          <h2 className="text-5xl font-extrabold leading-[130%]">
            Programa de Mentoria
          </h2>
          <ul className="flex flex-wrap w-[630px] gap-10">
            <li>
              <div className="flex gap-4 w-64 flex-col">
                <h3 className="text-3xl font-bold leading-[120%]">
                  Workshops
                </h3>
                <p className="text-[#646464] text-base leading-[130%]">
                  Inclui uma semana de workshops online e
                  treinamentos introdutórios
                </p>
              </div>
            </li>
            <li>
              <div className="flex gap-4 w-64 flex-col">
                <h3 className="text-3xl font-bold leading-[120%]">
                  Workshops
                </h3>
                <p className="text-[#646464] text-base leading-[130%]">
                  Inclui uma semana de workshops online e
                  treinamentos introdutórios
                </p>
              </div>
            </li>
            <li>
              <div className="flex gap-4 w-64 flex-col">
                <h3 className="text-3xl font-bold leading-[120%]">
                  Workshops
                </h3>
                <p className="text-[#646464] text-base leading-[130%]">
                  Inclui uma semana de workshops online e
                  treinamentos introdutórios
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[400px] bg-red-500 h-[624px] rounded-xl flex items-end justify-center relative">
          <div className="bg-white bounce p-4 rounded-xl flex gap-2 absolute bottom-8 left-[50%] select-none pointer-events-none ">
            <div className="bg-[#449DEF] flex items-center justify-center rounded-full w-6 h-6">
              <Check size={16} weight="bold" color="#fff" />
            </div>
            <p className="text-black text-base leading-[120%] font-semibold max-w-xs">
              +40 mentorados
            </p>
          </div>
          <div className="bg-white p-8 rounded-[50%] absolute left-[-50px] top-[130px] spinner">
            <Image
              src={"/logo-aosc.svg"}
              width={318}
              height={603}
              alt="Jovem na foto"
              className="w-10 h-10"
            />
          </div>
          <Image
            src={"/jovem.png"}
            width={318}
            height={603}
            alt="Jovem na foto"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Program;
