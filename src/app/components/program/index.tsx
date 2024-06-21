import Image from "next/image";
import { Check } from "phosphor-react";
import { title } from "process";
import React from "react";
import ButtonLink from "../buttonLink";
import { i18n } from "@/translate/i18n";

function Program() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-12 w-full max-w-[1216px] flex-col-reverse xl:flex-row">
        <div className="flex flex-col xl:gap-28 gap-6">
          <h2 className="dark:text-white xl:text-5xl text-3xl font-extrabold leading-[130%]">
            {i18n.t("program.title")}
          </h2>

          <ul className="flex flex-wrap xl:w-[630px] xl:gap-10 gap-4">
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="dark:text-white xl:text-3xl text-2xl font-bold leading-[120%]">
                  {i18n.t("program.section_1.title")}
                </h3>
                <p className="dark:text-slate-400 text-[#646464] xl:text-base text-sm leading-[130%]">
                  {i18n.t("program.section_1.description")}
                </p>
              </div>
            </li>
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="dark:text-white xl:text-3xl text-2xl font-bold leading-[120%]">
                  {i18n.t("program.section_2.title")}
                </h3>
                <p className="dark:text-slate-400 text-[#646464] xl:text-base text-sm leading-[130%]">
                  {i18n.t("program.section_2.description")}
                </p>
              </div>
            </li>
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="dark:text-white xl:text-3xl text-2xl font-bold leading-[120%]">
                  {i18n.t("program.section_3.title")}
                </h3>
                <p className="dark:text-slate-400 text-[#646464] xl:text-base text-sm leading-[130%]">
                  {i18n.t("program.section_3.description")}
                </p>
              </div>
            </li>
          </ul>
          <ButtonLink
            href="https://mentorship.aosc.social/"
            text={i18n.t("program.button")}
            target="_blank"
            className="w-fit bg-btn dark:text-btc"
          />
        </div>
        <div className="w-full xl:w-[448px]  bg-red-500 h-[624px] rounded-xl xl:flex items-end justify-center relative hidden">
          <div className="bg-white bounce p-4 rounded-xl flex gap-2 absolute bottom-8 left-[50%] select-none pointer-events-none ">
            <div className="bg-[#449DEF] flex items-center justify-center rounded-full w-6 h-6">
              <Check size={16} weight="bold" color="#fff" />
            </div>
            <p className="text-black text-base leading-[120%] font-semibold max-w-xs">
              {i18n.t("program.bloom")}
            </p>
          </div>

          <div className="bg-white p-8 rounded-[50%] absolute left-[-50px] top-[130px] shadow-left">
            {/* 
            an extra container parallel to the logo
            container in circular motion to provide left
            side shadow 
            */}
          </div>

          <div className="bg-white p-8 rounded-[50%] absolute left-[-50px] top-[130px] spinner">
            <Image
              src={"/logo-aosc.svg"}
              width={318}
              height={603}
              alt="aosc logo"
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
