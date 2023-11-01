import React from "react";
import { twMerge } from "tailwind-merge";
import { i18n } from "@/translate/i18n";

interface TapeProps {
  className?: string;
  direction?: "left" | "right";
}

function Tape({
  className,
  direction = "right",
  ...rest
}: TapeProps) {
  const animationClass =
    direction === "right"
      ? "animate-slide-right"
      : "animate-slide-left";

  return (
    <div
      className={twMerge(
        "p-6 w-full h-full flex items-center justify-center overflow-hidden relative",
        className,
      )}
      {...rest}
    >
      <div
        className={`absolute flex space-x-4 ${animationClass} whitespace-nowrap items-center`}
      >
        {/* Conteúdo duplicado para transição suave */}
        {[...Array(2)].map((_, idx) => (
          <span key={idx} className="text-2xl font-bold">
            <ul className="flex gap-4 md:gap-8">
              <li>Open Source</li>
              <li>.</li>
              <li>{i18n.t('tape.text_2')}</li>
              <li>.</li>
              <li>{i18n.t('tape.text_1')}</li>
              <li>.</li>
              <li>{i18n.t('tape.text_3')}</li>
              <li>.</li>
              <li>Open Source</li>
              <li>.</li>
              <li>{i18n.t('tape.text_2')}</li>
              <li>.</li>
              <li>{i18n.t('tape.text_1')}</li>
              <li>.</li>
              <li>{i18n.t('tape.text_3')}</li>
            </ul>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tape;
