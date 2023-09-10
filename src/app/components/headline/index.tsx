import React from "react";
import { motion } from "framer-motion";
import ButtonLink from "../buttonLink";
import Link from "next/link";
import Image from "next/image";

function Headline({ ...rest }) {
  return (
    <section
      className="flex items-center w-full max-w-[1216px] py-10 justify-between"
      {...rest}
    >
      <div className="max-w-[696px] flex flex-col gap-5">
        <motion.h1
          className="text-5xl font-extrabold leading-[130%] my-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Crie um impacto <br /> significativo na inovação
          tecnológica do país.
        </motion.h1>
        <p
          // data-scroll
          // data-scroll-delay="0.2"
          // data-scroll-speed="6"
          // data-scroll-call="dynamicColor"
          // data-scroll-repeat
          className="text-xl text-[#646464] leading-[150%] font-medium"
        >
          O nosso objetivo é permitir que os programadores
          angolanos contribuam ativamente para projetos de
          código aberto internacionalmente.
        </p>
        <div className="flex items-center gap-4">
          <ButtonLink
            href={"/"}
            text={"Juntar-me a comunidade"}
          />
          <Link href={"/"}>Saiba Mais</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3 overflow-hidden p-6 px-0">
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-11 w-11 rounded-full cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/sparkles.png"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <span className="text-base font-semibold">
            Junte-se a mais de 200 membros
          </span>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg w-[600px] flex items-center justify-center relative">
        <motion.span
          className="bg-red-300 absolute top-[90px] left-24 text-black font-bold text-base rounded-full px-4 py-3 cursor-pointer"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Open Source
        </motion.span>
        <motion.span
          className="bg-violet-300 absolute top-3/4 left-24 text-black font-bold text-base rounded-full px-7 py-3 cursor-pointer z-30"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Github
        </motion.span>
        <motion.span
          className="bg-yellow-300 absolute top-[80%] right-48 text-black font-bold text-base rounded-full px-4 py-3 cursor-pointer z-30"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Git
        </motion.span>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={236.67}
          height={580.54}
          className="transition-all  duration-[2s] bounce z-10"
        />
      </div>
    </section>
  );
}

export default Headline;
