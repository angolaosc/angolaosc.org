import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import ButtonLink from "../buttonLink";
import { MOTIVATIONS } from "./data";
import { useIntersectionObserver } from "./useIntersectionObserver";

function Motivations({ className, ...rest }: any) {
  const [typedText, setTypedText] = useState("");
  const textToType =
    "Somos guiados por um conjunto de motivações que nos ajudam a efetivamente alcançar a nossa missão.";
  const typingSpeed = 50;

  const [targetRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (isVisible) {
      let currentText = "";
      let currentIndex = 0;

      const typeText = () => {
        if (currentIndex < textToType.length) {
          currentText += textToType[currentIndex];
          setTypedText(currentText);
          currentIndex++;
          setTimeout(typeText, typingSpeed);
        }
      };

      typeText();
    }
  }, [isVisible]);

  return (
    <section
      className={twMerge(
        "flex flex-col items-center gap-12 px-6 w-full xl:py-[200px]  bg-[url('/black-logo.svg/')] bg-[#171717] bg-no-repeat bg-left-bottom",
        className
      )}
      {...rest}
    >
      <div
        ref = {targetRef}
        className="w-full max-w-[1216px] py-44 flex flex-col xl:flex-row gap-7"
      >
        <div className="max-w-[490px] flex flex-col gap-3">
          <h2 className="md:text-5xl text-3xl font-bold leading-[130%] text-white">
            Nossas Motivações
          </h2>
          <p className="md:text-xl text-sm font-medium leading-[150%] text-white">
            {typedText}
          </p>
          <ButtonLink
            href={"https://linktr.ee/angolaosc"}
            text={"Juntar-me à comunidade"}
            target="_blank"
            className="md:max-w-fit w-full text-center justify-center md:justify-start"
          />
        </div>
        <div className="max-w-[696px]">
          <ul className="flex flex-col gap-10">
            {MOTIVATIONS.map(({ id, title, body }) => (
              <li key={id}>
                <div className="bg-[#262626] p-8 flex flex-col gap-2 rounded-2xl">
                  <h2 className="text-2xl text-white font-bold leading-[150%]">
                    {title}
                  </h2>
                  <p className="text-base text-[#a3a3a3] font-medium leading-[150%]">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Motivations;
