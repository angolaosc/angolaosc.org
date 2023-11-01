import { i18n } from "@/translate/i18n";

export const TEAM = [
  {
    id: 1,
    name: "António Pedro",
    ocupation:i18n.t('team.member_1.occupation'),
    avatar: "/antonio.jpg",
    description:i18n.t('team.member_1.description'),
  },
  {
    id: 2,
    name: "Lázaro Manuel",
    ocupation: i18n.t('team.member_2.occupation'),
    avatar: "/lazaro.jpg",
    description:i18n.t('team.member_2.description'),
  },
  {
    id: 3,
    name: "Cláudio da Silva",
    ocupation: i18n.t('team.member_3.occupation'),
    avatar: "/claudio.jpeg",
    description:i18n.t('team.member_3.description'),
  },
  {
    id: 4,
    name: "Wilmy Danguya",
    ocupation:i18n.t('team.member_4.occupation'),
    avatar: "/danguya.jpeg",
    description:i18n.t('team.member_4.description'),
  },
  // {
  //   id: 5,
  //   name: "Lázaro Inácio",
  //   ocupation: "Software Developer",
  //   avatar: "/avatar.avif",
  //   description:
  //     "Conheci meu amor através dessa plataforma e não poderia estar mais feliz.",
  // },
];
