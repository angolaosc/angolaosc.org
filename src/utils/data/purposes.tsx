import { Brain, Coffee, Confetti } from "phosphor-react";

export const PURPOSES = [
  {
    id: 1,
    Icon: (
      <Brain weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: "Fomentar a cultura do software livre.",
    body: "Promover a conscientização sobre os benefícios do software de código aberto e incentivar seu uso em Angola.",
  },
  {
    id: 2,
    Icon: (
      <Coffee weight="duotone" size={40} color="#FE5C5C" />
    ),
    title: "Acelerar o desenvolvimento de código aberto.",
    body: "Oferecer recursos e programas de mentoria, workshops, e outros eventos para ajudar o desenvolvedor angolano aprender, e contribuir a se destacar no código aberto.",
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
    title: "Estabelecer parcerias e colaborações.",
    body: "Fortalecer a comunidade de software livre em Angola, facilitando a troca de conhecimento, recursos e experiências entre desenvolvedores.",
  },
];
