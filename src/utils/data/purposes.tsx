import { Brain, Coffee, Confetti } from "phosphor-react";
import { i18n } from "@/translate/i18n";

export const PURPOSES = [
  {
    id: 1,
    Icon: (
      <Brain weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: i18n.t('goal.section_1.title'),
    body: i18n.t('goal.section_1.description'),
  },
  {
    id: 2,
    Icon: (
      <Coffee weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: i18n.t('goal.section_2.title'),
    body: i18n.t('goal.section_2.description'),
  },
  {
    id: 3,
    Icon: (
      <Confetti
        weight="duotone"
        size={40}
        color="#FE5C5C"
      />
    ),
    title: i18n.t('goal.section_3.title'),
    body: i18n.t('goal.section_3.description'),
  },
];
