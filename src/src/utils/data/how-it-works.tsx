import {
  Buildings,
  SmileyWink,
  UsersThree,
} from "phosphor-react";

export const HOW_IT_WORKS = [
  {
    id: 1,
    Icon: (
      <SmileyWink
        weight="duotone"
        size={40}
        color="#FE5C5C"
      />
    ),
    title: "Mentores.",
    body: "Promover a conscientização sobre os benefícios do software de código aberto e incentivar seu uso em Angola.",
  },
  {
    id: 2,
    Icon: (
      <UsersThree
        weight="duotone"
        size={40}
        color="#F09E00"
      />
    ),
    title: "Contribuidores.",
    body: "Oferecer recursos e programas de mentoria para ajudar o desenvolvedor angolano aprender, e contribuir a se destacar no código aberto.",
  },
  {
    id: 3,
    Icon: (
      <Buildings
        weight="duotone"
        size={40}
        color="#00970F"
      />
    ),
    title: "Organizações.",
    body: "Fortalecer a comunidade de software livre em Angola, facilitando a troca de conhecimento, recursos e experiências entre desenvolvedores.",
  },
];
